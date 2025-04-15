export default function MakerIntro() {
  return (
    <div className="bg-[#212121] mb-8 text-gray-300 p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="relative w-[200px] h-[200px] flex-shrink-0">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg flex flex-col items-center justify-center p-6 text-center"
              style={{ backgroundImage: "url('/idee8.png')" }}
            ></div>
          </div>

          <div className="space-y-4">
            <h1 className="text-2xl font-semibold text-white">
              Built for Founders, by Founders 🚀
            </h1>
            <p className="text-base">
              We were tired of spending weeks on setup instead of actually
              building. Every project felt like déjà vu—setting up auth,
              configuring Stripe, dealing with email deliverability...
            </p>
            <p className="text-base">
              So we built{" "}
              <a
                href="#"
                className="text-white hover:text-gray-200 underline underline-offset-2"
              >
                ShipFree
              </a>{" "}
              at <strong>idee8</strong> to remove those roadblocks and help
              founders launch faster—**for free**.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-base">We created ShipFree for 3 reasons:</p>

          <ol className="space-y-4 list-decimal list-inside">
            <li className="text-base">
              <span className="font-semibold text-white">Save time</span>—skip
              the repetitive setup and start building immediately.
            </li>
            <li className="text-base">
              <span className="font-semibold text-white">Avoid headaches</span>
              —no more struggling with email deliverability, payments, or auth.
            </li>
            <li className="text-base">
              <span className="font-semibold text-white">
                Get profitable faster
              </span>
              —the faster you ship, the quicker you validate and earn.
            </li>
          </ol>

          <p className="text-base">
            Thousands of founders have used ShipFree to{" "}
            <a
              href="#"
              className="text-white hover:text-gray-200 underline underline-offset-2"
            >
              launch, land clients, and generate revenue
            </a>
            —all without paying a dime. Scroll down to see what they say! 🚀
          </p>
        </div>
      </div>
    </div>
  );
}
