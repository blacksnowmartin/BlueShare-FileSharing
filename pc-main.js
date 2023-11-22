// main.js
const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadFile('index.html');
}

app.whenReady().then(createWindow);

// renderer.js
const { ipcRenderer } = require('electron');

function sendFile() {
    const fileInput = document.getElementById('fileInput');
    const filePath = fileInput.files[0].path;
    ipcRenderer.send('send-file', filePath);
}
