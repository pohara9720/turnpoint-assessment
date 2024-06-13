import styled from "styled-components";
import { Palette } from "../palette";
import { Show } from "../Show";

type TextInputProps = {
  label: string;
  name: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  value: string;
  type?: "text" | "date";
  error?: string;
};

const ErrorText = styled.div`
  margin-top: 4px;
  color: ${Palette.Error};
  font-weight: bold;
`;

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

export function TextInput({
  label,
  name,
  onChange,
  value,
  type = "text",
  error,
}: TextInputProps) {
  return (
    <Container>
      <label>{label}</label>
      <InputComponent
        name={name}
        onChange={onChange}
        value={value}
        type={type}
      />
      <Show when={Boolean(error)}>
        <ErrorText>{error}</ErrorText>
      </Show>
    </Container>
  );
}
