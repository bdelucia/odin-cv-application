import DropdownSVG from '../assets/dropdown-inactive.svg';
import '../styles/Dropdown.css';

const Dropdown = ({ id, name }) => {
  return (
    <div className="dropdown" id={id}>
      <img src={DropdownSVG} alt="" /> {name}
    </div>
  );
};

export default Dropdown;
