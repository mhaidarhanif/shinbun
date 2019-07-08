// @flow

class App {
  constructor({title, mode}) {
    this.title = title || 'UNKNOWN';
    this.mode = mode || 'light';
  }

  static render() {
    console.log('Hello SHINBUN!');
  }
}

export default App;
