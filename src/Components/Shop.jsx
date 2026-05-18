import { useState, useEffect, useMemo } from 'react'
import { Search } from 'lucide-react'
import DisplayProducts from './DisplayProducts'

export default function Shop() {
  const [searchTerm, setSearchTerm] = useState('')
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const apiUrl = 'http://localhost:3001/products'

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('JSON server unavailable')
        }
        return response.json()
      })
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch(() => {
        fetch('/db.json')
          .then((response) => response.json())
          .then((data) => {
            setProducts(data.products)
            setLoading(false)
          })
          .catch((error) => {
            console.error('Error fetching products:', error)
            setLoading(false)
          })
      })
  }, [])

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm, products])

  return (
    <div className="w-full">
      <div className="flex flex-row justify-center items-center gap-3 my-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-[500px] border rounded-md px-4 py-2 bg-white bg-opacity-80 backdrop-blur-sm shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="text-black" size={24} />
      </div>

      {loading ? (
        <div className="text-center py-8">Loading products...</div>
      ) : (
        <DisplayProducts products={filteredProducts} />
      )}
    </div>
  )
}
