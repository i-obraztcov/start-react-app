import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';

ReactDOM.render(<h1 className={styles.title}>hello</h1>, document.getElementById('app'));

module.hot.accept();
