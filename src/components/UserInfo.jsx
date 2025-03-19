import Dropdown from './Dropdown.jsx';
import '../styles/UserInfo.css';

const UserInfo = () => {
  return (
    <div className="userInfo">
      <Dropdown id="general" name="General Info" />
      <Dropdown id="education" name="Education" />
      <Dropdown id="experience" name="Experience" />
      <Dropdown id="projects" name="Projects" />
    </div>
  );
};

export default UserInfo;
