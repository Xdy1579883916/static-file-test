import * as fs from 'node:fs/promises'
import { join } from 'node:path'
import { Controller, IpcHandle, IpcSend } from 'einf'
import { app } from 'electron'
import { AppService } from './app.service'

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
    const text = await fs.readFile(join(app.getAppPath(), 'proto/wss.proto'), {
      encoding: 'utf-8',
    })
    return text.toString()
  }
}
