import Navbar from './navbar'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeart, faThumbsUp, faChildren } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useMemo } from 'react' 
import { Link } from 'react-router-dom'
import axios from 'axios'
import CourseCards from './courseCards';
//FILTER FUNCTION
const handleFilter = (data, value, filteredName) => {
  return value ? [...data].filter(item => item[filteredName].toLowerCase().includes(value.toLowerCase())) : [...data]
}
//TOGGLE FUNCTION
const handleToggle = (data, element) =>{
  return data === +element.target.id ? null : +element.target.id 
}

function Home() {

  //AWESOME FONTS
  library.add(
    faMagnifyingGlass,
    faHeart,
    faThumbsUp,
    faChildren
  )

  const [categories, setCategories] = useState(new Array(50).fill('').map((_, i)=>
  (
    {id:i, 
    name:'Programming'}
  )))


  const [courses, setCourses] = useState([])
  
  
  const [categoryId, setCategoryId] = useState(null)
  const [savedId, setSavedId] = useState(null)
  const [searchFilter, setSearchFilter] = useState("")


  //HANDLE CATEGORY BUTTON
  const handleCategoryButton = (e) =>{
    setCategoryId(handleToggle(categoryId, e))
  }
  //SEARCHBAR
  const filteredResults = useMemo(()=>{
    return handleFilter(courses, searchFilter, 'name')
  },[courses, searchFilter])
  console.log(savedId)


  useEffect(()=>{
    axios
    .get('http://159.203.126.141/course/')
    .then(res=>{setCourses(res.data)})
  },[])

  // useEffect(()=>{
  //   axios
  //   .get('')
  //   .then(res=>{setCategories(res.data)})
  // },[])
  
  console.log(courses)
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
        <CourseCards courses={filteredResults}/>
      </div>
    
    </>
  );
}

export default Home;
