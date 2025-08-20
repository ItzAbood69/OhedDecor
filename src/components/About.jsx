import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Award, Users, Target, Heart, ArrowLeft } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'الجودة',
      description: 'نلتزم بأعلى معايير الجودة في جميع أعمالنا ونستخدم أفضل المواد والتقنيات المتاحة'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'الاحترافية',
      description: 'فريق من المهندسين والفنيين المتخصصين ذوي الخبرة الطويلة في مجال الديكور'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'الدقة',
      description: 'نهتم بأدق التفاصيل ونحرص على تنفيذ المشاريع وفقاً للمواصفات المطلوبة'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'رضا العملاء',
      description: 'رضا عملائنا هو هدفنا الأول ونسعى دائماً لتجاوز توقعاتهم'
    }
  ]

  const team = [
    {
      name: 'المهندس أحمد',
      position: 'مدير المشاريع',
      experience: '15 سنة خبرة',
      specialty: 'تصميم وتنفيذ المشاريع الكبيرة'
    },
    {
      name: 'الأستاذ محمد',
      position: 'رئيس الفنيين',
      experience: '12 سنة خبرة',
      specialty: 'تركيب بديل الرخام والخشب'
    },
    {
      name: 'المهندس سارة',
      position: 'مصممة داخلية',
      experience: '8 سنوات خبرة',
      specialty: 'التصميم الداخلي والديكور'
    }
  ]

  return (
    <div className="pt-24 pb-16">
      {/* Header Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">من نحن</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            شركة رائدة في مجال الديكور والتصميم الداخلي، نجمع بين الخبرة والإبداع لتحقيق أحلام عملائنا
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">قصتنا</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  تأسس معرض أحد للديكورات بهدف تقديم خدمات الديكور والتصميم الداخلي بأعلى معايير الجودة والاحترافية. 
                  منذ انطلاقتنا، نسعى لتحويل المساحات العادية إلى أماكن استثنائية تعكس شخصية وذوق عملائنا.
                </p>
                <p>
                  نتخصص في تركيب وبيع بديل الرخام، بديل الخشب، الشيبورد، ورق الجدران، السقف المستعار، 
                  وفوم بديل الرخام. كما نقدم جميع الخدمات المتعلقة بالرخام والديكورات الداخلية والخارجية.
                </p>
                <p>
                  موقعنا في حلب - الأكرمية أمام المسبح الأولمبي، ونخدم عملاءنا في جميع أنحاء المنطقة 
                  بفريق من المهندسين والفنيين المتخصصين.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🏢</div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">معرض أحد للديكورات</h3>
              <p className="text-gray-600">حلب - الأكرمية - أمام المسبح الأولمبي</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">رؤيتنا</h3>
                <p className="text-gray-600 leading-relaxed">
                  أن نكون الشركة الرائدة في مجال الديكور والتصميم الداخلي في المنطقة، 
                  ونساهم في تطوير وتجميل المساحات السكنية والتجارية بأحدث التقنيات والمواد.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">رسالتنا</h3>
                <p className="text-gray-600 leading-relaxed">
                  تقديم خدمات الديكور والتصميم الداخلي بأعلى معايير الجودة والاحترافية، 
                  مع الحرص على تحقيق رضا عملائنا وتجاوز توقعاتهم في كل مشروع.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">قيمنا</h2>
            <p className="text-xl text-gray-600">
              القيم التي نؤمن بها وتوجه عملنا اليومي
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">فريق العمل</h2>
            <p className="text-xl text-gray-600">
              نخبة من المهندسين والفنيين المتخصصين
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    {member.experience}
                  </p>
                  <p className="text-sm text-gray-500">
                    {member.specialty}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'مشروع مكتمل' },
              { number: '10+', label: 'سنوات خبرة' },
              { number: '100%', label: 'رضا العملاء' },
              { number: '24/7', label: 'خدمة العملاء' }
            ].map((stat, index) => (
              <div key={index}>
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

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            هل تريد العمل معنا؟
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            نحن هنا لمساعدتك في تحويل أحلامك إلى واقع. تواصل معنا اليوم لبدء مشروعك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-bg text-white hover-lift">
              <Link to="/contact" className="flex items-center space-x-2 space-x-reverse">
                <span>تواصل معنا</span>
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="hover-lift">
              <Link to="/services">استكشف خدماتنا</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

