import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type PrivateRouteProps = {
  isAllowed: boolean;
  // eslint-disable-next-line react/require-default-props
  redirectPath?: string;
  // eslint-disable-next-line react/require-default-props
  children?: React.ReactElement;
};

export default function PrivateRoute({
  isAllowed,
  redirectPath = '/mainpage',
  children,
}: PrivateRouteProps): JSX.Element {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children || <Outlet />;
}
