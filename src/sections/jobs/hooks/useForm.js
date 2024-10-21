import { useState } from "react";

//Exige que el argumento sea un objeto
const useForm = ( initialForm = {}) => {
  
    const [ formState, setFormState ] = useState( initialForm );

    //{target es la desestructuración de event}
    const onInputChange = ({target}) => {
        const { name , value } = target;
        setFormState({
            ...formState,
            [ name ]:value
        });
    }

    const onResetForm = () => {
      setFormState( initialForm );
    }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }
}

export default useForm