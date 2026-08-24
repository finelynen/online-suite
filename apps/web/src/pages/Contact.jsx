import React from 'react';

export default function Contact({ formData, setFormData }) {
  const currentFormData = formData || { name: '', email: '', inquiryType: 'general', message: '' };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (setFormData) {
      setFormData({ ...currentFormData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', currentFormData);
  };

  return (
    <div id="center">
      {/* Visual top border ticks matching your design template */}
      <div className="ticks"></div>

      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-md px-4 flex flex-col gap-6 text-left"
      >
        <h2 className="text-3xl font-bold tracking-tight mb-2" style={{ color: 'var(--text-h)' }}>
          Contact Us
        </h2>

        {/* Name Field */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium opacity-80">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={currentFormData.name || ''}
            onChange={handleChange}
            style={{ 
              backgroundColor: 'var(--social-bg)', 
              borderColor: 'var(--border)',
              color: 'var(--text-h)'
            }}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--accent)] transition-colors"
            required
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium opacity-80">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={currentFormData.email || ''}
            onChange={handleChange}
            style={{ 
              backgroundColor: 'var(--social-bg)', 
              borderColor: 'var(--border)',
              color: 'var(--text-h)'
            }}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--accent)] transition-colors"
            required
          />
        </div>

        {/* Inquiry Dropdown */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium opacity-80">Inquiry Type</label>
          <select
            name="inquiryType"
            value={currentFormData.inquiryType || 'general'}
            onChange={handleChange}
            style={{ 
              backgroundColor: 'var(--social-bg)', 
              borderColor: 'var(--border)',
              color: 'var(--text-h)'
            }}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--accent)] transition-colors appearance-none cursor-pointer"
          >
            <option value="general">General Inquiry</option>
            <option value="mixing">Mixing & Mastering Project</option>
            <option value="recording">Studio Tracking Session</option>
            <option value="modeling">Modeling / Acting Booking</option>
          </select>
        </div>

        {/* Message Field */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium opacity-80">Message</label>
          <textarea
            name="message"
            rows="4"
            placeholder="Tell us about your project..."
            value={currentFormData.message || ''}
            onChange={handleChange}
            style={{ 
              backgroundColor: 'var(--social-bg)', 
              borderColor: 'var(--border)',
              color: 'var(--text-h)'
            }}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="counter w-full text-center font-semibold cursor-pointer !py-3 !px-4 !mb-0"
        >
          Send Message
        </button>
      </form>

      {/* Spacing element to match your layout grid */}
      <div id="spacer"></div>
    </div>
  );
}
export default Contact;
