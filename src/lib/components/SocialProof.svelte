<section class="social-proof">
	<div class="container">
		<div class="platforms-row">
			<div class="platform-item">
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none">
					<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
				ChatGPT
			</div>
			<span class="divider">&middot;</span>
			<div class="platform-item">
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none">
					<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
				Claude
			</div>
			<span class="divider">&middot;</span>
			<div class="platform-item">
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none">
					<path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
				WhatsApp
			</div>
			<span class="divider">&middot;</span>
			<div class="platform-item">
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none">
					<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
				Messenger
			</div>
		</div>

		<div class="stats-row">
			<span class="chip chip-teal">13 MCP tools</span>
			<span class="chip chip-accent">$0 API costs</span>
			<span class="chip chip-neutral">4 platforms</span>
			<span class="chip chip-neutral">MIT licensed</span>
		</div>
	</div>
</section>

<style>
	.social-proof {
		background: var(--color-bg-alt);
		border-top: 1px solid var(--color-border);
		border-bottom: 1px solid var(--color-border);
		padding: var(--space-xl) 0;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-lg);
	}

	.platforms-row {
		display: flex;
		align-items: center;
		gap: var(--space-lg);
		flex-wrap: wrap;
		justify-content: center;
	}

	.platform-item {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		color: var(--color-text-faint);
		font-size: 0.875rem;
		font-weight: 450;
	}

	.divider {
		color: var(--color-border-light);
		font-size: 1rem;
	}

	.stats-row {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		flex-wrap: wrap;
		justify-content: center;
	}

	.chip {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		border-radius: var(--radius-full);
		padding: 0.3em 0.9em;
	}

	.chip-teal {
		color: var(--color-teal);
		background: var(--color-teal-glow);
		border: 1px solid rgba(58, 143, 133, 0.2);
	}

	.chip-accent {
		color: var(--color-accent);
		background: var(--color-accent-glow);
		border: 1px solid rgba(200, 114, 58, 0.2);
	}

	.chip-neutral {
		color: var(--color-text-muted);
		background: var(--color-surface);
		border: 1px solid var(--color-border);
	}
</style>
