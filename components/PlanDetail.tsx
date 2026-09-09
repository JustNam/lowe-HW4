'use client'

import { Box, Typography } from '@mui/material'

function PlanDetail({ plan }: { plan: { id: string; title: string; questions: unknown[] } | null }) {
  return (
    <Box sx={{ flex: 1, p: 4 }}>
      <Typography variant="h6">
        {plan?.title ?? 'Select a plan'}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        {plan ? JSON.stringify(plan.questions, null, 2) : '—'}
      </Typography>
    </Box>
  )
}

export default PlanDetail
