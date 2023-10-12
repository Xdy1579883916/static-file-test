import * as fs from 'node:fs/promises'
import { join } from 'node:path'
import { Controller, IpcHandle, IpcSend } from 'einf'
import { app } from 'electron'
import { AppService } from './app.service'

const isDev = !app.isPackaged

@Controller()
export class AppController {
  constructor(
    private appService: AppService,
  ) { }

  @IpcSend('reply-msg')
  public replyMsg(msg: string) {
    return `${this.appService.getDelayTime()} seconds later, the main process replies to your message: ${msg}`
  }

  @IpcHandle('send-msg')
  public async handleSendMsg(): Promise<string> {
    const filePath = isDev ? join(app.getAppPath(), '../../src/main/proto/wss.proto') : join(app.getAppPath(), 'proto/wss.proto')
    const text = await fs.readFile(filePath, {
      encoding: 'utf-8',
    })

    // 如果你不知道当前的执行路径，可以打印一下 app.getAppPath()
    return JSON.stringify({
      fileInfo: text.toString(),
      appPath: app.getAppPath(),
    })
  }
}
