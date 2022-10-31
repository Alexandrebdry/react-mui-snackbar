# React MUI Snackbar
This is a react MUI helper for snackbar. Thanks to this package you can open a new 
snackbar by using useSnackbarContext method.
#### MIT License
## Installation
```bash
npm install react-mui-snackbar
```

## Usage 

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
then
```jsx
// Use the Snackbar context to get openSnackbar method. 
import {SnackbarContext} from "react-mui-snackbar";
import {useContext} from "react";

function App() {

    const {openSnackbar} = useContext(SnackbarContext) ;

    return (
        <div>
            <button onClick={() => {openSnackbar('OPEN', {/* sucess | error | warning | info => success by default*/})}}>open snackbar</button> 
        </div>
    )
}

export default App ;
```
openSnackbar method have two arguments. 
 - **Message** : *mandatory*   - string
 - **Severity** : *optional*   - string

severity can take : success | info | warning | error 
##### success by default

# Authors and acknowledgment
 - [Alexandre BAUDRY](https://github.com/Alexandrebdry)
 - [Amin NAIRI](https://github.com/aminnairi)