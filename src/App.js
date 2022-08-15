import React from "react";
import './App.css';
import Title from "./conponents/title/Title";
import Card from "./conponents/cards/Card";
import data from './conponents/cards/Cards-data';



function App() {
  return (
    <div className="App">
      <Title title="Homes guests love"/>
        <div className="homes_picture">
            {
                data.map((item) => {
            return <Card key = {item.id}
                         imageUrl = {item.imageUrl}
                         name = {item.name}
                         city = {item.city}
                         country = {item.country}
            />
        })
            }
        </div>
    </div>

  );
}

export default App;
