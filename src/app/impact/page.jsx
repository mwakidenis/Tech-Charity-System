'use client';

import Image from 'next/image';
import { useState } from 'react';

const impactStories = [
  {
    id: 1,
    name: 'Grace Wanjiku',
    age: 22,
    location: 'Kibera, Nairobi',
    title: 'From Street Vendor to Web Developer',
    story: 'Grace was selling vegetables on the streets of Kibera when she heard about our tech education program. Despite having no prior computer experience, she enrolled in our 6-month web development bootcamp. Today, she works as a freelance web developer, earning 10x more than her previous income and supporting her family of 5.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616c58e5e2e?q=80&w=800&auto=format&fit=crop',
    achievements: [
      'Completed Full-Stack Web Development Bootcamp',
      'Built 12+ websites for local businesses',
      'Increased monthly income by 1000%',
      'Now mentors other women in tech'
    ],
    beforeAfter: {
      before: 'Monthly Income: KSh 8,000',
      after: 'Monthly Income: KSh 80,000+'
    }
  },
  {
    id: 2,
    name: 'David Kiprotich',
    age: 19,
    location: 'Turkana County',
    title: 'Bringing Solar Solutions to Rural Communities',
    story: 'David grew up in a village without electricity. Through our mobile tech lab program, he learned about renewable energy and electronics. He now designs and installs solar systems for rural communities, bringing light and power to over 500 households across Turkana County.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    achievements: [
      'Trained in Solar Technology & Installation',
      'Founded "Rural Power Solutions"',
      'Installed solar systems in 500+ homes',
      'Created jobs for 15 local technicians'
    ],
    beforeAfter: {
      before: 'Village had 0% electricity access',
      after: 'Now 85% of homes have solar power'
    }
  },
  {
    id: 3,
    name: 'Mercy Akinyi',
    age: 25,
    location: 'Kisumu',
    title: 'Revolutionizing Local Agriculture with Tech',
    story: 'A smallholder farmer, Mercy struggled with crop failures and low yields. Our agricultural technology program taught her about precision farming, weather data analysis, and mobile apps for market access. She now helps 200+ farmers in her community increase their yields by 60%.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    achievements: [
      'Increased personal farm yield by 200%',
      'Founded farmers\' digital cooperative',
      'Trained 200+ farmers in AgriTech',
      'Developed local crop monitoring app'
    ],
    beforeAfter: {
      before: 'Average yield: 2 bags per acre',
      after: 'Average yield: 6 bags per acre'
    }
  },
  {
    id: 4,
    name: 'James Mwangi',
    age: 28,
    location: 'Machakos',
    title: 'Building the Next Generation of Tech Leaders',
    story: 'James was a motorcycle taxi driver when he joined our coding bootcamp. His determination and natural aptitude for programming led him to become one of our top graduates. He now runs a software development company and has trained over 100 young developers.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
    achievements: [
      'Founded "Code Academy Machakos"',
      'Trained 100+ junior developers',
      'Built mobile apps used by 50K+ users',
      'Generated over KSh 10M in local tech revenue'
    ],
    beforeAfter: {
      before: 'Daily income: KSh 1,500',
      after: 'Monthly revenue: KSh 500,000+'
    }
  }
];

const impactMetrics = [
  { label: 'Lives Directly Impacted', value: '2,500+', icon: '👥' },
  { label: 'Communities Reached', value: '45', icon: '🏘️' },
  { label: 'New Jobs Created', value: '800+', icon: '💼' },
  { label: 'Income Increase Average', value: '400%', icon: '📈' },
  { label: 'Businesses Started', value: '150+', icon: '🏪' },
  { label: 'Families Lifted from Poverty', value: '1,200+', icon: '🏠' }
];

export default function ImpactPage() {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <div className="bg-white pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Real Stories, Real Impact
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8">
              See how technology education is transforming lives across Kenya, 
              one person and one community at a time.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              By the Numbers
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The measurable impact of your donations
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {impactMetrics.map((metric) => (
              <div key={metric.label} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl mb-2">{metric.icon}</div>
                <div className="text-2xl font-bold text-orange-600">{metric.value}</div>
                <div className="text-sm text-gray-600 mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Success Stories
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Meet some of the amazing individuals whose lives have been transformed through our programs
            </p>
          </div>

          <div className="space-y-20">
            {impactStories.map((story, index) => (
              <div
                key={story.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="lg:w-1/3">
                  <div className="relative h-80 w-full">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="rounded-2xl object-cover shadow-xl"
                    />
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{story.title}</h3>
                    <p className="text-lg text-gray-600">
                      {story.name}, {story.age} • {story.location}
                    </p>
                  </div>
                  <p className="text-gray-700 leading-7 mb-6">{story.story}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {story.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-sm text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Transformation:</h4>
                      <div className="bg-red-50 p-3 rounded mb-2">
                        <p className="text-sm text-red-700">Before: {story.beforeAfter.before}</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded">
                        <p className="text-sm text-green-700">After: {story.beforeAfter.after}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-orange-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Your Donation Creates Stories Like These
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-orange-200">
            Every donation, no matter the size, has the power to transform a life. 
            Join us in creating more success stories across Kenya.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/donate"
              className="inline-flex items-center rounded-md border border-transparent bg-white px-6 py-3 text-base font-medium text-orange-600 shadow-sm hover:bg-orange-50"
            >
              Donate Now
            </a>
            <a
              href="/volunteer"
              className="inline-flex items-center rounded-md border border-white px-6 py-3 text-base font-medium text-white hover:bg-orange-700"
            >
              Become a Volunteer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}