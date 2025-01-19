import { NavLink } from 'react-router-dom'
import { Home, Info, Box, Newspaper, Phone } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink
              to="/"
              className="text-xl font-bold text-primary flex items-center"
            >
              TST Connector
            </NavLink>
          </div>
          <div className="flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center space-x-2 hover:text-primary transition-colors ${isActive ? 'text-primary' : 'text-gray-700'
                }`
              }
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `flex items-center space-x-2 hover:text-primary transition-colors ${isActive ? 'text-primary' : 'text-gray-700'
                }`
              }
            >
              <Box className="h-5 w-5" />
              <span>Products</span>
            </NavLink>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                `flex items-center space-x-2 hover:text-primary transition-colors ${isActive ? 'text-primary' : 'text-gray-700'
                }`
              }
            >
              <Newspaper className="h-5 w-5" />
              <span>News</span>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex items-center space-x-2 hover:text-primary transition-colors ${isActive ? 'text-primary' : 'text-gray-700'
                }`
              }
            >
              <Info className="h-5 w-5" />
              <span>About</span>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `flex items-center space-x-2 hover:text-primary transition-colors ${isActive ? 'text-primary' : 'text-gray-700'
                }`
              }
            >
              <Phone className="h-5 w-5" />
              <span>Contact</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
