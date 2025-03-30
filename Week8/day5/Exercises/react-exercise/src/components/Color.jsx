import {useState, useEffect} from 'react';


function Color () {
    const [favouriteColor, setFavouriteColor] = useState('red');

//useEffect runs after render (initial + every update)

    useEffect (() =>{
        alert('useEffect reached');
    }, [favouriteColor]); //only runs when favouriteColor changes


    const changeColor = () => {
        setFavouriteColor('blue');
    };


    return (
        <>
        <h1>My favourite color is {favouriteColor}</h1>
        <button onClick={changeColor}>Change color to blue</button>
        </>

    );
};

export default Color;




