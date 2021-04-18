
import React from 'react';
import {Form, Formik} from 'formik';
import * as Yup from 'yup'
import {useState} from 'react';
import '../../components/Forms/RegisForm/registerPage.css';

import InForForm from '../../components/Forms/RegisForm/InforForm';
import OTPForm from '../../components/Forms/RegisForm/otpForm';
import PhoneNumberForm from '../../components/Forms/RegisForm/phonenumberForm';
import Booklink from '../../components/Nav/BookLink';

const SignUpSchema = Yup.object().shape({
  mobileNumber: Yup.string().required("Please input your phone number"),
  agreement: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

const SignUpForm = () => {
  return (
    <div className="form-content">
      <FormikStepper
        initialValues={{
          mobileNumber: "",
          agreement: false,
          otp: [],
          fullname: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={() => {}}
      >
        {/* {({ errors, touched }) => ( */}
        <PhoneNumberForm/>
        <OTPForm/>
        <InForForm/>
      </FormikStepper>
    </div>
  );
};

const FormikStepper = ({ children, ...props }) => {
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const isLastStep = () => {
    return step === childrenArray.length - 1;
  };

  return (
    <Formik
      {...props}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
        }
        else{
          setStep(step + 1)
        }
      }}
    >
      {({ errors, touched, values }) => (
        <Form autoComplete="off">
          {currentChild}
          <div className="Error_1">
            {errors.mobileNumber ? (
              <p>{errors.mobileNumber}</p>
            ) : null}
          </div>
          <div className="Error_2">
            {errors.agreement ? (
              <p>{errors.agreement}</p>
            ) : null}
          </div>
          <button className="submit-button" type="submit">
            {isLastStep() ? (
              <Booklink style={{color:"black"}}/>
            ) : (
              <i className="fa fa-arrow-right" style={{ fontSize: "20px" }}></i>
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default SignUpForm;
