import { Controller } from "react-hook-form"
import { IInput } from "./types"

import {
    IconContainer,
    InputContainer,
    InputText,
    ErrorText
} from "./style"

const Input = ({ lefIcon, name, control, errorMessage, ...rest }: IInput) => {
  return (
    <>
      <InputContainer>
        {lefIcon ? (<IconContainer>{lefIcon}</IconContainer>) : null}
        <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
      { errorMessage ? (
        <ErrorText>{errorMessage}</ErrorText>
      ) : null}
    </>
  )
}

export default Input