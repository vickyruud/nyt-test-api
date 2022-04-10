import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Book = (props) => {
 return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
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
            {props.book.author}
           </Typography>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.book.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Book