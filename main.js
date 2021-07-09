const {app, BrowserWindow,ipcMain, Menu, Tray} = require('electron')
const path = require('path')
const url = require('url')

let win

let tray = null
app.whenReady().then(() => {
  tray = new Tray('C:/Users/guliaaks/Desktop/f33cc07fa0044261d61a6645a67ef496.jpg')
  const trayMenu = Menu.buildFromTemplate([
    { label: 'Quit', click:()=>{
      app.quit();
    } },
    
  ])
  tray.setToolTip('My Application.')
  tray.setContextMenu(trayMenu)
})

let contextMenuTemplate=[{
  label: 'MiniMize Window',
  role: 'minimize'
},
{
  label: 'Close App',
  role: 'close'
},
{
  label: 'Go to Minimize Component',
  click: () => { openMinimize() }
},
{
  label: 'Go to Maximize Component',
  click: () => { openMaximize() }
},
];
let contextMenu=Menu.buildFromTemplate(contextMenuTemplate);

function createWindow () {
  win = new BrowserWindow({width: 800, height: 600,webPreferences: {
    nodeIntegration: true,
    contextIsolation: false,
    enableRemoteModule: true
}})

const menuTemplate = [{
  label: 'Operations',
  submenu: [
      {
          label: 'Minimize',
          click: () => { openMinimize() }
      },
      {
        label: 'Maximize',
        click: () => { openMaximize() }
    }
  ]
}];

let menu = Menu.buildFromTemplate(menuTemplate);    
Menu.setApplicationMenu(menu);

win.webContents.on('context-menu',()=>{
  contextMenu.popup();
})


  // load the dist folder from Angular
  win.loadURL(`file://${__dirname}/dist/AngElectron/index.html`)

  // Open the DevTools optionally:
  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

function openMinimize() {
      
  win.webContents.send('minimize', 'whoooooooh!')
}

function openMaximize() {
      
  win.webContents.send('maximize', 'whoooooooh!')
}

ipcMain.on("minimize",(event,message)=>{
  console.warn(message);
  win.minimize();
})

app.on('ready', createWindow)


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})