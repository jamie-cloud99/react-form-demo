import { Outlet, Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

const scenarios = [
  { path: '/', label: 'Home', title: 'Overview' },
  { path: '/scenario-1', label: 'Scenario 1', title: 'Contact Form - useState' },
  { path: '/scenario-2', label: 'Scenario 2', title: 'User Profile - useReducer' },
  { path: '/scenario-3', label: 'Scenario 3', title: 'Registration - RHF + Zod' },
  { path: '/scenario-4', label: 'Scenario 4', title: 'Checkout Wizard - useState + lift' },
  { path: '/scenario-5', label: 'Scenario 5', title: 'Onboarding - useReducer + Context' },
  { path: '/scenario-6', label: 'Scenario 6', title: 'App Settings - Zustand' },
  { path: '/scenario-7', label: 'Scenario 7', title: 'Job Application - RHF + Zustand' },
  { path: '/scenario-8', label: 'Scenario 8', title: 'Product Order - Dynamic Form' },
  { path: '/scenario-9', label: 'Scenario 9', title: 'Survey Builder - Dependencies' },
]

export function Layout() {
  const location = useLocation()
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <Link to="/" className="font-bold text-xl">
            React Form Demo
          </Link>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-muted/50 min-h-[calc(100vh-4rem)]">
          <nav className="p-4">
            <ul className="space-y-2">
              {scenarios.map((scenario) => {
                const isActive = location.pathname === scenario.path || 
                  (scenario.path !== '/' && location.pathname.startsWith(scenario.path))
                
                return (
                  <li key={scenario.path}>
                    <Link
                      to={scenario.path}
                      className={cn(
                        'block px-3 py-2 rounded-md text-sm transition-colors',
                        isActive
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted'
                      )}
                    >
                      <div className="font-medium">{scenario.label}</div>
                      <div className="text-xs opacity-75">{scenario.title}</div>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}