import Link from "next/link";

const policies = [
        {
          "heading": "1. Introduction",
          "content": "This Cookies Policy explains how Quiktis uses cookies and similar technologies to enhance your experience."
        },
        {
          "heading": "2. What Are Cookies?",
          "content": "Cookies are small text files stored on your device when you visit a website. They help us remember your preferences and improve functionality."
        },
        {
          "heading": "3. Types of Cookies We Use",
          "points": [
            "Essential Cookies: Required for basic site functionality.",
            "Performance Cookies: Help us analyze site usage.",
            "Functional Cookies: Remember your preferences.",
            "Advertising Cookies: Deliver relevant ads."
          ]
        },
        {
          "heading": "4. Managing Cookies",
          "content": "You can manage or disable cookies through your browser settings. However, disabling cookies may affect the functionality of our Services."
        },
        {
          "heading": "5. Changes to Cookies Policy",
          "content": "We may update this Cookies Policy from time to time. Any changes will be posted on our website."
        },
      
]


export default function CookiesPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-50 leading-relaxed">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Quiktis Cookies Policy</h1>

      </header>

      <section className="space-y-10">
      {policies.map((section, index) => (
        <div key={index} className="space-y-5">
          <h2 className="text-2xl font-semibold">{section.heading}</h2>
          {section.content && (<p>{section.content}</p>)}
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
