# Architecture

## Overview

AI Page Builder uses a multi-stage pipeline:

1. **User Input** — Product images or descriptions
2. **AI Analysis** — Claude parses and understands products
3. **Layout Selection** — Choose from FA component patterns
4. **Generation** — Render Next.js page
5. **Preview** — User sees result before publish
6. **Deploy** — Push to Vercel or export

## Tech Decisions

### Why Next.js?
- Server components for SEO
- API routes for AI calls
- Vercel deployment ready

### Why Claude?
- Better at understanding product context
- Native image understanding
- 100K context window

### Why FA Components?
- WCAG 2.2 AA compliant by default
- Production-ready
- Customizable
