const { app, BrowserWindow } = require('electron');
const path = require('path')
const url = require('url')

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        icon: __dirname + '/logo.png'
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    //mainWindow.setMenu(null);

    /**mainWindow.webContents.on("devtools-opened", () => {
        //mainWindow.webContents.closeDevTools();
    });**/

});
