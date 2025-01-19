import { Factory, Cpu, Car, Package } from 'lucide-react'
import { Link } from 'react-router-dom'

const products = [
  {
    category: 'Advanced Materials',
    icon: <Package className="h-8 w-8" />,
    items: [
      {
        name: 'High-Performance Polymers',
        description: 'Engineered for extreme conditions',
        image: 'https://images.unsplash.com/photo-1611095973763-414069e827b5',
        link: '/products/advanced-materials/polymers'
      },
      {
        name: 'Composite Materials',
        description: 'Lightweight and durable solutions',
        image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc',
        link: '/products/advanced-materials/composites'
      }
    ]
  },
  {
    category: 'Machinery & Equipment',
    icon: <Factory className="h-8 w-8" />,
    items: [
      {
        name: 'Industrial Automation',
        description: 'State-of-the-art manufacturing systems',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
        link: '/products/machinery/automation'
      },
      {
        name: 'Precision Tools',
        description: 'High-accuracy machining equipment',
        image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc',
        link: '/products/machinery/tools'
      }
    ]
  },
  {
    category: 'Electronic Components',
    icon: <Cpu className="h-8 w-8" />,
    items: [
      {
        name: 'Semiconductors',
        description: 'High-performance chips for various applications',
        image: 'https://images.unsplash.com/photo-1611095973763-414069e827b5',
        link: '/products/electronics/semiconductors'
      },
      {
        name: 'Circuit Boards',
        description: 'Custom PCB designs and manufacturing',
        image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc',
        link: '/products/electronics/circuit-boards'
      }
    ]
  },
  {
    category: 'Automotive Parts',
    icon: <Car className="h-8 w-8" />,
    items: [
      {
        name: 'Engine Components',
        description: 'High-performance engine parts',
        image: 'https://images.unsplash.com/photo-1611095973763-414069e827b5',
        link: '/products/automotive/engine'
      },
      {
        name: 'Chassis Systems',
        description: 'Lightweight and durable chassis solutions',
        image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc',
        link: '/products/automotive/chassis'
      }
    ]
  }
]

export default function ProductsPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')] bg-cover bg-center brightness-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white space-y-4">
          <h1 className="text-5xl font-bold">Our Products</h1>
          <p className="text-xl max-w-2xl">
            Innovative solutions for diverse industries
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {products.map((category, index) => (
            <div key={index} className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary rounded-lg text-white">
                  {category.icon}
                </div>
                <h2 className="text-3xl font-bold">{category.category}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((product, idx) => (
                  <Link
                    key={idx}
                    to={product.link}
                    className="group block space-y-4"
                  >
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600">{product.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
