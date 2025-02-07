import { FC } from 'react';
import styled from 'styled-components'



const Container = styled.div`
  width: 100%;
  height: 100%;
  background: inherit;
  @include abstracts.displayFlex(space-between, center, row nowrap);
  padding: 2px;

  .select {
    width: 70%;
    height: 100%;
    outline: none;
    border: none;
  }

`;
interface Option {
  value: string;
  label: string;
}

interface ReusableSelectProps {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  className?: string
  required?: boolean
}

const Select: FC<ReusableSelectProps> = ({ options, value = '', onChange, label }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    onChange && onChange(newValue);
  };

  return (
    <Container>
      {label && <label htmlFor="reusable-select" className='label'>{label}</label>}
      <select className='select' value={value} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container >
  );
};

export default Select;


interface SelectProps {
  id: string;
  label?: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  className?: string;
}

export const SelectInput: FC<SelectProps> = ({
  id,
  label,
  value,
  options,
  onChange,
  disabled = false,
  className = '',
}) => {
  return (
    <div className={`select ${className}`}>
      {label && <label htmlFor={id} >{label}</label>}
      <select
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={className}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

