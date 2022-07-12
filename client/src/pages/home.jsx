import Navbar from '../contents/navbar'
import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeart, faThumbsUp, faChildren } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useMemo } from 'react' 
import axios from 'axios'
import Select from 'react-select'
import config from '../configs/configs';
import CourseCards from '../contents/course-cards';
//FILTER FUNCTION
const handleFilter = (data, value, filteredName) => {
  return value ? [...data].filter(item => item[filteredName].toLowerCase().includes(value.toLowerCase())) : [...data]
}
const handleCategoryFilter = (data, value, filteredName) => {
  return value ? [...data].filter(item => item[filteredName].toLowerCase().includes(value.toLowerCase())) : [...data]
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
  const [searchFilter, setSearchFilter] = useState("")
  const [token] = useState(localStorage.getItem('jwt'))
  const [ options, setOptions] = useState([])
  const [ selectValue, setSelectValue] = useState()
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
    setOptions(new Array(categories.length).fill('').map((_, i)=>
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
