import React, { FC } from 'react';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  id: string;
  label?: string;
  value: string;
  options: RadioOption[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const RadioGroup: FC<RadioGroupProps> = ({
  id,
  label,
  value,
  options,
  onChange,
  className,
}) => {
  return (
    <div>
      {label && <p>{label}</p>}
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            name={id}
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
            className={className}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
