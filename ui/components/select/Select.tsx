import { FC } from 'react';
import styles from './select.module.scss'

interface Option {
  value: string;
  label: string;
}

interface ReusableSelectProps {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  className?:string
  required?:boolean
}

const Select: FC<ReusableSelectProps> = ({ options, value = '', onChange, label }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    onChange && onChange(newValue);
  };

  return (
    <div className={styles.container}>
      {label && <label htmlFor="reusable-select" className={styles.label}>{label}</label>}
      <select className={styles.select} value={value} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
