import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import Formupload from "./formupload";

// Here is an example of a form with an editable list.
// Next to each input are buttons for insert and remove.
// If the list is empty, there is a button to add an item.
function ArrayList(){
    return(
    <div>
        <h1>Friend List</h1>
        <Formik
            initialValues={{
                name:"",
                }}
            onSubmit={values =>
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                }, 500)
            }
            render={({ values }) => (
                <Form>
                    <Field  name="name" placeholder="Name"></Field>
                    <FieldArray
                        name="mobile"
                        render={arrayHelpers => (
                            <div>
                                {values.mobile && values.mobile.length > 0 ? (
                                    values.mobile.map((phone, index) => (
                                        <div key={index}>
                                            <Field name={`mobile.${index}`} />
                                            <button
                                                type="button"
                                                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                            >
                                                -
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                                            >
                                                +
                                            </button>
                                        </div>
                                    ))
                                ) : (
                                    <button type="button" onClick={() => arrayHelpers.push('')}>
                                        {/* show this when user has removed all friends from the list */}
                                        Add Mobile
                                    </button>
                                )}
                            </div>
                        )}
                    />
                    <FieldArray
                        name="child"
                        render={arrayHelpers => (
                            <div>
                                {values.child && values.child.length > 0 ? (
                                    values.child.map((children, index) => (
                                        <div key={index}>
                                            <Field name={`child.${index}`} />
                                            <button
                                                type="button"
                                                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                            >
                                                -
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                                            >
                                                +
                                            </button>
                                        </div>
                                    ))
                                ) : (
                                    <button type="button" onClick={() => arrayHelpers.push('')}>
                                        {/* show this when user has removed all friends from the list */}
                                        Add Children
                                    </button>
                                )}
                            </div>
                        )}
                    />
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </Form>
            )}
        />
        <Formupload/>
    </div>
    )
}
export default ArrayList;

