import React, {useState} from 'react'
import PropTypes from 'prop-types'
export const AddCategory = ({setCategories}) => {

    const [inputValue, setImputValue] = useState('');

    const cambioValor = (e) =>{
        setImputValue(e.target.value);
    }
    
    const eventoEnviar = (e) => {
        e.preventDefault();
        if( inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats]);
            setImputValue('');
        }

    }

    return (
        <form onSubmit={eventoEnviar}>
            <input
                type="text"
                value={inputValue}
                onChange={cambioValor}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}