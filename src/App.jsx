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
  const [suggestions, setSuggestions] = useState([]);
  const [page, setPage] = useState(1);
  const pageEnd = 12 * page;
  const pageStart = pageEnd - 12;
  const residentsPaginated = location.residents?.slice(pageStart, pageEnd);
  const lastPage = Math.ceil(location.residents?.length / 12);
  const pages = [];
  for (let i = 1; i <= lastPage; i++) {
    pages.push(i);
  }

  const clearInput = () => setSearch('');
  const clearPage = () => setPage(1);


  const getRandomLocation = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${Math.floor(Math.random() * 126) + 1}`)
      .then(res => {
        setLocation(res.data);
        clearInput();
        clearPage();
      });
  }

  const getLocationById = id => {
    if (search !== '') {
      axios
        .get(`https://rickandmortyapi.com/api/location/${id}`)
        .then(res => {
          setLocation(res.data);
          clearInput();
          clearPage();
        });
    }
  }

  useEffect(() => {
    if (search !== '') {
      axios
        .get(`https://rickandmortyapi.com/api/location/?name=${search}`)
        .then(res => setSuggestions(res.data.results));
    }
  }, [search])

  useEffect(() => {
    getRandomLocation();
  }, [])

  return (
    <div>
      <div className='header'>
        <img src={title} />
      </div>

      <div className='search'>
        <div>
          <input
            className='search-in'
            type="text"
            placeholder='Search location name'
            onChange={e => setSearch(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') { getLocationById(suggestions[0].id); } }}
            value={search}
          />
          <button
            className='search-btn'
            onClick={() => getLocationById(suggestions[0].id)}
          >
            <i className="accent-txt fa-solid fa-magnifying-glass"></i> Search
          </button>
        </div>
        <div>
          <button
            className='random-btn'
            onClick={getRandomLocation}>
            <i className="accent-txt fa-solid fa-arrows-rotate"></i> Random location
          </button>

          {search === '' ? (
            <></>
          ) : (
            <div className='suggestions-container'>
              {suggestions.map(suggestion => (
                <div
                  key={suggestion.id}
                  className='suggestion'
                  onClick={() => getLocationById(suggestion.id)}
                >
                  <p className='marginless'>{suggestion.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <LocationInfo location={location} />
      <ResidentList residents={residentsPaginated} />

      {lastPage <= 1 ? (
        <></>
      ) : (
        <div className='pages-container'>
          <button
            className='next-prev-page-btn'
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          {pages.map(pageNumber => (
            <button
              className={pageNumber === page ? 'current-page-btn' : 'page-number-btn'}
              key={pageNumber}
              onClick={() => setPage(pageNumber)}
            >
              <b>{pageNumber}</b>
            </button>
          ))}

          <button
            className='next-prev-page-btn'
            onClick={() => setPage(page + 1)}
            disabled={page === lastPage}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      )}
    </div>
  )
}

export default App
