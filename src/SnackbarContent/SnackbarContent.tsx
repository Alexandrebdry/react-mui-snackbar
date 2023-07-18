import React from "react";
import {Alert, AlertColor, IconButton, Slide, SlideProps, Snackbar, SnackbarOrigin} from "@mui/material";
import {Close} from "@mui/icons-material";

interface SnackbarContentProps {
    position: SnackbarOrigin
    duration: number
    message: string,
    callback: () => void
    severity?: SnackbarContentSeverityType,
    direction:SlideProps['direction']

}

type TransitionProps = Omit<SlideProps, 'direction'>;
type SnackbarContentSeverityType = AlertColor | ""

export interface SnackbarContentInterface {
    severity?: SnackbarContentSeverityType
    message: string
}

const SnackbarContent = ({position, direction, duration, message, callback, severity = ""}: SnackbarContentProps) => {

    const closeSnackbar = React.useCallback(() => {
        callback() ;
    },[callback] );

    const sliderTransition = React.useCallback((props: TransitionProps) => {
        return <Slide {...props} direction={direction} />;
    },[direction]) ;

    return (
        severity === "" ?
            <Snackbar
                TransitionComponent={sliderTransition}
                anchorOrigin={position}
                open={true}
                onClose={closeSnackbar}
                message={message}
                autoHideDuration={duration}
                action={
                    <React.Fragment>
                        <IconButton onClick={closeSnackbar}>
                            <Close sx={{
                                color: "white"
                            }}/>
                        </IconButton>
                    </React.Fragment>
                }
            />
            :
            <Snackbar
                TransitionComponent={sliderTransition}
                anchorOrigin={position}
                open={true}
                onClose={closeSnackbar}
                message={message}
                autoHideDuration={duration}
            >
                {
                    // @ts-ignore
                    <Alert severity={severity} onClose={closeSnackbar} >
                        {message}
                    </Alert>
                }
            </Snackbar>
    )
}

SnackbarContent.displayName = "SnackbarContent" ;
export default React.memo(SnackbarContent) ;