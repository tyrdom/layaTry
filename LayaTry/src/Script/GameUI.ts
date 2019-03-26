
import { ui } from "./../ui/layaMaxUI";

import StandardObj from "../Main";




export default class GameUI extends ui.test.startUI {

    static instance: GameUI

    constructor() {
        super()
        GameUI.instance = this
    }


    onClickDo(e: Laya.Event): void {

        StandardObj.TheWebSocketPipe.sendMsgToSocket(this.TextInput.text)
        const msg = msgScheme.AMsg.create({ head: msgScheme.AMsg.Head.Login_Request,
             loginRequest: {userId:"aaa",
                            password:"bbb"} })
        console.log(msg)

    }
    onEnable(): void {
        this.sendButton.on(Laya.Event.CLICK, this, this.onClickDo);
        console.log("按鈕ok")
        
    }

}