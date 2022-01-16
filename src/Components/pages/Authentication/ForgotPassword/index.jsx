import React, { useState } from 'react'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import cx from 'classnames'

import InputTextField from '../InputTextField'

import { useStyle } from '../styles'

import mail from './../../../../assets/images/mail.svg'

const ForgotPassword = ({ navigateTO }) => {
  const [email, setEmail] = useState('')
  const styles = useStyle()
  return (
    <>
      <Box className={styles.root}>
        <Typography className={styles.label}>Forgot Password</Typography>
        <InputTextField
          startlogo={mail}
          value={email}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <Button className={styles.loginButton} variant="contained">
          Submit
        </Button>
        <Typography className={cx(styles.option, styles.or)}>
          <Typography
            className={styles.optionLabel}
            component="span"
            onClick={() => navigateTO('')}
          >
            Back To Login!
          </Typography>
        </Typography>
      </Box>
    </>
  )
}

export default ForgotPassword
