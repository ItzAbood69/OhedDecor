import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle } from 'lucide-react'

const Services = () => {
  const services = [
    {
      title: 'بديل الرخام',
      description: 'نقدم أحدث تقنيات بديل الرخام بجودة عالية ومظهر طبيعي يضاهي الرخام الأصلي',
      features: [
        'مقاوم للخدوش والبقع',
        'سهل التنظيف والصيانة',
        'متوفر بألوان وتصاميم متنوعة',
        'صديق للبيئة',
        'تركيب احترافي'
      ],
      icon: '🏛️'
    },
    {
      title: 'بديل الخشب',
      description: 'بديل الخشب المقاوم للرطوبة والحشرات مع الحفاظ على المظهر الطبيعي للخشب',
      features: [
        'مقاوم للرطوبة والماء',
        'لا يتأثر بالحشرات',
        'عمر افتراضي طويل',
        'متوفر بأنواع خشب مختلفة',
        'سهل التركيب والصيانة'
      ],
      icon: '🌳'
    },
    {
      title: 'شيبورد',
      description: 'ألواح الشيبورد عالية الجودة للديكورات الداخلية والخارجية',
      features: [
        'مقاوم للعوامل الجوية',
        'خفيف الوزن وقوي',
        'متوفر بسماكات مختلفة',
        'سهل التشكيل والقطع',
        'اقتصادي وعملي'
      ],
      icon: '📋'
    },
    {
      title: 'ورق الجدران',
      description: 'تشكيلة واسعة من ورق الجدران العصري والكلاسيكي لجميع الأذواق',
      features: [
        'تصاميم عصرية وكلاسيكية',
        'جودة عالية ومقاوم للتلف',
        'سهل التطبيق والإزالة',
        'متوفر بأنماط متنوعة',
        'مناسب لجميع الغرف'
      ],
      icon: '🎨'
    },
    {
      title: 'السقف المستعار',
      description: 'تصاميم عصرية ومبتكرة للأسقف المستعارة مع إضاءة مدمجة',
      features: [
        'تصاميم مبتكرة وعصرية',
        'إضاءة LED مدمجة',
        'عزل حراري وصوتي',
        'سهل الصيانة',
        'يخفي الأسلاك والأنابيب'
      ],
      icon: '🏠'
    },
    {
      title: 'فوم بديل الرخام',
      description: 'فوم عالي الجودة كبديل للرخام الطبيعي بوزن أخف وتكلفة أقل',
      features: [
        'خفيف الوزن',
        'مقاوم للكسر',
        'سهل التركيب',
        'متوفر بألوان متعددة',
        'مناسب للديكورات الداخلية والخارجية'
      ],
      icon: '⚪'
    }
  ]

  return (
    <div className="pt-24 pb-16">
      {/* Header Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">خدماتنا المتميزة</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من خدمات الديكور والتصميم الداخلي بأعلى معايير الجودة والاحترافية
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift group">
                <CardHeader>
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="text-4xl group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl text-primary">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 mb-3">المميزات:</h4>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3 space-x-reverse">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">كيف نعمل</h2>
            <p className="text-xl text-gray-600">
              عملية بسيطة ومنظمة لضمان أفضل النتائج
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'الاستشارة', desc: 'نناقش احتياجاتك ونقدم الاستشارة المناسبة' },
              { step: '02', title: 'التصميم', desc: 'نضع التصميم المناسب وفقاً لمتطلباتك' },
              { step: '03', title: 'التنفيذ', desc: 'نبدأ بتنفيذ المشروع بأعلى معايير الجودة' },
              { step: '04', title: 'التسليم', desc: 'نسلم المشروع مكتملاً مع الضمان' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            مستعد لبدء مشروعك؟
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            تواصل معنا اليوم للحصول على استشارة مجانية وتقدير مفصل لمشروعك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-bg text-white hover-lift">
              <Link to="/contact" className="flex items-center space-x-2 space-x-reverse">
                <span>تواصل معنا</span>
                <ArrowLeft className="h-5 w-5" />
              </Link>
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

export default Services

