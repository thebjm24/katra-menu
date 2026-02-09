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
    price: 2.50,
    currency: 'MAD',
    image: '/espresso.png',
    backgroundColor: '#1a0f08',
    category: 'hot',
  },
  {
    id: 'double-espresso',
    name: 'Double Espresso',
    price: 4.00,
    currency: 'MAD',
    image: '/double espresso.png',
    backgroundColor: '#2b1810',
    category: 'hot',
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    price: 5.00,
    currency: 'MAD',
    image: '/capputino.png',
    backgroundColor: '#3d2817',
    category: 'hot',
  },
  {
    id: 'macchiato',
    name: 'Macchiato',
    price: 5.50,
    currency: 'MAD',
    image: '/macchiato.png',
    backgroundColor: '#5d3d25',
    category: 'hot',
  },
  {
    id: 'cafe-mocha',
    name: 'Café Mocha',
    price: 5.50,
    currency: 'MAD',
    image: '/café mocha.png',
    backgroundColor: '#3e2723',
    category: 'hot',
  },
  {
    id: 'cafe-creme',
    name: 'Café Crème',
    price: 4.50,
    currency: 'MAD',
    image: '/café créme.png',
    backgroundColor: '#6d4c41',
    category: 'hot',
  },
  {
    id: 'latte-vanilla',
    name: 'Latte Vanilla',
    price: 5.50,
    currency: 'MAD',
    image: '/Latté vanilla.png',
    backgroundColor: '#9a8b7f',
    category: 'hot',
  },
  {
    id: 'latte-caramel',
    name: 'Latté Caramel',
    price: 6.00,
    currency: 'MAD',
    image: '/Latté caramel.png',
    backgroundColor: '#b8956a',
    category: 'hot',
  },
  {
    id: 'spanish-caramel-latte',
    name: 'Spanish Caramel Latte',
    price: 6.50,
    currency: 'MAD',
    image: '/Spanish Caramel Latte.png',
    backgroundColor: '#c4a57b',
    category: 'hot',
  },
  {
    id: 'chocolate-chaud',
    name: 'Chocolat Chaud',
    price: 5.50,
    currency: 'MAD',
    image: '/chocolate chaud.png',
    backgroundColor: '#6f4e37',
    category: 'hot',
  },
  {
    id: 'chocolate-blanc',
    name: 'Chocolate Blanc',
    price: 5.50,
    currency: 'MAD',
    image: '/chocolate blanc.png',
    backgroundColor: '#fff8e7',
    category: 'hot',
  },
  // COLD COFFEE
  {
    id: 'iced-latte',
    name: 'Iced Latte',
    price: 5.50,
    currency: 'MAD',
    image: '/iced latté.png',
    backgroundColor: '#cff0f8',
    category: 'cold',
  },
  {
    id: 'iced-mocha',
    name: 'Iced Mocha',
    price: 6.00,
    currency: 'MAD',
    image: '/iced mocha.png',
    backgroundColor: '#b3e5fc',
    category: 'cold',
  },
  {
    id: 'frappuccino',
    name: 'Frappuccino',
    price: 6.50,
    currency: 'MAD',
    image: '/frappuchino.png',
    backgroundColor: '#e0f7fa',
    category: 'cold',
  },
  // SPECIALTY DRINKS
  {
    id: 'blue-curacao-mojito',
    name: 'Blue Curaçao Mojito',
    price: 7.50,
    currency: 'MAD',
    image: '/Blue Curaçao Mojito.png',
    backgroundColor: '#01579b',
    category: 'specialty',
  },
  {
    id: 'pina-colada-cocktail',
    name: 'Piña Colada Cocktail',
    price: 7.50,
    currency: 'MAD',
    image: '/Piña Colada Cocktail.png',
    backgroundColor: '#fff9c4',
    category: 'specialty',
  },
  {
    id: 'strawberry-milkshake',
    name: 'Strawberry Milkshake',
    price: 6.00,
    currency: 'MAD',
    image: '/strawberry milkshake.png',
    backgroundColor: '#fce4ec',
    category: 'specialty',
  },
  {
    id: 'mango-milkshake',
    name: 'Mango Milkshake',
    price: 6.00,
    currency: 'MAD',
    image: '/Mango Milkshake.png',
    backgroundColor: '#ffe0b2',
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
