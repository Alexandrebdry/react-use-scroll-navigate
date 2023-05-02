# React use scroll navigate
This is a react hook that allows you to navigate to a specific section of a page by scrolling to it.

## Demo 

[Visit demo page](https://alexandrebdry.vercel.app/react-scroll-navigate)

## Installation
```bash
npm install react-use-scroll-navigate
```

## Usage
### useScrollNavigate
```jsx
import useScrollNavigate from 'react-use-scroll-navigate';

const App = () => {

    const { scrollNavigateError, scrollNavigate } = useScrollNavigate();
  
  return (
    <div>
        <button onClick={ ()=> { 
            scrollNavigate('/'); //It will navigate & scroll to the top ! 
        }}>
            Go to homepage!
        </button> 
    </div>
  );
};
```

### NavigationRef
```jsx

//Main app 

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <NavigateContextProvider> {/*Ref navigation scroll navigation works with context*/}
                <App /> {/*here is the rooter */}
            </NavigateContextProvider>
        </BrowserRouter>
    </StrictMode>
)

```
```jsx

//On one page

export default () => {
    const { navigateToRef } = useNavigateContext();

    return (
        <Fragment>
            <h1>About</h1>
            <button onClick={() => navigateToRef("/")}>Home</button>
        </Fragment>
    )
}
```

```jsx
// On another page
export default () => {
    const { navigationRef } = useNavigateContext();

    return (
        <Fragment>
            <h1>Home</h1>
            <div ref={navigationRef} />
        </Fragment>
    )
}
```

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Contributing
Pull requests are welcome. 
For major changes, please open an issue first to discuss what you would like to change.



## Authors and acknowledgment
- [Alexandre BAUDRY](https://github.com/Alexandrebdry)
- [Amin NAIRI](https://github.com/aminnairi)