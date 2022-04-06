import Navbar from './navbar'
function Home() {
  const categories = new Array(10).fill('Food')
  console.log(categories)
  return (
    <div className="App">
    <Navbar/>
    <div className='filter-bar'>
      <input className='Search'></input>
      <div className='categories'>
        {categories.map((category, i)=>(
          <button key={i}>{category}</button>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Home;
