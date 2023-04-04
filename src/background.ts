import browser from "webextension-polyfill";

console.log("Hello from the background!");

browser.runtime.onInstalled.addListener((details) => {
  console.log("Extension installed:", details);
});

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'openTab') {
    const q = message.query;
    q?.replaceAll(' ', '+');
    const url = `https://google.com/search?q=${q}`;
    browser.tabs.create({ url, active: true });
  }
});
