export default function CTA() {
  return (
    <section className="relative bg-[#0F0F0F] px-4 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl">
          Boost your app, launch, earn
        </h2>
        <p className="mb-8 text-lg text-zinc-400 md:text-xl">
          Don&apos;t waste time on Stripe subscriptions or designing a pricing
          section...
        </p>
        <a
          href="https://github.com/idee8/shipfree"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-[#FFB800] px-6 py-3 text-base font-medium text-black transition-colors hover:bg-[#FFB800]/90"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 10V3L4 14H11V21L20 10H13Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Get ShipFree
        </a>
      </div>
    </section>
  );
}
