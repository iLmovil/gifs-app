import { Box, CircularProgress } from '@mui/material'

export const LoadingComp = () => {

  return (
    <Box
        className='loading-position' 
    >
      <CircularProgress />
    </Box>
  )
}
