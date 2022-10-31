import React,{createContext, useContext, useState} from "react" ;
import {Alert, Snackbar} from "@mui/material";

export const SnackbarContext = createContext({}) ;
const SnackbarProvider = ({children}) => {

    const [open, setOpen] = useState(false) ;
    const [message, setMessage] = useState('') ;
    const [severity, setSeverity] = useState('') ;

    const openSnackbar = (message, severity = 'success' ) => {
        if (typeof message !== "string") return
        if(severity === 'info' || severity === 'success' || severity === 'warning' || severity === 'error') {
            setMessage(message) ;
            setSeverity(severity) ;
            setOpen(true) ;
        }
    };
    const closeSnackbar = () => {setOpen(false) ;}
    return (
        <SnackbarContext.Provider value={{openSnackbar}}>
        {
            message &&
            <Snackbar open={open} onClose={closeSnackbar} autoHideDuration={6000}>
                <Alert onClose={closeSnackbar} severity={severity} sx={{width:'100%'}}>
                    {message}
                </Alert>
            </Snackbar>
        }
        {children}
    </SnackbarContext.Provider>
    )
}
export default SnackbarProvider ;
