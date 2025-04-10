import { useState } from 'react';
import '../styles/GeneralForm.css';
import { TextInput, TextAreaInput, DateMonthYearInput } from './Input';
import AddButtonSVG from '../assets/add.svg';

const ProjectContainer = () => {
  const [projects, setProjects] = useState([]);

  const addProject = () => {
    setProjects([...projects, {}]);
  };

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

  return (
    <div className="projectsContainer">
      {projects.map((project, index) => (
        <ProjectForm key={index} />
      ))}
      <div className="btnContainer">
        <img
          src={AddButtonSVG}
          id="addProjectBtn"
          onClick={addProject}
          alt="Add Project"
        />
      </div>
    </div>
  );
};

export default ProjectContainer;
