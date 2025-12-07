export default function PaymentSuccess() {
  return (
    <div className="min-h-[400px] flex flex-col justify-center items-center space-y-8 text-center p-10 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
      {/* Success Animation */}
      <div className="relative">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
          <span className="text-3xl text-white">✓</span>
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
      </div>

      {/* Success Message */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-green-600">
          🎉 Payment Successful!
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-sm max-w-md">
          <p className="text-lg text-gray-800 mb-2">
            Thank you for your generous donation!
          </p>
          <p className="text-gray-600 text-sm">
            Your contribution is making a real difference in communities across Kenya.
          </p>
        </div>

        {/* Impact Information */}
        <div className="bg-orange-50 p-4 rounded-lg shadow-sm max-w-md">
          <h3 className="text-lg font-semibold text-orange-800 mb-2">
            Your Impact
          </h3>
          <div className="text-sm text-orange-700 space-y-1">
            <p>🎓 You've helped provide tech education to students</p>
            <p>💻 Your donation supports our digital literacy programs</p>
            <p>🌍 You're building a more connected future for Kenya</p>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 p-4 rounded-lg shadow-sm max-w-md">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            What's Next?
          </h3>
          <div className="text-sm text-blue-700 space-y-1">
            <p>📧 You'll receive a confirmation email shortly</p>
            <p>📱 Check your M-Pesa messages for transaction details</p>
            <p>📊 Track our progress on the dashboard</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-md">
          <a
            href="/impact"
            className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition text-center"
          >
            See Our Impact
          </a>
          <a
            href="/dashboard"
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-center"
          >
            View Dashboard
          </a>
        </div>

        {/* Share Options */}
        <div className="pt-4 border-t border-gray-200 max-w-md">
          <p className="text-sm text-gray-600 mb-3">
            Help us spread the word about our mission:
          </p>
          <div className="flex justify-center space-x-3">
            <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700">
              Share on Facebook
            </button>
            <button className="bg-blue-400 text-white px-3 py-1 rounded text-xs hover:bg-blue-500">
              Share on Twitter
            </button>
            <button className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700">
              Share on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 