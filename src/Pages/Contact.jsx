import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send, Sparkles } from "lucide-react";
import SocialLinks from "../components/SocialLinks";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: 'Sending Message...',
      html: 'Please wait while we send your message',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const form = e.target;
      await form.submit();

      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent successfully!',
        icon: 'success',
        confirmButtonColor: '#7c83ff',
        timer: 2000,
        timerProgressBar: true
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonColor: '#7c83ff'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative bg-[#050312] py-[5%]" id="Contact">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(124,131,255,0.08),transparent_50%)] pointer-events-none" />

      <div className="text-center mb-2 sm:px-0 px-[5%] relative z-10">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#7c83ff] to-[#b47cff]"
        >
          Contact Me
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className="text-[#a8b1d3] max-w-2xl mx-auto text-sm md:text-base mt-4 leading-relaxed"
        >
          Got a question? Send me a message, and I'll get back to you soon.
        </p>
      </div>

      <div
        className="h-auto py-10 flex items-center justify-center px-[5%] md:px-0 relative z-10"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className="container px-[1%] relative"
        >
          {/* Decorative Background Elements */}
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#7c83ff]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />

          <div className="relative bg-[#0f1228]/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 py-12 sm:p-14 md:p-16 border border-white/[0.08] overflow-hidden group/card transition-all duration-500 hover:border-white/20">
            {/* Inner Glass Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-purple-500/[0.02] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-12 relative z-10">
              {/* Left Side: Contact Form */}
              <div className="pr-0 lg:pr-10 lg:border-r lg:border-white/10">
                <div className="flex justify-between items-start mb-10">
                  <div className="space-y-2">
                    <h2 className="text-4xl font-bold text-white tracking-tight">
                      Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c83ff] to-[#b47cff]">Touch</span>
                    </h2>
                    <p className="text-[#a8b1d3] text-sm leading-relaxed">
                      Have something to discuss? Send me a message and let's talk.
                    </p>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[#8f95ff] hidden sm:block">
                    <Share2 className="w-6 h-6" />
                  </div>
                </div>

                <form
                  action="https://formsubmit.co/kabirsingh@gmail.com"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />

                  <div data-aos="fade-up" data-aos-delay="100" className="relative group/input">
                    <User className="absolute left-4 top-4 w-5 h-5 text-[#9099bc] group-focus-within/input:text-[#8f95ff] transition-colors" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full p-4 pl-12 bg-white/[0.03] rounded-xl border border-white/10 placeholder-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#7c83ff]/25 focus:border-[#7c83ff]/50 transition-all"
                      required
                    />
                  </div>

                  <div data-aos="fade-up" data-aos-delay="200" className="relative group/input">
                    <Mail className="absolute left-4 top-4 w-5 h-5 text-[#9099bc] group-focus-within/input:text-[#8f95ff] transition-colors" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full p-4 pl-12 bg-white/[0.03] rounded-xl border border-white/10 placeholder-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#7c83ff]/25 focus:border-[#7c83ff]/50 transition-all"
                      required
                    />
                  </div>

                  <div data-aos="fade-up" data-aos-delay="300" className="relative group/input">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[#9099bc] group-focus-within/input:text-[#8f95ff] transition-colors" />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full resize-none p-4 pl-12 bg-white/[0.03] rounded-xl border border-white/10 placeholder-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#7c83ff]/25 focus:border-[#7c83ff]/50 transition-all h-40"
                      required
                    />
                  </div>

                  <button
                    data-aos="fade-up"
                    data-aos-delay="400"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#7c83ff] to-[#b47cff] text-white py-4 rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(124,131,255,0.42)] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>

              {/* Right Side: Social Links */}
              <div className="flex flex-col justify-center pl-0 lg:pl-6 pr-0 lg:pr-4">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;