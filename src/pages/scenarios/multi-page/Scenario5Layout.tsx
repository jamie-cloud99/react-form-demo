import { ScenarioLayout } from '@/components/ScenarioLayout'

export function Scenario5Layout() {
  return (
    <ScenarioLayout
      title="Scenario 5: Onboarding Flow - useReducer + Context"
      description="Multi-step onboarding with complex state shared via Context"
    >
      <div className="p-6 border rounded-lg">
        <p>Onboarding flow implementation coming soon...</p>
        <p className="text-sm text-muted-foreground mt-2">
          This will demonstrate useReducer + Context for cross-page state.
        </p>
      </div>
    </ScenarioLayout>
  )
}