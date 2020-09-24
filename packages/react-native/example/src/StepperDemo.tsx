import React, { useState } from 'react';
import { Box, Stepper, Text, WhiteSpace, WingBlank, helpers } from '@td-design/react-native';

const { px } = helpers;
export default function StepperDemo() {
  const [value, setValue] = useState<number | undefined>(4);

  return (
    <WingBlank>
      <Text>您输入的是：{value}</Text>
      <Box flex={1} padding="xxl">
        <WhiteSpace />
        <Text>最大值20，最小值0，步进3</Text>
        <Stepper step={3} max={20} min={0} value={value} onChange={value => setValue(value)} />
        <WhiteSpace />
        <Text>不显示清除图标</Text>
        <Stepper width={px(100)} allowClear={false} />
        <WhiteSpace />
        <Text>禁用</Text>
        <Stepper width={px(100)} disabled />
        <WhiteSpace />
        <Text>允许用户输入</Text>
        <Stepper width={px(100)} allowClear={false} editable />
        <WhiteSpace />
        <Text>不允许用户输入</Text>
        <Stepper width={px(100)} allowClear={false} editable={false} />
      </Box>
    </WingBlank>
  );
}
