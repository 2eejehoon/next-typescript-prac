import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

interface PortalProps {
  children: React.ReactNode;
  selector: string;
}

export default function Portal({ children, selector }: PortalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  const element = document.getElementById(selector)!;
  const portal = ReactDOM.createPortal(children, element);

  return mounted ? portal : null;
}
