import React,{useState,useEffect} from 'react'
import instance  from '../instance';
import './Banner.css'

function Banner({fetchUrl}) {
    const base_url="http://image.tmdb.org/t/p/original/";
    const [onemovie , setoneMovie] = useState({})
    const fetchData = async ()=>{
      const {data} =await instance.get(fetchUrl)
      console.log(data.results[Math.floor(Math.random()*data.results.length)])
      setoneMovie(data.results[Math.floor(Math.random()*data.results.length)])

    }
    console.log(onemovie);
    // console.log(movies);
    useEffect(()=>{
      fetchData()
    },[])
  return (
    <>
    <div className='banner' style={{
        height:'500px',
        backgroundImage:`url(${base_url}/${onemovie?.backdrop_path})`,
        backgroundSize:'cover',
        backgroundAttachment:'fixed'
    }}>
      <div className='banner_content'>
        <h1>{onemovie?.name}</h1>
        <h2>{onemovie?.overview?.slice(0,280)}...</h2>
      </div>
      </div>
      </>
  )
}

export default Banner