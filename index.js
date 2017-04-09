const {app, BrowserWindow, dialog} = require('electron');

let win = null;

app.on('ready', () => {
    win = new BrowserWindow();
    win.loadURL(`file://${__dirname}/index.html`);
});