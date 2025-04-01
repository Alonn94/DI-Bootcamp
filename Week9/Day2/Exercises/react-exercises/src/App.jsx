import { useState } from 'react';
import {BrowserRouter,Routes, Route, NavLink} from 'react-router-dom';
import './App.css'
import ErrorBoundary from './ErrorBoundary'
import PostList from './PostList'
import Example1 from './Example1'
import Example2 from './Example2'

function HomeScreen () {
  return <h2>Home</h2>;
}

function ProfileScreen () {
  return <h2>Profile</h2>

}
function ShopScreen () {
  throw new Error ("An error has occured")
};



function App() {


  const postData = async () => {
    try {
      const response = await fetch("https://webhook.site/4b32635c-db6d-435c-a71f-e218bda62802",{
        method: "Post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          key1: "myusername",
          email: "mymail@gmail.com",
          name: "Isaac",
          lastname :"Doe",
          age:27
        })
      });
      const data = await response.text();
      console.log(data);
    } catch (error){
      console.error(error);
    }
  };

  return (
    <>
    <h1>React Post Json Demo</h1>
    <button onClick={postData}>Send Post request</button>
    {/* <BrowserRouter>
      <nav>

        <NavLink to="/" element ={<HomeScreen/>}>Home</NavLink> 
        <NavLink to="/profile" element = {<ProfileScreen/>} >Profile</NavLink>
        <NavLink to="/shop" element = {<ShopScreen/>}>Shop</NavLink>
        
      </nav>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element ={<HomeScreen/>}/>
          <Route path="/profile" element = {<ProfileScreen/>}/>
          <Route path="/shop" element = {<ShopScreen/>}/>

        </Routes>
        </ErrorBoundary> 
    </BrowserRouter>
    <Example1/>
    <Example2/>
    <Example3/>
    <PostList/> */}

    </>
  )
}

export default App
