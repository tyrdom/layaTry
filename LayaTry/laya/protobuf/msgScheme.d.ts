import * as $protobuf from "protobufjs";
/** Namespace msgScheme. */
export namespace msgScheme {

    /** Properties of a AMsg. */
    interface IAMsg {

        /** AMsg head */
        head?: (msgScheme.AMsg.Head|null);

        /** AMsg loginRequest */
        loginRequest?: (msgScheme.ILoginRequest|null);

        /** AMsg loginResponse */
        loginResponse?: (msgScheme.ILoginResponse|null);

        /** AMsg undefinedMsg */
        undefinedMsg?: (msgScheme.IUndefinedMsg|null);

        /** AMsg undefinedRequest */
        undefinedRequest?: (msgScheme.IUndefinedRequest|null);

        /** AMsg undefinedResponse */
        undefinedResponse?: (msgScheme.IUndefinedResponse|null);
    }

    /** Represents a AMsg. */
    class AMsg implements IAMsg {

        /**
         * Constructs a new AMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgScheme.IAMsg);

        /** AMsg head. */
        public head: msgScheme.AMsg.Head;

        /** AMsg loginRequest. */
        public loginRequest?: (msgScheme.ILoginRequest|null);

        /** AMsg loginResponse. */
        public loginResponse?: (msgScheme.ILoginResponse|null);

        /** AMsg undefinedMsg. */
        public undefinedMsg?: (msgScheme.IUndefinedMsg|null);

        /** AMsg undefinedRequest. */
        public undefinedRequest?: (msgScheme.IUndefinedRequest|null);

        /** AMsg undefinedResponse. */
        public undefinedResponse?: (msgScheme.IUndefinedResponse|null);

        /** AMsg body. */
        public body?: ("loginRequest"|"loginResponse"|"undefinedMsg"|"undefinedRequest"|"undefinedResponse");

        /**
         * Creates a new AMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AMsg instance
         */
        public static create(properties?: msgScheme.IAMsg): msgScheme.AMsg;

        /**
         * Encodes the specified AMsg message. Does not implicitly {@link msgScheme.AMsg.verify|verify} messages.
         * @param message AMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgScheme.IAMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AMsg message, length delimited. Does not implicitly {@link msgScheme.AMsg.verify|verify} messages.
         * @param message AMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msgScheme.IAMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msgScheme.AMsg;

        /**
         * Decodes a AMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msgScheme.AMsg;

        /**
         * Verifies a AMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AMsg
         */
        public static fromObject(object: { [k: string]: any }): msgScheme.AMsg;

        /**
         * Creates a plain object from a AMsg message. Also converts values to other types if specified.
         * @param message AMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgScheme.AMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace AMsg {

        /** Head enum. */
        enum Head {
            Undefined_Msg = 0,
            Undefined_Request = 1,
            Undefined_Response = 2,
            Login_Request = 100001,
            Login_Response = 100002,
            CreateRoom_Request = 100003,
            CreateRoom_Response = 100004
        }
    }

    /** Properties of an UndefinedMsg. */
    interface IUndefinedMsg {
    }

    /** Represents an UndefinedMsg. */
    class UndefinedMsg implements IUndefinedMsg {

        /**
         * Constructs a new UndefinedMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgScheme.IUndefinedMsg);

        /**
         * Creates a new UndefinedMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UndefinedMsg instance
         */
        public static create(properties?: msgScheme.IUndefinedMsg): msgScheme.UndefinedMsg;

        /**
         * Encodes the specified UndefinedMsg message. Does not implicitly {@link msgScheme.UndefinedMsg.verify|verify} messages.
         * @param message UndefinedMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgScheme.IUndefinedMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UndefinedMsg message, length delimited. Does not implicitly {@link msgScheme.UndefinedMsg.verify|verify} messages.
         * @param message UndefinedMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msgScheme.IUndefinedMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UndefinedMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UndefinedMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msgScheme.UndefinedMsg;

        /**
         * Decodes an UndefinedMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UndefinedMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msgScheme.UndefinedMsg;

        /**
         * Verifies an UndefinedMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UndefinedMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UndefinedMsg
         */
        public static fromObject(object: { [k: string]: any }): msgScheme.UndefinedMsg;

        /**
         * Creates a plain object from an UndefinedMsg message. Also converts values to other types if specified.
         * @param message UndefinedMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgScheme.UndefinedMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UndefinedMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UndefinedRequest. */
    interface IUndefinedRequest {
    }

