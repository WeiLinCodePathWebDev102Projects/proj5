import { useState, useEffect } from 'react'
import BreweryInfo from '../components/breweryInfo';
import './App.css'

function App() {
  const [breweryList, setBreweyList] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [list, setList] = useState(0);

  let microBreweries = 0;
  let contractBreweries = 0;
  let planningBreweries = 0;
  let brewpubBreweries = 0;

  //useEffect call
  useEffect(() =>{
    fetchAllBreweryData();
    console.log(breweryList);
    //fetchAllBreweryData().catch(console.error);
    for (let i = 0; i < breweryList.length; i++){
      if (breweryList[i].brewery_type == "micro"){
        microBreweries++;
      }
      else if(breweryList[i].brewery_type == "contract"){
        contractBreweries++;
      }
      else if(breweryList[i].brewery_type == "planning"){
        planningBreweries++;
      }
      else{
        brewpubBreweries++;
      }
    }
    console.log(microBreweries);
    console.log(contractBreweries);
    console.log(planningBreweries);
    console.log("b: " + brewpubBreweries);
  },[]);

  const brewerApi = "https://api.openbrewerydb.org/v1/breweries?by_state=new_jersey&per_page=200";
  //api call
  const fetchAllBreweryData = async () => {
    const response = await fetch(brewerApi);
    const json = await response.json();
    setBreweyList(json);
  };

  const searchBrewery = searchValue =>{
    setSearchInput(searchValue);
    if (searchValue !== ""){
      const filteredData = breweryList.filter((brewery) => {
        const matched = Object.values(brewery.name)
        .join("")
        .toLowerCase()
        .includes(searchValue.toLowerCase());
        return matched;
      });
      setFilteredResults(filteredData);
    }
    else{
      setFilteredResults(breweryList);
    }
  }

  const searchBreweryType = searchValue =>{
    setSearchInput(searchValue);
    if (searchValue !== ""){
      const filteredData = breweryList.filter((brewery) => {
        const matched = Object.values(brewery.brewery_type)
        .join("")
        .toLowerCase()
        .includes(searchValue.toLowerCase());
        return matched;
      });
      setFilteredResults(filteredData);
    }
    else{
      setFilteredResults(breweryList);
    }
  }

  const searchBreweryCity = searchValue =>{
    setSearchInput(searchValue);
    if (searchValue !== ""){
      const filteredData = breweryList.filter((brewery) => {
        const matched = Object.values(brewery.city)
        .join("")
        .toLowerCase()
        .includes(searchValue.toLowerCase());
        return matched;
      });
      setFilteredResults(filteredData);
    }
    else{
      setFilteredResults(breweryList);
    }
  }

  const dataSize = filteredResults.length ? filteredResults.length : breweryList.length;
  console.log(dataSize);


  return (
    <div>
      <div className='title'>
        <h1> Brewery</h1>
      </div>
      <div>
        Number of Brewery Locations Found: {dataSize}
        <br></br>
        Number of Breweries with Micro Brewery: 79 <br></br>
        Number of Breweries with Contract Brewery: 4 <br></br>
        Number of Breweries with Planning Brewery: 14 <br></br>
        Number of Breweries with Brewpub Brewery: 18
      </div>
      <div>
        <input type="test" 
                placeholder='search...' 
                onChange={(inputString) => searchBrewery(inputString.target.value)}/>
      </div>
      <div>
        List of Beweries
        <br>
        </br>
        {/* filter values: city and brewery type */}
        <select className='selection' 
          onChange={(event) => searchBreweryCity(event.target.value)}>
          <option value="" unselectable='true'> City </option>
          <option value="Rio Grande"> Rio Grande </option>
          <option value="Lafayette"> Lafayette </option>
          <option value="Newark"> Newark </option>
          <option value="Ocean City"> Ocean City </option>
          <option value="Atco"> Atco </option>
          <option value="Forked River"> Forked River </option>
          <option value="Belford"> Belford </option>
          <option value="Berlin"> Berlin </option>
        </select>

        <select className='selection'
          onChange={(event) => searchBreweryType(event.target.value)}>
          <option value="" unselectable='true'> Type </option>
          <option value="Micro"> Micro </option>
          <option value="Planning"> Planning </option>
          <option value="BrewPub"> BrewPub </option>
          <option value="Contract"> Contract </option>
        </select>

        <div> 
          {searchInput.length > 0 ? 
            filteredResults && filteredResults.map(brewery =>
              <BreweryInfo 
                name={brewery.name}
                address={brewery.address_1}
                city={brewery.city}
                postal_code={brewery.postal_code}
                website={brewery.website_url}
                />)

            : breweryList && breweryList.map(brewery =>
              <BreweryInfo 
                name={brewery.name}
                address={brewery.address_1}
                city={brewery.city}
                postal_code={brewery.postal_code}
                website={brewery.website_url}
                />
            )
          }

        </div>
      </div>
    </div>
  )
}

export default App;
