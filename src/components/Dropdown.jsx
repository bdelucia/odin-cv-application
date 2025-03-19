import DropdownSVG from '../assets/dropdown-inactive.svg';
import '../styles/Dropdown.css';

const Dropdown = ({ id, name, onClick }) => {
  return (
    <div className="dropdown" id={id}>
      <img src={DropdownSVG} alt="" onClick={onClick} /> {name}
    </div>
  );
};

export default Dropdown;
