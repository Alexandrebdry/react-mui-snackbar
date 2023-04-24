import React, {createContext, ReactNode, useCallback, useContext, useState} from "react";
import {Alert, AlertColor, Snackbar} from "@mui/material";

export const SnackbarContext = createContext({}) ;

export interface SnackbarProviderProps {
    children: ReactNode
}


const SnackbarProvider = ( {children} : SnackbarProviderProps ) => {
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState<AlertColor>("success");
    const [message, setMessage] = useState("");
    const [duration, setDuration] = useState(6000) ;

    interface openSnackbarInterface {
        message: string
        severity: AlertColor
        duration: number

    }
    const openSnackbar = useCallback(({
        severity  = "success",
        duration = 6000,
        message
    } :openSnackbarInterface  )=> {

        setMessage(message) ;
        setSeverity(severity) ;
        if(duration > 0)
            setDuration(duration) ;
        else setDuration(6000) ;
        setOpen(true) ;

    }  , [message,open,severity]) ;

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
export const useSnackbarContext = () => useContext(SnackbarContext) ;