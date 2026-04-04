<script>
	let scrolled = $state(false);
	let mobileOpen = $state(false);

	$effect(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 50;
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<nav class="nav" class:scrolled>
	<div class="nav-inner container">
		<a href="/" class="logo">
			<span class="logo-icon">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
					<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" stroke="var(--color-accent)" stroke-width="1.5" fill="none" opacity="0.3"/>
					<path d="M8 6c2 4 2 8 0 12" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round"/>
					<path d="M12 4c0 5.3 0 10.7 0 16" stroke="var(--color-teal)" stroke-width="1.5" stroke-linecap="round"/>
					<path d="M16 6c-2 4-2 8 0 12" stroke="var(--color-accent-light)" stroke-width="1.5" stroke-linecap="round"/>
				</svg>
			</span>
			<span class="logo-text">retrace</span>
		</a>

		<button class="mobile-toggle" onclick={() => mobileOpen = !mobileOpen} aria-label="Toggle menu">
			<span class="bar" class:open={mobileOpen}></span>
			<span class="bar" class:open={mobileOpen}></span>
			<span class="bar" class:open={mobileOpen}></span>
		</button>

		<div class="nav-links" class:open={mobileOpen}>
			<a href="#how-it-works" onclick={() => mobileOpen = false}>How it works</a>
			<a href="#features" onclick={() => mobileOpen = false}>Features</a>
			<a href="#privacy" onclick={() => mobileOpen = false}>Privacy</a>
			<a href="https://github.com/aballiet/innerthread" target="_blank" rel="noopener">GitHub</a>
			<a href="#download" class="btn-nav" onclick={() => mobileOpen = false}>Download</a>
		</div>
	</div>
</nav>

<style>
	.nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		padding: var(--space-md) 0;
		transition: background var(--duration-normal) ease,
			backdrop-filter var(--duration-normal) ease,
			box-shadow var(--duration-normal) ease;
	}

	.nav.scrolled {
		background: rgba(250, 249, 247, 0.9);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		box-shadow: 0 1px 0 var(--color-border);
	}

	.nav-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		color: var(--color-text);
		font-weight: 600;
		font-size: 1.15rem;
		letter-spacing: -0.02em;
	}

	.logo:hover {
		color: var(--color-text);
	}

	.logo-icon {
		display: flex;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: var(--space-xl);
	}

	.nav-links a {
		color: var(--color-text-muted);
		font-size: 0.925rem;
		font-weight: 450;
		transition: color var(--duration-fast) ease;
	}

	.nav-links a:hover {
		color: var(--color-text);
	}

	.btn-nav {
		background: var(--color-primary);
		color: var(--color-bg) !important;
		padding: var(--space-sm) var(--space-lg);
		border-radius: var(--radius-full);
		font-weight: 600;
		font-size: 0.875rem !important;
		transition: background var(--duration-fast) ease, transform var(--duration-fast) ease !important;
	}

	.btn-nav:hover {
		background: var(--color-text-muted) !important;
		color: var(--color-bg) !important;
		transform: translateY(-1px);
	}

	.mobile-toggle {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;
		padding: var(--space-sm);
	}

	.bar {
		display: block;
		width: 22px;
		height: 2px;
		background: var(--color-text);
		border-radius: 2px;
		transition: transform var(--duration-fast) ease, opacity var(--duration-fast) ease;
	}

	.bar.open:nth-child(1) {
		transform: rotate(45deg) translate(5px, 5px);
	}

	.bar.open:nth-child(2) {
		opacity: 0;
	}

	.bar.open:nth-child(3) {
		transform: rotate(-45deg) translate(5px, -5px);
	}

	@media (max-width: 768px) {
		.mobile-toggle {
			display: flex;
		}

		.nav-links {
			display: none;
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			flex-direction: column;
			background: rgba(250, 249, 247, 0.97);
			backdrop-filter: blur(20px);
			padding: var(--space-xl);
			gap: var(--space-lg);
			box-shadow: 0 1px 0 var(--color-border);
		}

		.nav-links.open {
			display: flex;
		}
	}
</style>
