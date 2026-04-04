<script>
	import { inview } from '$lib/actions/inview.js';
</script>

<section class="mcp">
	<div class="container">
		<div class="section-intro" use:inview>
			<p class="section-tag reveal">Model Context Protocol</p>
			<h2 class="reveal reveal-delay-1">retrace turns Claude Desktop<br /><span class="highlight">into your personal analyst.</span></h2>
			<p class="intro-body reveal reveal-delay-2">
				13 MCP tools expose your local conversation database directly to Claude Desktop.
				No API calls. No extra costs. If you have Claude Pro, you already have everything you need.
			</p>
		</div>

		<div class="mcp-content" use:inview>
			<div class="tools-panel reveal reveal-delay-1">
				<div class="tools-cols">
					<div class="tools-col">
						<div class="tool-item">
							<span class="tool-name">search_conversations</span>
							<span class="tool-desc">keyword search across all platforms</span>
						</div>
						<div class="tool-item">
							<span class="tool-name">semantic_search</span>
							<span class="tool-desc">vector similarity search</span>
						</div>
						<div class="tool-item">
							<span class="tool-name">get_topic_timeline</span>
							<span class="tool-desc">topic frequency over time</span>
						</div>
						<div class="tool-item">
							<span class="tool-name">get_person_timeline</span>
							<span class="tool-desc">all conversations with a specific person</span>
						</div>
						<div class="tool-item">
							<span class="tool-name">get_reflection_history</span>
							<span class="tool-desc">past reflections by life dimension</span>
						</div>
						<div class="tool-item">
							<span class="tool-name">get_messages_in_range</span>
							<span class="tool-desc">messages within a time window</span>
						</div>
						<div class="tool-item">
							<span class="tool-name">list_conversations</span>
							<span class="tool-desc">browse with metadata</span>
						</div>
					</div>
					<div class="tools-col">
						<div class="tool-item">
							<span class="tool-name">get_conversation</span>
							<span class="tool-desc">full conversation with metadata</span>
						</div>
						<div class="tool-item">
							<span class="tool-name">get_stats</span>
							<span class="tool-desc">database overview and breakdown</span>
						</div>
						<div class="tool-item">
							<span class="tool-name">get_topics</span>
							<span class="tool-desc">topics ranked by frequency</span>
						</div>
						<div class="tool-item">
							<span class="tool-name">search_segments</span>
							<span class="tool-desc">semantic search within segments</span>
						</div>
						<div class="tool-item">
							<span class="tool-name">write_reflection</span>
							<span class="tool-desc">save reflection to Obsidian</span>
						</div>
						<div class="tool-item">
							<span class="tool-name">get_conversation_stats</span>
							<span class="tool-desc">per-platform message counts</span>
						</div>
					</div>
				</div>
			</div>

			<div class="callout-panel reveal reveal-delay-2">
				<div class="callout">
					<div class="callout-line">
						<span class="callout-speaker">You</span>
						<span class="callout-text">What idea have I kept coming back to?</span>
					</div>
					<div class="callout-divider"></div>
					<div class="callout-line">
						<span class="callout-speaker speaker-claude">Claude uses</span>
					</div>
					<div class="callout-tools">
						<code>get_topic_timeline(days=90)</code>
						<code>semantic_search("keep returning excited can't stop thinking")</code>
					</div>
					<div class="callout-divider"></div>
					<div class="callout-line">
						<span class="callout-speaker speaker-claude">Claude</span>
						<span class="callout-text">
							One thread runs through 23 conversations across three months: building
							something of your own. It shows up in a ChatGPT session in January,
							three WhatsApp voice-note transcripts in February, and six Claude
							conversations in March. Each time the tone is the same: energized,
							specific, a little scared. That's worth paying attention to.
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.mcp {
		background: var(--color-bg-alt);
		border-top: 1px solid var(--color-border);
		border-bottom: 1px solid var(--color-border);
	}

	.section-intro {
		text-align: center;
		max-width: 640px;
		margin: 0 auto var(--space-4xl);
	}

	.section-tag {
		display: inline-block;
		font-size: 0.8rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-teal);
		margin-bottom: var(--space-lg);
	}

	h2 {
		font-size: clamp(1.75rem, 4vw, 2.75rem);
		font-weight: 700;
		letter-spacing: -0.02em;
		line-height: 1.2;
		margin-bottom: var(--space-lg);
	}

	.highlight {
		color: var(--color-accent);
	}

	.intro-body {
		color: var(--color-text-muted);
		font-size: 1.05rem;
		line-height: 1.7;
	}

	.mcp-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-2xl);
		align-items: start;
	}

	.tools-panel {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		padding: var(--space-xl);
	}

	.tools-cols {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-sm) var(--space-xl);
	}

	.tool-item {
		display: flex;
		flex-direction: column;
		gap: 2px;
		padding: var(--space-sm) 0;
		border-bottom: 1px solid var(--color-border);
	}

	.tool-item:last-child {
		border-bottom: none;
	}

	.tool-name {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--color-teal);
	}

	.tool-desc {
		font-size: 0.75rem;
		color: var(--color-text-faint);
		line-height: 1.4;
	}

	.callout-panel {
		position: sticky;
		top: 100px;
	}

	.callout {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-left: 3px solid var(--color-teal);
		border-radius: var(--radius-md);
		padding: var(--space-xl);
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.callout-line {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}

	.callout-speaker {
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-text-faint);
	}

	.speaker-claude {
		color: var(--color-teal);
	}

	.callout-text {
		font-size: 0.9rem;
		color: var(--color-text-muted);
		line-height: 1.65;
	}

	.callout-tools {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
		padding-left: var(--space-md);
	}

	.callout-tools code {
		font-family: var(--font-mono);
		font-size: 0.78rem;
		color: var(--color-teal);
		background: var(--color-teal-glow);
		padding: 0.2em 0.6em;
		border-radius: var(--radius-sm);
		display: inline-block;
		width: fit-content;
	}

	.callout-divider {
		height: 1px;
		background: var(--color-border);
	}

	@media (max-width: 900px) {
		.mcp-content {
			grid-template-columns: 1fr;
		}

		.callout-panel {
			position: static;
		}

		.tools-cols {
			grid-template-columns: 1fr;
		}
	}
</style>
