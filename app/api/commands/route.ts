import { commands, searchCommands, categories } from '@/lib/commands'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q') || ''
  const category = searchParams.get('category') || null
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '30')

  let results = query ? searchCommands(query) : commands
  
  if (category) {
    results = results.filter(cmd => cmd.category === category)
  }

  const total = results.length
  const totalPages = Math.ceil(total / limit)
  const start = (page - 1) * limit
  const end = start + limit
  const paginatedResults = results.slice(start, end)

  return NextResponse.json({
    commands: paginatedResults,
    pagination: {
      page,
      limit,
      total,
      totalPages,
    },
    categories,
  })
}
