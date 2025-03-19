import '../styles/GeneralForm.css';
import { TextInput, PhoneNumberInput } from './Input';

const GeneralForm = () => {
  return (
    <>
      <form action="" className="generalForm">
        <TextInput label="Name: " />
        <PhoneNumberInput label="Phone Number: " />
        <TextInput label="Email: " />
        <TextInput label="Website: " />
      </form>
    </>
  );
};

export default GeneralForm;
