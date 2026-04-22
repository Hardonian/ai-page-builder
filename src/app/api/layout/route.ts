import { NextRequest, NextResponse } from 'next/server'
import { availableLayouts, getLayout } from '@/lib/layouts'

export const dynamic = 'force-dynamic'

export async function GET() {
  return NextResponse.json({
    layouts: availableLayouts
  })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { layoutId, productCount } = body
  
  const layout = layoutId ? getLayout(layoutId) : null
  
  // Suggest best layout based on product count
  let suggestedLayout = layout?.id
  if (!suggestedLayout) {
    if (!productCount || productCount === 1) suggestedLayout = 'hero'
    else if (productCount <= 3) suggestedLayout = 'grid-2'
    else if (productCount <= 6) suggestedLayout = 'grid-3'
    else suggestedLayout = 'showcase'
  }
  
  return NextResponse.json({
    layoutId: suggestedLayout,
    message: `Suggested layout for ${productCount || 1} products`
  })
}
