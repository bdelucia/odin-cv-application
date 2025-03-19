import '../styles/GeneralForm.css';
import { TextInput, TextAreaInput, DateMonthYearInput } from './Input';

const ProjectForm = () => {
  return (
    <>
      <form action="" className="projectsForm">
        <TextInput label="Project Name: " />
        <DateMonthYearInput label="Start Date: " />
        <DateMonthYearInput label="End Date: " />
        <TextAreaInput label="Description: " />
      </form>
    </>
  );
};

export default ProjectForm;
