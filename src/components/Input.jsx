import '../styles/Input.css';
import { useState } from 'react';

export const TextInput = ({ label, value, onChange }) => {
  return (
    <div className="textInput">
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export const PhoneNumberInput = ({ label, value, onChange }) => {
  return (
    <div className="honeNumberInput">
      <label>{label}</label>
      <input
        type="tel"
        value={value}
        onChange={onChange}
        placeholder="(555) 123-4567"
        pattern="^\+?[0-9\s\-\(\)]{7,15}$"
        title="Enter a valid phone number"
        required
      />
    </div>
  );
};

export const DateMonthYearInput = ({ label, value, onChange }) => {
  const [month, setMonth] = useState(value ? value.split(':')[0] : '');
  const [year, setYear] = useState(value ? value.split(':')[1] : '');

  const handleMonthChange = (e) => {
    const inputMonth = e.target.value;
    // Ensure month is between 01-12
    const formattedMonth = inputMonth.replace(/[^0-9]/g, '').slice(0, 2);
    setMonth(formattedMonth);

    // Combine month and year
    const combinedValue = `${formattedMonth}:${year}`;
    onChange({ target: { value: combinedValue } });
  };

  const handleYearChange = (e) => {
    const inputYear = e.target.value;
    // Ensure year is 4 digits
    const formattedYear = inputYear.replace(/[^0-9]/g, '').slice(0, 4);
    setYear(formattedYear);

    // Combine month and year
    const combinedValue = `${month}:${formattedYear}`;
    onChange({ target: { value: combinedValue } });
  };

  return (
    <div className="dateMonthYearInput">
      <label>{label}</label>
      <div className="date-input-container">
        <input
          type="text"
          placeholder="MM"
          value={month}
          onChange={handleMonthChange}
          maxLength="2"
          pattern="(0[1-9]|1[0-2])"
          title="Enter a valid month (01-12)"
        />
        <span>-</span>
        <input
          type="text"
          placeholder="YYYY"
          value={year}
          onChange={handleYearChange}
          maxLength="4"
          pattern="\d{4}"
          title="Enter a 4-digit year"
        />
      </div>
    </div>
  );
};

export const TextAreaInput = ({ label, value, onChange, rows = 4 }) => {
  return (
    <div className="textAreaInput">
      <label>{label}</label>
      <textarea value={value} onChange={onChange} rows={rows} />
    </div>
  );
};
