import React from 'react';
import { Formik, Form, Field } from 'formik';

 function BasicArrayExample(){

     return(
    <div>
        <h1>Details</h1>
        <Formik
            initialValues={{
                address:"",
                friends: ['', ''],
            }}
            onSubmit={values => {
                // same shape as initial values
                console.log(values);
            }}
        >
            <Form>
                <Field name="address" placeholder="Adress" /><br></br>
                <Field name="friends[0]" />
                <Field name="friends[1]" />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    </div>
     )
 }
 export default BasicArrayExample;
