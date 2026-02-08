'use client'

import { useState, useRef } from 'react'
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react'
import { Swiper } from 'swiper'
import { motion } from 'framer-motion'
import { ProductCard } from './ProductCard'
import { Product, getProductsByCategory } from '@/constants/products'
import 'swiper/css'
import Image from 'next/image'

interface ProductSliderProps {
  category: 'hot' | 'cold' | 'specialty'
  onBack: () => void
}

export const ProductSlider = ({ category, onBack }: ProductSliderProps) => {
  const products = getProductsByCategory(category)
  const [currentProduct, setCurrentProduct] = useState<Product>(products[0])
  const [currentIndex, setCurrentIndex] = useState(0)
  const swiperRef = useRef<Swiper | null>(null)

  const handleSlideChange = (swiper: Swiper) => {
    const index = swiper.activeIndex
    setCurrentIndex(index)
    setCurrentProduct(products[index])
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="relative w-full h-screen overflow-hidden bg-black"
      style={{
        backgroundColor: currentProduct.backgroundColor,
      }}
    >
      {/* Smooth background transition */}
      <motion.div
        animate={{ backgroundColor: currentProduct.backgroundColor }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="absolute inset-0"
      />

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onBack}
        className="absolute top-6 left-6 z-40 text-white text-2xl bg-black/30 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/50 transition-colors"
      >
        ←
      </motion.button>

      {/* Header with Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="absolute top-6 right-6 z-40 flex items-center gap-2"
      >
        <div className="relative w-8 h-8">
          <Image
            src="/khatra-logo.png"
            alt="Khatra"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* Counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 text-white text-sm"
      >
        <span className="font-semibold">{currentIndex + 1}</span>
        <span className="text-gray-400"> / {products.length}</span>
      </motion.div>

      {/* Swiper */}
      <SwiperComponent
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        onSlideChange={handleSlideChange}
        centeredSlides={true}
        slidesPerView={1}
        speed={400}
        grabCursor={true}
        className="w-full h-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="h-screen flex items-center justify-center">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </SwiperComponent>

      {/* Pagination dots */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-40 flex gap-2"
      >
        {products.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => swiperRef.current?.slideTo(index)}
            animate={{
              scale: index === currentIndex ? 1.2 : 1,
              opacity: index === currentIndex ? 1 : 0.5,
            }}
            transition={{ duration: 0.3 }}
            className="w-2 h-2 rounded-full bg-white"
          />
        ))}
      </motion.div>
    </motion.div>
  )
}
