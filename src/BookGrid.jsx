import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BookItem from './BookItem';




export default function BookGrid(props) {

  const data = props.books.map((book, i) => {
  return (
        <Grid key ={i} item xs={4}>
          <BookItem  book= {book} />
        </Grid>    
      
            
    )
})
  return (
    <Box style={{padding: 10}} sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
         {data}     
      </Grid>
    </Box>
  );
}