import { Grid, Typography } from '@mui/material'
import { useStore } from '../hooks/useStore'

export const GifsResult = () => {

  const { gif, error } = useStore()
  return (
    <Grid
        container
        justifyContent= 'start'
    >
      {
        error
        ?
        <Typography
            variant='h5'
            color= 'error'
            sx={{
              textTransform: 'capitalize',
              letterSpacing: 1.5,
              marginY: 2,
              fontSize: {
                xs: 20,
                sm: 22.5,
                md: 25,
              } 
            }}
        >
            { error }
        </Typography>
        :
        <Typography
            variant='h5'
            color= 'primary'
            sx={{
              textTransform: 'capitalize',
              letterSpacing: 1.5,
              marginY: 2,
              fontSize: {
                xs: 20,
                sm: 22.5,
                md: 25,
              } 
            }}
        >
            result for: 
            { gif }
        </Typography>
      }
    </Grid>
  )
}
