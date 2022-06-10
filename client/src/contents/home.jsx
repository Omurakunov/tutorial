import Navbar from './navbar'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Suspense, lazy } from 'react';
import { faMagnifyingGlass, faHeart, faThumbsUp, faChildren } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useMemo } from 'react' 
import axios from 'axios'
import Select from 'react-select'
import config from './configs';
import CourseCards from './courseCards';
//FILTER FUNCTION
const handleFilter = (data, value, filteredName) => {
  return value ? [...data].filter(item => item[filteredName].toLowerCase().includes(value.toLowerCase())) : [...data]
}
const handleCategoryFilter = (data, value, filteredName) => {
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

  const [categories, setCategories] = useState([])
  const [courses, setCourses] = useState([])
  const [categoryId, setCategoryId] = useState(null)
  const [searchFilter, setSearchFilter] = useState("")
  const [token, setToken] = useState(localStorage.getItem('jwt'))
  const [ options, setOptions] = useState()
  const [ selectValue, setSelectValue] = useState()
  //HANDLE CATEGORY BUTTON
  const handleCategoryButton = (e) =>{
    setCategoryId(handleToggle(categoryId, e))
  }
  //SEARCHBAR
  const filteredResults = useMemo(()=>{
    return handleFilter(courses, searchFilter, 'name_of_course')
  },[courses, searchFilter])
  
  const finalFilteredResults = useMemo(()=>{
    return handleCategoryFilter(filteredResults, selectValue?.value, 'category')
    
  },[filteredResults, selectValue])


  const categoryReq = () =>{
      console.log()
      axios
      .get(`${config.Url}/category/category-list/`,{headers:{'Authorization' : `Token ${token}`}})
      .then(res=>{setCategories(res.data)})
      
    } 

    const coursesReq = () =>{
      console.log()
      axios
      .get(`${config.Url}/course/`,{headers:{'Authorization' : `Token ${token}`}})
      .then(res=>{setCourses(res.data)})
      
    }

  useEffect(()=>{
    categoryReq()
    coursesReq()
  },[])
  useEffect(()=>{
    setOptions(new Array(2).fill('').map((_, i)=>
      (
        {id:i, 
         label:categories[i]?.title,
         value:categories[i]?.title 
        }
      )))
  }, [categories])

console.log(courses)
console.log(categories)
  return (
    <>
      <Navbar/>
      {/* <img src={orange} alt="oops" className='bc-1'></img>
      <img src={blue} alt="oops" className='bc-2'></img> */}
      <div className="home">
        <div className='filter-bar'>
          <div className='search-bar'>
            <input className='Search' placeholder='Search..' value={searchFilter} onChange={(e)=>{setSearchFilter(e.target.value)}}/>
            <div className='search-icon'><FontAwesomeIcon icon={faMagnifyingGlass} color="black" size="lg"></FontAwesomeIcon></div>
          </div>
          <Select 
            value={selectValue}
            onChange={setSelectValue}
            options={options}
            isClearable
          />
         
        </div>
        {
            <CourseCards courses={finalFilteredResults}/>
        }
        
      </div>
      
    </>
  );
}

export default Home;
