"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef(null);

  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "Missing EmailJS env vars. Check .env.local for NEXT_PUBLIC_EMAILJS_* values."
        );
      }

      // sendForm(serviceID, templateID, formElement, publicKey)
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      setStatus("success");
      formRef.current?.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err?.message || "Failed to send message. Please try again.");
    }
  };

  const isSending = status === "sending";

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="
        max-w-xl mx-auto my-8
        flex flex-col
      "
    >
      <textarea
        name="name"
        placeholder="Your Name"
        required
        className="
          p-4 my-2 text-base text-white
          placeholder-white-500 rounded
          border border-gray-700
        "
      />

      <textarea
        name="email"
        placeholder="Your Email"
        required
        className="
          p-4 my-2 text-base text-white
          placeholder-white-500 rounded
          border border-gray-700
        "
      />

      <textarea
        name="message"
        placeholder="Your Message"
        required
        className="
          p-4 my-2 text-base text-white
          placeholder-gray-500 rounded
          border border-gray-700 min-h-[150px]
        "
      />

      <button
        type="submit"
        disabled={isSending}
        className="
          bg-white text-black
          py-4 px-6
          text-base
          border-none
          cursor-pointer
          mt-4
          rounded
          hover:bg-gray-300
          transition
          disabled:opacity-60 disabled:cursor-not-allowed
        "
      >
        {isSending ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="mt-3 text-sm text-green-600">
          Sent! I’ll get back to you asap.
        </p>
      )}

      {status === "error" && (
        <p className="mt-3 text-sm text-red-600">
          {errorMsg || "Something went wrong."}
        </p>
      )}
    </form>
  );
}
