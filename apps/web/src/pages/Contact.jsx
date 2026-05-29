// src/pages/Contact.jsx
import React from 'react'; // Optional if using React 17+

// 1. Define the component function (and ensure props like formData/setFormData are accessible)
export default function Contact({ formData, setFormData }) {
  return (
    <select
      className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-neutral-300 focus:outline-none focus:border-neutral-500 transition-colors"
      value={formData?.inquiryType || 'general'} // Visual anchor for the current state
      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
    >
      <option value="general">General Inquiry</option>
      <option value="mixing">Mixing & Mastering Project</option>
      <option value="recording">Studio Tracking Session</option>
      <option value="modeling">Modeling / Acting Booking</option>
    </select>
  );
}

