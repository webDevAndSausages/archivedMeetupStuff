import React from 'react';
import classes from './page.css';

export default function Layout({ children }) {
  return (
    <div className={classes.page}>
      {children}
    </div>
  )
}
