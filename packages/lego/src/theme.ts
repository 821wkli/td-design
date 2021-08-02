import * as echarts from 'echarts/core';

export default {
  typography: {
    h0: {
      fontSize: 48,
      lineHeight: 55,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontFamily: 'PangMenZhengDao-3',
    },
    h1: {
      fontSize: 38,
      lineHeight: 45,
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontFamily: 'Roboto',
    },
    h2: {
      fontSize: 32,
      lineHeight: 37,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontFamily: 'PangMenZhengDao-3',
    },
    h3: {
      fontSize: 24,
      lineHeight: 27,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontFamily: 'PangMenZhengDao-3',
    },
    h4: {
      fontSize: 20,
      lineHeight: 23,
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontFamily: 'Roboto',
    },
    h5: {
      fontSize: 18,
      lineHeight: 21,
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontFamily: 'Roboto',
    },
    p0: {
      fontSize: 18,
      lineHeight: 25,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontFamily: 'Alibaba PuHuiTi',
    },
    p1: {
      fontSize: 16,
      lineHeight: 22,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontFamily: 'Alibaba PuHuiTi',
    },
    p2: {
      fontSize: 14,
      lineHeight: 19,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontFamily: 'Alibaba PuHuiTi',
    },
    p3: {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontFamily: 'Alibaba PuHuiTi',
    },
  },
  colors: {
    primary50: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      { offset: 0, color: '#3FA4FF' },
      { offset: 1, color: '#60F5FF' },
    ]),
    primary100: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      { offset: 0, color: '#413ED6' },
      { offset: 1, color: '#728DED' },
    ]),
    primary200: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      { offset: 0, color: '#46E081' },
      { offset: 1, color: '#0DFFB7' },
    ]),
    primary300: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      { offset: 0, color: '#FEB01E' },
      { offset: 1, color: '#F2F756' },
    ]),
    primary400: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      { offset: 0, color: '#FF3657' },
      { offset: 1, color: '#FF72A6' },
    ]),
    primary500: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      { offset: 0, color: '#A13ED6' },
      { offset: 1, color: '#CF72ED' },
    ]),
    func50: '#FF4D4D',
    gray50: '#ffffff',
    gray100: '#cccccc',
    gray200: 'rgba(255,255,255,0.15)',
  },
};
