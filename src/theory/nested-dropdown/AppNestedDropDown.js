import React, {useState, useEffect} from 'react';
import { City, Country, State } from "country-state-city";

const AppNestedDropDown = () => {
    const countryData = Country.getAllCountries();    
    const [stateData, setStateData] = useState();
    const [cityData, setCityData] = useState();   

    const [country, setCountry] = useState(countryData[0]);
    const [state, setState] = useState();
    const [city, setCity] = useState();
  
    useEffect(() => {
      setStateData(State.getStatesOfCountry(country?.isoCode));
    }, [country]);
  
    useEffect(() => {
      setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode));
    }, [state]);
  
    useEffect(() => {
      stateData && setState(stateData[0]);
    }, [stateData]);
  
    useEffect(() => {
      cityData && setCity(cityData[0]);
    }, [cityData]);
   
    const handleSetCountry = (isoCode) => {
        const newCountrySelected = countryData.find(country => country.isoCode === isoCode)
        if(newCountrySelected) setCountry({...newCountrySelected})
    }
    
    const handleSetState = (isoCode) => {
        const newStateSelected = stateData.find(state => state.isoCode === isoCode)
        if(newStateSelected) setState({...newStateSelected})
    }

    const handleSetCity = (isoCode) => {
        const newCitySelected = cityData.find(city => city.isoCode === isoCode)
        if(newCitySelected) setCity({...newCitySelected})
    }

    return (
        <section>    
            <label>Country</label>
            <div>                   
                <select    
                defaultValue={country}          
                onChange={e => handleSetCountry(e.target.value)}>
                {countryData.map((currentCountry,idx) => {                    
                    return <option key={idx} value={currentCountry.isoCode}>{currentCountry.name}</option>
                })}
                </select>
            </div>

            <label>State</label>
            <div>                   
                <select    
                defaultValue={state}          
                onChange={e => handleSetState(e.target.value)}>
                {stateData?.map((currentState,idx) => {                    
                    return <option key={idx} value={currentState.isoCode}>{currentState.name}</option>
                })}
                </select>
            </div>

            <label>City</label>
            <div>                   
                <select    
                defaultValue={city}          
                onChange={e => handleSetCity(e.target.value)}>
                {cityData?.map((currentCity,idx) => {                    
                    return <option key={idx} value={currentCity.isoCode}>{currentCity.name}</option>
                })}
                </select>
            </div>
        </section>
    );
};

export default AppNestedDropDown;