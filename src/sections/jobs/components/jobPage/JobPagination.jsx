import { Pagination, Stack } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { JobContext } from '../../context/jobPage/JobContext';

export const JobPagination = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { jobPageState } = useContext(JobContext);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = parseInt(params.get('numberPage')) || 0;
    setCurrentPage(page);
  }, [location]);

  const eventoPagina = (event, value) => {
    const params = new URLSearchParams(location.search);
    params.set('numberPage', value - 1);
    navigate(`${location.pathname}?${params.toString()}`);
    window.scroll(0, 0);
  };

  return (
    <Stack 
        spacing={2} 
        sx={{
          justifyContent: 'center', // Centra horizontalmente el contenido
          alignItems: 'center',
          width: '100%',
          marginBottom: '10%' // Asegura que los elementos estén centrados verticalmente
        }}
      >
      <Pagination 
        count={jobPageState.totalPages}  
        shape="rounded" 
        page={currentPage + 1} // Ajuste para 1-indexado
        onChange={eventoPagina}
        sx={{
          '& .MuiPaginationItem-root': {
            fontSize: '1.4rem',
            minWidth: '48px', // Establece un ancho mínimo mayor para los botones
            height: '48px',
          }
        }} 
      />
    </Stack>
  );
};
