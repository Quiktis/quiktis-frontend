"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import {
  FiMessageSquare,
  FiMail,
  FiLinkedin,
  FiPhoneCall,
  FiMapPin,
} from "react-icons/fi";

const ContactPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ firstName, lastName, phone, date, topic, message });
  };

  return (
    <main className="relative min-h-screen text-white">
      <Image
        src="/gradient.png"
        alt="Background Gradient"
        fill
        className="object-cover z-0"
        style={{ filter: "brightness(0.8)" }}
        priority
      />

      <div className="relative z-10 py-10">
        <section>
          <h1 className="text-5xl font-bold mb-2">Contact Our Team</h1>
          <p className="text-lg text-gray-200">
            Got any questions about our product or related issues? We’re here to
            help. Chat to our friendly team 24/7 and get onboard in less than 5
            minutes.
          </p>
        </section>

        <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#111111]/90 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Chat with us</h2>
            <p className="text-gray-200 mb-4">
              Speak to our friendly team via live chat.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FiMessageSquare className="text-primary" />
                <a
                  href="https://your-live-chat-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline">
                  Start a live chat
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiMail className="text-primary" />
                <a
                  href="mailto:support@example.com"
                  className="hover:underline">
                  Shoot us an email
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiLinkedin className="text-primary" />
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline">
                  Message us on LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-[#111111]/90 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Call us</h2>
            <p className="text-gray-200 mb-4">
              Call our team Mon-Fri from 8am to 5pm.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FiPhoneCall className="text-primary" />
                <a href="tel:+2341234567" className="hover:underline">
                  +234 123 4567
                </a>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-[#111111]/90 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Visit us</h2>
            <p className="text-gray-200 mb-4">
              Chat to our sponsor at our Lagos HQ.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FiMapPin className="text-primary" />
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline">
                  6301 Elgin St. Celina, Delaware
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiMail className="text-primary" />
                <a
                  href="mailto:support@example.com"
                  className="hover:underline">
                  Shoot us an email
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiLinkedin className="text-primary" />
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline">
                  Message us on LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-center text-4xl font-bold mb-6">MESSAGE US</h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Row 1*/}
            <div className="flex flex-col">
              <label className="text-primary font-semibold mb-1">
                First Name *
              </label>
              <input
                type="text"
                placeholder="Choose name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="p-3 border border-gray-700 bg-transparent rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-primary font-semibold mb-1">
                Last Name *
              </label>
              <input
                type="text"
                placeholder="Choose name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="p-3 border border-gray-700 bg-transparent rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-primary font-semibold mb-1">Phone</label>
              <input
                type="tel"
                placeholder="Choose phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="p-3 border border-gray-700 bg-transparent rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            {/* Row 2*/}
            <div className="flex flex-col md:col-span-1">
              <label className="text-primary font-semibold mb-1">Date</label>
              <input
                type="date"
                placeholder="mm/dd/yyyy"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="p-3 border border-gray-700 bg-transparent rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col md:col-span-2 md:row-span-2">
              <label className="text-primary font-semibold mb-1">Message</label>
              <textarea
                rows={6}
                placeholder="Leave us a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="p-3 border border-gray-700 bg-transparent rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none h-full"
              />
            </div>

            {/* Row 3 */}
            <div className="flex flex-col md:col-span-1">
              <label className="text-primary font-semibold mb-1">Topic</label>
              <input
                type="text"
                placeholder="Click to select Topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="p-3 border border-gray-700 bg-transparent rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            {/* Row 4 */}
            <div className="flex justify-end md:col-span-3">
              <Button
                type="submit"
                className="bg-primary py-3 px-6 text-white font-semibold rounded-md">
                Send Message
              </Button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;
