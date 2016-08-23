import React from 'react';
import './App.css';

import Page from './components/Page';
import Button from './components/Button';
import Header from './components/Header';

export default React.createClass({
  render() {
    return (
      <div>
        <Header />
        <Page>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus.
          </p>
          <Button>Click me!</Button>
        </Page>
      </div>
    );
  }
})
