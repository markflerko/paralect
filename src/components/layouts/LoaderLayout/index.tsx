import { LoadingOverlay } from '@mantine/core';
import { PropsWithChildren } from 'react';

export type LoaderLayoutProps = {
  isLoaded: boolean;
} & PropsWithChildren;

export function LoaderLayout({ children, isLoaded }: LoaderLayoutProps) {
  return (
    <>
      {isLoaded ? (
        children
      ) : (
        <LoadingOverlay visible={!isLoaded} overlayBlur={2} />
      )}
    </>
  );
}
