
import { ui } from "./../ui/layaMaxUI";

import MainWebSocketPipe from "../Main";

export default class GameUI extends ui.test.startUI {

    static instance: GameUI

    constructor() {
        super()
        GameUI.instance = this
    }


    onClickDo(e:Laya.Event):void {
        
        MainWebSocketPipe.TheWebSocketPipe.sendMsgToSocket(this.TextInput.text)

    }
    onEnable():void {
        this.sendButton.on(Laya.Event.CLICK, this, this.onClickDo);
        console.log("按鈕ok")
    }

}