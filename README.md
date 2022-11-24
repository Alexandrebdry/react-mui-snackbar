# React MUI Snackbar
This is a react MUI helper for snackbar. Thanks to this package you can open a new 
snackbar by using useSnackbarContext method.
![Installed size](https://badgen.net/packagephobia/install/react-mui-snackbar)
[![NPM Version](https://badgen.net/npm/v/react-mui-snackbar)](https://www.npmjs.com/package/react-mui-snackbar)
![Vulnerabilities count](https://badgen.net/snyk/Alexandrebdry/react-mui-snackbar/)

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
            <button onClick={() => {openSnackbar('OPEN', 
                {/* sucess | error | warning | info => success by default ,
                 duration => 2000 */}) 
            }}>
                open snackbar
            </button> 
        </div>
    )
}

export default App ;
```
openSnackbar method have 3 arguments. 
 - **Message** : *mandatory*   - string
 - **Severity** : *optional*   - string
 - **duration** : *optional* - int

severity can take : success | info | warning | error 
##### success by default

duration must be > 0 
#### 6000 by default  (6s) 

# Authors and acknowledgment
 - [Alexandre BAUDRY](https://github.com/Alexandrebdry)
 - [Amin NAIRI](https://github.com/aminnairi)
