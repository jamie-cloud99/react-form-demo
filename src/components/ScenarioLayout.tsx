import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

interface ScenarioLayoutProps {
  title: string
  description: string
  children: ReactNode
  showBackButton?: boolean
}

export function ScenarioLayout({ 
  title, 
  description, 
  children, 
  showBackButton = true 
}: ScenarioLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        {showBackButton && (
          <Link 
            to="/" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Overview
          </Link>
        )}
        
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>

      {/* Content */}
      <div className="space-y-8">
        {children}
      </div>
    </div>
  )
}