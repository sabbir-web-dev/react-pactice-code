import React, { useEffect, useState } from "react";
import Countrys from "./Countrys";
import Search from "./Search";

const url = "https://restcountries.com/v3.1/all";
function CountryHome() {
  const [data, setData] = useState(null);
  const [isLodding, setIsLodding] = useState(true);
  const [error, setError] = useState(null);
  const [filterData, setFilterData] = useState(data);

  const [toggole,setToggle] = useState(false)

  const featchData = async (url) => {
    setIsLodding(true);
    try {
      const responce = await fetch(url);
      const data = await responce.json();
      setData(data);
      setFilterData(data);
      setIsLodding(false);
      setError(null);
    } catch (error) {
      setIsLodding(false);
      setError(error.message);
      setFilterData(null);
      setData(null);
    }
  };

  useEffect(() => {
    featchData(url);
  }, []);

  const deletehendle = (name) => {
    const filter = filterData.filter((country) => country.name.common !== name);
    setFilterData(filter);
  };

  const searchHendle = (search) => {
    const value = search.toLowerCase();
    const newCountry = data.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setFilterData(newCountry);
  };

  return (
    <div>
      <h1>Country APP</h1>
      <button onClick={()=> setToggle(!toggole)}>
        {toggole ? "Hide All Country" : "Show All Country"}
      </button>
      {toggole &&
        <div>
          <Search getSearcValue={searchHendle} />
          {filterData && (
            <Countrys countrys={filterData} getDeleteName={deletehendle} />
          )}
          {isLodding && <p>Data is Lodding</p>}
          {error && <p>{error}</p>}
        </div>
      }
    </div>
  );
}

export default CountryHome;
