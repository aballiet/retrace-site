import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const workflow = readFileSync(new URL("./artifact-sweeper.yml", import.meta.url), "utf8");

test("artifact sweeper has daily and manual triggers", () => {
  assert.match(workflow, /schedule:\n\s+- cron: "[^"]+"/);
  assert.match(workflow, /workflow_dispatch: \{\}/);
});

test("artifact sweeper is repository-scoped and least-privilege", () => {
  assert.match(workflow, /permissions:\n  actions: write\n\njobs:/);
  assert.match(workflow, /GH_TOKEN: \$\{\{ github\.token \}\}/);
  assert.match(workflow, /GH_REPO: \$\{\{ github\.repository \}\}/);
  assert.doesNotMatch(workflow, /\bcontents:/);
  assert.doesNotMatch(workflow, /\bsecrets\./);
});

test("artifact sweeper snapshots every expired id before deleting", () => {
  const snapshot = workflow.indexOf('expired_ids="$(');
  const snapshotEnd = workflow.indexOf('          )"\n\n          deleted=0', snapshot);
  const expiredFilter = workflow.indexOf("select(.expired == true) | .id", snapshot);
  const deletionLoop = workflow.indexOf("while IFS= read -r artifact_id");
  const deleteCall = workflow.indexOf("gh api --silent --method DELETE", deletionLoop);

  assert.ok(snapshot >= 0);
  assert.ok(snapshotEnd > snapshot);
  assert.ok(expiredFilter > snapshot && expiredFilter < snapshotEnd);
  assert.ok(deletionLoop > snapshotEnd);
  assert.ok(deleteCall > deletionLoop);
  assert.match(workflow, /gh api --paginate/);
  assert.match(workflow, /repos\/\$GH_REPO\/actions\/artifacts\/\$artifact_id/);
  assert.equal(workflow.match(/--method DELETE/g)?.length, 1);
});

test("artifact sweeper tolerates only already-absent artifacts and uploads nothing", () => {
  const deleteCall = workflow.indexOf("gh api --silent --method DELETE");
  const success = workflow.indexOf("deleted=$((deleted + 1))", deleteCall);
  const notFound = workflow.indexOf('elif [[ "$delete_error" == *"(HTTP 404)"* ]]', success);
  const failure = workflow.indexOf("exit 1", notFound);

  assert.ok(deleteCall >= 0);
  assert.ok(success > deleteCall);
  assert.ok(notFound > success);
  assert.ok(failure > notFound);
  assert.equal(workflow.match(/\(HTTP 404\)/g)?.length, 1);
  assert.equal(workflow.match(/exit 1/g)?.length, 1);
  assert.doesNotMatch(workflow, /continue-on-error/);
  assert.doesNotMatch(workflow, /\bcurl\b/);
  assert.doesNotMatch(workflow, /upload-(?:artifact|pages-artifact)/);
});
