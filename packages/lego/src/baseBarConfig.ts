import theme from './theme';
import * as echarts from 'echarts/core';
import {
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
} from 'echarts/charts';
import {
  TooltipComponentOption,
  // 组件类型的定义后缀都为 ComponentOption
  GridComponentOption,
  LegendComponentOption,
  SingleAxisComponentOption,
} from 'echarts/components';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<
  BarSeriesOption | TooltipComponentOption | GridComponentOption | LegendComponentOption | SingleAxisComponentOption
>;

/**
 * 柱状图的基础配置，如坐标轴样式、文字样式、tooltip样式等
 */
export default {
  legend: {
    top: 'auto',
    right: 'auto',
    align: 'right',
    itemWidth: 12,
    itemHeight: 12,
    textStyle: {
      color: theme.colors.gray100,
      ...theme.typography.p2,
    },
  },
  xAxis: {
    axisLine: {
      lineStyle: {
        width: 0.5,
        color: theme.colors.gray200,
      },
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      ...theme.typography.p2,
      color: theme.colors.gray100,
    },
    axisPointer: {
      show: false,
    },
  },
  yAxis: {
    nameLocation: 'start',
    nameTextStyle: {
      ...theme.typography.p2,
      color: theme.colors.gray100,
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      ...theme.typography.p2,
      color: theme.colors.gray100,
    },
    splitLine: {
      lineStyle: {
        width: 0.5,
        color: theme.colors.gray200,
      },
    },
  },
  series: {
    type: 'bar',
    label: {
      ...theme.typography.p2,
      color: theme.colors.gray100,
    },
  },
} as ECOption;
