import React, { useEffect, useState } from 'react';
import { ButtonBox } from './ButtonBox';
import ButtonToogle from './ButtonToogle';

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
