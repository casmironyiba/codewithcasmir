import React from 'react';
import styles from './countrySelect.module.scss';

interface CountrySelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  countries: { code: string; name: string }[];
  label?: string;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ countries, label, ...props }) => {
  return (
    <>
      {label && <label className={styles.label}>{label}</label>}
      <select className={styles.select} {...props}>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default CountrySelect;
