import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import ButtonToogle from './ButtonToogle';

const ButtonBox = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;

export default function IntentField({ list, value, onChange }) {
  const [state, setState] = useState<any[]>(value ?? []);

  useEffect(() => onChange && onChange(state), [state]);

  function toogle(value: any) {
    if (value) {
      setState(state?.filter(item => item != value));
    } else {
      setState([...state, value]);
    }
  }

  return (
    <ButtonBox>
      {list?.map((item: any) => (
        <ButtonToogle onChange={toogle} value={item.value}>
          {item.label}
        </ButtonToogle>
      ))}
    </ButtonBox>
  );
}
