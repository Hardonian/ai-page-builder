import type { LayoutConfig } from './types'

export const availableLayouts: LayoutConfig[] = [
  {
    id: 'hero',
    name: 'Hero Showcase',
    description: 'One large featured product with description text',
    colorScheme: 'emerald'
  },
  {
    id: 'grid-2',
    name: 'Two Column Grid',
    description: 'Side by side product cards',
    colorScheme: 'blue'
  },
  {
    id: 'grid-3',
    name: 'Three Column Grid',
    description: 'Compact three column layout',
    colorScheme: 'purple'
  },
  {
    id: 'list',
    name: 'Vertical List',
    description: 'Stacked detailed product cards',
    colorScheme: 'orange'
  },
  {
    id: 'showcase',
    name: 'Featured Carousel',
    description: 'Featured product with smaller items below',
    colorScheme: 'rose'
  }
]

export function getLayout(id: string): LayoutConfig | undefined {
  return availableLayouts.find(l => l.id === id)
}

export function getDefaultLayout(): LayoutConfig {
  return availableLayouts[0]
}
