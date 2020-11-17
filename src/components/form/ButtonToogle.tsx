import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';

export default function ButtonToogle({ children, value, onChange }) {
  const [state, setState] = useState(value);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => onChange && onChange(state), [state]);
  useEffect(() => setDisabled(state === value), [state]);

  function toogle() {
    if (state === value) {
      setState(null);
    } else {
      setState(value);
    }
  }

  return (
    <TouchableOpacity onPress={toogle}>
      <Button mode="contained" disabled={disabled}>
        {children}
      </Button>
    </TouchableOpacity>
  );
}
