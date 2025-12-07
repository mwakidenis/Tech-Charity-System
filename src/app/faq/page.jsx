'use client';

import { useState } from 'react';

const faqCategories = [
  {
    title: 'General Questions',
    icon: '❓',
    questions: [
      {
        question: 'What is Tech Charity?',
        answer: 'Tech Charity is a non-profit organization dedicated to empowering communities through technology education. We provide free coding bootcamps, digital literacy training, and innovation programs to underserved communities across Kenya.'
      },
      {
        question: 'Who can benefit from your programs?',
        answer: 'Our programs are open to anyone interested in learning technology skills, regardless of their background or current skill level. We particularly focus on serving underserved communities, women, youth, and individuals looking to transition into tech careers.'
      },
      {
        question: 'Are your programs really free?',
        answer: 'Yes! All our core programs are completely free for participants. This includes training, materials, computer access, and ongoing support. We believe in making technology education accessible to everyone, regardless of their financial situation.'
      },
      {
        question: 'What makes you different from other coding schools?',
        answer: 'Unlike traditional coding schools, we focus on community impact, offer completely free programs, provide ongoing mentorship, and have strong partnerships with local employers. We also offer mobile tech labs that reach remote communities.'
      }
    ]
  },
  {
    title: 'Programs & Training',
    icon: '🎓',
    questions: [
      {
        question: 'What programming languages do you teach?',
        answer: 'We teach a variety of in-demand technologies including JavaScript, Python, React, Node.js, HTML/CSS, mobile app development, and data analysis. Our curriculum is regularly updated based on industry demands.'
      },
      {
        question: 'How long are your programs?',
        answer: 'Program duration varies: our intensive bootcamps run for 3-6 months, while our digital literacy courses are 4-8 weeks. We also offer weekend workshops and ongoing mentorship programs that can extend for up to a year.'
      },
      {
        question: 'Do I need any prior experience?',
        answer: 'No prior experience is necessary! We have programs for complete beginners as well as intermediate learners. Our instructors are skilled at teaching students from all backgrounds and experience levels.'
      },
      {
        question: 'Do you provide certificates?',
        answer: 'Yes, we provide certificates of completion for all our programs. These certificates are recognized by our partner companies and can be valuable additions to your resume and LinkedIn profile.'
      },
      {
        question: 'What equipment do I need?',
        answer: 'We provide computers and all necessary equipment during training sessions. For remote learning, you\'ll need a computer/laptop and internet connection. We can help connect you with equipment loan programs if needed.'
      }
    ]
  },
  {
    title: 'Career Support',
    icon: '💼',
    questions: [
      {
        question: 'Do you help with job placement?',
        answer: 'Yes! We have partnerships with over 50 companies and provide comprehensive job placement support including interview preparation, resume building, portfolio development, and direct job referrals. Our placement rate is over 80%.'
      },
      {
        question: 'What types of jobs do graduates get?',
        answer: 'Our graduates work in various roles including web developers, mobile app developers, data analysts, digital marketing specialists, IT support, and freelance developers. Starting salaries typically range from KSh 40,000 to KSh 120,000 per month.'
      },
      {
        question: 'Can I freelance after completing your program?',
        answer: 'Absolutely! We teach practical skills that are perfect for freelancing. We also provide guidance on setting up freelance businesses, finding clients, pricing services, and managing projects independently.'
      },
      {
        question: 'Do you provide ongoing support after graduation?',
        answer: 'Yes, we provide lifelong support to our graduates including alumni networking events, advanced workshops, mentorship opportunities, and career guidance. You\'ll always be part of the Tech Charity family!'
      }
    ]
  },
  {
    title: 'Volunteering',
    icon: '🤝',
    questions: [
      {
        question: 'How can I volunteer with Tech Charity?',
        answer: 'We have various volunteer opportunities including teaching, mentorship, content creation, community outreach, and administrative support. Visit our Volunteer page to see current openings and apply online.'
      },
      {
        question: 'Do I need tech skills to volunteer?',
        answer: 'Not necessarily! While we need technical instructors, we also need volunteers for marketing, community outreach, event planning, administration, and other non-technical roles. Every skill set is valuable to our mission.'
      },
      {
        question: 'How much time commitment is required?',
        answer: 'Time commitments vary by role, typically ranging from 2-10 hours per week. We work with your schedule and availability. Even occasional volunteers make a significant impact!'
      },
      {
        question: 'What are the benefits of volunteering?',
        answer: 'Benefits include making real community impact, developing teaching and leadership skills, networking with professionals, receiving certificates and recommendations, and being part of a mission-driven community.'
      }
    ]
  },
  {
    title: 'Donations & Funding',
    icon: '💝',
    questions: [
      {
        question: 'How are donations used?',
        answer: 'Donations directly fund program costs including instructor fees, equipment, facilities, materials, and student support services. We maintain complete transparency - you can view our impact reports on the Dashboard page.'
      },
      {
        question: 'Is my donation tax-deductible?',
        answer: 'Yes, Tech Charity is a registered non-profit organization, and all donations are tax-deductible. We provide official receipts for all donations that can be used for tax purposes.'
      },
      {
        question: 'Can I specify how my donation is used?',
        answer: 'Yes! You can designate your donation for specific programs such as women in tech, rural outreach, equipment purchases, or student scholarships. Contact us to discuss directed giving options.'
      },
      {
        question: 'Do you accept corporate partnerships?',
        answer: 'Absolutely! We welcome partnerships with corporations through equipment donations, employee volunteering, intern programs, hiring partnerships, and financial sponsorships. Contact us to discuss partnership opportunities.'
      },
      {
        question: 'How can I track the impact of my donation?',
        answer: 'We provide regular impact reports showing how donations are used and the outcomes achieved. You can also visit our Impact Stories page to see real examples of lives transformed through our programs.'
      }
    ]
  },
  {
    title: 'Technical Support',
    icon: '🔧',
    questions: [
      {
        question: 'I\'m having trouble with the donation process',
        answer: 'If you\'re experiencing issues with M-Pesa donations, first ensure you have sufficient funds and network coverage. The STK push should appear within 30 seconds. If problems persist, contact our support team immediately.'
      },
      {
        question: 'My payment was deducted but shows as failed',
        answer: 'Sometimes there can be delays in status updates. Please wait 5-10 minutes and check again. If the issue persists, contact our support team with your transaction details and we\'ll investigate immediately.'
      },
      {
        question: 'Can I donate using other methods besides M-Pesa?',
        answer: 'Currently, M-Pesa is our primary donation method for convenience and security. We\'re working on adding bank transfer and card payment options. For large donations, please contact us directly for alternative arrangements.'
      },
      {
        question: 'How do I get a donation receipt?',
        answer: 'Receipts are automatically sent to your email after successful donations. You can also contact our support team to request a receipt or duplicate. All donations are recorded in our system for your tax records.'
      }
    ]
  }
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredQuestions = faqCategories[selectedCategory].questions.filter(
    item => 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8">
              Find answers to common questions about our programs, volunteering, 
              donations, and how we're making a difference.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-lg mx-auto">
              <input
                type="text"
                placeholder="Search FAQ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 pl-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Category Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
                <nav className="space-y-2">
                  {faqCategories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedCategory(index);
                        setExpandedQuestion(null);
                        setSearchTerm('');
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg flex items-center space-x-3 transition-colors ${
                        selectedCategory === index
                          ? 'bg-purple-100 text-purple-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="text-xl">{category.icon}</span>
                      <span className="text-sm">{category.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <span className="text-3xl mr-3">{faqCategories[selectedCategory].icon}</span>
                  {faqCategories[selectedCategory].title}
                </h2>
                <p className="text-gray-600 mt-2">
                  {filteredQuestions.length} question{filteredQuestions.length !== 1 ? 's' : ''} 
                  {searchTerm && ` matching "${searchTerm}"`}
                </p>
              </div>

              <div className="space-y-4">
                {filteredQuestions.length > 0 ? (
                  filteredQuestions.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => setExpandedQuestion(expandedQuestion === index ? null : index)}
                        className="w-full px-6 py-4 text-left focus:outline-none focus:bg-gray-50 hover:bg-gray-50"
                      >
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-medium text-gray-900 pr-4">
                            {item.question}
                          </h3>
                          <span className={`flex-shrink-0 text-purple-500 text-xl transition-transform duration-200 ${
                            expandedQuestion === index ? 'transform rotate-180' : ''
                          }`}>
                            ↓
                          </span>
                        </div>
                      </button>
                      {expandedQuestion === index && (
                        <div className="px-6 pb-4 border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed pt-4">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                    <p className="text-gray-600">
                      Try adjusting your search or browse different categories.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our friendly support team is here to help. 
                Reach out to us and we'll get back to you as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-purple-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-purple-700"
                >
                  📧 Contact Support
                </a>
                <a
                  href="tel:+254700000000"
                  className="inline-flex items-center justify-center rounded-md border border-purple-300 bg-white px-6 py-3 text-base font-medium text-purple-700 shadow-sm hover:bg-purple-50"
                >
                  📞 Call Us
                </a>
                <a
                  href="https://wa.me/254700000001"
                  className="inline-flex items-center justify-center rounded-md border border-green-300 bg-white px-6 py-3 text-base font-medium text-green-700 shadow-sm hover:bg-green-50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}