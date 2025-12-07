'use client';

import { useState } from 'react';
import Image from 'next/image';

const contactInfo = [
  {
    icon: '📧',
    title: 'Email Us',
    details: 'info@techcharity.org',
    description: 'Send us an email and we\'ll respond within 24 hours'
  },
  {
    icon: '📞',
    title: 'Call Us',
    details: '+254 700 000 000',
    description: 'Monday to Friday, 9AM - 6PM (EAT)'
  },
  {
    icon: '📍',
    title: 'Visit Us',
    details: 'Innovation Hub, Nairobi',
    description: 'University Way, 3rd Floor, Nairobi CBD'
  },
  {
    icon: '💬',
    title: 'WhatsApp',
    details: '+254 700 000 001',
    description: 'Quick questions and support'
  }
];

const officeLocations = [
  {
    city: 'Nairobi HQ',
    address: 'Innovation Hub, University Way, 3rd Floor, Nairobi CBD',
    phone: '+254 700 000 000',
    email: 'nairobi@techcharity.org',
    hours: 'Mon-Fri: 9AM-6PM',
    image: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=800&auto=format&fit=crop'
  },
  {
    city: 'Mombasa Branch',
    address: 'Moi Avenue, Tech Plaza, 2nd Floor, Mombasa',
    phone: '+254 700 000 002',
    email: 'mombasa@techcharity.org',
    hours: 'Mon-Fri: 8AM-5PM',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop'
  },
  {
    city: 'Kisumu Office',
    address: 'Oginga Odinga Street, Digital Centre, 1st Floor',
    phone: '+254 700 000 003',
    email: 'kisumu@techcharity.org',
    hours: 'Mon-Fri: 8AM-5PM',
    image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=800&auto=format&fit=crop'
  }
];

const faqItems = [
  {
    question: 'How can I apply for your tech programs?',
    answer: 'You can apply through our website or visit any of our offices. We have regular intake periods throughout the year. Check our Programs page for current openings and requirements.'
  },
  {
    question: 'Are your programs free?',
    answer: 'Yes, all our core programs are completely free for participants. We believe in making technology education accessible to everyone, regardless of their financial situation.'
  },
  {
    question: 'Do you provide job placement assistance?',
    answer: 'Yes, we have partnerships with over 50 companies and provide job placement assistance, interview preparation, and ongoing career support for our graduates.'
  },
  {
    question: 'Can I volunteer if I don\'t have tech skills?',
    answer: 'Absolutely! We need volunteers with various skills including administration, marketing, community outreach, and more. Check our Volunteer page for all available opportunities.'
  },
  {
    question: 'How is my donation used?',
    answer: 'Your donations directly fund our programs, equipment, instructor fees, and facility costs. We maintain full transparency - you can see our impact reports on the Dashboard page.'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    category: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="bg-white pt-16 min-h-screen">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">✅</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Message Sent Successfully!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  subject: '',
                  message: '',
                  category: 'general'
                });
              }}
              className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8">
              Have questions about our programs? Want to get involved? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Multiple Ways to Reach Us
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info) => (
              <div key={info.title} className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-orange-600 font-medium mb-2">{info.details}</p>
                <p className="text-sm text-gray-600">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="programs">Program Information</option>
                    <option value="volunteer">Volunteer Opportunity</option>
                    <option value="partnership">Partnership</option>
                    <option value="donation">Donation Support</option>
                    <option value="technical">Technical Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                    placeholder="Please describe your inquiry in detail..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-600 text-white py-3 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full px-4 py-3 text-left font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                    >
                      <div className="flex justify-between items-center">
                        <span>{item.question}</span>
                        <span className="text-orange-500">
                          {expandedFaq === index ? '−' : '+'}
                        </span>
                      </div>
                    </button>
                    {expandedFaq === index && (
                      <div className="px-4 pb-3 text-gray-600 border-t border-gray-200 pt-3">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Our Locations
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Visit us at any of our offices across Kenya
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {officeLocations.map((location) => (
              <div key={location.city} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={location.image}
                    alt={location.city}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{location.city}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Address:</strong> {location.address}</p>
                    <p><strong>Phone:</strong> {location.phone}</p>
                    <p><strong>Email:</strong> {location.email}</p>
                    <p><strong>Hours:</strong> {location.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}