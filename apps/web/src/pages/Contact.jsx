// src/pages/Contact.jsx

export default function Contact({ formData, setFormData }) {
  return (
    // 1. Enforce the #center ID layout from your CSS file
    <div id="center">
      
      {/* 2. Optional: Keeps layout stable if you have hero imagery above */}
      <div className="ticks"></div> 

      <div className="w-full max-w-md px-4">
        <label className="block text-sm font-medium text-neutral-400 mb-2">
          Inquiry Type
        </label>
        
        <select
          // 3. Removed conflicting absolute or native display overrides
          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-neutral-300 focus:outline-none focus:border-neutral-500 transition-colors"
          value={formData?.inquiryType || 'general'}
          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
        >
          <option value="general">General Inquiry</option>
          <option value="mixing">Mixing & Mastering Project</option>
          <option value="recording">Studio Tracking Session</option>
          <option value="modeling">Modeling / Acting Booking</option>
        </select>
      </div>

      {/* 4. Ensures the layout matches the spacing rules of your next sections */}
      <div id="spacer"></div>
    </div>
  );
}

