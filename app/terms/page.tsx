// app/(legal)/terms/page.tsx
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-50 leading-relaxed">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Quiktis Terms and Conditions</h1>

      </header>

      {/* Terms */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">1. Introduction</h2>
        <p>
          Welcome to Quiktis. These Terms and Conditions govern your use of our platform and
          services. By using Quiktis you agree to these Terms in full. If you disagree with any
          part of these Terms you must not use Quiktis.
        </p>

        <h2 className="text-2xl font-semibold">2. Definitions</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <strong>Platform</strong> refers to Quiktis including our website and mobile
            applications.
          </li>
          <li>
            <strong>User</strong> refers to anyone accessing or using Quiktis.
          </li>
          <li>
            <strong>Organizer</strong> refers to users creating events and selling tickets.
          </li>
          <li>
            <strong>Attendee</strong> refers to users purchasing or claiming tickets for events.
          </li>
          <li>
            <strong>We, us, and our</strong> refer to Quiktis.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">3. Eligibility</h2>
        <p>
          You must be at least 18 years old or the age of majority in your jurisdiction to use
          Quiktis. By using Quiktis you represent that you meet these requirements.
        </p>
        

        {/* --- Continue all other sections as plain text --- */}
        <h2 className="text-2xl font-semibold">4. Account Registration</h2>
        <p>
          {`You may be required to register an account to use certain features. You agree to provide
          accurate information and keep it updated. You are responsible for maintaining the
          confidentiality of your account and password. You are responsible for all activities under
          your account.`}
        </p>

        {/* --- Continue all other sections as plain text --- */}
        <h2 className="text-2xl font-semibold">5. Event Creation and Ticket Sales</h2>
        <p>
          {`Organizers are solely responsible for their events including ticket pricing event descriptions refunds and compliance with local laws. Quiktis acts as a facilitator and is not responsible for any loss arising from an event or transaction`}
        </p>

        {/* --- Continue all other sections as plain text --- */}
        <h2 className="text-2xl font-semibold">6. Account Registration</h2>
        <p>
          {`Quiktis may charge fees for certain transactions. Fees will be disclosed prior to your transaction. You agree to pay all applicable fees. Quiktis is not responsible for chargebacks or disputes between Organizers and Attendees.`}
        </p>

        {/* --- Continue all other sections as plain text --- */}
        <h2 className="text-2xl font-semibold">7. Refunds</h2>
        <p>
          {`Refund policies are determined by the Organizer unless otherwise stated. Quiktis does not process refunds directly unless explicitly stated in specific campaigns or promotions.`}
        </p>

        {/* --- Continue all other sections as plain text --- */}
        <h2 className="text-2xl font-semibold">8. Prohibited Activities</h2>
        <div className="space-y-1">
          <p className="text-deco">You agree not to:</p>
          <ul className="list-disc ml-6 space-y-1 ">        
          <li>Violate any laws or third party rights</li>
          <li>Use Quiktis for fraudulent activities</li>
          <li>Interfere with the operation of the platform</li>
          <li>Upload harmful or malicious content</li>
        </ul>
        </div>
        

        {/* --- Continue all other sections as plain text --- */}
        <h2 className="text-2xl font-semibold">9. Intellectual Property</h2>
        <p>
          {`All content on Quiktis including logos designs and trademarks are the property of Quiktis or its licensors. You may not use reproduce or distribute our content without our written permission.`}
        </p>

        <h2 className="text-2xl font-semibold">10. Termination</h2>
        <p>
          {`We may suspend or terminate your access to Quiktis at our discretion if you breach these Terms or for operational reasons. Upon termination your right to use Quiktis will immediately cease.`}
        </p>

        <h2 className="text-2xl font-semibold">11. Disclaimers</h2>
        <p>
          {`Quiktis is provided on an “as is” basis. We do not guarantee that the platform will always be available secure or error free. To the maximum extent permitted by law we disclaim all warranties.`}
        </p>

        <h2 className="text-2xl font-semibold">12. Termination</h2>
        <p>
          {`All content on Quiktis including logos designs and trademarks are the property of Quiktis or its licensors. You may not use reproduce or distribute our content without our written permission.`}
        </p>

        <h2 className="text-2xl font-semibold">12. Limitation of Liability</h2>
        <p>
          {`Quiktis will not be liable for any indirect incidental special consequential or punitive damages including loss of profits data use or goodwill arising from your use of the platform.`}
        </p>

        <h2 className="text-2xl font-semibold">13. Indemnity</h2>
        <p>
          {`You agree to indemnify and hold harmless Quiktis and its affiliates from any claims liabilities damages or expenses arising from your use of Quiktis or your breach of these Terms.`}
        </p>

        <h2 className="text-2xl font-semibold">14. Governing Law</h2>
        <p>
          {`These Terms are governed by the laws of your operating jurisdiction unless otherwise required by applicable law. Any disputes shall be resolved in the courts of your jurisdiction.`}
        </p>

        <h2 className="text-2xl font-semibold">15. Changes to Terms</h2>
        <p>
          {`We may update these Terms from time to time. We will notify you of any significant changes. Your continued use of Quiktis after changes are posted constitutes acceptance of the new Terms.`}
        </p>



        {/* ... */}

        <h2 className="text-2xl font-semibold">16. Contact</h2>
        <p>
          For questions about these Terms contact us at{" "}
          <Link href="mailto:support@quiktis.com" className="text-blue-600 hover:underline">
            support@quiktis.com
          </Link>
        </p>
      </section>

      {/* Divider */}
      <hr className="my-12" />

      {/* Privacy Policy */}
      <section className="space-y-6">
        <h1 className="text-3xl font-bold mb-6">Quiktis Privacy Policy</h1>

        <h2 className="text-2xl font-semibold">1. Introduction</h2>
        <p>
          Your privacy is important to us. This Privacy Policy explains how we collect use and
          protect your personal information when you use Quiktis.
        </p>

        <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <strong>Account Information:</strong> name email phone number and password
          </li>
          <li>
            <strong>Transaction Information:</strong> details of tickets purchased or sold
          </li>
          <li>
            <strong>Usage Data:</strong> IP address device type browser type access times pages
            viewed
          </li>
          <li>
            <strong>Optional Information:</strong> such as profile pictures or social media links
          </li>
        </ul>



        <h2 className="text-2xl font-semibold">3. How We Use Your Informations</h2>
        <div className="space-y-1">
          <p className="text-deco">We use your information to:</p>
          <ul className="list-disc ml-6 space-y-1 ">        
          <li>Provide and improve Quiktis services</li>
          <li>Process transactions and payments</li>
          <li>Communicate with you about your account or events</li>
          <li>Personalize your user experience</li>
          <li>Comply with legal obligations</li>
        </ul>
        </div>

        <h2 className="text-2xl font-semibold">4. Sharing Your Information</h2>
        <div className="space-y-1">
          <p className="text-deco">We may share your information with:</p>
          <ul className="list-disc ml-6 space-y-1 ">        
          <li><strong>Organizers:</strong> if you purchase their tickets</li>
          <li><strong>Service Providers:</strong> who perform services on our behalf</li>
          <li><strong>Legal Authorities:</strong> if required by law or to protect rights and safety</li>
        </ul>
        </div>

        <h2 className="text-2xl font-semibold">5. Data Security</h2>
        <p>
          {`We implement reasonable security measures to protect your data. However no system is completely secure. Use Quiktis at your own risk.`}
        </p>

        <p>We do not sell your personal data to third parties.</p>

        <h2 className="text-2xl font-semibold">6. Data Retention</h2>
        <p>
          {`We retain your information as long as necessary for the purposes outlined in this policy unless a longer retention period is required by law.`}
        </p>

        <h2 className="text-2xl font-semibold">7. Your Rights</h2>
        <div className="space-y-1">
          <p className="text-deco">Depending on your jurisdiction you may have rights to:</p>
          <ul className="list-disc ml-6 space-y-1 ">        
          <li>Access the personal data we hold about you</li>
          <li>Correct or update your data</li>
          <li>Request deletion of your data</li>
          <li>Object to or restrict processing of your data</li>
        </ul>
        <p>You can exercise these rights by contacting us at support@quiktis.com</p>
        </div>

        <h2 className="text-2xl font-semibold">8. Cookies</h2>
        <p>
          {`We use cookies to enhance your experience. You can modify your browser settings to disable cookies but this may affect functionality.`}
        </p>

        <h2 className="text-2xl font-semibold">{`9. Children’s Privacy`}</h2>
        <p>
          {`Quiktis is not intended for users under 18 years old. We do not knowingly collect data from children.`}
        </p>

        <h2 className="text-2xl font-semibold">10. Changes to this Policy</h2>
        <p>
          {`We may update this Privacy Policy from time to time. We will notify you of significant changes. Your continued use of Quiktis after changes means you accept the updated policy.`}
        </p>


        

        {/* Continue sections 3 - 11 the same way */}
        {/* ... */}

        <h2 className="text-2xl font-semibold">11. Contact</h2>
        <p>
          If you have any questions about this Privacy Policy contact us at{" "}
          <Link href="mailto:support@quiktis.com" className="text-blue-600 hover:underline">
            support@quiktis.com
          </Link>
        </p>
      </section>

    </main>
  );
}
