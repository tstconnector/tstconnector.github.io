import { Building2, Globe, Target } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c')] bg-cover bg-center brightness-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white space-y-4">
          <h1 className="text-5xl font-bold">About TST Connector</h1>
          <p className="text-xl max-w-2xl">
            Pioneering advanced materials technology since 2021
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2021, TST Connector has quickly established itself as a leader in advanced materials technology. Based in Zhangzhou, Fujian, we specialize in developing innovative solutions for industries ranging from electronics to automotive.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of experts combines deep technical knowledge with a passion for innovation, delivering high-performance materials that meet the most demanding requirements.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
              alt="Our Office"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4 text-center">
              <div className="flex justify-center">
                <Building2 className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Our Vision</h3>
              <p className="text-gray-600">
                To be the global leader in advanced materials innovation
              </p>
            </div>
            <div className="space-y-4 text-center">
              <div className="flex justify-center">
                <Target className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Our Mission</h3>
              <p className="text-gray-600">
                Deliver cutting-edge materials solutions that drive progress
              </p>
            </div>
            <div className="space-y-4 text-center">
              <div className="flex justify-center">
                <Globe className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Our Reach</h3>
              <p className="text-gray-600">
                Serving clients across Asia, Europe, and North America
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4 text-center">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
              alt="Liu Qiumei"
              className="w-48 h-48 rounded-full mx-auto object-cover"
            />
            <h3 className="text-xl font-bold">Liu Qiumei</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="space-y-4 text-center">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="Zhang Wei"
              className="w-48 h-48 rounded-full mx-auto object-cover"
            />
            <h3 className="text-xl font-bold">Zhang Wei</h3>
            <p className="text-gray-600">CTO</p>
          </div>
          <div className="space-y-4 text-center">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
              alt="Wang Li"
              className="w-48 h-48 rounded-full mx-auto object-cover"
            />
            <h3 className="text-xl font-bold">Wang Li</h3>
            <p className="text-gray-600">COO</p>
          </div>
        </div>
      </section>
    </div>
  )
}
