import React from 'react';
import { Text, View } from 'react-native';

const title = "hobby"
const hobby = "guitar"

export default function App() {
  return (
    <>
      <Text>{title}</Text>
      <Component
        name= {hobby}
      />
    </>
  );
}

function Component(props){
  return(
    <>
      <Text>{props.name}</Text>
    </>
  )
};
