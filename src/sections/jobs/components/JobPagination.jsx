import { useContext, useState } from 'react';
import { JobContext } from '../context/JobContext';
import { getPageData } from "../helpers/getDataPage";
import { Pagination, Stack } from '@mui/material';
import queryString from 'query-string';
import { Navigate, useLocation, useNavigate } from 'react-router';

export const JobPagination = () => {
    
  const location = useLocation();
  const navigate = useNavigate();
  const { jobPageState, updatePage } = useContext( JobContext );
  const currentParams = queryString.parse(location.search)

    const initialSearch = {
        puestoB: currentParams.puestoB || '',
        sectorB: currentParams.sectorB || '',
        tipoContratoB: currentParams.tipoContratoB || '',
        ciudadB: currentParams.ciudadB || '',
        salarioAnualMinimo: currentParams.salarioAnualMinimo || 0,
        modalidadB: currentParams.modalidadB || '',
    }

  const redirectPage = async( numPag ) => {
    const updatedParams = { ...currentParams, numberPage: numPag };
    console.log(queryString.stringify(updatedParams))
    navigate(`?${queryString.stringify(updatedParams)}`);
    window.scrollTo(0,0)
  }

  
  return (
    <Stack 
        spacing={2} 
        sx={{
          justifyContent: 'center', // Centra horizontalmente el contenido
          alignItems: 'center',
          width:'80%',
          marginBottom:'10%' // Asegura que los elementos estén centrados verticalmente
        }}
      >
      <Pagination count={jobPageState.totalPages} onChange={(e,value) => { redirectPage(value - 1)}} shape="rounded"
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
