import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", inquiryType: "general", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Form Data:", formData);
    alert("Inquiry logged successfully!"); // Swap out with actual Formspree/SendGrid hookups later
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div className="mb-12 text-center">
        <h2 className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-2">Collaborations</h2>
        <h1 className="text-3xl font-bold tracking-tight text-white">SECURE A BOOKING</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 text-sm">
        <div>
          <label className="block text-xs font-medium uppercase tracking-widest text-neutral-400 mb-2">Your Name</label>
          <input
            type="text"
            required
            className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neutral-500 transition-colors"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-xs font-medium uppercase tracking-widest text-neutral-400 mb-2">Email Address</label>
          <input
            type="email"
            required
            className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neutral-500 transition-colors"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-xs font-medium uppercase tracking-widest text-neutral-400 mb-2">Inquiry Intent</label>
          <select
            className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-neutral-300 focus:outline-none focus:border-neutral-500 transition-colors"
            onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
          >
            <option value="general">General Collaboration</option>
            <option value="music">Music Production / Mixing</option>
            <option value="modeling">Modeling / Acting Casting</option>
            <option value="engineering">Software Engineering Contract</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium uppercase tracking-widest text-neutral-400 mb-2">Project Message</label>
          <textarea
            rows="5"
            required
            className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neutral-500 transition-colors resize-none"
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
        </div>

        <button type="submit" className="w-full bg-white text-black font-semibold uppercase tracking-widest text-xs py-4 rounded-lg hover:bg-neutral-200 transition-colors duration-200">
          Transmit Message
        </button>
      </form>
    </div>
  );
}
