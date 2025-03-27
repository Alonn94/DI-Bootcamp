import "./App.css";
import UsersList from "./components/UsersList";
import Userarr from './users.json';


console.log(Userarr);

 
function App(){
  return (
    <>  
    <UsersList users={Userarr}/>
    
    </>
  )
}
export default App;

