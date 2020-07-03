import React from 'react';
import PropTypes from "prop-types";

function Food({name, picture, rating}){
  return <div>
    <h2>
      I like {name}
    </h2>
    <h2>{rating}/5.0</h2>
    <img src={picture}></img>
  </div>
}
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image:
    "https://t1.daumcdn.net/liveboard/realfood/242c32cb349f4a7fbd23a024f6d85cbe.jpg",
    rating:5
  },
  {
    id:2,
    name: "Samgyeopsal",
    image:
    "https://lh3.googleusercontent.com/proxy/jlKRTaR8IDgRXN46rQB9JH67ovDdfGv9FebJcPnkoYnWkyNdvpeSl3xPJAG5sHfJH0e9pXdv0BIE6PK-MZ_j1sIdY3LKiPOFKJKT0eE_GHzHUiY90mFGe6g1x9TCL1WISkDe6bwecg",
    rating:4
  },
  {
    id:3,
    name: "Bibimbap",
    image:
    "https://t1.daumcdn.net/liveboard/dailylife/9b41085280b04ddaa1092dc61d054c70.JPG",
    rating:4.9
  },
  {
    id:4,
    name: "Doncasu",
    image:
    "https://freshdon.com/wp-content/uploads/2017/09/K-006.jpg",
    rating:3
  },
  {
    id:5,
    name: "KimBap",
    image:
    "https://recipe1.ezmember.co.kr/cache/recipe/2016/11/28/6bc7f3c7a3fdf517e6943dd14a9b3df01.jpg",
    rating:5
  }
]

function App() {
  return (
    <div className="App">
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating ={dish.rating} />)}
    </div>
  );
}


export default App;
