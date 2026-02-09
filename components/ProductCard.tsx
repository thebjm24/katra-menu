'use client'

import { motion } from 'framer-motion'
import { Product, getTextColorForBackground } from '@/constants/products'
import Image from 'next/image'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const textColor = getTextColorForBackground(product.backgroundColor)
  const isDarkBackground = textColor === '#ffffff'
  
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-center px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Product Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mb-12 relative h-64 w-64 flex items-center justify-center"
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="relative w-56 h-56">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Product Info */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-center space-y-6"
      >
        {/* Product Name */}
        <h2 
          className="text-4xl font-bold text-balance drop-shadow-lg"
          style={{ color: textColor }}
        >
          {product.name}
        </h2>

        {/* Price Tag */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="inline-block"
        >
          <div className="px-8 py-3 bg-white text-black rounded-full font-bold text-2xl shadow-lg">
            {product.price.toFixed(2)} {product.currency}
          </div>
        </motion.div>

        {/* Swipe Indicator */}
        <motion.div
          animate={{ x: [0, 10, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="text-sm pt-4 drop-shadow-lg"
          style={{ color: isDarkBackground ? '#cccccc' : '#333333' }}
        >
          ← Swipe to explore more →
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
