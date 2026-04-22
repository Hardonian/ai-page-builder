import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import type { Product } from '@/lib/types'
import { Button } from './Button'

interface ProductCardProps {
  product: Product
  onBuy?: (product: Product) => void
}

export function ProductCard({ product, onBuy }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md">
      {product.image && (
        <div className="aspect-square relative overflow-hidden bg-slate-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="font-semibold text-slate-900">{product.name}</h3>
        {product.description && (
          <p className="mt-1 text-sm text-slate-500 line-clamp-2">{product.description}</p>
        )}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-slate-900">
            ${(product.price / 100).toFixed(2)}
          </span>
          <Button size="sm" onClick={() => onBuy?.(product)}>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Buy
          </Button>
        </div>
      </div>
    </div>
  )
}
