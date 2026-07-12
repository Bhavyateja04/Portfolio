"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Sparkles, Send } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setIsSubmitted(false);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey || "YOUR_ACCESS_KEY_HERE",
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `Portfolio Contact Form submission from ${formState.name}`,
          from_name: "Personal Portfolio Form",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
        // Reset confirmation message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setErrorMessage(data.message || "Failed to send message. Please check your setup.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-cream/10">
      {/* Background Star Sparks */}
      <div className="absolute top-10 left-[8%] w-8 h-8 text-pink animate-float opacity-30">
        <Sparkles className="w-full h-full" />
      </div>
      <div className="absolute bottom-10 right-[8%] w-10 h-10 text-lavender animate-float-slow opacity-40">
        <Sparkles className="w-full h-full" />
      </div>

      <div className="container mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="mb-16 text-center relative">
          <span className="font-handwritten text-3xl text-pink font-bold block mb-1 rotate-[-2deg]">
            stay in touch
          </span>
          <h2 className="font-display text-4xl font-bold text-charcoal flex items-center justify-center gap-2">
            <span>Contact Me</span>
            <Mail className="w-6 h-6 text-pink animate-pulse-subtle" />
          </h2>
          <div className="mt-2 w-32 h-1.5 bg-lavender mx-auto rounded-full border border-charcoal/30"></div>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Information (Note sheet card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-peach/30 border-2 border-charcoal rounded-3xl p-6 md:p-8 shadow-[6px_6px_0px_#3D3D3D] flex flex-col justify-between relative"
          >
            {/* Washi Tape */}
            <div className="washi-tape washi-tape-lavender -top-3 left-6 w-20 h-6"></div>

            <div>
              <h3 className="font-display text-2xl font-bold text-charcoal mb-4">
                Let&apos;s Chat! ☕
              </h3>
              <p className="font-body text-xs md:text-sm font-semibold text-charcoal/70 leading-relaxed mb-8">
                Whether you have an exciting internship, project collaboration, or just want to swap crochet patterns or coding tips, feel free to drop me a message!
              </p>

              {/* Detail Items */}
              <div className="space-y-6">
                
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white border border-charcoal/40 rounded-xl shadow-[2px_2px_0px_rgba(61,61,61,0.5)] flex items-center justify-center text-pink">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-charcoal/40">Email Address</span>
                    <a href="mailto:bhavyateja05@gmail.com" className="font-display text-sm font-bold text-charcoal hover:underline">
                      bhavyateja05@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white border border-charcoal/40 rounded-xl shadow-[2px_2px_0px_rgba(61,61,61,0.5)] flex items-center justify-center text-blue">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-charcoal/40">Phone Number</span>
                    <a href="tel:+917989389673" className="font-display text-sm font-bold text-charcoal hover:underline">
                      +91 79893 89673
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white border border-charcoal/40 rounded-xl shadow-[2px_2px_0px_rgba(61,61,61,0.5)] flex items-center justify-center text-sage-dark">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-charcoal/40">Location</span>
                    <span className="font-display text-sm font-bold text-charcoal">
                      Andhra Pradesh, India
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-charcoal/30 flex gap-4">
              <a
                href="https://github.com/Bhavyateja04"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border-2 border-charcoal rounded-xl shadow-[2px_2px_0px_#3D3D3D] hover:shadow-[4px_4px_0px_#3D3D3D] active:shadow-[1px_1px_0px_#3D3D3D] active:translate-y-[1px] hover:translate-y-[-2px] transition-all flex items-center justify-center text-charcoal cursor-pointer"
                aria-label="GitHub Profile"
              >
                <svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/in/bhavya1220/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border-2 border-charcoal rounded-xl shadow-[2px_2px_0px_#3D3D3D] hover:shadow-[4px_4px_0px_#3D3D3D] active:shadow-[1px_1px_0px_#3D3D3D] active:translate-y-[1px] hover:translate-y-[-2px] transition-all flex items-center justify-center text-blue cursor-pointer"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>

          </motion.div>

          {/* Contact Form (Notebook lined sheet) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 bg-white border-2 border-charcoal rounded-3xl p-6 md:p-8 shadow-[6px_6px_0px_#3D3D3D] relative notebook-grid"
          >
            {/* Washi Tape */}
            <div className="washi-tape washi-tape-blue -top-3 right-8 w-20 h-6"></div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {isSubmitted && (
                <div className="p-4 bg-mint/45 border-2 border-charcoal rounded-2xl text-xs md:text-sm font-display font-bold text-charcoal">
                  🌸 Thank you! Your message was sent successfully. I will get back to you shortly!
                </div>
              )}

              {errorMessage && (
                <div className="p-4 bg-pink/30 border-2 border-charcoal rounded-2xl text-xs md:text-sm font-display font-bold text-charcoal">
                  ⚠️ Oops! {errorMessage}
                </div>
              )}

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="font-display text-sm font-bold text-charcoal">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Penke Bhavya Teja"
                  className="w-full px-4 py-3 bg-offwhite border-2 border-charcoal rounded-2xl font-body font-semibold text-charcoal outline-none focus:bg-peach/15 focus:shadow-[2px_2px_0px_#3D3D3D] transition-all"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-display text-sm font-bold text-charcoal">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                  placeholder="bhavya@example.com"
                  className="w-full px-4 py-3 bg-offwhite border-2 border-charcoal rounded-2xl font-body font-semibold text-charcoal outline-none focus:bg-peach/15 focus:shadow-[2px_2px_0px_#3D3D3D] transition-all"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="font-display text-sm font-bold text-charcoal">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Write a little note..."
                  className="w-full px-4 py-3 bg-offwhite border-2 border-charcoal rounded-2xl font-body font-semibold text-charcoal outline-none focus:bg-peach/15 focus:shadow-[2px_2px_0px_#3D3D3D] transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-lavender hover:bg-lavender/90 disabled:bg-charcoal/10 disabled:cursor-not-allowed border-2 border-charcoal rounded-2xl font-display font-extrabold text-charcoal flex items-center justify-center gap-2 shadow-[4px_4px_0px_#3D3D3D] hover:shadow-[6px_6px_0px_#3D3D3D] active:shadow-[2px_2px_0px_#3D3D3D] active:translate-y-[1px] transition-all cursor-pointer"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <Send className="w-4 h-4" />
              </button>

            </form>

            {/* Binder rings */}
            <div className="absolute top-1/2 -left-3 flex flex-col gap-6 -translate-y-1/2">
              <div className="binder-ring"></div>
              <div className="binder-ring"></div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
