// @flow

import Articles from './Articles';

class App {
  constructor(title: string = 'Unknown', mode: 'light' | 'dark' = 'light') {
    this.title = title;
    this.mode = mode;
  }

  static render() {
    Articles.render();
  }
}

export default App;
