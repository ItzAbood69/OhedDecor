import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Star, Users, Award, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const Home = () => {
  const services = [
    {
      title: 'بديل الرخام',
      description: 'أحدث تقنيات بديل الرخام بجودة عالية ومظهر طبيعي',
      icon: '🏛️'
    },
    {
      title: 'بديل الخشب',
      description: 'بديل الخشب المقاوم للرطوبة والحشرات',
      icon: '🌳'
    },
    {
      title: 'شيبورد',
      description: 'ألواح الشيبورد عالية الجودة للديكورات الداخلية',
      icon: '📋'
    },
    {
      title: 'ورق الجدران',
      description: 'تشكيلة واسعة من ورق الجدران العصري',
      icon: '🎨'
    },
    {
      title: 'السقف المستعار',
      description: 'تصاميم عصرية للأسقف المستعارة',
      icon: '🏠'
    },
    {
      title: 'فوم بديل الرخام',
      description: 'فوم عالي الجودة كبديل للرخام الطبيعي',
      icon: '⚪'
    }
  ]

  const stats = [
    { number: '500+', label: 'مشروع مكتمل' },
    { number: '10+', label: 'سنوات خبرة' },
    { number: '100%', label: 'رضا العملاء' },
    { number: '24/7', label: 'خدمة العملاء' }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-90"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            معرض أحد للديكورات
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up">
            نحول أحلامك إلى واقع بأحدث تقنيات الديكور والتصميم الداخلي
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3 hover-lift">
              <Link to="/services" className="flex items-center space-x-2 space-x-reverse">
                <span>استكشف خدماتنا</span>
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary hover-lift">
              <Link to="/contact">اتصل بنا الآن</Link>
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full animate-pulse"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">خدماتنا المتميزة</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نقدم مجموعة شاملة من خدمات الديكور والتصميم الداخلي بأعلى معايير الجودة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="gradient-bg text-white hover-lift">
              <Link to="/services">عرض جميع الخدمات</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in-up">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">لماذا تختارنا؟</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نتميز بالخبرة والجودة والالتزام بتقديم أفضل الخدمات لعملائنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">جودة عالية</h3>
              <p className="text-gray-600">
                نستخدم أفضل المواد والتقنيات لضمان جودة عالية في جميع أعمالنا
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">فريق محترف</h3>
              <p className="text-gray-600">
                فريق من المهندسين والفنيين المتخصصين ذوي الخبرة الطويلة
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">ضمان الجودة</h3>
              <p className="text-gray-600">
                نقدم ضمان شامل على جميع أعمالنا مع خدمة ما بعد البيع
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            هل أنت مستعد لتحويل مساحتك؟
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            تواصل معنا اليوم للحصول على استشارة مجانية وتقدير للتكلفة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-bg text-white hover-lift">
              <Link to="/contact">احصل على عرض سعر</Link>
            </Button>
            <Button size="lg" variant="outline" className="hover-lift">
              <Link to="/gallery">شاهد أعمالنا</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

