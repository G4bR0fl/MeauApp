import React, { useState } from 'react';
import { Text } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { Container, RadioTemplate } from '../components/RadioButtonGroup';

interface Item {
  label: string;
  prop: string;
}

export default function CheckboxGroup({
  elements,
  value,
  onChange,
}: {
  elements: Item[];
  value?: any;
  onChange?: (value: string) => void;
}) {
  const [state, setState] = useState<any>({});

  function markProp(prop: string) {
    const value = state[prop];
    setState({
      ...state,
      [prop]: !value,
    });
    onChange && onChange(state);
  }

  return (
    <Container>
      {elements.map((chk, index) => (
        <RadioTemplate key={index}>
          <Checkbox
            status={state[chk.prop] ? 'checked' : 'unchecked'}
            onPress={() => markProp(chk.prop)}
          />
          <Text>{chk.label}</Text>
        </RadioTemplate>
      ))}
    </Container>
  );
}
