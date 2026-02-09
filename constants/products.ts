export interface Product {
  id: string
  name: string
  price: number
  currency: string
  image: string
  backgroundColor: string
  category: 'hot' | 'cold' | 'specialty'
}

export const products: Product[] = [
  // HOT COFFEE
  {
    id: 'espresso',
    name: 'Espresso',
    price: 7.00,
    currency: 'DH',
    image: '/espresso.png',
    backgroundColor: '#1a0f08',
    category: 'hot',
  },
  {
    id: 'double-espresso',
    name: 'Double Espresso',
    price: 10.00,
    currency: 'DH',
    image: '/double espresso.png',
    backgroundColor: '#2b1810',
    category: 'hot',
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    price: 8.00,
    currency: 'DH',
    image: '/capputino.png',
    backgroundColor: '#3d2817',
    category: 'hot',
  },
  {
    id: 'macchiato',
    name: 'Macchiato',
    price: 8.00,
    currency: 'DH',
    image: '/macchiato.png',
    backgroundColor: '#5d3d25',
    category: 'hot',
  },
  {
    id: 'cafe-mocha',
    name: 'Café Mocha',
    price: 8.00,
    currency: 'DH',
    image: '/café mocha.png',
    backgroundColor: '#3e2723',
    category: 'hot',
  },
  {
    id: 'cafe-creme',
    name: 'Café Crème',
    price: 8.00,
    currency: 'DH',
    image: '/café créme.png',
    backgroundColor: '#6d4c41',
    category: 'hot',
  },
  {
    id: 'latte-vanilla',
    name: 'Latté Vanille',
    price: 9.00,
    currency: 'DH',
    image: '/Latté vanilla.png',
    backgroundColor: '#9a8b7f',
    category: 'hot',
  },
  {
    id: 'latte-caramel',
    name: 'Latté Caramel',
    price: 9.00,
    currency: 'DH',
    image: '/Latté caramel.png',
    backgroundColor: '#b8956a',
    category: 'hot',
  },
  {
    id: 'chocolate-chaud',
    name: 'Chocolat Chaud',
    price: 10.00,
    currency: 'DH',
    image: '/chocolate chaud.png',
    backgroundColor: '#6f4e37',
    category: 'hot',
  },
  {
    id: 'chocolate-blanc',
    name: 'Chocolat Blanc',
    price: 10.00,
    currency: 'DH',
    image: '/chocolate blanc.png',
    backgroundColor: '#fff8e7',
    category: 'hot',
  },
  // COLD COFFEE
  {
    id: 'iced-latte',
    name: 'Iced Latte',
    price: 13.00,
    currency: 'DH',
    image: '/iced latté.png',
    backgroundColor: '#cff0f8',
    category: 'cold',
  },
  {
    id: 'iced-mocha',
    name: 'Iced Mocha',
    price: 14.00,
    currency: 'DH',
    image: '/iced mocha.png',
    backgroundColor: '#b3e5fc',
    category: 'cold',
  },
  {
    id: 'frappuccino',
    name: 'Frappuccino',
    price: 15.00,
    currency: 'DH',
    image: '/frappuchino.png',
    backgroundColor: '#e0f7fa',
    category: 'cold',
  },
  // SPECIALTY DRINKS
  {
    id: 'blue-curacao-mojito',
    name: 'Blue Curaçao Mojito',
    price: 15.00,
    currency: 'DH',
    image: '/Blue Curaçao Mojito.png',
    backgroundColor: '#01579b',
    category: 'specialty',
  },
  {
    id: 'pina-colada-cocktail',
    name: 'Piña Colada Cocktail',
    price: 15.00,
    currency: 'DH',
    image: '/Piña Colada Cocktail.png',
    backgroundColor: '#fff9c4',
    category: 'specialty',
  },
  {
    id: 'strawberry-milkshake',
    name: 'Strawberry Milkshake',
    price: 15.00,
    currency: 'DH',
    image: '/strawberry milkshake.png',
    backgroundColor: '#fce4ec',
    category: 'specialty',
  },
  {
    id: 'mango-milkshake',
    name: 'Mango Milkshake',
    price: 15.00,
    currency: 'DH',
    image: '/Mango Milkshake.png',
    backgroundColor: '#ffe0b2',
    category: 'specialty',
  },
  {
    id: 'spanish-caramel-latte',
    name: 'Spanish Caramel Latte',
    price: 15.00,
    currency: 'DH',
    image: '/Spanish Caramel Latte.png',
    backgroundColor: '#c4a57b',
    category: 'specialty',
  },
]

export const categories = [
  {
    id: 'hot',
    label: 'Hot Coffee',
    description: 'Warm & Comforting',
    color: '#8b6f47',
  },
  {
    id: 'cold',
    label: 'Cold Coffee',
    description: 'Fresh & Chilled',
    color: '#0084d0',
  },
  {
    id: 'specialty',
    label: 'Specialty',
    description: 'Unique & Creative',
    color: '#d63447',
  },
]

export function getProductsByCategory(category: 'hot' | 'cold' | 'specialty') {
  return products.filter((p) => p.category === category)
}

export function getTextColorForBackground(backgroundColor: string): string {
  // Convert hex to RGB
  const hex = backgroundColor.replace('#', '')
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)
  
  // Calculate luminance (brightness)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  
  // Return white text for dark backgrounds, dark text for light backgrounds
  return luminance > 0.5 ? '#000000' : '#ffffff'
}
