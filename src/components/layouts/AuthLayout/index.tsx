import { PropsWithChildren } from 'react';

export type AuthLayoutProps = {
  isAuth: boolean;
  isError: boolean;
  message: string;
} & PropsWithChildren;

export function AuthLayout({
  children,
  isAuth,
  isError,
  message,
}: AuthLayoutProps) {
  return (
    <>{isAuth ? children : isError ? <>{message}</> : <>Unknown Error...</>}</>
  );
}
