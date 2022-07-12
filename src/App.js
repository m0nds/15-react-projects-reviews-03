import React, {useState} from 'react';
import './App.css';
import {data} from './data.js'

function App() {

  const [count, setCount] = useState(0)
  const {id, img, name, role, description} = data[count]

  const checkNumbers =(numbers)=> {
    if(numbers > data.length -1){
      return 0
    }
    if(numbers < 0){
      return data.length -1
    }
    return numbers
  }

  const nextBtn = () => {
    setCount((count)=> {
      let newCount = count + 1
      return checkNumbers(newCount)
    })
  }

  const prevBtn = () => {
    setCount((count)=> {
      let newCount = count - 1
      return checkNumbers(newCount)
    })
  }

  const randomNumbers = () => {
    let randomPeople = Math.floor(Math.random() * data.length)
    if(randomPeople === count){
      return randomPeople = count + 1
    }
    setCount(checkNumbers(randomPeople))
  }
  
  return (
    <div className="container">
      <div className="heading">
        <h2>Our Reviews</h2>
        <div className="underline"></div>
      </div>
      <div className="reviews" key={id}>
        <img src={img} alt=""/>
        <h4>{name}</h4>
        <span>{role}</span>
        <p>{description}</p>
        <div className="btns">
          <input onClick={prevBtn} type="submit" value="<"/>
          <input onClick={nextBtn} type="submit" value=">"/>
        </div>
        <button className="submit" onClick={randomNumbers}>Surprise me</button>
      </div>
    </div>
  );
}

export default App;