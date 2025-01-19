import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')] bg-cover bg-center brightness-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white space-y-8">
          <h1 className="text-5xl font-bold leading-tight">
            Innovative Materials for <br />
            a Better Future
          </h1>
          <p className="text-xl max-w-2xl">
            TST Connector specializes in advanced materials technology, providing cutting-edge solutions for various industries.
          </p>
          <div className="flex space-x-4">
            <a
              href="/about"
              className="bg-primary px-6 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors"
            >
              Learn More
            </a>
            <a
              href="/contact"
              className="flex items-center space-x-2 px-6 py-3 border border-white rounded-md font-medium hover:bg-white hover:text-gray-900 transition-colors"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Advanced Materials</h2>
            <p className="text-gray-600">
              We develop and supply high-performance materials for demanding applications.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Innovative Solutions</h2>
            <p className="text-gray-600">
              Our R&D team creates tailored solutions for unique challenges.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Global Reach</h2>
            <p className="text-gray-600">
              Serving clients worldwide with reliable supply chains.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl font-bold">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our advanced materials can give you a competitive edge.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary px-8 py-4 rounded-md text-white font-medium hover:bg-primary-dark transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
