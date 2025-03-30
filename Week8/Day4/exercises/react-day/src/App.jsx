import './App.css'
import UserfavouriteAnimals from './favouriteanimals.jsx';
import Exercise from './Exercise.jsx';


const myelement = <h1> I love JSX!</h1>
const sum = 5+5

function App() {

  const user = {
    firstName:'Bob',
    lastName:'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
    };

  return (
<> 
 <h1/> Hello World!<h1/>
 <h3>{myelement}</h3>
 <h3>First name:{user.firstName}</h3>
  <h3>Last name:{user.lastName}</h3>
 <p> React is {sum} times better with JSX </p>
 <UserfavouriteAnimals favAnimals={user.favAnimals}/>
  <Exercise/>
</> 

);
}; 


export default App
