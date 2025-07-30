import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { HomePage } from '@/pages/HomePage'

// Single-page scenarios
import { Scenario1 } from '@/pages/scenarios/Scenario1'
import { Scenario2 } from '@/pages/scenarios/Scenario2'
import { Scenario3 } from '@/pages/scenarios/Scenario3'
import { Scenario6 } from '@/pages/scenarios/Scenario6'
import { Scenario9 } from '@/pages/scenarios/Scenario9'

// Multi-page scenario layouts
import { Scenario4Layout } from '@/pages/scenarios/multi-page/Scenario4Layout'
import { Scenario5Layout } from '@/pages/scenarios/multi-page/Scenario5Layout'
import { Scenario7Layout } from '@/pages/scenarios/multi-page/Scenario7Layout'
import { Scenario8Layout } from '@/pages/scenarios/multi-page/Scenario8Layout'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          
          {/* Single-page scenarios */}
          <Route path="scenario-1" element={<Scenario1 />} />
          <Route path="scenario-2" element={<Scenario2 />} />
          <Route path="scenario-3" element={<Scenario3 />} />
          <Route path="scenario-6" element={<Scenario6 />} />
          <Route path="scenario-9" element={<Scenario9 />} />
          
          {/* Multi-page scenarios with nested routes */}
          <Route path="scenario-4/*" element={<Scenario4Layout />} />
          <Route path="scenario-5/*" element={<Scenario5Layout />} />
          <Route path="scenario-7/*" element={<Scenario7Layout />} />
          <Route path="scenario-8/*" element={<Scenario8Layout />} />
          
          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}