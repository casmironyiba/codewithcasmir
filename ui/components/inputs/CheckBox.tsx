import React, { FC } from 'react';

interface CheckboxProps {
  id: string;
  label?: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
}

const Checkbox: FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
  disabled = false,
  className = '',
}) => {
  return (
    <div className={`checkbox ${className}`}>
      <label className="flex items-center">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="mr-2"
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