    /** Represents an UndefinedRequest. */
    class UndefinedRequest implements IUndefinedRequest {

        /**
         * Constructs a new UndefinedRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgScheme.IUndefinedRequest);

        /**
         * Creates a new UndefinedRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UndefinedRequest instance
         */
        public static create(properties?: msgScheme.IUndefinedRequest): msgScheme.UndefinedRequest;

        /**
         * Encodes the specified UndefinedRequest message. Does not implicitly {@link msgScheme.UndefinedRequest.verify|verify} messages.
         * @param message UndefinedRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgScheme.IUndefinedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UndefinedRequest message, length delimited. Does not implicitly {@link msgScheme.UndefinedRequest.verify|verify} messages.
         * @param message UndefinedRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msgScheme.IUndefinedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UndefinedRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UndefinedRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msgScheme.UndefinedRequest;

        /**
         * Decodes an UndefinedRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UndefinedRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msgScheme.UndefinedRequest;

        /**
         * Verifies an UndefinedRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UndefinedRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UndefinedRequest
         */
        public static fromObject(object: { [k: string]: any }): msgScheme.UndefinedRequest;

        /**
         * Creates a plain object from an UndefinedRequest message. Also converts values to other types if specified.
         * @param message UndefinedRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgScheme.UndefinedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UndefinedRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UndefinedResponse. */
    interface IUndefinedResponse {
    }

    /** Represents an UndefinedResponse. */
    class UndefinedResponse implements IUndefinedResponse {

        /**
         * Constructs a new UndefinedResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgScheme.IUndefinedResponse);

        /**
         * Creates a new UndefinedResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UndefinedResponse instance
         */
        public static create(properties?: msgScheme.IUndefinedResponse): msgScheme.UndefinedResponse;

        /**
         * Encodes the specified UndefinedResponse message. Does not implicitly {@link msgScheme.UndefinedResponse.verify|verify} messages.
         * @param message UndefinedResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgScheme.IUndefinedResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UndefinedResponse message, length delimited. Does not implicitly {@link msgScheme.UndefinedResponse.verify|verify} messages.
         * @param message UndefinedResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msgScheme.IUndefinedResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UndefinedResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UndefinedResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msgScheme.UndefinedResponse;

        /**
         * Decodes an UndefinedResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UndefinedResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msgScheme.UndefinedResponse;

        /**
         * Verifies an UndefinedResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UndefinedResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UndefinedResponse
         */
        public static fromObject(object: { [k: string]: any }): msgScheme.UndefinedResponse;

        /**
         * Creates a plain object from an UndefinedResponse message. Also converts values to other types if specified.
         * @param message UndefinedResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgScheme.UndefinedResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UndefinedResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginRequest. */
    interface ILoginRequest {

        /** LoginRequest userId */
        userId?: (string|null);

        /** LoginRequest password */
        password?: (string|null);
    }

    /** Represents a LoginRequest. */
    class LoginRequest implements ILoginRequest {

        /**
         * Constructs a new LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgScheme.ILoginRequest);

        /** LoginRequest userId. */
        public userId: string;

        /** LoginRequest password. */
        public password: string;

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRequest instance
         */
        public static create(properties?: msgScheme.ILoginRequest): msgScheme.LoginRequest;

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link msgScheme.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgScheme.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link msgScheme.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msgScheme.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msgScheme.LoginRequest;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msgScheme.LoginRequest;

        /**
         * Verifies a LoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRequest
         */
        public static fromObject(object: { [k: string]: any }): msgScheme.LoginRequest;

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @param message LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgScheme.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginResponse. */
    interface ILoginResponse {

        /** LoginResponse ok */
        ok?: (boolean|null);
    }

    /** Represents a LoginResponse. */
    class LoginResponse implements ILoginResponse {

        /**
         * Constructs a new LoginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: msgScheme.ILoginResponse);

        /** LoginResponse ok. */
        public ok: boolean;

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginResponse instance
         */
        public static create(properties?: msgScheme.ILoginResponse): msgScheme.LoginResponse;

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link msgScheme.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msgScheme.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link msgScheme.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msgScheme.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msgScheme.LoginResponse;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msgScheme.LoginResponse;

        /**
         * Verifies a LoginResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResponse
         */
        public static fromObject(object: { [k: string]: any }): msgScheme.LoginResponse;

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @param message LoginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msgScheme.LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
