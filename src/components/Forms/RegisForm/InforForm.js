import { Field } from "formik";
import './registerPage.css';

const InForForm = () => {
  return (
    <div className="form-3">
      <h3 style={{ fontSize: "25px" }}>Enter your info</h3>
      <Field
        className="fullname"
        name="fullname"
        placeholder="Enter your full name"
        required
        id="fullnameID"
      ></Field>
      <div>
        <p>Select gender</p>
        <button className="gender-button">
          <i className="fa fa-male" style={{ fontSize: "20px" }}></i>
        </button>
        <button className="gender-button">
          <i className="fa fa-female" style={{ fontSize: "20px" }}></i>
        </button>
      </div>
      <div className="profile-content">
        <button className="profile-button">
          <i className="fa fa-user-circle" style={{ fontSize: "30px" }}></i>
        </button>
        <p>Upload your profile picture</p>
      </div>
    </div>
  );
};

export default InForForm;
