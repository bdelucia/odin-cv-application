import '../styles/GeneralForm.css';
import { TextInput, TextAreaInput, DateMonthYearInput } from './Input';

const EducationForm = () => {
  return (
    <>
      <form action="" className="educationForm">
        <TextInput label="University: " />
        <TextInput label="Type of Degree: " />
        <TextInput label="Major: " />
        <DateMonthYearInput label="Start Date: " />
        <DateMonthYearInput label="Graduation Date: " />
      </form>
    </>
  );
};

export default EducationForm;
