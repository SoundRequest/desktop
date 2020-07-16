const { electron, app, globalShortcut } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')
// 1. Gabage Collection이 일어나지 않도록 함수 밖에 선언함.
let mainWindow
function createWindow() {
  mainWindow = new electron.BrowserWindow({
    width: 1456,
    height: 819,
    minWidth: 1456,
    minHeight: 819,
    //alwaysOnTop: true,
    center: true,
    //fullscreen: true,
    kiosk: !isDev,
    resizable: true,
    webPreferences: {
      // 2.
      // 웹 애플리케이션을 데스크탑으로 모양만 바꾸려면 안 해도 되지만,
      // Node 환경처럼 사용하려면 (Node에서 제공되는 빌트인 패키지 사용 포함)
      // true 해야 합니다.
      nodeIntegration: true
    }
  })
  // 3. and load the index.html of the app.
  if (isDev) {
    // 개발 중에는 개발 도구에서 호스팅하는 주소에서 로드
    mainWindow.loadURL('http://localhost:3000')
    mainWindow.webContents.openDevTools()
  } else {
    // 프로덕션 환경에서는 패키지 내부 리소스에 접근
    mainWindow.loadFile(path.join(__dirname, '../build/index.html'))
  }
  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    mainWindow = undefined
  })
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron.app.on('ready', createWindow)
// Quit when all windows are closed.
electron.app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    electron.app.quit()
  }
})
electron.app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

electron.app.whenReady().then(() => {
  globalShortcut.register('Alt+J', () => {
    console.log('Alt+J is pressed')
    console.log('This should be key for previous song')
  })
  globalShortcut.register('Alt+K', () => {
    console.log('Alt+K is pressed')
    console.log('This should be key for next song')
  })
  globalShortcut.register('Alt+S', () => {
    console.log('Alt+S is pressed')
    console.log('This should be key for toggle play or stop song')
  })
})
