import { ChangeEvent, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';




function MyCards({dataMovie}:{dataMovie:any}) {
  const data = {
    savedCards: 7
  };

  const [selectedValue, setSelectedValue] = useState('a');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleDelete = () => { };

  return (
        
    <>
      { dataMovie.map((item:any,index:number)=>(
           <Card key={index} sx={{ maxWidth: 345 }}>
           <CardActionArea>
             <CardMedia
               component="img"
               height="140"
               image={item.Poster}
               alt="green iguana"
             />
             <CardContent>
               <Typography gutterBottom variant="h5" component="div">
               {item.Title}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                 Lizards are a widespread group of squamate reptiles, with over 6,000
                 species, ranging across all continents except Antarctica
               </Typography>
             </CardContent>
           </CardActionArea>
           <CardActions>
             <Button size="small" color="primary">
               Share
             </Button>
           </CardActions>
         </Card>
      ))
          
      }
    </>
  );
}

export default MyCards;
