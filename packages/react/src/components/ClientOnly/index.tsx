'use client';

import { type PropsWithChildren } from 'react';

import { useIsMounted } from '../../hooks';

export interface ClientOnlyProps extends PropsWithChildren {}

export const ClientOnly = ({ children }: ClientOnlyProps) => {
  const isMounted = useIsMounted();

  if (isMounted) {
    return children;
  }

  return null;
};
