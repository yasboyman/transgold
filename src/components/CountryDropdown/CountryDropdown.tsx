import React from "react";
import { countryData } from "../../country_data/CountryData";
import styles from "./country_dropdown.module.scss";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { dropDownStyles, flagStyles } from "../../MaterialUIStyles";

type CountryDropdownProps = {
  onChangeCallback: (value: string) => void;
  value: string;
};

const CountryDropdown = ({ onChangeCallback, value }: CountryDropdownProps) => {
  const handleChange = (event: SelectChangeEvent) => {
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
          sx={{ dropDownStyles }}
          data-testid={"select_dropdown"}
        >
          {countryData.map((country) => (
            <MenuItem
              value={country.code}
              data-testid={"option_dropdown"}
              key={country.code}
            >
              <img
                src={`https://purecatamphetamine.github.io/country-flag-icons/1x1/${country.flag}.svg`}
                alt={`Flag of ${country.name}`}
                style={flagStyles}
                data-testid={"image_flag"}
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
