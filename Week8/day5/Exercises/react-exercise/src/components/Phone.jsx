import {useState} from 'react';

function Phone () {

const [phone,setPhone]= useState ({    
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020});

const changeColor=() => {
    setPhone(prevState =>({
        ... prevState,
        color: "blue"
    }) );
};

return (
    <>
    <h3>My phone is a {phone.brand}</h3>
    <h4>It is a {phone.color} {phone.model} from {phone.year}</h4>
    <button onClick={changeColor}>Change color to blue</button>
    </>
);


};

export default Phone;


