import React, { useEffect,useState} from 'react'
import instance from '../instance'
import isPoster from '../App'
import './Row.css'
function Row({title,fetchUrl}) {

    console.log(fetchUrl);
    const base_url="http://image.tmdb.org/t/p/original/";
    // let isPoster=false;
    const [movies , setMovies] = useState([])
    const fetchData = async ()=>{
      const {data} =await instance.get(fetchUrl)
      console.log("response",data.results);
      setMovies(data.results)
    }
    console.log(movies);
    useEffect(()=>{
      fetchData()
    },[])
  return (
    <div className='row'>
        <h2>{title}</h2>
             <div className='m_movies'>
              {
              movies.map(item =>(
                <img className={`${isPoster&& "movie_large" } movie`} src={`${base_url}/${isPoster?item.poster_path:item.backdrop_path}`} alt="no img" />
              ))
              }
             </div>
    </div>
  )
}

export default Row