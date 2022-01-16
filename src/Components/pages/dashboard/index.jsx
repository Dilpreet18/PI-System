import React, { useEffect, useState } from 'react'
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'

import { getData } from '../../../api/api'

import Loader from '../../Loader'
import snackbar from '../../SnackBar'

import { auth } from '../../../services/firebase/firebase'

const useStyle = makeStyles({
  root: {
    width: '85%',
    margin: 'auto',
  },
  textField: {
    width: '100%',
    margin: '20px 0px 40px 0px !important',
  },
  product: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 10px',
  },
  searchIcon: {
    cursor: 'pointer',
  },
})

const Dashboard = () => {
  const [brandName, setBrandName] = useState('iphone')
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const styles = useStyle()

  useEffect(() => {
    onSearch()
  }, [])

  let count = 0
  const onSearch = () => {
    count++
    setIsLoading(true)
    getData(brandName)
      .then((data) => {
        if (count > 5) {
          snackbar("sorry we did't found any match", 'error')
          setIsLoading(false)
          return
        }

        if (
          !data?.data?.result?.[0].length &&
          !data?.data?.result?.[1].length
        ) {
          onSearch()
          return
        }
        count = 0
        setProducts(data?.data?.result)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
      })
  }
  
  const brands = [
    {
      siteName: 'amazon',
      siteLink: 'https://www.amazon.in/s?k=',
      siteLogo:
        'https://i2.wp.com/zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-HD.png?fit=841%2C240&ssl=1',
    },
    {
      siteName: 'flipkart',
      siteLink: 'https://www.flipkart.com/search?q=',
      siteLogo:
        'https://zeevector.com/wp-content/uploads/Flipkart-Logo-Vector.png',
    },
  ]

  const buyProduct = (link) => window.open(link)

  const filterProduct = (product, index, brandIndex) => {
    const splited = brandName.split(' ')
    let count = 0

    splited.forEach((tag) => {
      product.Title.toLowerCase()
        .replace(/[^a-zA-Z0-9' ']/g, '')
        .includes(tag.toLowerCase())
        ? count++
        : console.log({
            product: product.Title.toLowerCase().replace(
              /[^a-zA-Z0-9' ']/g,
              '',
            ),
            tag,
            splited,
          })
    })

    return (
      splited.length === count && (
        <Grid
          container
          className={styles.product}
          key={index}
          style={{
            height: 88,
            boxShadow: '0px 4px 20px rgba(88, 100, 255, 0.1)',
            marginBottom: 20,
          }}
          data-testid="productContainer"
        >
          <Grid item lg="8">
            <Typography style={{ fontWeight: 600, fontFamily: 'Poppins' }}>
              {product.Title}
            </Typography>
          </Grid>
          <Grid item lg="2">
            <Typography
              style={{
                background: '#5864FF',
                color: 'white',
                textAlign: 'center',
                padding: 4,
                borderRadius: 8,
                cursor: 'pointer',
              }}
              onClick={() =>
                buyProduct(`${brands[brandIndex].siteLink}${product.Title}`)
              }
            >
              {`₹${product.price.replace('₹', '')}`}
            </Typography>
          </Grid>
        </Grid>
      )
    )
  }

  return (
    <>
      <Box className={styles.root}>
        <Box display="flex" alignItem="center">
          <TextField
            className={styles.textField}
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            data-testid="productSearchBar"
            InputProps={{
              endAdornment: (
                <InputAdornment
                  className={styles.searchIcon}
                  position="start"
                  onClick={onSearch}
                >
                  <Button color="primary">
                    <SearchIcon />
                  </Button>
                </InputAdornment>
              ),
            }}
          />
          <Button
            style={{ top: '30px', height: 'fit-content' }}
            color="error"
            onClick={() => {
              auth.signOut()
            }}
            data-testid="logoutButton"
          >
            Logout
          </Button>
        </Box>
        <Grid container display="flex" justifyContent="space-between">
          {products.map((brand, brandIndex) => (
            <Grid item lg="5.7" style={{ marginBottom: 20 }}>
              <img
                width="100%"
                height="180"
                src={brands[brandIndex].siteLogo}
                alt=""
              />
              {brand.map((product, index) =>
                filterProduct(product, index, brandIndex),
              )}
            </Grid>
          ))}
        </Grid>
      </Box>
      <Loader isOpen={isLoading} />
    </>
  )
}

export default Dashboard
