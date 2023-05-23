/* eslint-disable @typescript-eslint/no-var-requires */
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1020,
    height: 720,
    webPreferences: {
      preload: path.join(__dirname, './preload.ts'),
    },
  });

  if (isDev) {
    win.webContents.openDevTools();
  }

  ipcMain.handle('ping', () => 'pong');

  // win.loadFile('index.html');
  win.loadURL(
    isDev ? 'http://localhost:8080' : `file://${path.resolve(__dirname, './out/signin.html')}`,
  );
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
