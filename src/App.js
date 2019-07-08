// @flow

import Articles from './Articles';

class App {
  constructor({title, mode}) {
    this.title = title || 'UNKNOWN';
    this.mode = mode || 'light';
  }

  static render() {
    Articles.render();
  }
}

export default App;
