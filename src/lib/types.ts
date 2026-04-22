export interface Product {
  id: string
  name: string
  description?: string
  price: number
  image?: string
  url?: string
}

export interface LayoutConfig {
  id: string
  name: string
  description: string
  colorScheme?: string
}

export interface StoreConfig {
  username: string
  title: string
  bio?: string
  layout: LayoutConfig
  products: Product[]
  accentColor?: string
}
