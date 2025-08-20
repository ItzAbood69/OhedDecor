import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, MapPin, Facebook, Instagram, MessageCircle, Mail } from 'lucide-react'
import logo from '../assets/logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'خدماتنا', path: '/services' },
    { name: 'معرض الأعمال', path: '/gallery' },
    { name: 'من نحن', path: '/about' },
    { name: 'اتصل بنا', path: '/contact' }
  ]

  const services = [
    'بديل الرخام',
    'بديل الخشب',
    'شيبورد',
    'ورق الجدران',
    'السقف المستعار',
    'فوم بديل الرخام'
  ]

  const socialLinks = [
    {
      name: 'فيسبوك',
      icon: <Facebook className="h-5 w-5" />,
      url: 'https://www.facebook.com/share/1DJZotPmmR/'
    },
    {
      name: 'انستغرام',
      icon: <Instagram className="h-5 w-5" />,
      url: 'https://www.instagram.com/decorations_ohod?igsh=MWU0dnFvMjl2c3FwcA=='
    },
    {
      name: 'واتساب',
      icon: <MessageCircle className="h-5 w-5" />,
      url: 'https://wa.me/963983203624'
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 space-x-reverse">
              <img src={logo} alt="شركة أحد للديكورات" className="h-12 w-auto" />
              <div>
                <h3 className="text-xl font-bold">معرض أحد للديكورات</h3>
                <p className="text-sm text-gray-400 font-english">AUHUD Decorations</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              نحول أحلامك إلى واقع بأحدث تقنيات الديكور والتصميم الداخلي. 
              نقدم خدمات متميزة بأعلى معايير الجودة والاحترافية.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">خدماتنا</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">معلومات الاتصال</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-english">0983203624</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 space-x-reverse">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">حلب - الأكرمية</p>
                  <p className="text-gray-300">أمام المسبح الأولمبي</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 space-x-reverse">
                <MessageCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-gray-300">واتساب: 0983203624</p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="mt-6">
              <h5 className="font-semibold mb-2">ساعات العمل</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <p>السبت - الخميس: 9:00 - 18:00</p>
                <p>الجمعة: مغلق</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {currentYear} شركة أحد للديكورات. جميع الحقوق محفوظة.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 md:space-x-reverse text-sm text-gray-400">
              <span>تصميم وتطوير بأحدث التقنيات</span>
              <span className="hidden md:inline">|</span>
              <a 
                href="https://maps.app.goo.gl/PTCJktgF5iaDt1bKA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                عرض الموقع على الخريطة
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col space-y-3">
        <a
          href="https://wa.me/963983203624"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
          aria-label="واتساب"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        
        <a
          href="tel:0983203624"
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110"
          aria-label="اتصال"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>
    </footer>
  )
}

export default Footer

