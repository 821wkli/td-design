import React from 'react';
import { CircularSolidPie } from '@td-design/lego';

export default () => {
  const data = [
    { name: '木材', value: '47043' },
    { name: '机械', value: '38603' },
    { name: '钢铁', value: '31316' },
    { name: '煤烟', value: '31316' },
  ];

  return <CircularSolidPie seriesData={data} style={{ width: 560, height: 248 }} autoLoop />;
};
