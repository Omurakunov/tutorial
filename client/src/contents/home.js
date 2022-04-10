import Navbar from './navbar'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useMemo } from 'react' 
import { Link } from 'react-router-dom';
//Function of searchbar
const handleFilter = (data, value, filteredName) => {
  return value ? [...data].filter(item => item[filteredName].toLowerCase().includes(value.toLowerCase())) : [...data]
}
//Toggle function
const handleToggle = (data, element) =>{
  return data === +element.target.id ? null : +element.target.id 
}

function Home() {
  //Awesomefonts
  library.add(
    faMagnifyingGlass,
    faHeart
  )
  const [categories, setCategories] = useState(new Array(10).fill('').map((_, i)=>
  (
    {id:i, 
    name:'food'}
    )))

  const [surveys, setSurveys] = useState(new Array(20).fill('').map((_, i)=>(
    {
      id: i,
      img:"https://image.shutterstock.com/image-vector/vector-illustration-green-chalkboard-math-600w-1440952739.jpg",
      name:`Math for HighSchool#${i}`,
      questions: 25,
      done: 0,
      author: 'Adam Sendler'
    }
  )))
  const [categoryId, setCategoryId] = useState(null)
  const [savedId, setSavedId] = useState(null)
  const [searchFilter, setSearchFilter] = useState("")
  //Function of category button
  const handleCategoryButton = (e) =>{
    setCategoryId(handleToggle(categoryId, e))
  }
  const handleSaveButton = (e) =>{
    setSavedId(handleToggle(savedId, e))
  }
  //Searchbar function
  const filteredReuslts = useMemo(()=>{
    return handleFilter(surveys, searchFilter, 'name')
  },[surveys, searchFilter])
  console.log(savedId)
  return (
    <>
      <Navbar/>
      <div className="home">
        <div className='filter-bar'>
          <div className='search-bar'>
            <input className='Search' placeholder='Search..' value={searchFilter} onChange={(e)=>{setSearchFilter(e.target.value)}}/>
            <div className='search-icon'><FontAwesomeIcon icon={faMagnifyingGlass} color="white"></FontAwesomeIcon></div>
          </div>
          <div className='categories'>
            {
            categories.map((category, i)=>(
              <button className={categoryId === category.id? 'category-button active' : 'category-button'} id={category.id} onClick={handleCategoryButton} key={i}>{category.name}</button>
            ))
            }
          </div>
        </div>
        <div className='cards-container'>
          {
            filteredReuslts.map((survey, i)=>(
              <div className='survey-card' key={i}>
                <div className='survey-card-img'>
                <img src={survey.img} alt="Oops"/>
                </div>
                
                <div className='survey-card-info'>
                  <p>{survey.name}</p>
                  <p>{survey.done}/{survey.questions} Questions</p>
                  <Link to="/authorPage">{survey.author}</Link>
                </div>
                <button onClick={handleSaveButton} id={survey.id} key={i}><FontAwesomeIcon icon={faHeart} size="4x" color={savedId === survey.id ? 'rgba(0, 0, 0, 1)' : 'rgba(0,0,0,0.1)'}></FontAwesomeIcon></button>
                
              </div>
            ))
          }
        </div>
      </div>
    
    </>
  );
}

export default Home;
