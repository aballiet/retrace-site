<script>
	import { inview } from '$lib/actions/inview.js';
</script>

<section id="how-it-works" class="how-it-works">
	<div class="container">
		<div class="section-header" use:inview>
			<h2 class="reveal">How it works</h2>
			<p class="reveal reveal-delay-1">Five steps from scattered conversations to structured reflection.</p>
		</div>

		<div class="steps" use:inview>
			<div class="step reveal reveal-delay-1">
				<div class="step-number">01</div>
				<div class="step-icon">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none">
						<circle cx="18" cy="5" r="3" stroke="var(--color-accent)" stroke-width="1.5"/>
						<circle cx="6" cy="12" r="3" stroke="var(--color-accent)" stroke-width="1.5"/>
						<circle cx="18" cy="19" r="3" stroke="var(--color-accent)" stroke-width="1.5"/>
						<path d="M9 10.5l6-3.5M9 13.5l6 3.5" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round"/>
					</svg>
				</div>
				<h3>Sync with Chrome</h3>
				<p>Install the browser extension. It auto-syncs new ChatGPT and Claude conversations in the background, rate-limited, completely silent.</p>
			</div>

			<div class="step-connector" aria-hidden="true">
				<svg width="40" height="2" viewBox="0 0 40 2">
					<line x1="0" y1="1" x2="40" y2="1" stroke="var(--color-border-light)" stroke-width="1" stroke-dasharray="4 4"/>
				</svg>
			</div>

			<div class="step reveal reveal-delay-2">
				<div class="step-number">02</div>
				<div class="step-icon">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none">
						<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="var(--color-teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M7 10l5 5 5-5" stroke="var(--color-teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M12 15V3" stroke="var(--color-teal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
				<h3>Import the rest</h3>
				<p>Export WhatsApp (.txt) or Messenger (JSON) archives and drag them into retrace. Format is detected automatically. No configuration.</p>
			</div>

			<div class="step-connector" aria-hidden="true">
				<svg width="40" height="2" viewBox="0 0 40 2">
					<line x1="0" y1="1" x2="40" y2="1" stroke="var(--color-border-light)" stroke-width="1" stroke-dasharray="4 4"/>
				</svg>
			</div>

			<div class="step reveal reveal-delay-3">
				<div class="step-number">03</div>
				<div class="step-icon">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none">
						<path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" stroke="var(--color-accent)" stroke-width="1.5"/>
						<path d="M8 12h8M12 8v8" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round"/>
						<circle cx="12" cy="12" r="3" stroke="var(--color-accent)" stroke-width="1.5"/>
					</svg>
				</div>
				<h3>Local AI processes everything</h3>
				<p>Conversations are segmented, topics extracted, sentiment scored, and embedded using all-MiniLM-L6-v2 (384D). Runs on your machine. No data leaves.</p>
			</div>

			<div class="step-connector" aria-hidden="true">
				<svg width="40" height="2" viewBox="0 0 40 2">
					<line x1="0" y1="1" x2="40" y2="1" stroke="var(--color-border-light)" stroke-width="1" stroke-dasharray="4 4"/>
				</svg>
			</div>

			<div class="step reveal reveal-delay-4">
				<div class="step-number">04</div>
				<div class="step-icon">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none">
						<circle cx="11" cy="11" r="8" stroke="var(--color-teal)" stroke-width="1.5"/>
						<path d="M21 21l-4.35-4.35" stroke="var(--color-teal)" stroke-width="1.5" stroke-linecap="round"/>
						<path d="M8 11h6M11 8v6" stroke="var(--color-teal)" stroke-width="1.5" stroke-linecap="round"/>
					</svg>
				</div>
				<h3>Reflect with Claude Desktop</h3>
				<p>retrace exposes 13 MCP tools to Claude Desktop. Search by keyword or meaning. Pull up a person's full history. Uses your existing Claude Pro subscription.</p>
			</div>

			<div class="step-connector" aria-hidden="true">
				<svg width="40" height="2" viewBox="0 0 40 2">
					<line x1="0" y1="1" x2="40" y2="1" stroke="var(--color-border-light)" stroke-width="1" stroke-dasharray="4 4"/>
				</svg>
			</div>

			<div class="step reveal reveal-delay-5">
				<div class="step-number">05</div>
				<div class="step-icon">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none">
						<path d="M12 20h9" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
				<h3>Write back to Obsidian</h3>
				<p>Insights write to your vault as callout blocks with source evidence. Always preview before any changes are written.</p>
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

	.section-header p {
		color: var(--color-text-muted);
		font-size: 1.1rem;
	}

	.steps {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		gap: 0;
	}

	.step {
		flex: 1;
		max-width: 200px;
		text-align: center;
		padding: var(--space-xl) var(--space-md);
	}

	.step-number {
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--color-text-faint);
		letter-spacing: 0.1em;
		margin-bottom: var(--space-md);
		font-family: var(--font-mono);
	}

	.step-icon {
		width: 64px;
		height: 64px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto var(--space-lg);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		transition: all var(--duration-normal) ease;
	}

	.step:hover .step-icon {
		border-color: var(--color-border-light);
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
	}

	h3 {
		font-size: 1.05rem;
		font-weight: 600;
		margin-bottom: var(--space-sm);
		letter-spacing: -0.01em;
	}

	.step p {
		color: var(--color-text-muted);
		font-size: 0.875rem;
		line-height: 1.6;
	}

	.step-connector {
		display: flex;
		align-items: center;
		padding-top: 100px;
		flex-shrink: 0;
	}

	@media (max-width: 1000px) {
		.steps {
			flex-direction: column;
			align-items: center;
		}

		.step {
			max-width: 400px;
		}

		.step-connector {
			padding-top: 0;
			transform: rotate(90deg);
			padding: var(--space-sm) 0;
		}
	}
</style>
