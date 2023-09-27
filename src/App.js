import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './request.js';
function App() {
  return (
    <div style={{backgroundColor:'black',color:'white'}}>
      <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      
      <Row isPoster={true}title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending in India" fetchUrl={requests.fetchTrending} />
      <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
      <Row title="action movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="comedy movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="horror movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="romance movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="documentaries" fetchUrl={requests.fetchDocumentaries} />


    </div>
  );
  
}

export default App;

