import { Grid, Typography } from "@mui/material"


export const FooterComp = () => {
  return (
    <Grid
        container
        justifyContent= 'end'
        sx={{
            marginY: 4,
        }}
    >
        <Typography
            variant="subtitulo1"
            color= 'primary'
            sx={{
                textTransform: 'capitalize',
                letterSpacing: 1.5
            }}
        >
            copyright giphy api
        </Typography>
    </Grid>
  )
}
