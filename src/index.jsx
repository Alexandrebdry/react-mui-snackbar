import React, {createContext, useCallback, useContext, useState} from "react" ;
import {Alert, Snackbar} from "@mui/material";

export const SnackbarContext = createContext({}) ;

const SnackbarProvider = ({children}) => {

    const [open, setOpen] = useState(false) ;
    const [message, setMessage] = useState('') ;
    const [severity, setSeverity] = useState('success') ;
    const [duration, setDuration] = useState(6000) ;

    const openSnackbar = useCallback( ({message: message, severity: severity = 'success' , duration: duration = 6000}) => {
        if (typeof message !== "string") return
        if(severity === 'info' || severity === 'success' || severity === 'warning' || severity === 'error') {
            setMessage(message) ;
            setSeverity(severity) ;
            setOpen(true) ;
        }
        if(duration > 0 && typeof duration === "number")
            setDuration(duration) ;
    },[message,open,severity]);

    const closeSnackbar = () => {setOpen(false) ;}
    return (
        <SnackbarContext.Provider value={{openSnackbar}}>
        {
            message &&
            <Snackbar open={open} onClose={closeSnackbar} autoHideDuration={duration}>
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
export const useSnackBarContext = () => useContext(SnackbarContext) ;

