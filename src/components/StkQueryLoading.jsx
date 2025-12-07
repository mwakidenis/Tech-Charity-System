export default function STKPushQueryLoading({ number }) {
  return (
    <div className="min-h-[400px] flex flex-col justify-center items-center space-y-6 text-center text-black p-10 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg">
      {/* Loading Animation */}
      <div className="relative">
        <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl">📱</span>
        </div>
      </div>

      {/* Status Messages */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-gray-900 animate-pulse">
          Processing Payment...
        </h2>
        <div className="bg-white p-4 rounded-lg shadow-sm max-w-md">
          <p className="text-lg font-semibold text-orange-600 mb-2">
            STK Push sent to {number}
          </p>
          <p className="text-gray-600 mb-1">
            📲 Check your phone for the M-Pesa prompt
          </p>
          <p className="text-gray-600">
            🔐 Enter your M-Pesa PIN to confirm payment
          </p>
        </div>

        {/* Progress Steps */}
        <div className="bg-white p-4 rounded-lg shadow-sm max-w-md">
          <div className="flex items-center justify-between text-xs">
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                ✓
              </div>
              <span className="mt-1 text-green-600">Request Sent</span>
            </div>
            <div className="flex-1 h-0.5 bg-orange-300 mx-2 animate-pulse"></div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white animate-pulse">
                ⋯
              </div>
              <span className="mt-1 text-orange-600">Awaiting PIN</span>
            </div>
            <div className="flex-1 h-0.5 bg-gray-300 mx-2"></div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-white">
                ⋯
              </div>
              <span className="mt-1 text-gray-400">Complete</span>
            </div>
          </div>
        </div>

        {/* Help Text */}
        <div className="text-sm text-gray-500 max-w-md">
          <p className="mb-2">💡 <strong>Can't see the prompt?</strong></p>
          <ul className="text-left space-y-1">
            <li>• Check if your phone has network coverage</li>
            <li>• Look for the M-Pesa notification</li>
            <li>• Go to Messages → M-Pesa → Lipa Na M-Pesa</li>
          </ul>
        </div>

        {/* Timeout Warning */}
        <div className="text-xs text-orange-600 bg-orange-50 p-2 rounded">
          ⏰ This request will timeout in 60 seconds if not completed
        </div>
      </div>
    </div>
  );
} 