import { Link } from 'react-router-dom'
import { ArrowRight, Users, Settings, FileText, ShoppingCart, UserPlus, Briefcase, Package, ClipboardList, MessageSquare } from 'lucide-react'

const scenarios = [
  {
    id: 1,
    title: 'Contact Form',
    tech: 'useState',
    description: 'Simple form with basic state management',
    icon: MessageSquare,
    path: '/scenario-1',
    complexity: 'Simple',
    usage: 'Single page, few fields'
  },
  {
    id: 2,
    title: 'User Profile',
    tech: 'useReducer',
    description: 'Complex single page with multiple sections',
    icon: Users,
    path: '/scenario-2',
    complexity: 'Medium',
    usage: 'Complex interactions'
  },
  {
    id: 3,
    title: 'Registration',
    tech: 'react-hook-form + zod',
    description: 'Form with comprehensive validation',
    icon: UserPlus,
    path: '/scenario-3',
    complexity: 'Medium',
    usage: 'Validation required'
  },
  {
    id: 4,
    title: 'Checkout Wizard',
    tech: 'useState + lift',
    description: 'Multi-step checkout with lifted state',
    icon: ShoppingCart,
    path: '/scenario-4',
    complexity: 'Medium',
    usage: 'Cross-page simple'
  },
  {
    id: 5,
    title: 'Onboarding Flow',
    tech: 'useReducer + Context',
    description: 'Complex cross-page state with Context',
    icon: ClipboardList,
    path: '/scenario-5',
    complexity: 'Complex',
    usage: 'Multi-component sharing'
  },
  {
    id: 6,
    title: 'App Settings',
    tech: 'Zustand',
    description: 'Global state management',
    icon: Settings,
    path: '/scenario-6',
    complexity: 'Medium',
    usage: 'Global accessibility'
  },
  {
    id: 7,
    title: 'Job Application',
    tech: 'RHF + Zustand + localStorage',
    description: 'Multi-section form with draft saving',
    icon: Briefcase,
    path: '/scenario-7',
    complexity: 'Complex',
    usage: 'Draft saving + validation'
  },
  {
    id: 8,
    title: 'Product Order',
    tech: 'useForm({ values }) + Zustand',
    description: 'Dynamic form with reactive updates',
    icon: Package,
    path: '/scenario-8',
    complexity: 'Complex',
    usage: 'Dynamic reactive refill'
  },
  {
    id: 9,
    title: 'Survey Builder',
    tech: 'RHF + watch() + useFieldArray',
    description: 'Dynamic dependencies and conditional fields',
    icon: FileText,
    path: '/scenario-9',
    complexity: 'Complex',
    usage: 'Field dependencies'
  }
]

export function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        React Form Management Scenarios
      </h1>
      <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
        Explore 9 different approaches to form state management in React, from simple useState to complex cross-page flows.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scenarios.map((scenario) => {
          const Icon = scenario.icon
          return (
            <Link 
              key={scenario.id} 
              to={scenario.path}
              className="group block p-6 border rounded-lg hover:border-primary transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-md">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Scenario {scenario.id}</div>
                    <h3 className="font-semibold text-lg">{scenario.title}</h3>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="text-sm font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                  {scenario.tech}
                </div>
                <p className="text-sm text-muted-foreground">{scenario.description}</p>
              </div>
              
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Complexity: {scenario.complexity}</span>
                <span>{scenario.usage}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}