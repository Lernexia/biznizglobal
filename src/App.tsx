import React from 'react';
import { Mail, MapPin, Clock, Phone, AlertTriangle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <AlertTriangle className="w-16 h-16 text-yellow-500" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Website Under Maintenance
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              We're making some improvements to enhance your experience.
            </p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-gray-600 mb-2">
              Our website (<span className="font-semibold">www.biznizglobal.com</span>) is
              currently undergoing scheduled maintenance.
            </p>
            <p className="text-gray-600">
              We'll be back online shortly. Thank you for your patience.
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-600 mb-8">
            <Mail className="w-5 h-5" />
            <a
              href="mailto:contact@bizniz.com"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              contact@bizniz.com
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-upper py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-3 text-gray-600 max-w-xl">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <p>
                6th floor, EA chambers tower, No.612, 2, Whites Rd, Royapettah, Chennai,
                Tamil Nadu 600002
              </p>
            </div>
            <div className="flex gap-6">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-5 h-5" />
                <span>24/7</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-5 h-5" />
                <span>Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;