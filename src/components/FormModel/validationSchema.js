import * as Yup from "yup";

const validationSchema = () =>{
    return(
        Yup.object.shape({
            phoneNumber: Yup.string().required("Please input your phone number"),
            agreement:Yup.boolean().oneOf([true],"You must accept the tearms and conditions"),
        })
    )
}
export default validationSchema;
