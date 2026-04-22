import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  // Note: In production, this would call Claude API
  // For now, return mock suggestions
  
  const body = await request.json()
  const { products, style } = body
  
  const mockSuggestion = {
    layout: style === 'minimal' ? 'minimal' : 'hero',
    ctaPosition: 'above' as const,
    colorScheme: '#10b981',
    suggestions: [
      'Put your highest-ticket item first',
      'Add testimonials below each product',
      'Consider a sticky bio section'
    ],
    confidence: 0.85
  }
  
  return NextResponse.json({
    ...mockSuggestion,
    message: 'Add ANTHROPIC_API_KEY to enable AI generation'
  })
}
