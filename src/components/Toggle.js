import react from "react";
import { Switch } from '@mui/material';

export const Toggle = ({theme, toggleTheme}) => {
    return(
        <Switch onClick={toggleTheme}></Switch>
    )
}