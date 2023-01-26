import { NavLink } from "react-router-dom"
import { Box, List } from "@mui/material"
import { useStore } from "../hooks/useStore"

const menu = ['animals','actors','actions','anime','arts','athletics','cartoons','cars','comedy','clips','emotions','gaming','memes','nature','sports','terror','town','technology']

export const CarouselList = () => {

    const { getGifs } = useStore()

    const onSelectedGifs = ( event ) => {
        getGifs( event.target.innerHTML )
    }

    const navLinkStyle = ({ isActive }) => {
        return{
            class: isActive ? 'active' : '',
        }
    }

  return (
    <Box
        sx={{
            display: 'flex',
            overflow: 'hidden',
            width: '100%',
            marginBottom: 2
        }}
    >
        <List
            className="slide-track"
        >
            {
                menu.map((item, index) => (
                    <NavLink
                        key={ index }
                        onClick={ onSelectedGifs }
                        style={ navLinkStyle }
                        to={ item }
                    >
                        { item }
                    </NavLink>
                ))
            }
        </List>
    </Box>
  )
}

/**
 * 
 */
