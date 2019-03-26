
import { ui } from "./../ui/layaMaxUI";

import StandardObj from "../Main";




export default class GameUI extends ui.test.startUI {

    static instance: GameUI

    constructor() {
        super()
        GameUI.instance = this
    }


    onClickDo(e: Laya.Event): void {

        // StandardObj.TheWebSocketPipe.sendMsgToSocket(this.TextInput.text)

        let msg = msgScheme.AMsg.create({
            head: msgScheme.AMsg.Head.Login_Request,
            loginRequest: {
                userId: "aaa",
                password: "bbb"
            }
        })
        console.log(msg)
        let buffer = msgScheme.AMsg.encode(msg).finish()
        console.log(buffer)
        StandardObj.TheWebSocketPipe.sendBinaryToSocket(buffer)
        // let decoded = msgScheme.AMsg.decode(buffer()).
        // console.log(decoded)
    }
    onEnable(): void {
        this.sendButton.on(Laya.Event.CLICK, this, this.onClickDo);
        console.log("按鈕ok")

    }

}