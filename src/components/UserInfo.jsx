import { useState } from 'react';
import Dropdown from './Dropdown.jsx';
import GeneralForm from './GeneralForm.jsx';
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
      {openDropdowns.general && <GeneralForm />}

      <Dropdown
        id="education"
        name="Education"
        onClick={() => toggleDropdown('education')}
      />
      {openDropdowns.education && <EducationForm />}

      <Dropdown
        id="experience"
        name="Experience"
        onClick={() => toggleDropdown('experience')}
      />
      {openDropdowns.experience && <ExperienceForm />}

      <Dropdown
        id="projects"
        name="Projects"
        onClick={() => toggleDropdown('projects')}
      />
      {openDropdowns.projects && <ProjectsForm />}
    </div>
  );
};

export default UserInfo;
