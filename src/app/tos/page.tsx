import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - SnapLaunch by VLorik",
};

const Page = () => {
  return (
    <div className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost flex items-center gap-2 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms of Service
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
{`Last updated: April 15, 2025

Welcome to SnapLaunch by VLorik! These Terms of Service ("Terms") govern your access to and use of SnapLaunch (https://snaplaunch.vlorik.com). By using SnapLaunch, you agree to these Terms.

1. Use of the Service

You may use SnapLaunch only in accordance with these Terms and all applicable laws. You are responsible for the content you generate, upload, or submit through our tools.

2. Account & Access

Most features of SnapLaunch do not require an account. However, if any features do require registration, you agree to provide accurate information and maintain the confidentiality of your account.

3. Acceptable Use

You agree not to misuse the service. This includes (but is not limited to):
- Using it for illegal purposes
- Attempting to reverse engineer or disrupt the platform
- Uploading harmful or offensive content

4. Intellectual Property

All content and tools provided by SnapLaunch are owned by VLorik. You may not copy, modify, or redistribute any part without explicit permission.

5. Limitation of Liability

SnapLaunch is provided “as is” without warranties of any kind. VLorik is not liable for any damages or losses resulting from your use of the service.

6. Termination

We reserve the right to suspend or terminate access if you violate these Terms or use SnapLaunch inappropriately.

7. Changes to Terms

We may update these Terms from time to time. We'll notify users of significant changes by updating the date above and, if applicable, via email or platform notification.

8. Contact

If you have any questions about these Terms, contact us at: contact@vlorik.com
`}
        </pre>
      </div>
    </div>
  );
};

export default Page;
