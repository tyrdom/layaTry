export module pb
{
	import Loader = Laya.Loader;
	import Browser = Laya.Browser;
	import Handler = Laya.Handler;
	
	export  class Network_ProtocolBuffer 
	{
		private ProtoBuf:any = Browser.window.protobuf;
		
		constructor()
		{
			
			this.ProtoBuf.load("../../laya/proto/msgScheme.proto", this.onAssetsLoaded);
		}
		
		private onAssetsLoaded(err:any, root:any):void
		{
			if (err)
				throw err;

			// Obtain a message type
			var AMsg:any = root.lookup("msgScheme.AMsg");

			// Create a new message
			var message:any = AMsg.create(
			{
				head:0
			});

			// Verify the message if necessary (i.e. when possibly incomplete or invalid)
			var errMsg:any = AMsg.verify(message);
			if (errMsg)
				throw Error(errMsg);

			// Encode a message to an Uint8Array (browser) or Buffer (node)
			var buffer:any = AMsg.encode(message).finish();
			// ... do something with buffer

			// Or, encode a plain object
			var buffer:any = AMsg.encode(
			{
				awesomeField: "AwesomeString"
			}).finish();
			// ... do something with buffer

			// Decode an Uint8Array (browser) or Buffer (node) to a message
			var message:any = AMsg.decode(buffer);
			// ... do something with message

			// If your application uses length-delimited buffers, there is also encodeDelimited and decodeDelimited.
		}
	}
}
