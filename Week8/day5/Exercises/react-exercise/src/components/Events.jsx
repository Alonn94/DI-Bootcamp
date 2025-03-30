import {useState} from 'react';

const Events = () => {
    const clickMe = () => {
        alert(' I was clicked!');
    };

    const handleKeyDown = (e) =>{
        if (event.key === 'Enter'){
            alert(`You typed:${event.target.value}`);
        }
    };

    const toggleButton =()=>{
        setIsToggleOn(!isToggleOn);
    }


    const [isToggleOn, setIsToggleOn] = useState(true)

    return (
        <>
        <h3> Hello </h3>
            <button onClick={clickMe}>Click Me</button>
            <input type="Text" onKeyDown = {handleKeyDown}/>
            <button onClick={toggleButton}>{isToggleOn ? 'ON':'OFF'} </button>

        </>
    );
};

export default Events;

