'use client'

import { useState } from 'react'
import SplashScreen from '@/components/SplashScreen'
import CategorySelector from '@/components/CategorySelector'
import ProductSlider from '@/components/ProductSlider'

type Screen = 'splash' | 'category' | 'products'

export default function Home() {
  const [screen, setScreen] = useState<Screen>('splash')
  const [selectedCategory, setSelectedCategory] = useState<'hot' | 'cold' | 'specialty' | null>(null)

  const handleSelectCategory = (category: 'hot' | 'cold' | 'specialty') => {
    setSelectedCategory(category)
    setScreen('products')
  }

  const handleBackToCategory = () => {
    setScreen('category')
    setSelectedCategory(null)
  }

  return (
    <main className="w-full h-screen bg-black overflow-hidden">
      {screen === 'splash' && (
        <SplashScreen onComplete={() => setScreen('category')} />
      )}

      {screen === 'category' && (
        <CategorySelector onSelectCategory={handleSelectCategory} />
      )}

      {screen === 'products' && selectedCategory && (
        <ProductSlider category={selectedCategory} onBack={handleBackToCategory} />
      )}
    </main>
  )
}
