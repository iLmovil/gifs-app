import { AppBar, Toolbar } from "@mui/material"
import { useStore } from "../hooks/useStore"
import { InputNavBar } from "./InputNavBar";
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import { NavLink } from "react-router-dom";
import { AnimatedTitle } from "./AnimatedTitle";

export const NavBar = () => {

  const { onHomeReturn } = useStore()

  return (
    <AppBar 
      position="fixed" 
    >
      <Toolbar>

        <AnimatedTitle/>

        <NavLink
          onClick={ onHomeReturn }
          to='/'
        >
          <AddReactionOutlinedIcon
            fontSize="large"
            color="secondary"
          />
        </NavLink>

      </Toolbar>
    </AppBar>
  )
}
