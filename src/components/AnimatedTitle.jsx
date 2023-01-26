import { Grid, Typography } from '@mui/material'

export const AnimatedTitle = () => {
  return (
    <Grid
      alignItems= 'center'
      container
      justifyContent='start'
      sx={{
        marginY: 2,
      }}
    >
      <Typography
        data-text='Gifs app by Luis Carrasco.'
        variant='h4'
        sx={{
          fontSize: {
            xs: 20,
            sm: 22.5,
            md: 25,
          },
        }}
      >
        Gifs app by Luis Carrasco.
      </Typography> 
    </Grid>
  )
}
