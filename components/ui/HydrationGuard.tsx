'use client';

import { useEffect, useState } from 'react';

interface HydrationGuardProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function HydrationGuard({ children, fallback = null }: HydrationGuardProps) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return isHydrated ? <>{children}</> : <>{fallback}</>;
}
