import type { DependencyList } from 'react';
import type Fetch from './Fetch';

export type Subscribe = () => void;
export type Service<TData, TParams extends any[]> = (...args: TParams) => Promise<TData>;
export type Options<TData, TParams extends any[]> = Record<string, any> & {
  manual?: boolean;

  onBefore?: (params: TParams) => void;
  onSuccess?: (data: TData, params: TParams) => void;
  onError?: (e: Error, params: TParams) => void;
  onFinally?: (params: TParams, data?: TData, e?: Error) => void;

  defaultParams?: TParams;

  refreshDeps?: DependencyList;

  loadingDelay?: number;

  pollingInterval?: number;

  pollingWhenHidden?: boolean;

  refreshOnWindowFocus?: boolean;

  focusTimespan?: number;

  debounceWait?: number;

  debounceLeading?: boolean;

  debounceTrailing?: boolean;

  debounceMaxWait?: number;

  throttleWait?: number;

  throttleLeading?: boolean;

  throttleTrailing?: boolean;

  cacheKey?: string;

  cacheTime?: number;

  staleTime?: number;

  ready?: boolean;
};

export type Plugin<TData, TParams extends any[]> = {
  (fetchInstance: Fetch<TData, TParams>, options: Options<TData, TParams>): PluginReturn<TData, TParams>;
  onInit?: (options: Options<TData, TParams>) => Partial<FetchState<TData, TParams>>;
};

export type PluginReturn<TData, TParams extends any[]> = {
  onBefore?: (params: TParams) =>
    | ({
        stopNow?: boolean;
        returnNow?: boolean;
      } & Partial<FetchState<TData, TParams>>)
    | void;

  onRequest?: (
    service: Service<TData, TParams>,
    params: TParams
  ) => {
    servicePromise?: Promise<TData>;
  };

  onSuccess?: (data: TData, params: TParams) => void;

  onError?: (e: Error, params: TParams) => void;

  onFinally?: (params: TParams, data?: TData, e?: Error) => void;

  onCancel?: () => void;

  onMutate?: (data: TData) => void;
};

export type FetchState<TData, TParams extends any[]> = {
  loading: boolean;
  params?: TParams;
  data?: TData;
  error?: Error;
};

export type Result<TData, TParams extends any[]> = {
  loading: boolean;

  data?: TData;

  error?: Error;

  params: TParams | [];

  cancel: Fetch<TData, TParams>['cancel'];

  refresh: Fetch<TData, TParams>['refresh'];

  refreshAsync: Fetch<TData, TParams>['refreshAsync'];

  run: Fetch<TData, TParams>['run'];

  runAsync: Fetch<TData, TParams>['runAsync'];

  mutate: Fetch<TData, TParams>['mutate'];
};
