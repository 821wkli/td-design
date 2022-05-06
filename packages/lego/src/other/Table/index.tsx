import React, { CSSProperties, ReactElement, useCallback, useEffect, useRef, useState } from 'react';

import SwiperCore, { Autoplay } from 'swiper';
import Swiper, { SwiperRefNode } from 'react-id-swiper';
import 'swiper/components/pagination/pagination.less';
import './index.less';
import { useRAF } from '../../hooks/useRAF';
import useTheme from '../../hooks/useTheme';
import classnames from 'classnames';

SwiperCore.use([Autoplay]);

type TextAlign = 'center' | 'left' | 'right';

type Column<T> = {
  title: string;
  dataIndex: string;
  id?: number | string;
  width?: number;
  flex?: number;
  /** 文字对齐方式 */
  textAlign?: TextAlign;
  render?: (data: T) => ReactElement;
};

type CustomTableProps<T> = {
  /** 列数据 */
  columns: Column<T>[];
  /** 数据源 */
  data: T[];
  /** 速度（ms） */
  speed?: number;
  /** 自动轮播 */
  autoLoop?: boolean;
  /** 是否在弹窗中 */
  inModal?: boolean;
  /** 自定义行高 */
  lineHeight?: number;
  /** 背景颜色 */
  colors?: [string, string] | [string, string, string];
  /** 除了表头的表格内容高度 */
  height?: number;
  /** 表头的类 */
  headerClass?: string;
  /** 内容的class */
  contentClass?: string;
};

function Table<T>({
  columns = [],
  data = [],
  speed = 3000,
  autoLoop = true,
  inModal = false,
  lineHeight = 30,
  height = 210,
  colors = ['rgba(51, 64, 146, 1)', 'rgba(35, 40, 129, 1)'],
  headerClass,
  contentClass,
}: CustomTableProps<T>) {
  const theme = useTheme();
  const swiper = useRef<SwiperRefNode>(null);
  const [index, setIndex] = useState(0);
  const [stop, setStop] = useState(false);
  const params = {
    height: lineHeight * 3,
    slidesPerView: autoLoop ? 3 : 0,
    loop: true,
  };

  const length = data.length;
  const { raf } = useRAF();

  const updateIndex = useCallback(() => {
    setIndex(idx => (idx < length - 1 ? idx + 1 : 0));
  }, [length]);

  useEffect(() => {
    if (!autoLoop) return;
    swiper.current?.swiper?.update();
  }, [autoLoop, length]);

  useEffect(() => {
    if (!autoLoop) return;
    swiper.current?.swiper?.slideTo(index);
  }, [autoLoop, index, length]);

  useEffect(() => {
    if (stop || !autoLoop) return;
    const interval = raf.setInterval(() => {
      updateIndex();
    }, speed);
    return () => raf.clearInterval(interval);
  }, [raf, speed, updateIndex, stop, autoLoop]);

  useEffect(() => {
    if (swiper && swiper.current && !autoLoop) {
      //鼠标覆盖停止自动切换
      swiper.current.onmouseover = function () {
        setStop(true);
      };
      //鼠标离开开始自动切换
      swiper.current.onmouseout = function () {
        setStop(false);
      };
    }
  }, [autoLoop, length]);

  // 表格内容高度判断
  const getHeight = () => {
    if (height && data?.length) {
      // 数据高度
      const dataHeight = lineHeight * data?.length;
      // 如果数据高度比传递的高度更小，返回数据高度
      if (dataHeight < height) {
        return dataHeight;
      }
    }
    return height;
  };

  const cellStyle = ({ width, flex }: { width: number | string; flex?: number }) => {
    if (flex) {
      return { flex };
    }

    return { width };
  };

  return (
    <div className="td-lego-table-container">
      <div style={{ width: '100%' }}>
        <div className="table-view">
          <div
            className={classnames('td-lego-table-header', headerClass)}
            style={{ backgroundColor: colors?.[2] ?? colors?.[1] }}
          >
            {columns && columns?.length ? (
              <div key={index} className="td-lego-table-content" style={{ height: lineHeight }}>
                {columns.map(item => {
                  return (
                    <div
                      className="text"
                      key={item.id}
                      style={
                        {
                          ...theme.typography[inModal ? 'p0' : 'p2'],
                          lineHeight: inModal ? '25px' : '19px',
                          textAlign: item.textAlign,
                          ...cellStyle({ width: item.width || `${100 / columns?.length}%`, flex: item.flex }),
                        } as CSSProperties
                      }
                    >
                      {item.title}
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
          <div
            className={classnames('td-lego-table-waybill-table', contentClass)}
            style={{
              background: `linear-gradient( ${colors[0]} 50%, ${colors[1]} 0)`,
              backgroundSize: `100% ${2 * lineHeight}px`,
              height: getHeight(),
              overflow: autoLoop ? 'hidden' : 'auto',
            }}
          >
            {data?.length && columns?.length ? (
              <Swiper direction="vertical" {...params} containerClass="table-swiper" ref={swiper}>
                {data.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="td-lego-table-content"
                      style={
                        {
                          ...theme.typography[inModal ? 'p0' : 'p2'],
                          lineHeight: inModal ? '25px' : '19px',
                          height: lineHeight,
                        } as CSSProperties
                      }
                    >
                      {columns.map(term => {
                        return (
                          <div
                            className="text"
                            key={term.id}
                            style={{
                              ...cellStyle({ width: term.width || `${100 / columns?.length}%`, flex: term.flex }),
                              textAlign: term.textAlign,
                            }}
                          >
                            {term.render ? term.render(item) : item?.[term?.dataIndex]}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </Swiper>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
