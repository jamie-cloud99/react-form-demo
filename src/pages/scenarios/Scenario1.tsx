import { ScenarioLayout } from '@/components/ScenarioLayout'
import { ContactForm } from '@/features/contact-form/ContactForm'

export function Scenario1() {
  return (
    <ScenarioLayout
      title="Scenario 1: Contact Form - useState"
      description="Simple form with useState for basic state management"
    >
      {/* Explanation Section */}
      <div className="prose max-w-none">
        <h3 className="text-lg font-semibold mb-3">When to use useState for forms:</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-6">
          <li>Single page forms with few fields</li>
          <li>Simple validation requirements</li>
          <li>No complex field interdependencies</li>
          <li>Form state doesn't need to be shared across components</li>
        </ul>
        
        <h3 className="text-lg font-semibold mb-3">Key features demonstrated:</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-6">
          <li>Individual state management with <code>useState</code></li>
          <li>Basic form validation with error states</li>
          <li>Controlled inputs with onChange handlers</li>
          <li>Loading and success/error states</li>
          <li>Form reset after successful submission</li>
        </ul>
      </div>

      {/* Demo Section */}
      <div className="border rounded-lg p-6 bg-muted/50">
        <h3 className="text-lg font-semibold mb-4">Live Demo</h3>
        <ContactForm />
      </div>
    </ScenarioLayout>
  )
}