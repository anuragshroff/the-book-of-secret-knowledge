'use client'

import { useState, useMemo } from 'react'
import { SearchBar } from '@/components/SearchBar'
import { CommandCard } from '@/components/CommandCard'
import { searchCommands, categories, getCommandsByCategory, commands } from '@/lib/commands'

const COMMANDS_PER_PAGE = 30

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const results = useMemo(() => {
    let filtered = searchCommands(searchQuery)
    if (selectedCategory) {
      filtered = filtered.filter(cmd => cmd.category === selectedCategory)
    }
    return filtered
  }, [searchQuery, selectedCategory])

  // Paginate results per category
  const paginatedResults = useMemo(() => {
    const grouped: Record<string, typeof results> = {}
    results.forEach(cmd => {
      if (!grouped[cmd.category]) {
        grouped[cmd.category] = []
      }
      grouped[cmd.category].push(cmd)
    })
    return grouped
  }, [results])

  const sortedCategories = useMemo(() => {
    return Object.keys(paginatedResults).sort()
  }, [paginatedResults])

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Header */}
      <header className="border-b border-border/50 bg-gradient-to-b from-background via-background to-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/30 rounded-full w-fit">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">Complete Knowledge Base</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                The Book of
                <br />
                <span className="text-accent">Secret Knowledge</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Explore a comprehensive collection of CLI tools, networking utilities, and system administration commands for DevOps engineers, pentesters, and security researchers.
              </p>
            </div>

            <div className="max-w-2xl pt-4">
              <SearchBar onSearch={setSearchQuery} />
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-xs font-bold text-accent uppercase tracking-widest mb-6">
            Browse by Category
          </h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === null
                  ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/20'
                  : 'bg-secondary text-foreground hover:bg-muted border border-border/50 hover:border-border'
              }`}
            >
              All Commands
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                className={`px-4 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/20'
                    : 'bg-secondary text-foreground hover:bg-muted border border-border/50 hover:border-border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        {results.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">⚠️</div>
            <p className="text-xl font-semibold text-foreground mb-2">
              No commands found
            </p>
            <p className="text-muted-foreground">
              Try adjusting your search query or filters to find what you&apos;re looking for
            </p>
          </div>
        ) : (
          <div className="space-y-14">
            {sortedCategories.map((category) => {
              const categoryCommands = paginatedResults[category]
              const itemsPerPage = 12
              const totalPages = Math.ceil(categoryCommands.length / itemsPerPage)
              const startIdx = 0
              const endIdx = itemsPerPage
              const displayedCommands = categoryCommands.slice(startIdx, endIdx)

              return (
                <section key={category}>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3">
                      <span className="w-1.5 h-8 bg-accent rounded-full"></span>
                      {category}
                    </h2>
                    {categoryCommands.length > itemsPerPage && (
                      <span className="text-sm text-muted-foreground font-medium">
                        Showing 1–{Math.min(itemsPerPage, categoryCommands.length)} of {categoryCommands.length}
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {displayedCommands.map((command) => (
                      <CommandCard key={command.name} command={command} />
                    ))}
                  </div>
                  {categoryCommands.length > itemsPerPage && (
                    <div className="mt-6 text-center">
                      <button
                        className="px-6 py-2.5 bg-secondary text-foreground rounded-lg hover:bg-muted border border-border/50 transition-all duration-200"
                      >
                        View All {categoryCommands.length} in {category}
                      </button>
                    </div>
                  )}
                </section>
              )
            })}
          </div>
        )}

        {/* Stats */}
        {results.length > 0 && (
          <div className="mt-20 pt-12 border-t border-border/30">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-accent mb-3">
                  {results.length}
                </div>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Results Found</p>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-accent mb-3">
                  {sortedCategories.length}
                </div>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Categories</p>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-accent mb-3">
                  {commands.length}
                </div>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Total Commands</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-border/30 mt-20 bg-secondary/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground font-medium">
              Knowledge is powerful. Use it wisely.
            </p>
            <p className="text-sm text-muted-foreground">
              Based on{' '}
              <a
                href="https://github.com/trimstray/the-book-of-secret-knowledge"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 font-semibold transition-colors"
              >
                The Book of Secret Knowledge
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
