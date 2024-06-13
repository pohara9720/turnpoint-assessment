import styled from "styled-components";
import { Palette } from "../palette";
import { Show } from "../Show";

type SelectInputProps = {
  label: string;
  name: string;
  onChange: (e: React.FormEvent<HTMLSelectElement>) => void;
  value: string;
  options: string[];
  error?: string;
};

const ErrorText = styled.div`
  margin-top: 4px;
  color: ${Palette.Error};
  font-weight: bold;
`;

const SelectComponent = styled.select`
  background-color: ${Palette.White};
  padding: 4px;
  width: 100%;
  font-size: 14px;
  height: 40px;
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
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export function SelectInput({
  label,
  name,
  onChange,
  value,
  options,
  error,
}: SelectInputProps) {
  return (
    <Container>
      <label>{label}</label>
      <SelectComponent name={name} onChange={onChange} value={value}>
        {["", ...options].map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </SelectComponent>
      <Show when={Boolean(error)}>
        <ErrorText>{error}</ErrorText>
      </Show>
    </Container>
  );
}
