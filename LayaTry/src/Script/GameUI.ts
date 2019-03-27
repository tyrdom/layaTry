
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
                userId: this.TextInput.text,
                password: "bbb"
            }
        })
        console.log(msg)
        let buffer = msgScheme.AMsg.encode(msg).finish()
        console.log("Buffer:" + buffer)
        StandardObj.TheWebSocketPipe.sendBinaryToSocket(buffer)

        this.ShowText.text = ""

        //  let aHead = msgScheme.AMsg.decode(buffer).head
        //  console.log("decode:"+aHead)

    }
    onEnable(): void {
        this.SendButton.on(Laya.Event.CLICK, this, this.onClickDo);
        console.log("按鈕ok")

    }

    public inputShowText(ok: Boolean): void {
        if (ok) {
            this.ShowText.text = "login_ok"

        } else { this.ShowText.text = "login_fail" }
    }
}