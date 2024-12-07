import { app, BrowserWindow } from 'electron'
import path from 'path'

// const isDev: boolean = process.env.NODE_ENV == 'DEVELOPMENT'

app.once('ready', async () => {
  const winOptions = {}

  console.log(app.getAppPath())

  const window = new BrowserWindow(winOptions)
  const windowFile = path.join(app.getAppPath(), '/src/ui/index.html')

  window.once('ready-to-show', () => window.show())
  window.loadFile(windowFile)

  // if (isDev) window.loadURL('http://localhost:4992/')
  // else window.loadFile(windowFile)
})
