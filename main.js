const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 860,
    minWidth: 960,
    minHeight: 650,
    title: 'WorkLife Hub - 직장인 라이프 매니저',
    autoHideMenuBar: true, // 상단 기본 메뉴바(File, Edit 등)를 숨겨 깔끔한 앱 스타일로 표시
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // 제작한 index.html 로드
  win.loadFile(path.join(__dirname, 'index.html'));
}

// Electron 초기화 완료 시 창 생성
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// 모든 창이 닫히면 앱 종료 (Windows 기준)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});