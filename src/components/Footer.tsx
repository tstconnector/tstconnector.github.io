import { Facebook, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">TST Connector</h3>
            <p className="text-sm text-gray-300">
              Leading provider of advanced materials and innovative solutions.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Contact</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>Room 3006, Building 4, Rongchang Oriental Plaza</p>
              <p>No. 229 Shuixian Avenue, Longwen District</p>
              <p>Zhangzhou, Fujian, China</p>
              <p>Phone: +86 596 1234 5678</p>
              <p>Email: info@tstconnector.com</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <nav className="text-sm text-gray-300 space-y-2">
              <a href="/about" className="hover:text-primary transition-colors">About Us</a>
              <a href="/products" className="hover:text-primary transition-colors">Products</a>
              <a href="/news" className="hover:text-primary transition-colors">News</a>
              <a href="/contact" className="hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          © 2024 TST Connector. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
