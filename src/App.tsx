import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/layouts/Layout'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ProductsPage from '@/pages/ProductsPage'
import NewsPage from '@/pages/NewsPage'
import ContactPage from '@/pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
