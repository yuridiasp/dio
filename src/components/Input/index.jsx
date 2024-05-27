import {
    IconContainer,
    InputContainer,
    InputText
} from "./style"

// eslint-disable-next-line react/prop-types
const Input = ({ lefIcon, name, ...rest }) => {
  return (
    <InputContainer>
      {lefIcon ? (<IconContainer>{lefIcon}</IconContainer>) : null}
    <InputText {...rest} />
    </InputContainer>
  )
}

export default Input