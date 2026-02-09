'use client'

import { motion } from 'framer-motion'
import { categories } from '@/constants/products'
import Image from 'next/image'

interface CategorySelectorProps {
  onSelectCategory: (category: 'hot' | 'cold' | 'specialty') => void
}

export default function CategorySelector({ onSelectCategory }: CategorySelectorProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full h-screen bg-black flex flex-col items-center justify-center p-6 gap-8"
    >
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mb-4"
      >
        <div className="mb-4 flex justify-center">
          <div className="relative w-16 h-16">
            <Image
              src="/khatra-logo.png"
              alt="Khatra"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Select a Category</h1>
        <p className="text-gray-400">Explore our premium selections</p>
      </motion.div>

      {/* Category Cards */}
      <div className="w-full max-w-md space-y-4">
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectCategory(category.id as 'hot' | 'cold' | 'specialty')}
            className="relative overflow-hidden rounded-xl p-6 text-left group cursor-pointer h-28 flex flex-col justify-center w-full"
            style={{ backgroundColor: category.color }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-0 group-hover:opacity-30 transition-opacity" />

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white">{category.label}</h2>
              <p className="text-sm text-white opacity-80 mt-1">{category.description}</p>
            </div>

            {/* Arrow indicator */}
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-xl"
            >
              →
            </motion.div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
