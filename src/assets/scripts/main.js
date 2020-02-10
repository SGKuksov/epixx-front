import App from './App';
import '@/assets/styles/app.scss';

function ready(fn) {
  if (
    document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading'
  ) {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

const app = new App();
ready(app.init);
