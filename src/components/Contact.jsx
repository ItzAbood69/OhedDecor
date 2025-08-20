import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Clock, MessageCircle, Facebook, Instagram, Users, Award } from 'lucide-react'

const Contact = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Header Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">اتصل بنا</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            نحن هنا لمساعدتك. تواصل معنا للحصول على استشارة مجانية أو لبدء مشروعك
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">طرق التواصل معنا</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              يمكنكم التواصل معنا من خلال زيارة المحل مباشرة أو عبر وسائل التواصل الاجتماعي
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Visit Store */}
            <Card className="hover-lift text-center group">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">زيارة المحل</h3>
                <p className="text-gray-600 mb-4">حلب - الأكرمية<br />أمام المسبح الأولمبي</p>
                <p className="text-sm text-gray-500 mb-6">
                  السبت - الخميس: 9:00 - 18:00<br />
                  الجمعة: مغلق
                </p>
                <Button 
                  className="gradient-bg text-white w-full"
                  onClick={() => window.open('https://maps.app.goo.gl/PTCJktgF5iaDt1bKA', '_blank')}
                >
                  عرض على الخريطة
                </Button>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="hover-lift text-center group">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">واتساب</h3>
                <p className="text-gray-600 mb-6 font-english">0983203624</p>
                <Button 
                  className="bg-green-500 hover:bg-green-600 text-white w-full"
                  onClick={() => window.open('https://wa.me/963983203624', '_blank')}
                >
                  فتح واتساب
                </Button>
              </CardContent>
            </Card>

            {/* Facebook */}
            <Card className="hover-lift text-center group">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Facebook className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">فيسبوك</h3>
                <p className="text-gray-600 mb-6">تابعنا على فيسبوك<br />لآخر الأعمال والعروض</p>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full"
                  onClick={() => window.open('https://www.facebook.com/share/1DJZotPmmR/', '_blank')}
                >
                  زيارة الصفحة
                </Button>
              </CardContent>
            </Card>

            {/* Instagram */}
            <Card className="hover-lift text-center group">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Instagram className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">انستغرام</h3>
                <p className="text-gray-600 mb-6">شاهد أعمالنا<br />على انستغرام</p>
                <Button 
                  className="bg-pink-600 hover:bg-pink-700 text-white w-full"
                  onClick={() => window.open('https://www.instagram.com/decorations_ohod?igsh=MWU0dnFvMjl2c3FwcA==', '_blank')}
                >
                  زيارة الحساب
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Visit Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">لماذا زيارة المحل؟</h2>
            <p className="text-xl text-gray-600">
              استفد من الزيارة المباشرة للحصول على أفضل خدمة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">معاينة المواد</h3>
              <p className="text-gray-600">
                شاهد وتحسس جودة المواد بنفسك قبل اتخاذ القرار
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">استشارة مباشرة</h3>
              <p className="text-gray-600">
                احصل على استشارة مباشرة من خبرائنا المتخصصين
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">عروض خاصة</h3>
              <p className="text-gray-600">
                استفد من العروض والخصومات الخاصة بزوار المحل
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">موقعنا</h2>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                    حلب - الأكرمية
                  </h3>
                  <p className="text-gray-600 mb-4">أمام المسبح الأولمبي</p>
                  <Button
                    className="gradient-bg text-white"
                    onClick={() => window.open('https://maps.app.goo.gl/PTCJktgF5iaDt1bKA', '_blank')}
                  >
                    عرض على خرائط جوجل
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">تواصل معنا الآن</h2>
          <p className="text-xl opacity-90 mb-8">
            اختر الطريقة الأنسب للتواصل معنا
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="hover-lift"
              onClick={() => window.open('https://maps.app.goo.gl/PTCJktgF5iaDt1bKA', '_blank')}
            >
              <MapPin className="h-5 w-5 ml-2" />
              زيارة المحل
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary hover-lift"
              onClick={() => window.open('https://wa.me/963983203624', '_blank')}
            >
              <MessageCircle className="h-5 w-5 ml-2" />
              واتساب
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

