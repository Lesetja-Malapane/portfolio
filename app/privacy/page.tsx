import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-6">
        <nav className="pb-8">
          <Link href="/" className="underline hover:text-foreground">
            ← back to home
          </Link>
        </nav>
        
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight lowercase">
          privacy policy.
        </h1>
        <p className="mt-2 text-muted">
          How I handle data and respect your privacy.
        </p>
      </header>

      <section className="flex flex-col gap-6 text-(--foreground)/90 leading-relaxed">
        <p>
          I value your privacy and am committed to protecting your personal
          information. This policy outlines how I collect, use, and safeguard
          your data when you interact with my website and services.
        </p>

        <h2 className="text-2xl font-semibold tracking-tight lowercase">
          information I collect.
        </h2>
        <p>
          I do not collect any personally identifiable information (PII) from
          visitors to my website. I do not use cookies, tracking pixels, or any
          third-party analytics tools that could collect data about your
          browsing behavior.
        </p>

        <h2 className="text-2xl font-semibold tracking-tight lowercase">
          how I use your information.
        </h2>
        <p>
          Since I do not collect any personal information, I do not use or share
          your data with any third parties. My website is designed to provide
          information about my work and projects without requiring any form of
          user registration or data submission.
        </p>

        <h2 className="text-2xl font-semibold tracking-tight lowercase">
          security measures.
        </h2>
        <p>
          I take the security of my website seriously and have implemented
          measures to protect against unauthorized access, alteration,
          disclosure, or destruction of any information that may be collected.
          However, since I do not collect any personal data, there is no risk of
          data breaches or misuse of your information.
        </p>

        <h2 className="text-2xl font-semibold tracking-tight lowercase">
          changes to this policy.
        </h2>
        <p>
          I reserve the right to update this privacy policy at any time. Any
          changes will be posted on this page with an updated revision date. I
          encourage you to review this policy periodically to stay informed
          about how I am protecting your information.
        </p>

        <p>
          If you have any questions or concerns about this privacy policy,
          please feel free to contact me through the contact information
          provided on my website.
        </p>

        <Link href="/contact" className="underline hover:text-foreground">
          Contact Form →
        </Link>
      </section>
    </div>
  );
}
