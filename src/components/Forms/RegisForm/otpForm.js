import { Field } from "formik";
import './registerPage.css';

const OTPForm = () => {
  return (
    <div className="form-2">
      <h3>
        Enter the 4 digit code sent to you at your phone
        <a href="/" style={{ fontSize: "15px" }}>
          Did you enter a correct number ?
        </a>
      </h3>
      <div className="input-otp">
        <Field className="otp" name="otp1" required></Field>
        <Field className="otp" name="otp2" required></Field>
        <Field className="otp" name="otp3" required></Field>
        <Field className="otp" name="otp4" required></Field>
      </div>
    </div>
  );
};

export default OTPForm;
