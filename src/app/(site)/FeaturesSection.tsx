import {
  Mail,
  CreditCard,
  User,
  Database,
  FileJson,
  Paintbrush,
  MoreHorizontal,
  Check,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function FeaturesSection() {
  const features = [
    {
      id: "emails",
      icon: Mail,
      label: "Emails",
      content: {
        title: "Email Integration",
        features: [
          "Transactional email templates",
          "Email verification flow",
          "Newsletter subscription",
          "Automated welcome emails",
          "Custom email domains",
          "Email analytics dashboard",
        ],
        timeSaved: "4 hours",
      },
    },
    {
      id: "payments",
      icon: CreditCard,
      label: "Payments",
      content: {
        title: "Payment Processing",
        features: [
          "Stripe integration",
          "Subscription management",
          "Usage-based billing",
          "Invoice generation",
          "Payment analytics",
          "Refund handling",
        ],
        timeSaved: "6 hours",
      },
    },
    {
      id: "login",
      icon: User,
      label: "Login",
      content: {
        title: "Authentication",
        features: [
          "Social login integration",
          "Two-factor authentication",
          "Password reset flow",
          "Session management",
          "Role-based access control",
          "JWT authentication",
        ],
        timeSaved: "5 hours",
      },
    },
    {
      id: "database",
      icon: Database,
      label: "Database",
      content: {
        title: "Database Setup",
        features: [
          "Schema design",
          "Data migration tools",
          "Backup automation",
          "Query optimization",
          "Data validation",
          "Real-time sync",
        ],
        timeSaved: "7 hours",
      },
    },
    {
      id: "seo",
      icon: FileJson,
      label: "SEO",
      content: {
        title: "SEO",
        features: [
          "Entire blog structure (example)",
          "All meta tags to rank on Google",
          "OpenGraph tags to share on social media",
          "Automated sitemap generation to fasten Google indexing",
          "Structured data markup for Rich Snippets",
          "SEO-optimized UI components",
        ],
        timeSaved: "8 hours",
      },
    },
    {
      id: "style",
      icon: Paintbrush,
      label: "Style",
      content: {
        title: "Styling System",
        features: [
          "Tailwind configuration",
          "Dark mode support",
          "Responsive components",
          "Animation library",
          "Custom theme system",
          "Design tokens",
        ],
        timeSaved: "5 hours",
      },
    },
    {
      id: "more",
      icon: MoreHorizontal,
      label: "More",
      content: {
        title: "Additional Features",
        features: [
          "API rate limiting",
          "Error tracking",
          "Performance monitoring",
          "Automated testing",
          "CI/CD pipeline",
          "Documentation",
        ],
        timeSaved: "4 hours",
      },
    },
  ];

  return (
    <div className="bg-zinc-900 min-h-screen text-gray-300 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight">
            Supercharge your app instantly, launch faster, make $
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Login users, process payments and send emails at lightspeed. Spend
            your time building your startup, not integrating APIs. ShipFast
            provides you with the boilerplate code you need to launch, FAST.
          </p>
        </div>

        <Tabs defaultValue="seo" className="w-full">
          <TabsList className="h-auto flex flex-wrap justify-center gap-4 bg-transparent mb-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <TabsTrigger
                  key={feature.id}
                  value={feature.id}
                  className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-zinc-800 rounded-lg"
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-sm">{feature.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {features.map((feature) => (
            <TabsContent
              key={feature.id}
              value={feature.id}
              className="space-y-8"
            >
              <div className="space-y-6">
                {feature.content.features.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-300">{item}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 pt-4">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-lg">
                    <span className="text-green-500">Time saved: </span>
                    <span className="text-green-500">
                      {feature.content.timeSaved}
                    </span>
                  </span>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
