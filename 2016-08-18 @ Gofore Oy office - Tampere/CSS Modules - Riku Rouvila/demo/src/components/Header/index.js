import React from 'react';
import styles from './header.css';

/*
 * {
 *   header: 'header__header___sBbZe',
 *   btn: 'header__btn___3bEoh'
 * }
 */

export default React.createClass({
  render() {
    return (
      <div className={styles.header}>
        <h1>My app</h1>

        <button className={styles.btn}>
          Home
        </button>
        <button className={styles.btn}>
          Portfolio
        </button>
        <button className={styles.btn}>
          Contact me
        </button>
      </div>
    )
  }
});
