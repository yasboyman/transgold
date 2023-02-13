import react, {useState} from 'react'
import {countryData} from '../../country_data/CountryData'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const CountryDropdown = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleChange = event => {
        setSelectedCountry(event.target.value);
    };

    return (
        <div>
            <FormControl >
                <InputLabel id="demo-simple-select-label">inputlabel</InputLabel>
                <Select
                    labelId="country-select-label"
                    id="country-select-select"
                    value={''}
                    label="Select a country"
                    onChange={handleChange}
                >

                    {countryData.map(country => (
                        <MenuItem value={country.code}>
                            <img
                                src={`https://purecatamphetamine.github.io/country-flag-icons/1x1/${country.flag}.svg`}
                                alt={`Flag of ${country.name}`}
                                style={{ height: "20px", width: '20px', marginRight: "0.5em" }}
                            />
                            {country.code} - {country.name}</MenuItem>
                        ))}

                </Select>
            </FormControl>
        </div>
            )
            }

            export default CountryDropdown;












{/*            <select onChange={handleChange} value={selectedCountry}>*/}
{/*                <option value="">Select a country</option>*/}
{/*                {countryData.map(country => {*/}

{/*                    console.log('GLAG', country.flag)*/}
{/*                    return <option key={country.code} value={country.code}>*/}
{/*                        <img*/}
{/*                            src={`https://purecatamphetamine.github.io/country-flag-icons/1x1/${country.flag}.svg`}*/}
{/*                            alt={`Flag of ${country.name}`}*/}
{/*                            style={{ height: "5px", width: '5px', marginRight: "0.5em" }}*/}
{/*                        />*/}
{/*                        {country.code} - {country.name}*/}
{/*                    </option>*/}
{/*                })}*/}
{/*            </select>*/}
{/*            {selectedCountry && (*/}
{/*                <div>*/}
{/*                    You selected: {selectedCountry}*/}
{/*                </div>*/}
{/*            )}*/}
{/*        </div>*/}
{/*    );*/}
{/*};*/}

