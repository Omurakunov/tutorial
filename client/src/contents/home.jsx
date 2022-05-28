import Navbar from './navbar'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeart, faThumbsUp, faChildren } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useMemo } from 'react' 
import { Link } from 'react-router-dom'
import axios from 'axios'
import CourseCards from './courseCards';
import Select from 'react-select'
import config from './configs';
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
    return handleFilter(filteredResults, selectValue?.value, 'category')
    
  },[filteredResults, selectValue])


  const categoryReq = () =>{
      console.log()
      axios
      .get(`${config.Url}/category/category-list/`,{headers:{'Authorization' : `Token ${token}`}})
      .then(res=>{setCategories(res.data?.results)})
      
    } 

    const coursesReq = () =>{
      console.log()
      axios
      .get(`${config.Url}/course/`,{headers:{'Authorization' : `Token ${token}`}})
      .then(res=>{setCourses(res.data?.results)})
      
    }

  useEffect(()=>{
    categoryReq()
    coursesReq()
  },[])
  useEffect(()=>{
    setOptions(new Array(categories.length).fill('').map((_, i)=>
      (
        {id:i, 
         label:categories[i]?.title,
         value:categories[i]?.title 
        }
      )))
  }, [categories])

console.log(courses)
  return (
    <>
      <Navbar/>
      <div className='bc-img'></div>
      <div className="home">
        <div className='filter-bar'>
          <div className='search-bar'>
            <input className='Search' placeholder='Search..' value={searchFilter} onChange={(e)=>{setSearchFilter(e.target.value)}}/>
            <div className='search-icon'><FontAwesomeIcon icon={faMagnifyingGlass} color="white"></FontAwesomeIcon></div>
          </div>
          <Select 
            value={selectValue}
            onChange={setSelectValue}
            options={options}
          />
        </div>
        <CourseCards courses={finalFilteredResults}/>
      </div>
    
    </>
  );
}

export default Home;
