//Este use Form  sirve para todos los formularios de ahora en adelante, est va con formwith counter
import {useState} from 'react'

export const useForm = (initialState={}) => {

    //aqui se pueden enviar las reglas de validacion
    const [values, setValues] = useState(initialState);

    const reset = ()=>{
        setValues(initialState);
    }

    const handleInputChange=({target})=>{

        setValues({
            ...values,
            [target.name]:target.value
        });
    }
    
    return [values,handleInputChange,reset];
}