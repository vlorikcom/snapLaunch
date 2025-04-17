import { CloudRain } from "lucide-react";
import {
  FaHackerNews,
  FaProductHunt,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

export default function FeaturedTime() {
  const timeBreakdown = [
    { time: 4, task: "to set up emails" },
    { time: 6, task: "designing a landing page" },
    { time: 4, task: "to handle Stripe webhooks" },
    { time: 2, task: "for SEO tags" },
    { time: 1, task: "applying for Google Oauth" },
    { time: 3, task: "for DNS records" },
    { time: 2, task: "for protected API routes" },
    { time: "∞", task: "overthinking..." },
  ];

  return (
    <div className="bg-[#212121] text-gray-300 py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-20">
        {/* Featured section */}
        <div className="text-center space-y-6">
          <p className="text-gray-300 text-lg uppercase tracking-wider mb-6">
            Featured on
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-gray-400">
              <FaHackerNews className="w-6 h-6 text-gray-400" />
              <span className="text-base">Hacker News</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <FaProductHunt className="w-6 h-6 rounded-full text-gray-400" />
              <span className="text-base">Product Hunt</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <FaTwitter className="w-6 h-6 text-gray-400" />
              <span className="text-base">Twitter</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <FaGithub className="w-6 h-6 rounded-full text-gray-400" />
              <span className="text-base">GitHub</span>
            </div>
          </div>
        </div>

        {/* Time breakdown section */}
        <div className="max-w-lg mx-auto bg-[#1a1208] rounded-lg p-8 space-y-3 text-center">
          {timeBreakdown.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center gap-2 text-lg"
            >
              {index !== 0 && <span className="text-gray-500">+</span>}
              <span className="text-red-400 font-semibold">
                {item.time} {typeof item.time === "number" && "hrs"}
              </span>
              <span className="text-gray-400">{item.task}</span>
            </div>
          ))}

          <div className="flex justify-center items-center gap-3 pt-4 text-xl font-semibold">
            <span className="text-gray-500">=</span>
            <span className="text-red-400">22+ hours</span>
            <span className="text-gray-300">of headaches</span>
            <CloudRain className="w-6 h-6 text-gray-400" />
          </div>
        </div>

        {/* Bottom arrow */}
        <div className="text-center text-gray-400">
          <div className="text-2xl mb-2">↓</div>
          <p className="text-sm">There's an easier way</p>
        </div>
      </div>
    </div>
  );
}
