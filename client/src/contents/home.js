import Navbar from './navbar'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeart, faThumbsUp, faChildren } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useMemo } from 'react' 
import { Link } from 'react-router-dom';
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

  const [categories, setCategories] = useState(new Array(10).fill('').map((_, i)=>
  (
    {id:i, 
    name:'Programming'}
  )))


  const [courses, setCourses] = useState(new Array(20).fill('').map((_, i)=>(
    {
      id: i,
      img:"https://logos-world.net/wp-content/uploads/2021/10/Python-Symbol.png",
      name:`Phyton ${i}`,
      views:282,
      likes:151,
      lessons:29
    }
  )))
  
  
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


  // useEffect(()=>{
  //   axios
  //   .get('http://139.180.146.234:8000/course/')
  //   .then(res=>{setCourses(res.data)})
  // },[])

  // useEffect(()=>{
  //   axios
  //   .get('')
  //   .then(res=>{setCategories(res.data)})
  // },[])
  

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
            filteredResults.map((course, i)=>(
              <div className='course-card' key={i}>
                <div className='course-card-img'>
                  <img src={course.img} alt="Oops"/>
                </div>
                
                <div className='course-card-info'>
                  <h3>{course.name}</h3>
                  <div className='course-card-info-rating'>
                    <div>
                      <FontAwesomeIcon icon={faChildren}></FontAwesomeIcon>
                      <p>{`${course.views} просмотров`}</p>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
                      <p>{`${course.likes} лайокв`}</p>
                    </div>
                  </div>
                  <p>{`${course.lessons} уроков`}</p>
                </div>
                
                
              </div>
            ))
          }
        </div>
      </div>
    
    </>
  );
}

export default Home;
