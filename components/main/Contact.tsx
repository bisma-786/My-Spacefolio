"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_h9fi9ld",
          "template_tz399qi",
          formRef.current,
          "utAoEq_n18GhF5H8y"
        )
        .then(() => {
          setStatus("✅ Message Sent Successfully! Please check your Gmail 😊");
          formRef.current?.reset();
        })
        .catch((err) => {
          console.error("EmailJS Error:", err);
          setStatus("❌ Failed to send message! Please try again ☹️");
        });
    }
  };

  return (
    <section className="relative z-20 w-full py-20 px-6"
    id="contact">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Touch
            </span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto text-lg">
            Have a project or collaboration in mind? Drop me a message and
            let&apos;s make it happen!
          </p>
        </div>

        {/* Glass Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="relative z-20 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-8 space-y-6 transition-all duration-300 hover:shadow-purple-500/30"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="from_name"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              name="from_name"
              id="from_name"
              placeholder="John Doe"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 outline-none transition-all duration-200"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="from_email"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              name="from_email"
              id="from_email"
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 outline-none transition-all duration-200"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              placeholder="Write your message..."
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 outline-none transition-all duration-200"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold text-lg shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-300"
          >
            Send Message 🚀
          </button>

          {/* Status */}
          {status && (
            <p
              className={`text-center mt-4 text-sm font-medium ${
                status.includes("✅")
                  ? "text-green-400"
                  : status.includes("❌")
                  ? "text-red-400"
                  : "text-gray-300"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
