<script>
	import { inview } from '$lib/actions/inview.js';
</script>

<section id="features" class="features">
	<div class="container">
		<div class="section-header" use:inview>
			<h2 class="reveal">Everything retrace <span class="highlight">can do.</span></h2>
			<p class="reveal reveal-delay-1">
				Built for people who use AI tools daily and want to understand their own thinking.
			</p>
		</div>

		<div class="feature-grid" use:inview>
			<div class="feature reveal reveal-delay-1">
				<div class="feature-tag">Sync</div>
				<h3>Set and forget with Chrome</h3>
				<p>
					The browser extension runs in the background and syncs new conversations
					from ChatGPT and Claude as you use them. No manual exports.
				</p>
			</div>

			<div class="feature reveal reveal-delay-2">
				<div class="feature-tag">Search</div>
				<h3>Semantic and keyword hybrid</h3>
				<p>
					Find conversations by meaning, not just keywords. Powered by sqlite-vec
					with 384-dimensional embeddings. Searches across all platforms in a single query.
				</p>
			</div>

			<div class="feature reveal reveal-delay-3">
				<div class="feature-tag">Reflection</div>
				<h3>13 MCP tools for Claude Desktop</h3>
				<p>
					Search conversations, pull topic trends, view relationship timelines, analyze
					sentiment over time, and trigger Obsidian write-back. All from inside Claude Desktop.
				</p>
			</div>

			<div class="feature reveal reveal-delay-4">
				<div class="feature-tag">Life Dimensions</div>
				<h3>Track 7 areas of your life</h3>
				<p>
					Career, Relationships, Health, Personal Growth, Creativity, Finances, Purpose.
					retrace maps conversations to dimensions so you can see where your attention actually goes.
				</p>
			</div>

			<div class="feature reveal reveal-delay-3">
				<div class="feature-tag">Obsidian</div>
				<h3>Enrich notes with real evidence</h3>
				<p>
					retrace enriches Obsidian notes with conversation evidence using callout blocks.
					Cross-reference what your notes claim with what you actually said. Preview before writing.
				</p>
			</div>

			<div class="feature reveal reveal-delay-4">
				<div class="feature-tag">Privacy</div>
				<h3>Local AI, zero cloud</h3>
				<p>
					All embedding and analysis runs locally. No account required. No telemetry.
					One SQLite file. The Chrome extension only reads from your logged-in browser session.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.section-header {
		text-align: center;
		margin-bottom: var(--space-4xl);
	}

	h2 {
		font-size: clamp(1.75rem, 4vw, 2.75rem);
		font-weight: 700;
		letter-spacing: -0.02em;
		margin-bottom: var(--space-md);
	}

	.highlight {
		color: var(--color-accent);
	}

	.section-header p {
		color: var(--color-text-muted);
		font-size: 1.1rem;
		max-width: 540px;
		margin: 0 auto;
	}

	.feature-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-xl);
	}

	.feature {
		padding: var(--space-2xl);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		transition: all var(--duration-normal) ease;
		position: relative;
		overflow: hidden;
	}

	.feature::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: linear-gradient(90deg, var(--color-accent), var(--color-teal));
		opacity: 0;
		transition: opacity var(--duration-normal) ease;
	}

	.feature:hover {
		border-color: var(--color-border-light);
		transform: translateY(-4px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
	}

	.feature:hover::before {
		opacity: 1;
	}

	.feature-tag {
		display: inline-block;
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-teal);
		background: var(--color-teal-glow);
		padding: 0.25em 0.75em;
		border-radius: var(--radius-full);
		margin-bottom: var(--space-lg);
	}

	h3 {
		font-size: 1.15rem;
		font-weight: 650;
		letter-spacing: -0.01em;
		margin-bottom: var(--space-md);
	}

	.feature p {
		color: var(--color-text-muted);
		font-size: 0.95rem;
		line-height: 1.7;
	}

	@media (max-width: 900px) {
		.feature-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 600px) {
		.feature-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
