# React MUI Snackbar 
This library helps you to use [MUI Snackbar](https://mui.com/material-ui/react-snackbar/)
across your app. 
Thanks to the Provider you can simply use the `openSnackbar` methods in your pages to display a new message. 

It manages opening/closing, message edition, duration and severity ! 

TypeScript support -  100%

[![NPM Version](https://badgen.net/npm/v/react-mui-snackbar)](https://www.npmjs.com/package/react-mui-snackbar)
![Installed size](https://badgen.net/packagephobia/install/react-mui-snackbar)
![Vulnerabilities count](https://badgen.net/snyk/Alexandrebdry/react-mui-snackbar/)

#### MIT License

### Demo
[View demo here]( https://react-mui-snackbar-testing-page.vercel.app/)

## Setup 

```jsx
// Create your react app with SnackbarProvider
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import SnackbarProvider  from "react-mui-snackbar" ;

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <SnackbarProvider>
                <App />
            </SnackbarProvider>
        </BrowserRouter>
    </StrictMode>
);

```

## Usage

```jsx
// Use the Snackbar context to get openSnackbar method. 
import {useSnackbarContext} from "react-mui-snackbar";

function App() {

    const {openSnackbar} = useSnackbarContext() ;

    return (
        <div>
            <button onClick={() => {
                openSnackbar({
                    message:'OPEN', 
                    severity: 'success' , 
                    duration: 3000 
                })
            }}>
                open snackbar
            </button>
        </div>
    )
}

export default App;
```

## Function parameters
### openSnackbar methods
| Parameter | Type     |  Description  | Default |
| :-------- | :------- | :-------------------------------- | ------ |
| `message`      | `string` | **Required**. The message to display | `null` |
| `severity` | `AlertColor` | It can be `success`, `info`, `warning` or `error` | `success` |
| `duration` | `number` | in millisecond (ms) | `6000` (6s) |


## Next steps  - Coming soon

- Possibility to stack alert
- Custom position 
- Unit test


