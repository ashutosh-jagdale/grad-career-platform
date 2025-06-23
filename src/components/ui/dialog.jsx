// src/components/ui/dialog.jsx
import { useState } from "react";

export function Dialog({ children }) {
  return <div>{children}</div>;
}

export function DialogTrigger({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export function DialogContent({ children }) {
  return <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded shadow-xl z-50">{children}</div>;
}
