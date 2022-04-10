import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

const BookItem = (props) => {

  

 return (
    <Card sx={{ maxWidth: 400, height: 'auto' }}>
        <CardMedia
          component="img"
          height="590"
          image={props.book.book_image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {props.book.title}
           <Typography gutterBottom variant="h6" component="div">
             Author: {props.book.author}
           </Typography>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.book.description}
          </Typography>
       </CardContent>
       <CardActions>
        <Button href={`mailto:?subject=Checkout this book&body=${props.book.title} ${props.book.amazon_product_url}`} title="Share viaEmail" size="small" > SHARE</Button>
        <Button size="small" onClick={() => window.open(`${props.book.amazon_product_url}`, "_blank")}>Amazon</Button>
      </CardActions>
    </Card>
  );
}

export default BookItem