import React, { useContext } from 'react';
import { styled } from 'styled-components';
import { ShopContext } from '../../context/AppContextProvider';

const GroupField = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  width: 100%;

  label {
    font-size: 14px;
    color: #9dabbd;
  }

  .error__message {
    color: #e90f0f;
    padding: 5px 0;
    margin: 0;
    font-size: 14px;
  }
`;

const InputField = styled.input`
width: 100%;
height: 40px;
border-radius: 5px;
font-size: 14px;
color: #121b27;
padding: 10px;

&:focus {
    outline: unset;
}
`

function FormFields({ label, type, name }) {
  const { register, formState: { errors } } = useContext(ShopContext);

  return (
    <GroupField>
      <label htmlFor={name}>{label}</label>     
      <InputField
        type={type}
        name={name}
        {...register(name, { required: '' })}
      />
      <p className='error__message'>{errors[name]?.message}</p>
    </GroupField>
  );
}

export default FormFields;
