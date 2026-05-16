const express = require('express')
const app = express()
const port = 3003

app.use(express.json())

const products = [
  { id: 1, name: "Wireless Mouse", category: "electronics", price: 29.99, rate: 4.3 },
  { id: 2, name: "Mechanical Keyboard", category: "electronics", price: 89.99, rate: 4.7 },
  { id: 3, name: "Running Shoes", category: "fashion", price: 59.99, rate: 4.2 },
  { id: 4, name: "Cotton T-Shirt", category: "fashion", price: 14.99, rate: 4.0 },
  { id: 5, name: "Coffee Maker", category: "home", price: 74.99, rate: 4.5 },
  { id: 6, name: "Blender", category: "home", price: 49.99, rate: 4.1 },
  { id: 7, name: "Notebook", category: "stationery", price: 3.99, rate: 3.9 },
  { id: 8, name: "Ballpoint Pen Set", category: "stationery", price: 6.49, rate: 4.4 },
  { id: 9, name: "Protein Powder", category: "fitness", price: 34.99, rate: 4.6 },
  { id: 10, name: "Yoga Mat", category: "fitness", price: 19.99, rate: 4.2 }
]

const cart = []

const orders = []

app.get('/products', (req, res) => {
  res.json({ success: true, data: products })
})

app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id == req.params.id)

  if (!product) {
    return res.status(404).json({ success: false, message: 'Product not found' })
  }

  res.json({ success: true, data: product })
})


app.get('/cart', (req, res) => {
  res.json({ success: true, data: cart })
})

app.get('/cart/:id', (req, res) => {
  const item = cart.find(i => i.product.id == req.params.id)

  if (!item) {
    return res.status(404).json({ success: false, message: 'Item not in cart' })
  }

  res.json({ success: true, data: item })
})

app.post('/cart', (req, res) => {
  const { productId, count = 1 } = req.body

  const product = products.find(p => p.id == productId)
  if (!product) {
    return res.status(404).json({ success: false, message: 'Product not found' })
  }

  const existing = cart.find(i => i.product.id == productId)

  if (existing) {
    existing.count += count
  } else {
    cart.push({ product, count })
  }

  res.status(201).json({ success: true, data: cart })
})

app.delete('/cart/:id', (req, res) => {
  const index = cart.findIndex(i => i.product.id == req.params.id)

  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Item not found' })
  }

  cart.splice(index, 1)
  res.json({ success: true, data: cart })
})

app.delete('/cart', (req, res) => {
  cart.length = 0
  res.json({ success: true, message: 'Cart cleared' })
})


app.get('/orders', (req, res) => {
  res.json({ success: true, data: orders })
})

app.get('/orders/:id', (req, res) => {
  const order = orders.find(o => o.id == req.params.id)

  if (!order) {
    return res.status(404).json({ success: false, message: 'Order not found' })
  }

  res.json({ success: true, data: order })
})

app.post('/orders', (req, res) => {
  if (cart.length === 0) {
    return res.status(400).json({ success: false, message: 'Cart is empty' })
  }

  const order = {
    id: orders.length + 1,
    orderDate: new Date().toISOString(),
    items: [...cart]
  }

  orders.push(order)
  cart.length = 0

  res.status(201).json({ success: true, data: order })
})


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
