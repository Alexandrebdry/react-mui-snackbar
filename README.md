# React MUI Snackbar

## Version 4.0.0 Released
This new version is a major update.

### Breaking changes
openSnackbar method has been updated. It do not take duration as parameter anymore.
Duration is now a prop of SnackbarProvider to have the same behavior across your app.

### New features
SnackbarProvider changes :
- SnackbarProvider now take a position prop to define the position of the snackbar.
- SnackbarProvider now take a duration prop to define the duration of the snackbar.
- SnackbarProvider is returned with a memo to avoid re-rendering of the provider.


Snackbar changes :
- Snackbar handle default style if severity is not provided.
- Snackbar handle severity style if severity is provided.
- Snackbar transition is now a slide in.
- Snackbar is returned with a memo to avoid re-rendering of the snackbar.
- Snackbar style can be change with MUI theme.

All functions are under useCallback to avoid re-rendering of the component and get better performance.

## Description

React MUI Snackbar is the greatest library to handle notifications in your React app. It has been built with Material UI and React.
Thanks to the library you will increase your productivity, your app will be more user friendly and you will increase your user experience !
Open a notification is now VERY VERY easy and FAST.

With React MUI Snackbar you can display cool notification in your app. 
You can choose the position and the duration of the notification by using the SnackbarProvider.

Everything has been think to be performant, cool and easy to use.
It provides you a simple method which is `openSnackbar` to open a notification.

openSnackbar method takes two parameters :
- message : the message to display in the notification
- severity : the severity of the notification. It can be `success`, `info`, `warning` or `error`. If not provided, the notification will be displayed with default style.

Everything is customizable. You can change the style of the notification with MUI theme.

Moreover, typescript is 100% supported.


[![NPM Version](https://badgen.net/npm/v/react-mui-snackbar)](https://www.npmjs.com/package/react-mui-snackbar)
![Installed size](https://badgen.net/packagephobia/install/react-mui-snackbar)
![Vulnerabilities count](https://badgen.net/snyk/Alexandrebdry/react-mui-snackbar/)

#### MIT License

### Demo
[View demo here]( https://alexandrebdry.vercel.app/react-mui-snackbar)

## Setup 

```jsx
// Create your react app with SnackbarProvider
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import SnackbarProvider  from "react-mui-SnackbarContent" ;

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <SnackbarProvider
                duration={6000}
                position={{
                    vertical:'bottom', 
                    horizontal:'right'
            }}
            >
                <App />
            </SnackbarProvider>
        </BrowserRouter>
    </StrictMode>
);

```

## Usage

```jsx
// Use the Snackbar context to get openSnackbar method.
import {useSnackbarContext} from "react-mui-SnackbarContent";

function App() {

    const {openSnackbar} = useSnackbarContext() ;

    return (
        <div>
            <button onClick={() => {
                openSnackbar({
                    message:'I love MUI Snackbar',
                    severity:''
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

### SnackbarProvider props
| Parameter | Type     |  Description  | Default                                  |
| :-------- | :------- | :-------------------------------- |------------------------------------------|
| `duration`      | `number` | The duration of the snackbar in ms | `6000`                                   |
| `position` | `SnackbarOrigin` | The position of the snackbar | `{vertical:'bottom', horizontal:'left'}` |

vertical can be : `top` or `bottom`
horizontal can be : `left` or `right`

### openSnackbar methods
| Parameter | Type     |  Description  | Default |
| :-------- | :------- | :-------------------------------- |---------|
| `message`      | `string` | **Required**. The message to display | `null`  |
| `severity` | `AlertColor` | It can be `success`, `info`, `warning` or `error` | `none`  |

Severity is not mandatory. It will display default style of snackbar message if not provided.


## Next steps  - Coming soon

- Unit test


