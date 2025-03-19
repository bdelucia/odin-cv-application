import '../styles/Input.css';

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
    <div className="phoneNumberInput">
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
