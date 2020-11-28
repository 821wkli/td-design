import React from 'react';
import { Checkable, WhiteSpace } from '@td-design/react-native';

export default function ListItemDemo() {
  return (
    <>
      <WhiteSpace />
      <Checkable
        type="checkbox"
        multiple
        options={[{ label: 'Apple', value: 1, disabled: true }, { label: 'Banana', value: 2, disabled: true }, { label: 'Peer', value: 3 }]}
        defaultValue={[1, 3]}
        onChange={value => {
          console.log(value);
        }}
      />
      <WhiteSpace />
      <Checkable
        type="checkbox"
        multiple
        options={['apple', 'banana', 'peer', 'apple1', 'banana2', 'peer3']}
        style={{ width: '100%' }}
        onChange={value => {
          console.log(value);
        }}
      />
      <WhiteSpace />
      <Checkable
        type="checkbox"
        multiple={false}
        options={[1, 2, 3]}
        defaultValue={[1, 3]}
        style={{ width: '50%' }}
        onChange={value => {
          console.log(value);
        }}
      />
      <WhiteSpace />
      <Checkable
        type="radio"
        options={[{ label: 'Apple', value: 1, disabled: true }, { label: 'Banana', value: 2 }, { label: 'Peer', value: 3 }]}
        defaultValue={[1]}
        multiple={false}
        onChange={value => {
          console.log(value);
        }}
      />
      <WhiteSpace />
      <Checkable
        type="radio"
        multiple={false}
        options={['苹果', '香蕉', '梨']}
        onChange={value => {
          console.log(value);
        }}
      />
      <WhiteSpace />
      <Checkable
        type="radio"
        multiple
        options={[1, 2, 3]}
        onChange={value => {
          console.log(value);
        }}
      />
    </>
  );
}
