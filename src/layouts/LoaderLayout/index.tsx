import { PropsWithChildren } from 'react';

export type LoaderLayoutProps = {
  isLoaded: boolean;
} & PropsWithChildren;

export function LoaderLayout({ children, isLoaded }: LoaderLayoutProps) {
  return <>{isLoaded ? children : <>Loading...</>}</>;
}
