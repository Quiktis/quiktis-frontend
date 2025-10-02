import Link from "next/link";

const terms = [
        {
            "heading": "",
            "content": "At Quiktis Limited (“Quiktis,” “we,” “our,” or “us”), the security of your data and our platform is a top priority. This Security Policy explains the measures we take to protect information and ensure a safe experience for all users, organizers, and attendees."
        },
        {
          "heading": "1. Data Encryption",
          "points": [
            "All communication between your device and Quiktis is encrypted using SSL/TLS (HTTPS).",
            "Sensitive data stored on our servers is encrypted at rest using industry-standard protocols.",
          ]
        },
        {
          "heading": "2. Account Security",
          "points": [
            "Passwords are hashed and never stored in plain text.",
            "We encourage the use of strong, unique passwords.",
          ]
        },
        {
          "heading": "3. Payment Security",
          "points": [
            "Quiktis does not store credit card details.",
            "All transactions are processed securely through PCI-DSS compliant payment processors.",
          ]
        },
        {
          "heading": "4. Infrastructure Security",
          "points": [
            "Our systems are hosted on trusted cloud providers with firewalls, intrusion detection, and continuous monitoring",
            "Regular security updates and patches are applied to maintain platform integrity.",
          ]
        },
        {
          "heading": "5. Access Controls",
          "points": [
            "Internal access to user data is restricted to authorized personnel only.",
            "Role-based access is enforced, and all activity is logged and monitored.",
          ]
        },
        {
          "heading": "6. Incident Response",
          "content": "In the event of a suspected data breach, we will:",
          "points": [
            "Investigate immediately.",
            "Contain the incident.",
            "Notify affected users and relevant authorities as required by law."
          ]
        },
        {
          "heading": "7. User Responsibilities",
          "points": [
            "Keep your login credentials confidential.",
            "Use a secure internet connection when accessing Quiktis.",
            "Notify us immediately if you suspect unauthorized activity on your account."
          ]
        },
        {
          "heading": "8. Continuous Improvement",
          "points": [
            "We perform regular security reviews, vulnerability assessments, and monitoring to strengthen our systems",
            "We may update this policy as our security practices evolve"
          ]
        },
        {
          "heading": "9. Contact Us",
          "content": "If you have security concerns or discover a vulnerability, please contact us at:",
          "points": [
            "Quiktis Limited",
            "Registered Office: Lagos, Nigeria",
            "Email: support@quiktis.com"
          ]
        },
]


export default function SecurityPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-50 leading-relaxed mt-[3.5em] md:mt-[2.5em]">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Security Policy</h1>

      </header>

      <section className="space-y-10">
        <p className="mb-[-1em]"><span className="font-semibold">Last Updated:</span> 23 August 2025</p>
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
      </section>
    </main>
  );
}
