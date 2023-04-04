import browser from 'webextension-polyfill';

window.addEventListener('click', (e: MouseEvent) => {
  if (e.ctrlKey && e.altKey) {
    const selection = window.getSelection()!.toString();
    browser.runtime.sendMessage({ action: 'openTab', query: selection });
  }
});
export default {};
