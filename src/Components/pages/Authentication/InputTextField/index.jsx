import React from 'react'
import cx from 'classnames'
import { InputAdornment, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  textField: {
    '& .MuiInputAdornment-root': {
      margin: 10,
    },
    '& .MuiInputBase-input': {
      padding: 12,
    },
  },
  endLogo: {
    cursor: 'pointer',
  },
  error: {
    opacity: 1,
    color: 'red',
    minHeight: 30,
    marginBottom: '10px !important',
  },
  valid: {
    opacity: 0,
  },
})

const InputTextField = (props) => {
  const styles = useStyles()

  const { startlogo, endlogo, setPassword, type, error } = props
  const setPasswordType = () => {
    type === 'password' ? setPassword('text') : setPassword('password')
  }

  return (
    <>
      <TextField
        variant="outlined"
        className={styles.textField}
        {...props}
        error={error && true}
        type={type}
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <img className={styles.logo} src={startlogo} alt="" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end" className={styles.endLogo}>
              {endlogo && (
                <img
                  className={styles.logo}
                  src={endlogo}
                  alt=""
                  onClick={setPasswordType}
                />
              )}
            </InputAdornment>
          ),
        }}
      />
      <Typography
        data-testid={`errorMessage${props['data-testid']}`}
        className={cx(styles.error, { [styles.valid]: !error })}
      >
        {error}
      </Typography>
    </>
  )
}

export default InputTextField
