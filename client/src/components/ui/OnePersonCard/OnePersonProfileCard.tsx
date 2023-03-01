import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import type { BackendUserType } from '../../../redux/userSlice/userType';
import { useAppDispatch } from '../../../redux/hooks';
import { loadOnePartner } from '../../../redux/partnersSlice/onePartnerReducer';

type PartnerPropsType = {
  partner: BackendUserType;
};

export default function OnePersonProfileCard({ partner }: PartnerPropsType): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        width: 320,
        borderRadius: 6,
        boxShadow: 10,
        bgcolor: 'rgba(220, 220, 220, 0.68)',
        height: 515,
        marginX: 3,
        mt: 8,
      }}
    >
      <CardMedia
        sx={{ height: 250, objectFit: 'contain' }}
        component="img"
        alt="partner photo"
        image={partner.pathPhoto}
      />
      <CardContent
        sx={{
          textAlign: 'center',
          fontFamily: 'monospace',
          mt: 2,
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {partner.companyName}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {partner.email}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {partner.phone}
        </Typography>
        <CardActions sx={{ justifyContent: 'center', mt: 4 }}>
          <Button
            variant="contained"
            size="medium"
            sx={{ bgcolor: '#F68B02' }}
            onClick={() => {
              dispatch(loadOnePartner(partner.id));
              navigate(`/partners/${partner.id}`);
            }}
          >
            Подробнее
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
