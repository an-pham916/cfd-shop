import React, { forwardRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../Button'
import Input from '../Input'

const LoginForm = forwardRef(({ onLogin }, ref) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setFocus
  } = useForm()

  const onSubmit = (data) => {
    if (data) {
      onLogin?.(data)
    }
  }

  useEffect(() => {
    setFocus('email')
  }, [ref, setFocus])
  return (
    <div
      className='tab-pane fade show active'
      id='signin'
      role='tabpanel'
      aria-labelledby='signin-tab'
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label='Username or Email'
          required
          placeholder=''
          {...register('email', {
            required: 'Email is required!',
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Please type correct email!'
            }
          })}
          error={errors?.email?.message}
        ></Input>
        {/* End .form-group */}
        <Input
          label='Password'
          type='password'
          required
          placeholder=''
          {...register('password', {
            required: 'Password is required!',
            minLength: {
              value: 8,
              message: 'Password minimun 8 characters'
            },
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message: 'Must include Aa-Zz, 0-9, @$!%*?&'
            }
          })}
          error={errors?.password?.message}
        ></Input>
        {/* End .form-group */}
        <div className='form-footer'>
          <Button type='submit' variant='outline'>
            <span>LOG IN</span>
            <i className='icon-long-arrow-right' />{' '}
          </Button>

          {/* <div className='custom-control custom-checkbox'>
            <input
              type='checkbox'
              className='custom-control-input'
              id='signin-remember'
            />
            <label className='custom-control-label' htmlFor='signin-remember'>
              Remember Me
            </label>
          </div> */}
          {/* End .custom-checkbox */}
          {/* <a href='#' className='forgot-link'>
            Forgot Your Password?
          </a> */}
        </div>
        {/* End .form-footer */}
      </form>
      {/* <div className="form-choice">
        <p className="text-center">or sign in with</p>
        <div className="row">
          <div className="col-sm-6">
            <a href="#" className="btn btn-login btn-g">
              <i className="icon-google" />
              Login With Google
            </a>
          </div>
          <div className="col-sm-6">
            <a href="#" className="btn btn-login btn-f">
              <i className="icon-facebook-f" />
              Login With Facebook
            </a>
          </div>
        </div>
      </div> */}
    </div>
  )
})

export default LoginForm
