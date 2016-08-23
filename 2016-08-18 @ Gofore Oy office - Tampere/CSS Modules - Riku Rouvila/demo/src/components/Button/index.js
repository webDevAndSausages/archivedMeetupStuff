import React from 'react';
import styles from './button.css';

export default React.createClass({
  render() {
    return (
      <button className={styles.btn}>
        {this.props.children}
      </button>
    )
  }
});
