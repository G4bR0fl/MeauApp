import React, { useState } from "react";
import { View, Text } from "react-native";
import { Checkbox } from "react-native-paper";

interface Item {
  label: string;
  prop: string;
}

export default function CheckboxGroup({ elements }: { elements: Item[] }) {
  const [state, setState] = useState<any>({});

  function markProp(prop: string) {
    const value = state[prop];
    setState({
      ...state,
      [prop]: !value,
    });
  }
  return (
    <View>
      {elements.map((chk, index) => {
        <View key={index}>
          <Text>{chk.label}</Text>
          <Checkbox
            status={state[chk.prop] ? "checked" : "unchecked"}
            onPress={() => markProp(chk.prop)}
          />
        </View>;
      })}
      <Text>haha </Text>
    </View>
  );
}
