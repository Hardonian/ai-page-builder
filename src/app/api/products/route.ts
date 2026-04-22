import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const ProductSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  price: z.number().min(0),
  image: z.string().url().optional()
})

export async function GET() {
  // In production, fetch from database
  return NextResponse.json({ products: [] })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  
  const result = ProductSchema.safeParse(body)
  if (!result.success) {
    return NextResponse.json(
      { error: 'Invalid product', details: result.error.issues },
      { status: 400 }
    )
  }
  
  const product = {
    id: crypto.randomUUID(),
    ...result.data,
    createdAt: new Date().toISOString()
  }
  
  return NextResponse.json({ product }, { status: 201 })
}
