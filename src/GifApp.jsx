import { useEffect } from "react";
import { Box, CssBaseline, Grid } from "@mui/material"
import { CarouselList, FooterComp, GifsGallery, GifsResult, InputNavBar, LoadingComp, NavBar } from "./components";

import { useStore } from "./hooks/useStore";

export const GifApp = () => {

  const { getTrendingGifs, isLoading, data } = useStore()

  useEffect(() => {
    getTrendingGifs()
    console.log('useEffect getTrendingGifs')
  }, [])
  

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center',
      }}
    >
      <CssBaseline/>

      <NavBar/>

      <Grid
        container
        justifyContent= 'center'
        sx={{
          paddingTop: 10,
          paddingX: 1,
          maxWidth: 1080, 
        }}
      >
        <CarouselList/>
        <InputNavBar/>
        <GifsResult/>

        {
          isLoading
          ? <LoadingComp/>
          : <Grid
              item
              className="grid-wrapper"
              sx={{
                width: {
                  xs: 400,
                  sm: 760,
                  md: 1080
                },
              }}
            >
              {
                data && data.map((gifs) => (
                  <GifsGallery
                    key={ gifs.id }
                    { ...gifs }
                  />
                ))
              }
            </Grid>
        }

        <FooterComp/>

      </Grid>
      
    </Box>
  )
}

/*
{
                data && data.map((gifs) => (
                  <GifsGallery
                    key={ gifs.id }
                    { ...gifs }
                  />
                ))
              }

*/
