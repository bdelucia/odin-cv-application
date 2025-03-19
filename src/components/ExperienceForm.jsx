import '../styles/GeneralForm.css';
import { TextInput, TextAreaInput, DateMonthYearInput } from './Input';

const ExperienceForm = () => {
  return (
    <>
      <form action="" className="experienceForm">
        <TextInput label="Job Title: " />
        <TextInput label="Employer: " />
        <DateMonthYearInput label="Start Date: " />
        <DateMonthYearInput label="Graduation Date: " />
        <TextAreaInput label="Description: " />
      </form>
    </>
  );
};

export default ExperienceForm;
