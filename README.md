# React use scroll navigate
This is a react hook that allows you to navigate to a specific section of a page by scrolling to it.

## Installation
```bash
npm install react-use-scroll-navigate
```

## Usage
```jsx
import useScrollNavigate from 'react-use-scroll-navigate';

const App = () => {
  
  const navgiate = useScrollNavigate();
  
  return (
    <div>
        <button onClick={ ()=> {navgiate('/') } )}>Go to homepage</button> 
    </div>
  );
};
```

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Contributing
Pull requests are welcome. 
For major changes, please open an issue first to discuss what you would like to change.



## Authors and acknowledgment
- [Alexandre BAUDRY](https://github.com/Alexandrebdry)