'use client'

import { useState, useEffect } from 'react'
import { List, ListItemButton } from '@mui/material'
import { getPlans, type Plan } from '@/services/plans'

function PlanList({selectedPlan, onSelect}:{selectedPlan: Plan | null; onSelect: (plan: Plan) => void}) {
  const [plans, setPlans] = useState<Plan[]>([])

  // ── STEP 1: Fetch plans ────────────────────────────────────────────────────
  // Add a useEffect here that runs once on mount.
  // Call getPlans() and store the result in plans.

  useEffect(() => {
    async function loadPlans() {
      const data = await getPlans()
      setPlans(data)
    }
    loadPlans()
  }, []
)

  // ──────────────────────────────────────────────────────────────────────────

  return (
    <List sx={{ width: 280, borderRight: '1px solid #eee' }}>
      {plans.map((p) => (
        <ListItemButton
          key={p.id}
          selected={selectedPlan?.id === p.id}
          onClick={() => onSelect(p)}
        >
          {p.title}
        </ListItemButton>
      ))}
    </List>
  )
}

export default PlanList
