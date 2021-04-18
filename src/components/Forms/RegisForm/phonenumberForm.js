import { Field } from "formik";
import './registerPage.css';

const PhoneNumberForm = () => {
  return (
    <div className="form-1">
      <h1>Get moving with Uber</h1>
      <Field
        className="input"
        name="mobileNumber"
        placeholder="Enter your mobile number"
      />
      <label>
        <Field className="agreement" name="agreement" type="checkbox" />
        Agree Terms and Conditions
      </label>
    </div>
  );
};

export default PhoneNumberForm;
