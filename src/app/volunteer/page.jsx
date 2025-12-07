'use client';

import { useState } from 'react';
import Image from 'next/image';

const volunteerOpportunities = [
  {
    id: 1,
    title: 'Tech Instructor',
    category: 'Education',
    commitment: '4-6 hours/week',
    location: 'Nairobi, Mombasa, Kisumu',
    description: 'Teach coding, web development, or digital skills to students in our programs.',
    requirements: [
      'Experience in programming or web development',
      'Passion for teaching and mentorship',
      'Available for evening or weekend classes',
      'Good communication skills'
    ],
    impact: 'Directly train 20-30 students per month',
    icon: '👨‍🏫'
  },
  {
    id: 2,
    title: 'Mobile Lab Coordinator',
    category: 'Community Outreach',
    commitment: '8-10 hours/week',
    location: 'Various rural locations',
    description: 'Help coordinate our mobile technology labs that bring education directly to remote communities.',
    requirements: [
      'Valid driving license',
      'Experience in project coordination',
      'Willingness to travel to rural areas',
      'Basic technical troubleshooting skills'
    ],
    impact: 'Reach 100+ people in underserved communities monthly',
    icon: '🚐'
  },
  {
    id: 3,
    title: 'Mentor',
    category: 'Mentorship',
    commitment: '2-3 hours/week',
    location: 'Remote/Online',
    description: 'Provide one-on-one mentorship to program graduates as they start their tech careers.',
    requirements: [
      '3+ years experience in tech industry',
      'Strong interpersonal skills',
      'Commitment to 6-month mentorship cycles',
      'Available for regular video calls'
    ],
    impact: 'Guide 3-5 graduates to successful tech careers',
    icon: '🤝'
  },
  {
    id: 4,
    title: 'Content Creator',
    category: 'Digital Media',
    commitment: '3-4 hours/week',
    location: 'Remote',
    description: 'Create educational content, videos, and documentation for our online learning platform.',
    requirements: [
      'Experience in content creation or technical writing',
      'Video editing skills (preferred)',
      'Understanding of learning design principles',
      'Creative thinking and attention to detail'
    ],
    impact: 'Create resources used by 1000+ learners monthly',
    icon: '🎬'
  },
  {
    id: 5,
    title: 'Partnership Development',
    category: 'Business Development',
    commitment: '5-6 hours/week',
    location: 'Remote/Field visits',
    description: 'Help identify and develop partnerships with local businesses, schools, and organizations.',
    requirements: [
      'Business development or sales experience',
      'Strong networking skills',
      'Knowledge of the Kenyan business landscape',
      'Excellent presentation abilities'
    ],
    impact: 'Secure partnerships that benefit 500+ students annually',
    icon: '🤝'
  },
  {
    id: 6,
    title: 'Data Analyst',
    category: 'Analytics',
    commitment: '3-4 hours/week',
    location: 'Remote',
    description: 'Analyze program data to measure impact and identify areas for improvement.',
    requirements: [
      'Experience with data analysis tools (Excel, Python, R)',
      'Statistical knowledge',
      'Data visualization skills',
      'Attention to detail and accuracy'
    ],
    impact: 'Provide insights that improve program effectiveness by 25%',
    icon: '📊'
  }
];

const volunteerBenefits = [
  { title: 'Make Real Impact', description: 'See direct results of your work in communities', icon: '🌍' },
  { title: 'Skill Development', description: 'Gain teaching, leadership, and project management skills', icon: '📈' },
  { title: 'Networking', description: 'Connect with like-minded professionals and social entrepreneurs', icon: '🌐' },
  { title: 'Recognition', description: 'Certificates and recommendations for your contribution', icon: '🏆' },
  { title: 'Flexible Schedule', description: 'Work around your availability and other commitments', icon: '⏰' },
  { title: 'Free Training', description: 'Access to workshops and training programs', icon: '🎓' }
];

export default function VolunteerPage() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profession: '',
    experience: '',
    availability: '',
    interests: [],
    motivation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

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
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You for Your Interest!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We've received your volunteer application and will contact you within 3-5 business days 
              to discuss next steps and schedule an orientation session.
            </p>
            <div className="space-y-4">
              <p className="text-gray-600">
                In the meantime, follow us on social media to stay updated on our programs and impact:
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-blue-600 hover:underline">Facebook</a>
                <a href="#" className="text-blue-400 hover:underline">Twitter</a>
                <a href="#" className="text-purple-600 hover:underline">Instagram</a>
                <a href="#" className="text-blue-700 hover:underline">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Become a Volunteer
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8">
              Join our mission to empower communities through technology. 
              Your skills and passion can change lives.
            </p>
          </div>
        </div>
      </div>

      {/* Volunteer Benefits */}
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Why Volunteer With Us?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Volunteering is a two-way street - you give your time and skills, and gain so much more in return.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {volunteerBenefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Volunteer Opportunities */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Volunteer Opportunities
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Find a role that matches your skills and interests
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {volunteerOpportunities.map((opportunity) => (
              <div key={opportunity.id} className="bg-white rounded-lg shadow-lg p-6 border">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-3xl mr-3">{opportunity.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{opportunity.title}</h3>
                      <p className="text-sm text-gray-600">{opportunity.category}</p>
                    </div>
                  </div>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">
                    {opportunity.commitment}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-4">{opportunity.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Location:</p>
                  <p className="text-sm text-gray-600">{opportunity.location}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Requirements:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {opportunity.requirements.slice(0, 3).map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 p-3 rounded mb-4">
                  <p className="text-sm font-semibold text-blue-900">Impact:</p>
                  <p className="text-sm text-blue-700">{opportunity.impact}</p>
                </div>

                <button
                  onClick={() => setSelectedRole(opportunity)}
                  className="w-full bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition"
                >
                  Apply for This Role
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Fill out this form and we'll be in touch within 48 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Current Profession</label>
                <input
                  type="text"
                  required
                  value={formData.profession}
                  onChange={(e) => setFormData(prev => ({ ...prev, profession: e.target.value }))}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700">Areas of Interest</label>
              <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {['Teaching', 'Mentorship', 'Content Creation', 'Community Outreach', 'Data Analysis', 'Partnerships'].map((interest) => (
                  <label key={interest} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleInterestChange(interest)}
                      className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700">
                Why do you want to volunteer with us?
              </label>
              <textarea
                required
                rows={4}
                value={formData.motivation}
                onChange={(e) => setFormData(prev => ({ ...prev, motivation: e.target.value }))}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                placeholder="Tell us about your motivation and what you hope to achieve..."
              />
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-600 text-white py-3 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}