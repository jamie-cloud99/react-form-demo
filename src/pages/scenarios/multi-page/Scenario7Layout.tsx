import { ScenarioLayout } from '@/components/ScenarioLayout'

export function Scenario7Layout() {
  return (
    <ScenarioLayout
      title="Scenario 7: Job Application - RHF + Zustand + localStorage"
      description="Multi-section form with draft saving and persistence"
    >
      <div className="p-6 border rounded-lg">
        <p>Job application implementation coming soon...</p>
        <p className="text-sm text-muted-foreground mt-2">
          This will demonstrate react-hook-form + Zustand + localStorage.
        </p>
      </div>
    </ScenarioLayout>
  )
}