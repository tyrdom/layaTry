import { Reader, BufferReader } from "../protobuf/library/protobuf-library";
import GameUI from "./Script/GameUI";



export default class WebSocketPipe {
    private socket: Laya.Socket;
    private byte: Laya.Byte;

    constructor() {

        this.byte = new Laya.Byte();
        //这里我们采用小端
        this.byte.endian = Laya.Byte.LITTLE_ENDIAN;
        this.socket = new Laya.Socket();
        //这里我们采用小端
        this.socket.endian = Laya.Byte.LITTLE_ENDIAN;
        //建立连接
        this.socket.connectByUrl("ws://localhost:8080");
        this.socket.on(Laya.Event.OPEN, this, this.openHandler);
        this.socket.on(Laya.Event.MESSAGE, this, this.receiveHandler);
        this.socket.on(Laya.Event.CLOSE, this, this.closeHandler);
        this.socket.on(Laya.Event.ERROR, this, this.errorHandler);

    }
    private openHandler(event: any = null): void {
        console.log("连接成功")
        //正确建立连接；
    }
    private receiveHandler(msg): void {

        console.log(msg)
        this.byte.clear()
        this.byte.writeArrayBuffer(msg)
        this.byte.pos = 0
        let aMsg = msgScheme.AMsg.decode(this.byte.readUint8Array(0, 100000))
        console.log(aMsg)
        switch (aMsg.head) {

            case msgScheme.AMsg.Head.Login_Response:
                GameUI.instance.inputShowText(aMsg.loginResponse.ok)
            
            default:
                console.log("unknow_message")
        }

        // let head = msgScheme.AMsg.decode(msg.buffer).head
        // console.log(head)

        // let buffer = new BufferReader(msg)

        // const aHead = aMsg.head
        // if (aHead == msgScheme.AMsg.Head.Login_Response) { 
        //        console.log("=====服务器回复登录结果：====="+ aMsg.loginResponse.ok+"==========")
        // }

        //接收到数据触发函数
    }
    private closeHandler(e: any = null): void {
        //关闭事件
    }
    private errorHandler(e: any = null): void {
        console.log("连接失败")
        //连接出错
    }

    public sendMsgToSocket(msg: String) {
        this.socket.send(msg)
    }

    public sendBinaryToSocket(buffer: ArrayBuffer) {
        this.socket.send(buffer)
    }
}
