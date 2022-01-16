import React, { useState } from 'react'
import { Box } from '@mui/system'
import { Button, Typography } from '@mui/material'

import InputTextField from '../InputTextField'

import eyedot from './../../../../assets/images/eyedot.svg'
import lock from './../../../../assets/images/lock.svg'
import mail from './../../../../assets/images/mail.svg'

import { useStyle } from '../styles'
import signup from '../../../../utils/user/signup'
import { signUpValidator } from '../../../../utils/validations'

const SignUp = ({ navigateTO }) => {
  const [userDetail, setUserDetail] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [passwordType, setPasswordType] = useState('password')
  const [confirmPasswordType, setConfirmPasswordType] = useState('password')
  const [error, setError] = useState({})

  const styles = useStyle()

  const onChangeHandler = (e) => {
    setUserDetail({
      ...userDetail,
      [e.target.name]: e.target.value.trimStart(),
    })
  }

  const onSubmit = async () => {
    const { error: validatorResponse, isValid } = signUpValidator(userDetail)
    if (!isValid) {
      setError(validatorResponse)
    } else {
      if (userDetail.confirmPassword !== userDetail.password) {
        setError({
          ...error,
          confirmPassword: {
            message: "Password and confirm password does't match",
          },
        })
      } else {
        await signup(userDetail)
      }
    }
  }

  return (
    <>
      <Box className={styles.root}>
        <Typography className={styles.label}>Sign Up</Typography>
        <InputTextField
          name="name"
          value={userDetail.name}
          type="text"
          placeholder="Full Name"
          onChange={onChangeHandler}
          data-testid="name"
        />
        <InputTextField
          name="email"
          value={userDetail.email}
          type="email"
          placeholder="Email"
          onChange={onChangeHandler}
          startlogo={mail}
          error={error?.email?.message}
          data-testid="emailField"
        />
        <InputTextField
          name="password"
          value={userDetail.password}
          type={passwordType}
          placeholder="password"
          onChange={onChangeHandler}
          startlogo={lock}
          endlogo={eyedot}
          setPassword={setPasswordType}
          error={error?.password?.message}
          data-testid="passwordField"
        />
        <InputTextField
          name="confirmPassword"
          value={userDetail.confirmPassword}
          type={confirmPasswordType}
          placeholder="Confirm Password"
          onChange={onChangeHandler}
          startlogo={lock}
          endlogo={eyedot}
          setPassword={setConfirmPasswordType}
          error={error?.confirmPassword?.message}
          data-testid="confirmPasswordField"
        />

        <Button
          className={styles.loginButton}
          variant="contained"
          onClick={onSubmit}
          data-testid="SignUpButton"
        >
          Sign Up
        </Button>
        <Typography className={styles.or}>Or</Typography>
        <Typography className={styles.option}>
          Already have an account?{' '}
          <Typography
            className={styles.optionLabel}
            component="span"
            onClick={() => navigateTO('')}
          >
            Login!
          </Typography>
        </Typography>
      </Box>
    </>
  )
}

export default SignUp
