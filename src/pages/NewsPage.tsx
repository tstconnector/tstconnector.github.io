import { Newspaper, Megaphone, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const newsItems = [
  {
    category: 'Company News',
    icon: <Newspaper className="h-8 w-8" />,
    items: [
      {
        title: 'TST Connector Expands to European Market',
        date: '2024-03-15',
        excerpt: 'We are excited to announce our expansion into the European market with new partnerships in Germany and France.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
        link: '/news/company/expansion'
      },
      {
        title: 'New R&D Center Opening in Zhangzhou',
        date: '2024-02-28',
        excerpt: 'Our new state-of-the-art research and development center is now operational, focusing on advanced materials innovation.',
        image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc',
        link: '/news/company/rd-center'
      }
    ]
  },
  {
    category: 'Industry Updates',
    icon: <TrendingUp className="h-8 w-8" />,
    items: [
      {
        title: 'Emerging Trends in Advanced Materials',
        date: '2024-03-10',
        excerpt: 'Exploring the latest developments in high-performance materials and their applications across industries.',
        image: 'https://images.unsplash.com/photo-1611095973763-414069e827b5',
        link: '/news/industry/trends'
      },
      {
        title: 'Automotive Industry Adopts New Composites',
        date: '2024-02-15',
        excerpt: 'How advanced composite materials are revolutionizing vehicle design and manufacturing.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
        link: '/news/industry/automotive-composites'
      }
    ]
  },
  {
    category: 'Media Coverage',
    icon: <Megaphone className="h-8 w-8" />,
    items: [
      {
        title: 'Featured in China Daily',
        date: '2024-03-01',
        excerpt: 'Our CEO Liu Qiumei discusses the future of materials technology in an exclusive interview.',
        image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc',
        link: '/news/media/china-daily'
      },
      {
        title: 'Tech Innovation Spotlight',
        date: '2024-02-20',
        excerpt: 'TST Connector recognized for groundbreaking work in semiconductor materials.',
        image: 'https://images.unsplash.com/photo-1611095973763-414069e827b5',
        link: '/news/media/tech-innovation'
      }
    ]
  }
]

export default function NewsPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')] bg-cover bg-center brightness-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white space-y-4">
          <h1 className="text-5xl font-bold">News & Media</h1>
          <p className="text-xl max-w-2xl">
            Stay updated with our latest developments and industry insights
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {newsItems.map((category, index) => (
            <div key={index} className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary rounded-lg text-white">
                  {category.icon}
                </div>
                <h2 className="text-3xl font-bold">{category.category}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((news, idx) => (
                  <Link
                    key={idx}
                    to={news.link}
                    className="group block space-y-4"
                  >
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-gray-600">{news.excerpt}</p>
                      <p className="text-sm text-gray-500">{news.date}</p>
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
