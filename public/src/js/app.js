if ('serviceWorker' in navigator) {
  // navigator.serviceWorker.register('../../sw.js', {scope: '../../help/'}).then(() => {
  navigator.serviceWorker.register('../../sw.js').then(() => {
    console.log('Service worker registered!');
  });
}
