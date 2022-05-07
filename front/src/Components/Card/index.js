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
    <Card fullWidth variant='outlined' >
      <CardMedia
        component="img"
        image={Upe}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {titulo}
        </Typography>
        <Button size="small" color="primary" variant='contained' fullWidth
          onClick={() => acessarCurso(titulo)}>
          Acessar
        </Button>
        <Typography variant="body2" color="text.secondary">
          {descricao}
        </Typography>
      </CardContent>
    </Card>
  );
}
