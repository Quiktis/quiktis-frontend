import Link from "next/link";

const policies = [
        {
          "heading": "1. Introduction",
          "content": "Quiktis respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information."
        },
        {
          "heading": "2. Information We Collect",
          "points": [
            "Personal Information: Name, email, phone number, and payment details.",
            "Usage Data: Device information, log data, and interaction with our Services.",
            "Cookies and Tracking Data: For analytics, functionality, and personalization."
          ]
        },
        {
          "heading": "3. How We Use Your Information",
          "points": [
            "To provide and improve our Services.",
            "To process transactions.",
            "To communicate updates, promotions, and support.",
            "To enhance security and prevent fraud."
          ]
        },
        {
          "heading": "4. Sharing Your Information",
          "content": "We may share your information with trusted third-party service providers, regulatory authorities (if required by law), or during business transfers such as mergers or acquisitions."
        },
        {
          "heading": "5. International Data Transfers",
          "content": "Your data may be transferred and stored outside of Nigeria. By using our Services, you consent to such transfers."
        },
        {
          "heading": "6. Data Security",
          "content": "We implement technical and organizational measures to protect your data against unauthorized access, loss, or misuse."
        },
        {
          "heading": "7. Your Rights",
          "content": "You may request access, correction, deletion, or restriction of your personal data, subject to applicable laws."
        },
        {
          "heading": "8. Retention",
          "content": "We retain your personal data for as long as necessary to provide our Services or comply with legal obligations."
        },
        
]


export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-50 leading-relaxed">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Quiktis Privacy Policy</h1>

      </header>

      <section className="space-y-10">
      {policies.map((section, index) => (
        <div key={index} className="space-y-5">
          <h2 className={`text-2xl font-semibold`}>{section.heading}</h2>
          <p >{section.content}</p>
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
