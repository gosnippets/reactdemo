import React, { useEffect } from 'react'
import { Formik } from 'formik'
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { getAccountDetails, updateAccount } from './slices/accountSlice';
import { useNavigate, useParams } from 'react-router-dom';

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Username is Required"),
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string().min(6, "Minimum 6 character is Required").required("Password is Required"),
});


export default function EditAccountDetailsToolkit() {
  const { account, status, error } = useSelector((state) => {
    console.log("EditAccountDetailsToolkit",state)
    return state.accounts;
  });
  const dispatch = useDispatch();
  const { accountid } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAccountDetails(accountid))
  }, [])

  const handleSubmit = (values, { resetForm }) => {
    console.log("values", values);
    dispatch(updateAccount({ id: accountid, data: values }));
    setTimeout(() => {
      navigate("/")
    }, 1000)
  }

  useEffect(() => {
    console.log("account", account)
  }, [account])

  if (status === "updated") {
    return (<>
      <div>Account Details Updated</div>
      <button className='btn btn-primary' onClick={() => navigate("/")}>Home</button>
    </>)
  }

  return (
    <div className='m-5' style={{ width: "50%" }}>
      <h1>Update Account</h1>
      {status === "failed" && (<div className="alert alert-warning" role="alert">{error}</div>)}
      {account && account.username && (
        <Formik
          initialValues={account}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}>
          {(formik) => (
            <form onSubmit={formik.handleSubmit} onReset={formik.resetForm}>
              <div className='row'>
                <div className='col-12 mb-3'>
                  <label htmlFor='username' className='mb-1 fw-bold'>Username</label>
                  <input type='text' value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} className='form-control' id='username' name='username' placeholder='Enter username' />
                  {formik.touched.username && formik.errors.username && <div className='text-danger'>{formik.errors.username}</div>}
                </div>
                <div className='col-12 mb-3'>
                  <label htmlFor='email' className='mb-1 fw-bold'>Email</label>
                  <input type='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className='form-control' id='email' name='email' placeholder='Enter email' />
                  {formik.touched.email && formik.errors.email && <div className='text-danger'>{formik.errors.email}</div>}
                </div>
                <div className='col-12 mb-3'>
                  <label htmlFor='password' className='mb-1 fw-bold'>Password</label>
                  <input type='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className='form-control' id='password' name='password' placeholder='Enter password' />
                  {formik.touched.password && formik.errors.password && <div className='text-danger'>{formik.errors.password}</div>}
                </div>
                <div className='col-12'>
                  <button type='submit' className='btn btn-primary' disabled={!(formik.isValid && formik.dirty)}>Submit</button>
                  <button type='reset' className='btn btn-danger'>Reset</button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      )}
    </div>
  )
}
