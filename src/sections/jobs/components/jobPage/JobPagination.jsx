import { Pagination, Stack } from '@mui/material';
import queryString from 'query-string';
import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { JobContext } from '../../context/jobPage/JobContext';


export const JobPagination = () => {
    
  const { jobPageState, updatePage } = useContext( JobContext );
  console.log(jobPageState)

  const eventoPagina = (value) => {
    updatePage(value - 1);
    window.scrollTo(0,0)
  }
  
  
  return (
    <Stack 
        spacing={2} 
        sx={{
          justifyContent: 'center', // Centra horizontalmente el contenido
          alignItems: 'center',
          width:'100%',
          marginBottom:'10%' // Asegura que los elementos estén centrados verticalmente
        }}
      >
      <Pagination count={jobPageState.totalPages}  shape="rounded" onChange={(event, pageNumber) => eventoPagina(pageNumber)}
      sx={{
        '& .MuiPaginationItem-root':{
          fontSize: '1.4rem',
          minWidth: '48px', // Establece un ancho mínimo mayor para los botones
          height: '48px',
        }
      }} />
    </Stack>
  )
}
