import React from 'react'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Products from './components/Products'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-luxury-gold/30 selection:text-white">
      <main>
        <Hero />
        <Philosophy />
        <Products />
      </main>
      <Footer />
    </div>
  )
}

export default App
