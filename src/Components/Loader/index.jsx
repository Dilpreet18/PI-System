import { CircularProgress, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useStyles } from './styles'

const Loader = ({ isOpen }) => {
  const styles = useStyles()

  return (
    <Modal
      open={isOpen}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Box className={styles.root}>
        <Box className={styles.body}>
          <Typography className={styles.content}>loading...</Typography>
          <CircularProgress
            variant="indeterminate"
            className={styles.circularProgressBar}
            size={25}
            thickness={4}
          />
        </Box>
      </Box>
    </Modal>
  )
}

export default Loader
