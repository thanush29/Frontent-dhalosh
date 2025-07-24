import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, Clock, Star, Utensils, Shield, CreditCard, Smartphone, Award, Users, Heart, CheckCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const businessHours = [
    { day: 'Monday - Friday', hours: '10:00 AM - 10:00 PM' },
    { day: 'Saturday - Sunday', hours: '10:00 AM - 11:00 PM' },
  ];

  const features = [
    { icon: Shield, text: 'Secure Payments' },
    { icon: Clock, text: 'Quick Pickup' },
    { icon: CreditCard, text: 'UPI Accepted' },
    { icon: Smartphone, text: 'Online Ordering' },
  ];

  const certifications = [
    { icon: Award, text: 'FSSAI Certified' },
    { icon: Users, text: '500+ Happy Customers' },
    { icon: Star, text: '4.8 Star Rating' },
    { icon: Heart, text: 'Made with Love' },
  ];

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Contact Information */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-xl shadow-lg">
                <Utensils className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">DHALOESH</h3>
                <p className="text-orange-400 text-sm font-medium">FAST FOOD</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              chicken & beef varieties with modern online ordering. 
              Quick bites for busy people with traditional taste.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Call Us</p>
                  <p className="text-gray-300 text-sm">7299760102 / 9840650939</p>
                  <p className="text-green-400 text-xs">Available 10 AM - 10 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-gray-300 text-sm">thanushlokesh1@gmail.com</p>
                  <p className="text-blue-400 text-xs">Quick Response</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-gray-300 text-sm mb-1">DHALOESH FAST FOOD</p>
                  <a 
                    href="https://maps.app.goo.gl/3CRUtZD1EHv8yQd36" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors text-xs"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-6 flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Business Hours
            </h3>
            <div className="space-y-3 mb-6">
              {businessHours.map((schedule, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <p className="font-semibold text-white text-sm">{schedule.day}</p>
                  <p className="text-green-400 text-sm">{schedule.hours}</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-4">
              <p className="text-orange-400 font-semibold text-sm mb-1">🍽️ Service Type</p>
              <p className="text-white text-sm">Parcel Only - No Delivery</p>
              <p className="text-gray-400 text-xs">Order online, skip the queue!</p>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-6">Why Choose Us</h3>
            <div className="space-y-3 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg group-hover:scale-110 transition-transform">
                    <feature.icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{feature.text}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 p-2 rounded-lg group-hover:scale-110 transition-transform">
                    <cert.icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{cert.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Map */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-6 flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Find Us
            </h3>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8267!2d80.2707!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267ab7f3b5c1d%3A0x5b1b5c1d7f3b5c1d!2sDhaloesh%20Fast%20Food!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg filter brightness-90 hover:brightness-100 transition-all duration-300 border border-gray-700"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
                <a 
                  href="https://maps.app.goo.gl/3CRUtZD1EHv8yQd36" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <MapPin className="h-4 w-4" />
                  <span>Open in Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-xl shadow-lg">
                <Utensils className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  DHALOESH FAST FOOD
                </h2>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>FSSAI Certified</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>4.8 Rating</span>
                  </div>
                  <span>•</span>
                  <span>Est. 2020</span>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="text-gray-400 text-sm space-y-1">
                <p>&copy; 2024 DHALOESH FAST FOOD. All rights reserved.</p>
                <p className="text-orange-400 font-medium">🍽️ Order • 💳 Pay • 📦 Collect • ⚡ Skip the Queue</p>
                <div className="flex justify-center lg:justify-end items-center space-x-4 mt-2">
                  <span className="text-xs">Created By</span>
                  <div className="flex items-center space-x-1">
                    <Heart className="h-3 w-3 text-red-500" />
                    <span className="text-xs font-medium">Thanush Kannan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;