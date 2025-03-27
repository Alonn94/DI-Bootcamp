import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {

  return (
    <div>
      <h2 style = {{textAlign:'center'}}>Travel Carousel</h2>
      <Carousel 
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval = {3000}
      transitionTime={500}>
        <div>
          <img
            src="https://cdn.openart.ai/uploads/image_igrCKUAU_1687412986379_512.webp"
            alt="Hong Kong"/>
            <p>Hong Kong</p>
        </div>
        <div>
        <img
        src="https://media.istockphoto.com/id/1255907031/photo/cityscape-of-macau-city-at-twilight-night.jpg?s=2048x2048&w=is&k=20&c=Ak52FWGlspihdvB5Qu4MY3XI5mfNEbdyZgLd9oHSoWs="
        alt="Macao"/>
        <p>Macao</p>
        </div>
        <div>
          <img  
          src="https://images.alphacoders.com/754/754541.jpg"
          alt="Japan"/>
          <p>Japan</p>
          </div>
          <div>
            <img
            src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9d4a564f-746a-4c09-80f9-fac15b21c406/dfwwxy0-85a0909d-1ef1-48bb-8ade-d1cabf718a95.jpg/v1/fill/w_1182,h_676,q_70,strp/las_vegas__2__by_imagineaiart99_dfwwxy0-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzlkNGE1NjRmLTc0NmEtNGMwOS04MGY5LWZhYzE1YjIxYzQwNlwvZGZ3d3h5MC04NWEwOTA5ZC0xZWYxLTQ4YmItOGFkZS1kMWNhYmY3MThhOTUuanBnIiwiaGVpZ2h0IjoiPD0xMDk4Iiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvOWQ0YTU2NGYtNzQ2YS00YzA5LTgwZjktZmFjMTViMjFjNDA2XC9pbWFnaW5lYWlhcnQ5OS00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.Z5wr5v8OHmm58dnNBpbTf4_5mA6WqTq8zVgh2YxJnbY"
            alt="Las Vegas"/>
            <p>Las Vegas</p>
          </div>
              </Carousel>

    </div>
  );
};

export default App
