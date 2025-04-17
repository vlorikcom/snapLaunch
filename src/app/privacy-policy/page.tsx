import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - VLorik",
};

const Page = () => {
  return (
    <div className="max-w-xl mx-auto ">
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
          Privacy Policy
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
{`Last updated: April 15, 2025

Welcome to VLorik (https://vlorik.com), a platform dedicated to building modern, fast, and open developer tools to help founders and builders launch faster. Your privacy is important to us. This Privacy Policy outlines how we handle your data.

1. Information We Collect

We may collect the following types of information:

- Personal Data: Name, email address, and other contact information (only if you voluntarily provide it).
- Non-Personal Data: Web cookies and usage statistics, used to improve your experience.

2. How We Use Your Information

We use collected data to:
- Understand our users better
- Improve the usability and performance of our tools
- Communicate updates (only if you opt-in)

3. Data Sharing

We do not share your personal data with any third-party services or organizations. All data is used strictly for internal improvements and analysis.

4. Children’s Privacy

Our tools are not intended for children under the age of 13. We do not knowingly collect data from children. If we discover data was submitted by someone under 13, we will delete it.

5. Updates to This Policy

This policy may be updated occasionally. When it does, we’ll update the “Last updated” date on this page. If you’ve opted in to updates, we may also notify you via email.

6. Contact

For questions or concerns about this Privacy Policy, please contact us at: contact@vlorik.com
`}
        </pre>
      </div>
    </div>
  );
};

export default Page;
