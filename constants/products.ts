export interface Product {
  id: string
  name: string
  price: number
  image: string
  backgroundColor: string
  category: 'hot' | 'cold' | 'specialty'
}

export const products: Product[] = [
  // Hot Coffee
  {
    id: 'espresso',
    name: 'Espresso',
    price: 2.5,
    image: '/espresso.png',
    backgroundColor: '#2C1810',
    category: 'hot',
  },
  {
    id: 'double-espresso',
    name: 'Double Espresso',
    price: 3.5,
    image: '/double espresso.png',
    backgroundColor: '#3E2723',
    category: 'hot',
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    price: 4.0,
    image: '/capputino.png',
    backgroundColor: '#5D4037',
    category: 'hot',
  },
  {
    id: 'macchiato',
    name: 'Macchiato',
    price: 4.0,
    image: '/macchiato.png',
    backgroundColor: '#4E342E',
    category: 'hot',
  },
  {
    id: 'cafe-mocha',
    name: 'Café Mocha',
    price: 4.5,
    image: '/café mocha.png',
    backgroundColor: '#3E2723',
    category: 'hot',
  },
  {
    id: 'cafe-creme',
    name: 'Café Crème',
    price: 4.5,
    image: '/café créme.png',
    backgroundColor: '#6D4C41',
    category: 'hot',
  },
  {
    id: 'latte-vanilla',
    name: 'Latte Vanilla',
    price: 4.5,
    image: '/Latté vanilla.png',
    backgroundColor: '#8D6E63',
    category: 'hot',
  },
  {
    id: 'latte-caramel',
    name: 'Latté Caramel',
    price: 4.75,
    image: '/Latté caramel.png',
    backgroundColor: '#A1887F',
    category: 'hot',
  },
  {
    id: 'spanish-caramel-latte',
    name: 'Spanish Caramel Latte',
    price: 5.0,
    image: '/Spanish Caramel Latte.png',
    backgroundColor: '#9C8780',
    category: 'hot',
  },
  {
    id: 'chocolate-chaud',
    name: 'Chocolat Chaud',
    price: 4.5,
    image: '/chocolate chaud.png',
    backgroundColor: '#5D4037',
    category: 'hot',
  },
  {
    id: 'chocolate-blanc',
    name: 'Chocolate Blanc',
    price: 4.5,
    image: '/chocolate blanc.png',
    backgroundColor: '#FFFDD0',
    category: 'hot',
  },
  // Cold Coffee
  {
    id: 'iced-latte',
    name: 'Iced Latte',
    price: 4.5,
    image: '/iced latté.png',
    backgroundColor: '#C8E6F5',
    category: 'cold',
  },
  {
    id: 'iced-mocha',
    name: 'Iced Mocha',
    price: 4.75,
    image: '/iced mocha.png',
    backgroundColor: '#B3E5FC',
    category: 'cold',
  },
  {
    id: 'frappuccino',
    name: 'Frappuccino',
    price: 5.0,
    image: '/frappuchino.png',
    backgroundColor: '#E0F2FE',
    category: 'cold',
  },
  // Specialty
  {
    id: 'blue-curacao-mojito',
    name: 'Blue Curaçao Mojito',
    price: 6.0,
    image: '/Blue Curaçao Mojito.png',
    backgroundColor: '#E0F2FE',
    category: 'specialty',
  },
  {
    id: 'pina-colada-cocktail',
    name: 'Piña Colada Cocktail',
    price: 6.5,
    image: '/Piña Colada Cocktail.png',
    backgroundColor: '#FFF9C4',
    category: 'specialty',
  },
  {
    id: 'strawberry-milkshake',
    name: 'Strawberry Milkshake',
    price: 5.5,
    image: '/strawberry milkshake.png',
    backgroundColor: '#FCE4EC',
    category: 'specialty',
  },
  {
    id: 'mango-milkshake',
    name: 'Mango Milkshake',
    price: 5.5,
    image: '/Mango Milkshake.png',
    backgroundColor: '#FFE0B2',
    category: 'specialty',
  },
]

export const categories = [
  {
    id: 'hot',
    label: 'Hot Coffee',
    description: 'Warm & Comforting',
    color: '#8B4513',
  },
  {
    id: 'cold',
    label: 'Cold Coffee',
    description: 'Fresh & Chilled',
    color: '#4A90E2',
  },
  {
    id: 'specialty',
    label: 'Specialty',
    description: 'Unique & Creative',
    color: '#E84855',
  },
]

export function getProductsByCategory(category: 'hot' | 'cold' | 'specialty') {
  return products.filter((p) => p.category === category)
}
