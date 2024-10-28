import { useContext, useState } from 'react';
import { JobContext } from '../context/JobContext';
import { getPageData } from "../helpers/getDataPage";
import { Pagination, Stack } from '@mui/material';

export const JobPagination = () => {
    
  // const { jobPageState, updatePage } = useContext( JobContext );
  // const page = jobPageState[0];
  // const search = jobPageState[1];
  // const [ currentPage, setCurrentPage ] = useState(0);

  // const redirectPage = async(value) => {
  //   setCurrentPage(value);
  //   const result = await getPageData(value,search);
  //   updatePage(result);
  //   window.scrollTo(0,0)
  // }

  
  // return (
    // <Stack 
    //     spacing={2} 
    //     sx={{
    //       justifyContent: 'center', // Centra horizontalmente el contenido
    //       alignItems: 'center',
    //       width:'80%',
    //       marginBottom:'10%' // Asegura que los elementos estén centrados verticalmente
    //     }}
    //   >
    //   <Pagination count={page.totalPages} onChange={(e,value) => { redirectPage(value - 1)}} shape="rounded"
    //   sx={{
    //     '& .MuiPaginationItem-root':{
    //       fontSize: '1.4rem',
    //       minWidth: '48px', // Establece un ancho mínimo mayor para los botones
    //       height: '48px',
    //     }
    //   }} />
    // </Stack>
  // )
}
