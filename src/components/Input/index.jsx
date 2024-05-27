import { Controller } from "react-hook-form"

import {
    IconContainer,
    InputContainer,
    InputText,
    ErrorText
} from "./style"

// eslint-disable-next-line react/prop-types
const Input = ({ lefIcon, name, control, errorMessage, ...rest }) => {
  return (
    <>
      <InputContainer>
        {lefIcon ? (<IconContainer>{lefIcon}</IconContainer>) : null}
        <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => <InputText value {...field} {...rest} />}
        />
      </InputContainer>
      { errorMessage ? (
        <ErrorText>{errorMessage}</ErrorText>
      ) : null}
    </>
  )
}

export default Input