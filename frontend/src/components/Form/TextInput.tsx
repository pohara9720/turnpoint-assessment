import styled from "styled-components";
import { Palette } from "../palette";

const InputComponent = styled.input`
  background-color: ${Palette.White};
  padding: 4px;
  width: 100%;
  font-size: 14px;
  height: 32px;
  border-radius: 4px;
  border: solid 1px;
  border-color: ${Palette.Secondary};
  &:hover {
    background-color: ${Palette.White};
  }

  &:focus {
    outline: none;
    background-color: ${Palette.White};
    border-color: ${Palette.Primary};
  }

  &::placeholder {
    color: ${Palette.Secondary};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export function TextInput({ label, name, onChange }) {
  return (
    <Container>
      <label>{label}</label>
      <InputComponent name={name} onChange={onChange} />
    </Container>
  );
}
