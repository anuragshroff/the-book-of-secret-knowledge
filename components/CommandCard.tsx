import { Command } from '@/lib/commands'
import Link from 'next/link'

interface CommandCardProps {
  command: Command
}

export function CommandCard({ command }: CommandCardProps) {
  return (
    <div className="group relative bg-card border border-border/50 rounded-lg p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 hover:bg-card/80">
      <div className="flex flex-col gap-4 h-full">
        <div>
          {command.url ? (
            <Link
              href={command.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-foreground hover:text-accent transition-colors duration-200 line-clamp-2"
            >
              {command.name}
            </Link>
          ) : (
            <h3 className="text-lg font-bold text-foreground line-clamp-2">{command.name}</h3>
          )}
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3 flex-grow leading-relaxed">
          {command.description}
        </p>

        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
              {command.category}
            </span>
            {command.url && (
              <span className="text-lg text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                ↗
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {command.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-muted/50 text-muted-foreground px-2 py-1 rounded border border-border/30 hover:border-border transition-colors"
              >
                {tag}
              </span>
            ))}
            {command.tags.length > 3 && (
              <span className="text-xs text-muted-foreground px-2 py-1">
                +{command.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
