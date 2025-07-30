import { ScenarioLayout } from '@/components/ScenarioLayout'

export function Scenario4Layout() {
  return (
    <ScenarioLayout
      title="Scenario 4: Checkout Wizard - useState + lift state"
      description="Multi-step checkout with state lifted to parent component"
    >
      <div className="p-6 border rounded-lg">
        <p>Checkout wizard implementation coming soon...</p>
        <p className="text-sm text-muted-foreground mt-2">
          This will demonstrate cross-page state management with nested routes.
        </p>
      </div>
    </ScenarioLayout>
  )
}