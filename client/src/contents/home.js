import Navbar from './navbar'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react' 
function Home() {
  library.add(
    faMagnifyingGlass
)
  const categories = new Array(10).fill('Food')
  const surveys = new Array(20).fill('').map((_, i)=>(
    {
      id: i,
      img:'https://cdn-icons-png.flaticon.com/512/219/219983.png',
      name:'Adam Sendler',
      syrveys: 9

    }
  ))
  return (
    <div className="home">
    <Navbar/>
    <div className='filter-bar'>
      <div className='search-bar'>
      <input className='Search' placeholder='Search..'/>
      <div className='search-icon'><FontAwesomeIcon icon={faMagnifyingGlass} color="white"></FontAwesomeIcon></div>
      </div>
      <div className='categories'>
        {categories.map((category, i)=>(
          <button key={i}>{category}</button>
        ))}
      </div>
      <div className='surveys'>
        {
          surveys.map((survey, i)=>(
            <div className='survey-card'>
              <img src={survey.img} alt="Oops"/>
              <div className='survey-info'>
              <h2>{survey.name}</h2>
              <p>Surveys: {survey.syrveys}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    </div>
  );
}

export default Home;
