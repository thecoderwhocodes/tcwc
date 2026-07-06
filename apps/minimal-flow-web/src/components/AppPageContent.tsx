import React from 'react'

type AppPageContentProps = {
  children?: React.ReactNode;
};

export default function AppPageContent({ children }: AppPageContentProps) {
  return (
    <div className="appPageContent">
      {children}
    </div>
  );
}
