<script>
	import { inview } from '$lib/actions/inview.js';
</script>

<section class="hero">
	<!-- Animated background threads -->
	<div class="threads" aria-hidden="true">
		<svg class="thread-svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
			<path class="thread t1" d="M-50,100 C150,120 250,300 400,280 S650,150 850,200" stroke="var(--color-accent)" stroke-opacity="0.2" />
			<path class="thread t2" d="M-50,250 C100,200 300,400 450,350 S600,250 850,300" stroke="var(--color-teal)" stroke-opacity="0.15" />
			<path class="thread t3" d="M-50,400 C200,380 250,200 400,250 S550,400 850,350" stroke="var(--color-accent)" stroke-opacity="0.12" />
			<path class="thread t4" d="M-50,180 C150,350 350,150 500,300 S700,200 850,250" stroke="var(--color-accent-light)" stroke-opacity="0.1" />
			<path class="thread t5" d="M-50,320 C100,280 400,450 500,200 S650,350 850,150" stroke="var(--color-teal)" stroke-opacity="0.08" />
		</svg>
	</div>

	<div class="container hero-content">
		<div class="hero-text" use:inview={{ threshold: 0.1 }}>
			<p class="hero-tag reveal">Your data stays on your machine</p>
			<h1 class="reveal reveal-delay-1">
				Rediscover your <span class="highlight">conversations.</span>
			</h1>
			<p class="hero-sub reveal reveal-delay-2">
				Retrace connects your scattered conversations across every platform into one searchable, reflective space. Your data stays on your machine.
			</p>
			<div class="hero-ctas reveal reveal-delay-3">
				<div class="hero-ctas__buttons">
					<a href="#demo" class="btn btn-primary">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<polygon points="5 3 19 12 5 21 5 3" />
						</svg>
						See it live
					</a>
					<a href="https://github.com/aballiet/retrace" target="_blank" rel="noopener" class="btn btn-secondary">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
							<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
						</svg>
						View on GitHub
					</a>
				</div>
				<span class="cta-sub">Interactive demo &middot; No download required</span>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		min-height: 100vh;
		min-height: 100dvh;
		display: flex;
		align-items: center;
		padding-top: 80px;
		overflow: hidden;
	}

	.threads {
		position: absolute;
		inset: 0;
		z-index: 0;
	}

	.thread-svg {
		width: 100%;
		height: 100%;
	}

	.thread {
		fill: none;
		stroke-width: 1.5;
		stroke-dasharray: 1200;
		stroke-dashoffset: 1200;
		animation: drawThread 3s var(--ease-out) forwards;
	}

	.t1 { animation-delay: 0.2s; }
	.t2 { animation-delay: 0.6s; }
	.t3 { animation-delay: 1.0s; }
	.t4 { animation-delay: 1.4s; stroke-width: 1; }
	.t5 { animation-delay: 1.8s; stroke-width: 1; }

	@keyframes drawThread {
		to {
			stroke-dashoffset: 0;
		}
	}

	.hero-content {
		position: relative;
		z-index: 1;
	}

	.hero-text {
		max-width: 780px;
		margin: 0 auto;
		text-align: center;
	}

	.hero-tag {
		display: inline-block;
		font-size: 0.85rem;
		font-weight: 500;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-accent);
		margin-bottom: var(--space-lg);
	}

	h1 {
		font-size: clamp(2.5rem, 5.5vw, 4rem);
		font-weight: 700;
		line-height: 1.15;
		letter-spacing: -0.03em;
		color: var(--color-text);
		margin-bottom: var(--space-xl);
		text-wrap: balance;
	}

	.highlight {
		background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.hero-sub {
		font-size: clamp(1.05rem, 1.8vw, 1.2rem);
		line-height: 1.7;
		color: var(--color-text-muted);
		margin-bottom: var(--space-2xl);
		max-width: 560px;
		margin-left: auto;
		margin-right: auto;
		text-wrap: balance;
	}

	.hero-ctas__buttons {
		display: flex;
		gap: var(--space-md);
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;
	}

	.cta-sub {
		display: block;
		font-size: 0.8rem;
		color: var(--color-text-faint);
		margin-top: var(--space-sm);
	}

	.hero-ctas {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-sm);
	}

	.btn {
		display: inline-flex;
		align-items: center;
		gap: var(--space-sm);
		padding: 0.85rem 1.75rem;
		border-radius: var(--radius-full);
		font-weight: 600;
		font-size: 0.95rem;
		transition: all var(--duration-fast) ease;
		white-space: nowrap;
	}

	.btn-primary {
		background: var(--color-primary);
		color: var(--color-bg);
		border: 1px solid transparent;
	}

	.btn-primary:hover {
		background: var(--color-text-muted);
		color: var(--color-bg);
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(45, 42, 38, 0.15);
	}

	.btn-secondary {
		background: var(--color-surface);
		color: var(--color-text);
		border: 1px solid var(--color-border);
	}

	.btn-secondary:hover {
		background: var(--color-surface-hover);
		color: var(--color-text);
		border-color: var(--color-border-light);
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
	}

	@media (max-width: 768px) {
		.hero {
			min-height: auto;
			padding-top: 100px;
			padding-bottom: var(--space-3xl);
		}

		.hero-ctas__buttons {
			flex-direction: column;
			align-items: center;
		}

		.btn {
			justify-content: center;
			width: 100%;
			max-width: 280px;
		}

		.hero-sub {
			font-size: 1rem;
		}
	}

	@media (max-width: 480px) {
		.hero {
			padding-top: 90px;
			padding-bottom: var(--space-2xl);
		}

		.cta-sub {
			font-size: 0.75rem;
		}
	}
</style>
