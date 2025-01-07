import { Link, Stack } from '@mui/material'
import React from 'react'

const MuiLink = () => {
  return (
    <Stack spacing={2} direction='row' m={4} p={3} sx={{border:'2px solid'}}>
        <Link href="#">About</Link>

        <Link href="#" color="secondary">Secondary</Link>
{/* TODO: underline hover = means hover karna para underline show kara ga . none means kabhi nahi */}
        <Link href="#" color='success' underline='hover'>Underline</Link>
    </Stack>
  )
}

export default MuiLink