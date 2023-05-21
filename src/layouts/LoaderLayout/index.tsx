import { PropsWithChildren } from 'react';

export type LoaderLayoutProps = {
  loaded: boolean;
} & PropsWithChildren;

export function LoaderLayout({ children, loaded }: LoaderLayoutProps) {
  return <>{loaded ? children : <>Loading...</>}</>;
}
