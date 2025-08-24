import Link from "next/link";

const terms = [
        {
          "heading": "1. Introduction",
          "content": "Welcome to Quiktis Limited (\"Quiktis,\" \"we,\" \"our,\" or \"us\"). These Terms and Conditions (\"Terms\") govern your access to and use of the Quiktis platform, including our website, mobile applications, and related services (collectively, the \"Services\"). By using our Services, you agree to these Terms. If you do not agree, you must not use our Services."
        },
        {
          "heading": "2. Eligibility",
          "content": "You must be at least 18 years old and capable of entering into a legally binding agreement under applicable law to use our Services."
        },
        {
          "heading": "3. Services Overview",
          "content": "Quiktis provides a decentralized ticketing and event management platform that enables users to buy, sell, and manage event tickets securely and transparently."
        },
        {
          "heading": "4. User Responsibilities",
          "points": [
            "Provide accurate and truthful information.",
            "Maintain the confidentiality of your account details.",
            "Comply with all applicable laws when using the Services.",
            "Refrain from fraudulent, abusive, or harmful behavior."
          ]
        },
        {
          "heading": "5. Fees and Payments",
          "content": "All fees, charges, and payment terms will be disclosed before you complete a transaction. Quiktis reserves the right to update its pricing and fee structure at any time."
        },
        {
          "heading": "6. Intellectual Property",
          "content": "All content, trademarks, and materials provided through Quiktis are owned by or licensed to us and are protected under intellectual property laws. You may not copy, reproduce, or distribute our content without prior written consent."
        },
        {
          "heading": "7. Termination",
          "content": "We may suspend or terminate your access to the Services at our discretion, including if you breach these Terms."
        },
        {
          "heading": "8. Limitation of Liability",
          "content": "To the maximum extent permitted by law, Quiktis shall not be liable for any indirect, incidental, or consequential damages arising out of or related to your use of the Services."
        },
        {
          "heading": "9. Governing Law",
          "content": "These Terms are governed by the laws of Nigeria, without regard to conflict of laws principles. You agree to submit to the jurisdiction of Nigerian courts."
        },
]


export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-50 leading-relaxed">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Quiktis Terms and Conditions</h1>

      </header>

      <section className="space-y-10">
      {terms.map((section, index) => (
        <div key={index} className="space-y-5">
          <h2 className={`text-2xl font-semibold`}>{section.heading}</h2>
          <p>{section.content}</p>
          {section.points && (<>{
            section.points.map((point, index) => (
              <ul key={index} className="list-disc ml-6 space-y-1">
                <li>{point}</li>
              </ul>
            ))
          }</>)}
        </div>
      ))}
      <p className="text-white">For any questions or concerns, please contact us at <Link href={"mailto:support@quiktis.com"} className={`text-blue-500`}>support@quiktis.com</Link></p>
      </section>
    </main>
  );
}
