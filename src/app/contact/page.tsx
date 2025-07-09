
'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, User, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_fkdxuls', 'template_292vxqb', form, 'pDCwJnfvzrjOHWqJq')
      .then(() => setSent(true))
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert('There was a problem sending your message.');
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black p-6">
      <div className="max-w-xl mx-auto bg-white rounded shadow p-6">
        <h1 className="text-2xl font-bold mb-4 flex items-center gap-2"><Mail /> Contact Us</h1>
        {sent ? (
          <p className="text-green-600">Your message has been sent. We'll get back to you soon!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2">
              <User />
              <input name="name" value={form.name} onChange={handleChange} required placeholder="Your Name"
                className="flex-1 border p-2 rounded" />
            </div>
            <div className="flex items-center gap-2">
              <Mail />
              <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Your Email"
                className="flex-1 border p-2 rounded" />
            </div>
            <div className="flex items-start gap-2">
              <MessageSquare />
              <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Your Message"
                className="flex-1 border p-2 rounded h-32"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
          </form>
        )}
      </div>
    </div>
  );
}
