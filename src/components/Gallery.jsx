import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { X, ZoomIn } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  // استخدام الصور المرفقة من المستخدم
  const galleryImages = [
    {
      id: 1,
      title: 'واجهة المحل',
      category: 'المحل',
      image: '/src/assets/logo.png', // سنستخدم الشعار كمثال
      description: 'واجهة محل شركة أحد للديكورات في حلب'
    },
    {
      id: 2,
      title: 'تصميم تلفزيون عصري',
      category: 'أعمالنا',
      image: '/src/assets/logo.png', // سنستخدم الشعار كمثال
      description: 'تصميم حائط تلفزيون بديل الخشب مع إضاءة LED'
    }
  ]

  const categories = ['الكل', 'المحل', 'أعمالنا', 'بديل الرخام', 'بديل الخشب', 'شيبورد', 'ورق الجدران', 'السقف المستعار']
  const [activeCategory, setActiveCategory] = useState('الكل')

  const filteredImages = activeCategory === 'الكل' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <div className="pt-24 pb-16">
      {/* Header Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">معرض أعمالنا</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            استكشف مجموعة من أفضل أعمالنا في مجال الديكور والتصميم الداخلي
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`${
                  activeCategory === category 
                    ? 'gradient-bg text-white' 
                    : 'hover:bg-primary hover:text-white'
                } transition-all duration-300`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image) => (
                <Card key={image.id} className="group overflow-hidden hover-lift cursor-pointer">
                  <CardContent className="p-0 relative">
                    <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="text-6xl mb-4">🏢</div>
                        <h3 className="text-lg font-semibold text-gray-700">{image.title}</h3>
                        <p className="text-sm text-gray-500 mt-2">{image.description}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => setSelectedImage(image)}
                        className="flex items-center space-x-2 space-x-reverse"
                      >
                        <ZoomIn className="h-4 w-4" />
                        <span>عرض</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📷</div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">لا توجد صور في هذه الفئة</h3>
              <p className="text-gray-500">جاري إضافة المزيد من الأعمال قريباً</p>
            </div>
          )}
        </div>
      </section>

      {/* Placeholder for more content */}
      <section className="py-16 bg-gray-50 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">المزيد من الأعمال قريباً</h2>
          <p className="text-xl text-gray-600 mb-8">
            نعمل باستمرار على إضافة المزيد من أعمالنا المتميزة إلى المعرض
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: '🏛️', title: 'بديل الرخام', count: '50+ مشروع' },
              { icon: '🌳', title: 'بديل الخشب', count: '40+ مشروع' },
              { icon: '🎨', title: 'ورق الجدران', count: '60+ مشروع' },
              { icon: '🏠', title: 'السقف المستعار', count: '30+ مشروع' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for image preview */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">🏢</div>
                  <h3 className="text-2xl font-semibold text-gray-700">{selectedImage.title}</h3>
                  <p className="text-gray-500 mt-2">{selectedImage.description}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600">{selectedImage.description}</p>
                <div className="mt-4">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {selectedImage.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery

