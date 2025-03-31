import {useState} from 'react';

const BuggyCounter =() => {
    const [count, setCount] =useState(0);

    if (count > 5) {
        throw new Error("I CRASHED");
    }

    return (
        <>
        <h1>Count : {count} </h1>
        <button onClick={() => setCount (count +1)}> +1 </button>
        </>
    );

};

export default BuggyCounter;