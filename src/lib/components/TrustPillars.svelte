<script>
	import { inview } from '$lib/actions/inview.js';
</script>

<section id="privacy" class="trust">
	<div class="container">
		<div class="section-header" use:inview>
			<h2 class="reveal">Built on principles, <span class="highlight">not promises.</span></h2>
		</div>

		<div class="pillars" use:inview>
			<div class="pillar reveal reveal-delay-1">
				<div class="pillar-icon">
					<svg width="36" height="36" viewBox="0 0 24 24" fill="none">
						<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M9 12l2 2 4-4" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
				<h3>Your data never leaves your machine.</h3>
				<p>
					retrace runs entirely on your Mac. No cloud sync. No accounts. No telemetry.
					The Chrome extension reads conversations from your browser and writes them to
					a local SQLite database. That is the full data path.
				</p>
				<div class="pillar-detail">
					<code>~/Library/Application Support/retrace/data.db</code>
					<span>One file. Your file.</span>
				</div>
			</div>

			<div class="pillar reveal reveal-delay-2">
				<div class="pillar-icon">
					<svg width="36" height="36" viewBox="0 0 24 24" fill="none">
						<rect x="3" y="3" width="18" height="14" rx="2" stroke="var(--color-teal)" stroke-width="1.5"/>
						<path d="M3 7h18" stroke="var(--color-teal)" stroke-width="1.5"/>
						<circle cx="6.5" cy="5" r="0.75" fill="var(--color-teal)"/>
						<circle cx="9" cy="5" r="0.75" fill="var(--color-teal)"/>
						<path d="M8 21h8M12 17v4" stroke="var(--color-teal)" stroke-width="1.5" stroke-linecap="round"/>
						<path d="M7 11h5M7 14h3" stroke="var(--color-teal)" stroke-width="1.5" stroke-linecap="round"/>
					</svg>
				</div>
				<h3>Native macOS, not Electron.</h3>
				<p>
					retrace is built with Tauri v2. It uses a fraction of the memory Electron apps
					consume, starts faster, and integrates properly with macOS. Standard .dmg install.
					Nothing unusual in your system.
				</p>
				<div class="pillar-detail">
					<span>Tauri v2 &middot; Rust &middot; SQLite &middot; sqlite-vec</span>
				</div>
			</div>

			<div class="pillar reveal reveal-delay-3">
				<div class="pillar-icon">
					<svg width="36" height="36" viewBox="0 0 24 24" fill="none">
						<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="var(--color-accent-light)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
				<h3>Open source, forever.</h3>
				<p>
					MIT licensed. No vendor lock-in. Read the code, audit the Chrome extension,
					fork it, extend it. Your reflection infrastructure should not be a SaaS black box.
				</p>
				<div class="pillar-detail">
					<span>MIT licensed &middot; No VC funding &middot; No growth targets</span>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.trust {
		background: var(--color-bg-alt);
		border-top: 1px solid var(--color-border);
		border-bottom: 1px solid var(--color-border);
	}

	.section-header {
		text-align: center;
		margin-bottom: var(--space-4xl);
	}

	h2 {
		font-size: clamp(1.75rem, 4vw, 2.75rem);
		font-weight: 700;
		letter-spacing: -0.02em;
	}

	.highlight {
		color: var(--color-accent);
	}

	.pillars {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-xl);
	}

	.pillar {
		padding: var(--space-2xl);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		transition: all var(--duration-normal) ease;
	}

	.pillar:hover {
		border-color: var(--color-border-light);
		transform: translateY(-4px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
	}

	.pillar-icon {
		margin-bottom: var(--space-xl);
	}

	h3 {
		font-size: 1.25rem;
		font-weight: 650;
		letter-spacing: -0.01em;
		margin-bottom: var(--space-md);
	}

	.pillar p {
		color: var(--color-text-muted);
		font-size: 0.95rem;
		line-height: 1.7;
		margin-bottom: var(--space-xl);
	}

	.pillar-detail {
		padding-top: var(--space-lg);
		border-top: 1px solid var(--color-border);
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}

	.pillar-detail code {
		font-family: var(--font-mono);
		font-size: 0.78rem;
		color: var(--color-teal);
		background: var(--color-teal-glow);
		padding: 0.2em 0.5em;
		border-radius: var(--radius-sm);
		display: inline-block;
		width: fit-content;
	}

	.pillar-detail span {
		font-size: 0.85rem;
		color: var(--color-text-faint);
	}

	@media (max-width: 900px) {
		.pillars {
			grid-template-columns: 1fr;
			max-width: 500px;
			margin: 0 auto;
		}
	}
</style>
