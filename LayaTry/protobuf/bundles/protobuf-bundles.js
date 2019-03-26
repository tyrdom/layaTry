var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.msgScheme = (function() {

    /**
     * Namespace msgScheme.
     * @exports msgScheme
     * @namespace
     */
    var msgScheme = {};

    msgScheme.AMsg = (function() {

        /**
         * Properties of a AMsg.
         * @memberof msgScheme
         * @interface IAMsg
         * @property {msgScheme.AMsg.Head|null} [head] AMsg head
         * @property {msgScheme.ILoginRequest|null} [loginRequest] AMsg loginRequest
         * @property {msgScheme.ILoginResponse|null} [loginResponse] AMsg loginResponse
         * @property {msgScheme.IUndefinedMsg|null} [undefinedMsg] AMsg undefinedMsg
         * @property {msgScheme.IUndefinedRequest|null} [undefinedRequest] AMsg undefinedRequest
         * @property {msgScheme.IUndefinedResponse|null} [undefinedResponse] AMsg undefinedResponse
         */

        /**
         * Constructs a new AMsg.
         * @memberof msgScheme
         * @classdesc Represents a AMsg.
         * @implements IAMsg
         * @constructor
         * @param {msgScheme.IAMsg=} [properties] Properties to set
         */
        function AMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AMsg head.
         * @member {msgScheme.AMsg.Head} head
         * @memberof msgScheme.AMsg
         * @instance
         */
        AMsg.prototype.head = 0;

        /**
         * AMsg loginRequest.
         * @member {msgScheme.ILoginRequest|null|undefined} loginRequest
         * @memberof msgScheme.AMsg
         * @instance
         */
        AMsg.prototype.loginRequest = null;

        /**
         * AMsg loginResponse.
         * @member {msgScheme.ILoginResponse|null|undefined} loginResponse
         * @memberof msgScheme.AMsg
         * @instance
         */
        AMsg.prototype.loginResponse = null;

        /**
         * AMsg undefinedMsg.
         * @member {msgScheme.IUndefinedMsg|null|undefined} undefinedMsg
         * @memberof msgScheme.AMsg
         * @instance
         */
        AMsg.prototype.undefinedMsg = null;

        /**
         * AMsg undefinedRequest.
         * @member {msgScheme.IUndefinedRequest|null|undefined} undefinedRequest
         * @memberof msgScheme.AMsg
         * @instance
         */
        AMsg.prototype.undefinedRequest = null;

        /**
         * AMsg undefinedResponse.
         * @member {msgScheme.IUndefinedResponse|null|undefined} undefinedResponse
         * @memberof msgScheme.AMsg
         * @instance
         */
        AMsg.prototype.undefinedResponse = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * AMsg body.
         * @member {"loginRequest"|"loginResponse"|"undefinedMsg"|"undefinedRequest"|"undefinedResponse"|undefined} body
         * @memberof msgScheme.AMsg
         * @instance
         */
        Object.defineProperty(AMsg.prototype, "body", {
            get: $util.oneOfGetter($oneOfFields = ["loginRequest", "loginResponse", "undefinedMsg", "undefinedRequest", "undefinedResponse"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AMsg instance using the specified properties.
         * @function create
         * @memberof msgScheme.AMsg
         * @static
         * @param {msgScheme.IAMsg=} [properties] Properties to set
         * @returns {msgScheme.AMsg} AMsg instance
         */
        AMsg.create = function create(properties) {
            return new AMsg(properties);
        };

        /**
         * Encodes the specified AMsg message. Does not implicitly {@link msgScheme.AMsg.verify|verify} messages.
         * @function encode
         * @memberof msgScheme.AMsg
         * @static
         * @param {msgScheme.IAMsg} message AMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.head != null && message.hasOwnProperty("head"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.head);
            if (message.loginRequest != null && message.hasOwnProperty("loginRequest"))
                $root.msgScheme.LoginRequest.encode(message.loginRequest, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.loginResponse != null && message.hasOwnProperty("loginResponse"))
                $root.msgScheme.LoginResponse.encode(message.loginResponse, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.undefinedMsg != null && message.hasOwnProperty("undefinedMsg"))
                $root.msgScheme.UndefinedMsg.encode(message.undefinedMsg, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.undefinedRequest != null && message.hasOwnProperty("undefinedRequest"))
                $root.msgScheme.UndefinedRequest.encode(message.undefinedRequest, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.undefinedResponse != null && message.hasOwnProperty("undefinedResponse"))
                $root.msgScheme.UndefinedResponse.encode(message.undefinedResponse, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AMsg message, length delimited. Does not implicitly {@link msgScheme.AMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msgScheme.AMsg
         * @static
         * @param {msgScheme.IAMsg} message AMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a AMsg message from the specified reader or buffer.
         * @function decode
         * @memberof msgScheme.AMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgScheme.AMsg} AMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgScheme.AMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.head = reader.int32();
                    break;
                case 2:
                    message.loginRequest = $root.msgScheme.LoginRequest.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.loginResponse = $root.msgScheme.LoginResponse.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.undefinedMsg = $root.msgScheme.UndefinedMsg.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.undefinedRequest = $root.msgScheme.UndefinedRequest.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.undefinedResponse = $root.msgScheme.UndefinedResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a AMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msgScheme.AMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msgScheme.AMsg} AMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a AMsg message.
         * @function verify
         * @memberof msgScheme.AMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.head != null && message.hasOwnProperty("head"))
                switch (message.head) {
                default:
                    return "head: enum value expected";
                case 0:
                case 1:
                case 2:
                case 100001:
                case 100002:
                case 100003:
                case 100004:
                    break;
                }
            if (message.loginRequest != null && message.hasOwnProperty("loginRequest")) {
                properties.body = 1;
                {
                    var error = $root.msgScheme.LoginRequest.verify(message.loginRequest);
                    if (error)
                        return "loginRequest." + error;
                }
            }
            if (message.loginResponse != null && message.hasOwnProperty("loginResponse")) {
                if (properties.body === 1)
                    return "body: multiple values";
                properties.body = 1;
                {
                    var error = $root.msgScheme.LoginResponse.verify(message.loginResponse);
                    if (error)
                        return "loginResponse." + error;
                }
            }
            if (message.undefinedMsg != null && message.hasOwnProperty("undefinedMsg")) {
                if (properties.body === 1)
                    return "body: multiple values";
                properties.body = 1;
                {
                    var error = $root.msgScheme.UndefinedMsg.verify(message.undefinedMsg);
                    if (error)
                        return "undefinedMsg." + error;
                }
            }
            if (message.undefinedRequest != null && message.hasOwnProperty("undefinedRequest")) {
                if (properties.body === 1)
                    return "body: multiple values";
                properties.body = 1;
                {
                    var error = $root.msgScheme.UndefinedRequest.verify(message.undefinedRequest);
                    if (error)
                        return "undefinedRequest." + error;
                }
            }
            if (message.undefinedResponse != null && message.hasOwnProperty("undefinedResponse")) {
                if (properties.body === 1)
                    return "body: multiple values";
                properties.body = 1;
                {
                    var error = $root.msgScheme.UndefinedResponse.verify(message.undefinedResponse);
                    if (error)
                        return "undefinedResponse." + error;
                }
            }
            return null;
        };

        /**
         * Head enum.
         * @name msgScheme.AMsg.Head
         * @enum {string}
         * @property {number} Undefined_Msg=0 Undefined_Msg value
         * @property {number} Undefined_Request=1 Undefined_Request value
         * @property {number} Undefined_Response=2 Undefined_Response value
         * @property {number} Login_Request=100001 Login_Request value
         * @property {number} Login_Response=100002 Login_Response value
         * @property {number} CreateRoom_Request=100003 CreateRoom_Request value
         * @property {number} CreateRoom_Response=100004 CreateRoom_Response value
         */
        AMsg.Head = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Undefined_Msg"] = 0;
            values[valuesById[1] = "Undefined_Request"] = 1;
            values[valuesById[2] = "Undefined_Response"] = 2;
            values[valuesById[100001] = "Login_Request"] = 100001;
            values[valuesById[100002] = "Login_Response"] = 100002;
            values[valuesById[100003] = "CreateRoom_Request"] = 100003;
            values[valuesById[100004] = "CreateRoom_Response"] = 100004;
            return values;
        })();

        return AMsg;
    })();

    msgScheme.UndefinedMsg = (function() {

        /**
         * Properties of an UndefinedMsg.
         * @memberof msgScheme
         * @interface IUndefinedMsg
         */

        /**
         * Constructs a new UndefinedMsg.
         * @memberof msgScheme
         * @classdesc Represents an UndefinedMsg.
         * @implements IUndefinedMsg
         * @constructor
         * @param {msgScheme.IUndefinedMsg=} [properties] Properties to set
         */
        function UndefinedMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new UndefinedMsg instance using the specified properties.
         * @function create
         * @memberof msgScheme.UndefinedMsg
         * @static
         * @param {msgScheme.IUndefinedMsg=} [properties] Properties to set
         * @returns {msgScheme.UndefinedMsg} UndefinedMsg instance
         */
        UndefinedMsg.create = function create(properties) {
            return new UndefinedMsg(properties);
        };

        /**
         * Encodes the specified UndefinedMsg message. Does not implicitly {@link msgScheme.UndefinedMsg.verify|verify} messages.
         * @function encode
         * @memberof msgScheme.UndefinedMsg
         * @static
         * @param {msgScheme.IUndefinedMsg} message UndefinedMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UndefinedMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UndefinedMsg message, length delimited. Does not implicitly {@link msgScheme.UndefinedMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msgScheme.UndefinedMsg
         * @static
         * @param {msgScheme.IUndefinedMsg} message UndefinedMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UndefinedMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UndefinedMsg message from the specified reader or buffer.
         * @function decode
         * @memberof msgScheme.UndefinedMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgScheme.UndefinedMsg} UndefinedMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UndefinedMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgScheme.UndefinedMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UndefinedMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msgScheme.UndefinedMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msgScheme.UndefinedMsg} UndefinedMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UndefinedMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UndefinedMsg message.
         * @function verify
         * @memberof msgScheme.UndefinedMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UndefinedMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return UndefinedMsg;
    })();

    msgScheme.UndefinedRequest = (function() {

        /**
         * Properties of an UndefinedRequest.
         * @memberof msgScheme
         * @interface IUndefinedRequest
         */

        /**
         * Constructs a new UndefinedRequest.
         * @memberof msgScheme
         * @classdesc Represents an UndefinedRequest.
         * @implements IUndefinedRequest
         * @constructor
         * @param {msgScheme.IUndefinedRequest=} [properties] Properties to set
         */
        function UndefinedRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new UndefinedRequest instance using the specified properties.
         * @function create
         * @memberof msgScheme.UndefinedRequest
         * @static
         * @param {msgScheme.IUndefinedRequest=} [properties] Properties to set
         * @returns {msgScheme.UndefinedRequest} UndefinedRequest instance
         */
        UndefinedRequest.create = function create(properties) {
            return new UndefinedRequest(properties);
        };

        /**
         * Encodes the specified UndefinedRequest message. Does not implicitly {@link msgScheme.UndefinedRequest.verify|verify} messages.
         * @function encode
         * @memberof msgScheme.UndefinedRequest
         * @static
         * @param {msgScheme.IUndefinedRequest} message UndefinedRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UndefinedRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UndefinedRequest message, length delimited. Does not implicitly {@link msgScheme.UndefinedRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msgScheme.UndefinedRequest
         * @static
         * @param {msgScheme.IUndefinedRequest} message UndefinedRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UndefinedRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UndefinedRequest message from the specified reader or buffer.
         * @function decode
         * @memberof msgScheme.UndefinedRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgScheme.UndefinedRequest} UndefinedRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UndefinedRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgScheme.UndefinedRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UndefinedRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msgScheme.UndefinedRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msgScheme.UndefinedRequest} UndefinedRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UndefinedRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UndefinedRequest message.
         * @function verify
         * @memberof msgScheme.UndefinedRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UndefinedRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return UndefinedRequest;
    })();

    msgScheme.UndefinedResponse = (function() {

        /**
         * Properties of an UndefinedResponse.
         * @memberof msgScheme
         * @interface IUndefinedResponse
         */

        /**
         * Constructs a new UndefinedResponse.
         * @memberof msgScheme
         * @classdesc Represents an UndefinedResponse.
         * @implements IUndefinedResponse
         * @constructor
         * @param {msgScheme.IUndefinedResponse=} [properties] Properties to set
         */
        function UndefinedResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new UndefinedResponse instance using the specified properties.
         * @function create
         * @memberof msgScheme.UndefinedResponse
         * @static
         * @param {msgScheme.IUndefinedResponse=} [properties] Properties to set
         * @returns {msgScheme.UndefinedResponse} UndefinedResponse instance
         */
        UndefinedResponse.create = function create(properties) {
            return new UndefinedResponse(properties);
        };

        /**
         * Encodes the specified UndefinedResponse message. Does not implicitly {@link msgScheme.UndefinedResponse.verify|verify} messages.
         * @function encode
         * @memberof msgScheme.UndefinedResponse
         * @static
         * @param {msgScheme.IUndefinedResponse} message UndefinedResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UndefinedResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UndefinedResponse message, length delimited. Does not implicitly {@link msgScheme.UndefinedResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msgScheme.UndefinedResponse
         * @static
         * @param {msgScheme.IUndefinedResponse} message UndefinedResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UndefinedResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UndefinedResponse message from the specified reader or buffer.
         * @function decode
         * @memberof msgScheme.UndefinedResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgScheme.UndefinedResponse} UndefinedResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UndefinedResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgScheme.UndefinedResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UndefinedResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msgScheme.UndefinedResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msgScheme.UndefinedResponse} UndefinedResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UndefinedResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UndefinedResponse message.
         * @function verify
         * @memberof msgScheme.UndefinedResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UndefinedResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return UndefinedResponse;
    })();

    msgScheme.LoginRequest = (function() {

        /**
         * Properties of a LoginRequest.
         * @memberof msgScheme
         * @interface ILoginRequest
         * @property {string|null} [userId] LoginRequest userId
         * @property {string|null} [password] LoginRequest password
         */

        /**
         * Constructs a new LoginRequest.
         * @memberof msgScheme
         * @classdesc Represents a LoginRequest.
         * @implements ILoginRequest
         * @constructor
         * @param {msgScheme.ILoginRequest=} [properties] Properties to set
         */
        function LoginRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRequest userId.
         * @member {string} userId
         * @memberof msgScheme.LoginRequest
         * @instance
         */
        LoginRequest.prototype.userId = "";

        /**
         * LoginRequest password.
         * @member {string} password
         * @memberof msgScheme.LoginRequest
         * @instance
         */
        LoginRequest.prototype.password = "";

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @function create
         * @memberof msgScheme.LoginRequest
         * @static
         * @param {msgScheme.ILoginRequest=} [properties] Properties to set
         * @returns {msgScheme.LoginRequest} LoginRequest instance
         */
        LoginRequest.create = function create(properties) {
            return new LoginRequest(properties);
        };

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link msgScheme.LoginRequest.verify|verify} messages.
         * @function encode
         * @memberof msgScheme.LoginRequest
         * @static
         * @param {msgScheme.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
            if (message.password != null && message.hasOwnProperty("password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link msgScheme.LoginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msgScheme.LoginRequest
         * @static
         * @param {msgScheme.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof msgScheme.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgScheme.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgScheme.LoginRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msgScheme.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msgScheme.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRequest message.
         * @function verify
         * @memberof msgScheme.LoginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        return LoginRequest;
    })();

    msgScheme.LoginResponse = (function() {

        /**
         * Properties of a LoginResponse.
         * @memberof msgScheme
         * @interface ILoginResponse
         * @property {boolean|null} [ok] LoginResponse ok
         */

        /**
         * Constructs a new LoginResponse.
         * @memberof msgScheme
         * @classdesc Represents a LoginResponse.
         * @implements ILoginResponse
         * @constructor
         * @param {msgScheme.ILoginResponse=} [properties] Properties to set
         */
        function LoginResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResponse ok.
         * @member {boolean} ok
         * @memberof msgScheme.LoginResponse
         * @instance
         */
        LoginResponse.prototype.ok = false;

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @function create
         * @memberof msgScheme.LoginResponse
         * @static
         * @param {msgScheme.ILoginResponse=} [properties] Properties to set
         * @returns {msgScheme.LoginResponse} LoginResponse instance
         */
        LoginResponse.create = function create(properties) {
            return new LoginResponse(properties);
        };

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link msgScheme.LoginResponse.verify|verify} messages.
         * @function encode
         * @memberof msgScheme.LoginResponse
         * @static
         * @param {msgScheme.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ok != null && message.hasOwnProperty("ok"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ok);
            return writer;
        };

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link msgScheme.LoginResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msgScheme.LoginResponse
         * @static
         * @param {msgScheme.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @function decode
         * @memberof msgScheme.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgScheme.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgScheme.LoginResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ok = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msgScheme.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msgScheme.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginResponse message.
         * @function verify
         * @memberof msgScheme.LoginResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ok != null && message.hasOwnProperty("ok"))
                if (typeof message.ok !== "boolean")
                    return "ok: boolean expected";
            return null;
        };

        return LoginResponse;
    })();

    return msgScheme;
})();