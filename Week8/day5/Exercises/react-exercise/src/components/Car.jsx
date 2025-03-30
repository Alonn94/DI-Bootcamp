import  {useState} from 'react';
import Garage from './Garage'
import Events from './Events'
function Car(props) {
    
    const [color,setColor] = useState('red');
  return (
    <div>
      <h3> This car is a {color} {props.car.model}</h3>
      <Garage size="small"/>
      <Events/>
    </div>
  );
}

export default Car;

