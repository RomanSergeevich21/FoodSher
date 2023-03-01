import { Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import { MuiFileInput } from 'mui-file-input';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreateExcelFile({ requestid }: { requestid: number }): JSX.Element {
  const [file, setFile] = useState<FileList | null>();
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.currentTarget.files);
    setFile(e.currentTarget.files);
  };

  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData: FormData = new FormData();
    formData.append('productName', file[0]);
    axios
      .post<string>(`/api/post/newproduct/${requestid}`, formData)
      .then((res) => {
        navigate(`/request/${requestid}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={(e) => submitHandler(e)}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <input
            onChange={(e) => changeHandler(e)}
            placeholder="Загрузить список продуктов (.xcl)"
            name="productName"
            type="file"
            accept=".xlsx"
          />
        </Grid>

        <Grid item xs={3} sm={1}>
          <Button
            type="submit"
            variant="outlined"
            size="small"
            // sx={{ p: 3, ml: -5 }}
            className="promoBtn"
            style={{
              backgroundColor: '#f68b01',
              marginTop: '15px',
             
              marginLeft: '105px',
            }}
            // onClick={(e) => submitRedirect(e)}
          >
            Прикрепить cписок
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
