import React from 'react'

type AppPageHeaderProps = {
  title: string;
  children?: React.ReactNode;
};

export default function AppPageHeader({ title, children }: AppPageHeaderProps) {
  return (
    <div className="appPageHeader">
      <div>
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}
