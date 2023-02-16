import React from "react";
import { countryData } from "../../country_data/CountryData";
import styles from "./country_dropdown.module.scss";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const CountryDropdown = ({ onChangeCallback, value }: any) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeCallback(event.target.value);
  };

  return (
    <div className={styles.dropdown_container}>
      <FormControl fullWidth>
        <InputLabel id="country-select-label">Country</InputLabel>
        <Select
          labelId="country-select-label"
          id="country-select-select"
          value={value}
          label="Select a country"
          onChange={handleChange}
          sx={{ backgroundColor: "whitesmoke" }}
        >
          {countryData.map((country) => (
            <MenuItem value={country.code}>
              <img
                src={`https://purecatamphetamine.github.io/country-flag-icons/1x1/${country.flag}.svg`}
                alt={`Flag of ${country.name}`}
                style={{ height: "20px", width: "20px", marginRight: "0.5em" }}
              />
              {country.code} - {country.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CountryDropdown;