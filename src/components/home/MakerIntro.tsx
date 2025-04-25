export default function MakerIntro() {
  return (
    <div className="bg-[#212121] mb-8 text-gray-300 p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="relative w-[200px] h-[200px] shrink-0">
            <div
              className="absolute bg-primary inset-0 rounded-lg flex flex-col items-center justify-center p-6 text-center"
            >
              <h2 className="text-9xl text-black">5</h2>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-2xl font-semibold text-white">
              Built for Founders 🚀
            </h1>
            <p className="text-base">
              We got tired of repeating the same setup steps — auth, Stripe, emails — every single time. Weeks lost before we could even start building the real thing.
            </p>

               


            <p className="text-base">
              So we built{" "}
              <a
                href="#"
                className="text-white hover:text-gray-200 underline underline-offset-2"
              >
                snapLaunch
              </a>{" "}
              at <strong>VLorik</strong> kill the busywork and help founders launch faster — for free, no strings attached.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-base">We created snapLaunch for 5 reasons:</p>

          <ol className="space-y-4 list-decimal list-inside">
            <li className="text-base">
              <span className="font-semibold text-white">Save time</span>
              —Skip the boring setup and start building on day one.
            </li>
            <li className="text-base">
              <span className="font-semibold text-white">Kill setup pain</span>
              —No more fighting with auth, Stripe, or email configs.
            </li>
            <li className="text-base">
              <span className="font-semibold text-white">
              Launch faster 
              </span>
              —Get from idea to MVP without the drag.
            </li>
            <li className="text-base">
              <span className="font-semibold text-white">
              Stay focused 
              </span>
              —Spend energy on product, not plumbing.
            </li>
            <li className="text-base">
              <span className="font-semibold text-white">
              Validate early 
              </span>
              —Ship fast. Get feedback. Make money sooner.
            </li>
          </ol>


          <p className="text-base">
          Thousands of founders use SnapLaunch to{" "}
            <a
              href="#"
              className="text-white hover:text-gray-200 underline underline-offset-2"
            >
              launch products, win clients, and grow revenue 
            </a>
            —all without touching their wallet.
            —Scroll down and see what the buzz is about. 🚀
          </p>
        </div>
      </div>
    </div>
  );
}
