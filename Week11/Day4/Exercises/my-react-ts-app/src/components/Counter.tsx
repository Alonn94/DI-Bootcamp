import {useState} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState<number>(0);
    const [lastAction, setLastAction]= useState <string | null>(null);


// increment handler 

const increment = () => {
    setCounter((prevCounter) => prevCounter +1);
    setLastAction("incremented");
};

// decrement handler
const decrement = () => {
    setCounter((prevCounter) => prevCounter -1);
    setLastAction("decremented");
};

return (
    <div>
        <h1>Counter: {counter}</h1>
        <p>Last action: {lastAction}</p>
        <button onClick={increment}>INCREMENT</button>
        <button onClick={decrement}>DECREMENT</button>
    </div>
);
}

export default Counter;


