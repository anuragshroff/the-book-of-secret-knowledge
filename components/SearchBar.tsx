'use client'

import { useState, useCallback, useEffect } from 'react'

interface SearchBarProps {
  onSearch: (query: string) => void
  placeholder?: string
}

export function SearchBar({ onSearch, placeholder = 'Search commands, tools, or categories...' }: SearchBarProps) {
  const [query, setQuery] = useState('')

  const handleSearch = useCallback((value: string) => {
    setQuery(value)
    onSearch(value)
  }, [onSearch])

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query)
    }, 300)

    return () => clearTimeout(timer)
  }, [query, onSearch])

  return (
    <div className="w-full relative">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-3.5 rounded-lg bg-secondary/50 border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent/50 focus:bg-secondary transition-all duration-200 backdrop-blur-sm"
        aria-label="Search commands"
      />
    </div>
  )
}
