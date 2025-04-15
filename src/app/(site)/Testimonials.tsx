import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Jack F.",
      rating: 5,
      text: "I launched my startup in just a day and made my first $100 online! The setup was effortless, <span class='font-bold text-yellow-400'> I was up and running faster </span>than I ever imagined",
      role: "Maker",
      avatar:
        "https://pbs.twimg.com/profile_images/1784563357300740096/2DyzEa9d_400x400.jpg",
    },
    {
      name: "Larry",
      rating: 5,
      text: "No more overthinking or endless configurations <span class='font-bold text-green-400'>Just clone, tweak, and launch.</span> ShipFree made everything seamless and stress-free!t",
      role: "Founder",
      avatar:
        "https://pbs.twimg.com/profile_images/1804234365817212928/n077GepN_400x400.jpg",
    },
    {
      name: "Gabriel",
      text: "ShipFree is hands down <span class='font-bold text-blue-400'>the best open-source SaaS boilerplate! </span>it’s the ultimate launchpad for startups looking to move fast and break barriers.",
      role: "Developer",
      avatar:
        "https://pbs.twimg.com/profile_images/1757317042644918272/z22hY3Ji_400x400.jpg",
    },
    {
      name: "Yitai Goh",
      rating: 4,
      text: "Without ShipFree, I’d still be wrestling with Stripe and email configurations! <span class='font-bold text-purple-400'>It saved me countless hours </span>! and let me scale effortlessly. ⚡️",
      role: "Entrepreneur",
      avatar:
        "https://pbs.twimg.com/profile_images/1761628238323802112/pXIc00nu_400x400.jpg",
    },
    {
      name: "Matt Merrick",
      text: "I launched with ShipFree boilerplate and have <span class='font-bold text-pink-400'>landed 5 new customers</span>! Thanks @idee8agency",
      role: "Founder",
      avatar:
        "https://pbs.twimg.com/profile_images/1865828164947099648/v0SAw6WI_400x400.jpg",
    },
    {
      name: "Tom Friday",
      rating: 5,
      text: "I used ShipFree to build my SaaS, and <span class='font-bold text-orange-400'>in just two weeks, I had my first MRR.</span> It made everything 10x easier.",
      role: "Maker",
      avatar:
        "https://pbs.twimg.com/profile_images/1854135042152247311/9u2s6TX__400x400.jpg",
    },
    {
      name: "Sarah Johnson",
      rating: 4,
      text: "ShipFast helped me <span class='font-bold text-teal-400'>turn my idea into reality</span> in record time. The support from the community is incredible!",
      role: "Indie Hacker",
      avatar:
        "https://pbs.twimg.com/profile_images/1878117566222041088/_AtC29wQ_400x400.jpg",
    },
    {
      name: "Alex Chen",
      text: "As a solo developer, ShipFree has been a game-changer. I've <span class='font-bold text-indigo-400'>launched two products</span> in the past month alone!",
      role: "Full-stack Developer",
      avatar:
        "https://pbs.twimg.com/profile_images/1830918748439506958/E4cv0RQf_400x400.jpg",
    },
    {
      name: "Emmil Mittov",
      rating: 5,
      text: "The ShipFree boilerplate saved me <span class='font-bold text-red-400'>weeks of development time</span>. I'm now focusing on growing my user base instead of wrestling with code.",
      role: "SaaS Founder",
      avatar:
        "https://pbs.twimg.com/profile_images/1884948973007319040/JYnP4PK2_400x400.jpg",
    },
  ];

  return (
    <div
      id="wall-of-love"
      className="min-h-screen bg-[#0F0F0F] text-white py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            1209 makers built AI tools, SaaS, and more
          </h1>
          <p className="text-gray-400 text-lg">
            They made their first $ online, and some even quit their 9-5!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-zinc-900 border-[1.4px] border-zinc-800 p-6 flex flex-col"
            >
              <div className="flex-grow">
                {testimonial.rating && (
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                )}

                <p
                  className="text-gray-300 mb-6"
                  dangerouslySetInnerHTML={{ __html: testimonial.text }}
                ></p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-zinc-700 mt-auto">
                <Avatar>
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <AvatarFallback>
                    {testimonial.name.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-base text-zinc-300">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
