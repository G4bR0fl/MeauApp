import React from 'react';
import { RadioButton as PaperRadioButton, Text } from 'react-native-paper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

export const RadioTemplate = styled.View`
  flex-direction: row;
  align-items: center;
  width: 33%;
`;

export function RadioButton({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <RadioTemplate>
      <PaperRadioButton value={value} />
      <Text>{label}</Text>
    </RadioTemplate>
  );
}

export function RadioButtonGroup({
  onValueChange,
  value,
  children,
}: {
  onValueChange: (value: string) => void;
  value: any;
  children: any;
}) {
  return (
    <PaperRadioButton.Group onValueChange={onValueChange} value={value}>
      <Container>{children}</Container>
    </PaperRadioButton.Group>
  );
}
