import { useState } from 'react';
import Dropdown from './Dropdown.jsx';
import GeneralForm from './GeneralForm.jsx';
import EducationForm from './EducationForm.jsx';
import ExperienceForm from './ExperienceForm.jsx';
import ProjectForm from './ProjectsForm.jsx';
import '../styles/UserInfo.css';

const UserInfo = () => {
  const [openDropdowns, setOpenDropdowns] = useState({
    general: false,
    education: false,
    experience: false,
    projects: false,
  });

  // Function to toggle dropdown visibility
  const toggleDropdown = (dropdownId) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [dropdownId]: !prevState[dropdownId],
    }));
  };

  return (
    <div className="userInfo">
      <Dropdown
        id="general"
        name="General Info"
        onClick={() => toggleDropdown('general')}
      />
      <div
        className={`form-container ${openDropdowns.general ? 'active' : ''}`}
      >
        <GeneralForm />
      </div>

      <Dropdown
        id="education"
        name="Education"
        onClick={() => toggleDropdown('education')}
      />
      <div
        className={`form-container ${openDropdowns.education ? 'active' : ''}`}
      >
        <EducationForm />
      </div>

      <Dropdown
        id="experience"
        name="Experience"
        onClick={() => toggleDropdown('experience')}
      />
      <div
        className={`form-container ${openDropdowns.experience ? 'active' : ''}`}
      >
        <ExperienceForm />
      </div>

      <Dropdown
        id="projects"
        name="Projects"
        onClick={() => toggleDropdown('projects')}
      />
      <div
        className={`form-container ${openDropdowns.projects ? 'active' : ''}`}
      >
        <ProjectForm />
      </div>
    </div>
  );
};

export default UserInfo;
