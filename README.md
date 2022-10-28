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
//in app.jsx call the provider
function App() {
    return (
        <SnackbarProvider>
            <div className="app">
                <Header/>
                <Router/> 
            </div>
        </SnackbarProvider>
    ); 
}
```
then
```jsx
//in other jsx file 
const {openSnackbar} = useSnackbarContext() ; 
function openTheSnackBar () {
    openSnackbar('It will open the snackbar','info') ; 
}
```
openSnackbar method have two arguments. 
 - **Message** : *mandatory*   - string
 - **Severity** : *optional*   - string

severity can take : success | info | warning | error 
##### success by default

# Authors and acknowledgment
 - [Alexandre BAUDRY](https://github.com/Alexandrebdry)
 - [Amin NAIRI](https://github.com/aminnairi)