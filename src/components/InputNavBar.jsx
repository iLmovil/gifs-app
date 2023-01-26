import { useEffect, useState } from "react";
import { Grid, IconButton, InputAdornment, TextField } from "@mui/material"

import SearchIcon from '@mui/icons-material/Search';
import { useStore } from "../hooks/useStore";

export const InputNavBar = () => {

  const { getGifs } = useStore()
  const [gif, setGif] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if( gif.length < 3 ) return
    getGifs( gif )
    setGif('')
  }

  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={ onSubmit }
    >
        <TextField
            autoFocus
            color="primary"
            focused 
            label="Gifs"
            onChange={ (e) => setGif( e.target.value )}
            value={ gif }
            variant="outlined"
            sx={{
              input: {
                color: 'primary.main',
              },
              marginBottom: 2,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  aria-label="search"   
                >
                  <IconButton
                    type="submit"
                    color="primary"
                  >
                    <SearchIcon/>
                  </IconButton>
                </InputAdornment>
              ),
            }}
        />
    </form>
  )
}