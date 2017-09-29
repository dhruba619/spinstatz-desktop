var electronInstaller = require('electron-winstaller');
resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: 'e:/personal/fievr/micah/desktopApp/app/electron/V1/dist/Spinstatz-win32-x64',
    outputDirectory: 'e:/personal/fievr/micah/desktopApp/app/electron/V1/dist/installer',
    authors: 'dhrubajyoti',
    exe: 'SpinStatz.exe',
	setupMsi: 'SpinStatz.msi',
	noMsi: false,
	description: 'simple app'
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));