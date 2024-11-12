import { Pagination, Stack } from '@mui/material';
import queryString from 'query-string';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { JobContext } from '../../context/jobPage/JobContext';


export const JobPagination = () => {
    
  const [currentNumPag, setCurrentNumPag] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const { jobPageState } = useContext( JobContext );


  // window.scrollTo(0,0)
  // onChange={(e,value) => { redirectPage(value - 1)}}
  
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
      <Pagination count={jobPageState.totalPages}  shape="rounded"
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
