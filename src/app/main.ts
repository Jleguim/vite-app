import { app, BrowserWindow } from 'electron'
import path from 'path'

const isDev: boolean = process.env.NODE_ENV == 'dev'

app.once('ready', async () => {
  const window = new BrowserWindow({})
  const windowFile = path.join(app.getAppPath(), './dist/index.html')

  window.once('ready-to-show', () => window.show())

  if (isDev) window.loadURL('http://localhost:4992/')
  else window.loadFile(windowFile)
})
