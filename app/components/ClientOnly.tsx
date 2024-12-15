"use client";

import { useEffect, useState } from "react";

const ClientOnly: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Or return a loading spinner if you prefer
  }

  return <>{children}</>;
};

export default ClientOnly;
