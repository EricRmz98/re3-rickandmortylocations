import { useRef, useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import LocationInfo from './components/LocationInfo'
import ResidentList from './components/ResidentList'
import title from './images/title.png'

function App() {

  const [location, setLocation] = useState({});
  const [search, setSearch] = useState('');
  const searchBar = useRef('');

  const getRandomLocation = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${Math.floor(Math.random() * 126) + 1}`)
      .then(res => setLocation(res.data))

    searchBar.current.value = '';
  }

  useEffect(() => {
    getRandomLocation();
  }, [])

  const getSearchLocation = () => {
    if (search != "" && search < 127 && search > 0) {
      axios
        .get(`https://rickandmortyapi.com/api/location/${search}`)
        .then(res => setLocation(res.data));

      searchBar.current.value = '';
    } else {
      alert('Location id must be a number between 1 and 126')
    }
  }

  return (
    <div>
      <div className='header'>
        <img src={title} />
      </div>

      <div className='search'>
        <div>
          <input
            ref={searchBar}
            className='search-in'
            type="text"
            placeholder='Search location id'
            onChange={e => setSearch(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') { getSearchLocation(); } }}
          />
          <button
            className='search-btn'
            onClick={getSearchLocation}>
            <i className="accent-txt fa-solid fa-magnifying-glass"></i> Search
          </button>
        </div>
        <div>
          <button className='random-btn' onClick={getRandomLocation}><i className="accent-txt fa-solid fa-arrows-rotate"></i> Random location</button>
        </div>
      </div>

      <LocationInfo location={location} />
      <ResidentList residents={location.residents} />
    </div>
  )
}

export default App
