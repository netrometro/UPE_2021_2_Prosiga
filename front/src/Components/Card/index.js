import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Upe from '../../Assets/upe-vector.png'

export default function MultiActionAreaCard(props) {
  const {
    titulo,
    descricao,
    acessarCurso
  } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="Upe.Height"
        image={Upe}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descricao}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" variant='contained' fullWidth 
        onClick={() => acessarCurso()}>
          Acessar
        </Button>
      </CardActions>
    </Card>
  );
}
