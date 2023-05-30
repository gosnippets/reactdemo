import React from 'react'
import { Formik } from 'formik'
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
    password: Yup.string().min(6, "Minimum 6 character is Required").required("Password is Required"),
});


export default function FunctionFormikExample2() {
    const handleSubmit = (values, { resetForm})=>{
        console.log("values", values);
        resetForm();
    }

    return (
        <div className='m-5' style={{ width: "50%" }}>
            <h1>Class Formik Example</h1>
            <Formik
                initialValues={{ name: "", email: "", password: "" }}
                validationSchema={SignupSchema}
                onSubmit={handleSubmit}>
                {(formik) => (
                    <form onSubmit={formik.handleSubmit} onReset={formik.resetForm}>
                    <div className='row'>
                        <div className='col-12 mb-3'>
                            <label htmlFor='name' className='mb-1 fw-bold'>Name</label>
                            <input type='text' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} className='form-control' id='name' name='name' placeholder='Enter name' />
                            {formik.touched.name && formik.errors.name && <div className='text-danger'>{formik.errors.name}</div>}
                        </div>
                        <div className='col-12 mb-3'>
                            <label htmlFor='email' className='mb-1 fw-bold'>Email</label>
                            <input type='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className='form-control' id='email' name='email' placeholder='Enter email' />
                            {formik.touched.name && formik.errors.email && <div className='text-danger'>{formik.errors.email}</div>}
                        </div>
                        <div className='col-12 mb-3'>
                            <label htmlFor='password' className='mb-1 fw-bold'>Password</label>
                            <input type='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className='form-control' id='password' name='password' placeholder='Enter password' />
                            {formik.touched.name && formik.errors.password && <div className='text-danger'>{formik.errors.password}</div>}
                        </div>
                        <div className='col-12'>
                        <button type='submit' className='btn btn-primary' disabled={!(formik.isValid && formik.dirty)}>Submit</button>
                        <button type='reset' className='btn btn-danger'>Reset</button>
                        </div>
                    </div>
                </form>
                )}
            </Formik>

        </div>
    )
}
