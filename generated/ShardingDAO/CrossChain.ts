// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AcceptChain extends ethereum.Event {
  get params(): AcceptChain__Params {
    return new AcceptChain__Params(this);
  }
}

export class AcceptChain__Params {
  _event: AcceptChain;

  constructor(event: AcceptChain) {
    this._event = event;
  }

  get chain(): i32 {
    return this._event.parameters[0].value.toI32();
  }

  get isAccepted(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class AcceptToken extends ethereum.Event {
  get params(): AcceptToken__Params {
    return new AcceptToken__Params(this);
  }
}

export class AcceptToken__Params {
  _event: AcceptToken;

  constructor(event: AcceptToken) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get isAccepted(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class ConfirmRequireNumChanged extends ethereum.Event {
  get params(): ConfirmRequireNumChanged__Params {
    return new ConfirmRequireNumChanged__Params(this);
  }
}

export class ConfirmRequireNumChanged__Params {
  _event: ConfirmRequireNumChanged;

  constructor(event: ConfirmRequireNumChanged) {
    this._event = event;
  }

  get oldNum(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get newNum(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class CrossChainTransfer extends ethereum.Event {
  get params(): CrossChainTransfer__Params {
    return new CrossChainTransfer__Params(this);
  }
}

export class CrossChainTransfer__Params {
  _event: CrossChainTransfer;

  constructor(event: CrossChainTransfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get token(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get targetAddress(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get chain(): i32 {
    return this._event.parameters[4].value.toI32();
  }

  get fee(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class FeeChanged extends ethereum.Event {
  get params(): FeeChanged__Params {
    return new FeeChanged__Params(this);
  }
}

export class FeeChanged__Params {
  _event: FeeChanged;

  constructor(event: FeeChanged) {
    this._event = event;
  }

  get chain(): i32 {
    return this._event.parameters[0].value.toI32();
  }

  get oldFee(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newFee(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class MaxAmountPerDayChanged extends ethereum.Event {
  get params(): MaxAmountPerDayChanged__Params {
    return new MaxAmountPerDayChanged__Params(this);
  }
}

export class MaxAmountPerDayChanged__Params {
  _event: MaxAmountPerDayChanged;

  constructor(event: MaxAmountPerDayChanged) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oldMaxAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newMaxAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ReceiveTokenDone extends ethereum.Event {
  get params(): ReceiveTokenDone__Params {
    return new ReceiveTokenDone__Params(this);
  }
}

export class ReceiveTokenDone__Params {
  _event: ReceiveTokenDone;

  constructor(event: ReceiveTokenDone) {
    this._event = event;
  }

  get receiveAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get info(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class ReceivingToken extends ethereum.Event {
  get params(): ReceivingToken__Params {
    return new ReceivingToken__Params(this);
  }
}

export class ReceivingToken__Params {
  _event: ReceivingToken;

  constructor(event: ReceivingToken) {
    this._event = event;
  }

  get receiveAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get info(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class RelayerAdded extends ethereum.Event {
  get params(): RelayerAdded__Params {
    return new RelayerAdded__Params(this);
  }
}

export class RelayerAdded__Params {
  _event: RelayerAdded;

  constructor(event: RelayerAdded) {
    this._event = event;
  }

  get relayer(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class RelayerRemoved extends ethereum.Event {
  get params(): RelayerRemoved__Params {
    return new RelayerRemoved__Params(this);
  }
}

export class RelayerRemoved__Params {
  _event: RelayerRemoved;

  constructor(event: RelayerRemoved) {
    this._event = event;
  }

  get relayer(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class CrossChain extends ethereum.SmartContract {
  static bind(address: Address): CrossChain {
    return new CrossChain("CrossChain", address);
  }

  acceptChain(param0: i32): boolean {
    let result = super.call("acceptChain", "acceptChain(uint8):(bool)", [
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0))
    ]);

    return result[0].toBoolean();
  }

  try_acceptChain(param0: i32): ethereum.CallResult<boolean> {
    let result = super.tryCall("acceptChain", "acceptChain(uint8):(bool)", [
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0))
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  acceptToken(param0: Address): boolean {
    let result = super.call("acceptToken", "acceptToken(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_acceptToken(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("acceptToken", "acceptToken(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  admin(): Address {
    let result = super.call("admin", "admin():(address)", []);

    return result[0].toAddress();
  }

  try_admin(): ethereum.CallResult<Address> {
    let result = super.tryCall("admin", "admin():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  confirmRequireNum(): BigInt {
    let result = super.call(
      "confirmRequireNum",
      "confirmRequireNum():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_confirmRequireNum(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "confirmRequireNum",
      "confirmRequireNum():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  fee(param0: i32): BigInt {
    let result = super.call("fee", "fee(uint8):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0))
    ]);

    return result[0].toBigInt();
  }

  try_fee(param0: i32): ethereum.CallResult<BigInt> {
    let result = super.tryCall("fee", "fee(uint8):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0))
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  implementation(): Address {
    let result = super.call("implementation", "implementation():(address)", []);

    return result[0].toAddress();
  }

  try_implementation(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "implementation",
      "implementation():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  maxAmountPerDay(param0: Address): BigInt {
    let result = super.call(
      "maxAmountPerDay",
      "maxAmountPerDay(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_maxAmountPerDay(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "maxAmountPerDay",
      "maxAmountPerDay(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  pendingAdmin(): Address {
    let result = super.call("pendingAdmin", "pendingAdmin():(address)", []);

    return result[0].toAddress();
  }

  try_pendingAdmin(): ethereum.CallResult<Address> {
    let result = super.tryCall("pendingAdmin", "pendingAdmin():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  receiveTotalAmount(param0: Address): BigInt {
    let result = super.call(
      "receiveTotalAmount",
      "receiveTotalAmount(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_receiveTotalAmount(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "receiveTotalAmount",
      "receiveTotalAmount(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  relayInfo(param0: Bytes, param1: BigInt): Address {
    let result = super.call(
      "relayInfo",
      "relayInfo(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toAddress();
  }

  try_relayInfo(param0: Bytes, param1: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "relayInfo",
      "relayInfo(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  relayer(param0: Address): boolean {
    let result = super.call("relayer", "relayer(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_relayer(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("relayer", "relayer(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  sendTotalAmount(param0: Address): BigInt {
    let result = super.call(
      "sendTotalAmount",
      "sendTotalAmount(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_sendTotalAmount(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "sendTotalAmount",
      "sendTotalAmount(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  timestamp(): BigInt {
    let result = super.call("timestamp", "timestamp():(uint256)", []);

    return result[0].toBigInt();
  }

  try_timestamp(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("timestamp", "timestamp():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class AddRelayerCall extends ethereum.Call {
  get inputs(): AddRelayerCall__Inputs {
    return new AddRelayerCall__Inputs(this);
  }

  get outputs(): AddRelayerCall__Outputs {
    return new AddRelayerCall__Outputs(this);
  }
}

export class AddRelayerCall__Inputs {
  _call: AddRelayerCall;

  constructor(call: AddRelayerCall) {
    this._call = call;
  }

  get relayerAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddRelayerCall__Outputs {
  _call: AddRelayerCall;

  constructor(call: AddRelayerCall) {
    this._call = call;
  }
}

export class CrossChainTransferCall extends ethereum.Call {
  get inputs(): CrossChainTransferCall__Inputs {
    return new CrossChainTransferCall__Inputs(this);
  }

  get outputs(): CrossChainTransferCall__Outputs {
    return new CrossChainTransferCall__Outputs(this);
  }
}

export class CrossChainTransferCall__Inputs {
  _call: CrossChainTransferCall;

  constructor(call: CrossChainTransferCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get chain(): i32 {
    return this._call.inputValues[3].value.toI32();
  }
}

export class CrossChainTransferCall__Outputs {
  _call: CrossChainTransferCall;

  constructor(call: CrossChainTransferCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _acceptToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _confirmRequireNum(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _acceptChains(): Array<i32> {
    return this._call.inputValues[2].value.toI32Array();
  }

  get _timestamp(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class ReceiveTokenCall extends ethereum.Call {
  get inputs(): ReceiveTokenCall__Inputs {
    return new ReceiveTokenCall__Inputs(this);
  }

  get outputs(): ReceiveTokenCall__Outputs {
    return new ReceiveTokenCall__Outputs(this);
  }
}

export class ReceiveTokenCall__Inputs {
  _call: ReceiveTokenCall;

  constructor(call: ReceiveTokenCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get receiveAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get info(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class ReceiveTokenCall__Outputs {
  _call: ReceiveTokenCall;

  constructor(call: ReceiveTokenCall) {
    this._call = call;
  }
}

export class RemoveRelayerCall extends ethereum.Call {
  get inputs(): RemoveRelayerCall__Inputs {
    return new RemoveRelayerCall__Inputs(this);
  }

  get outputs(): RemoveRelayerCall__Outputs {
    return new RemoveRelayerCall__Outputs(this);
  }
}

export class RemoveRelayerCall__Inputs {
  _call: RemoveRelayerCall;

  constructor(call: RemoveRelayerCall) {
    this._call = call;
  }

  get relayerAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveRelayerCall__Outputs {
  _call: RemoveRelayerCall;

  constructor(call: RemoveRelayerCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetAcceptChainCall extends ethereum.Call {
  get inputs(): SetAcceptChainCall__Inputs {
    return new SetAcceptChainCall__Inputs(this);
  }

  get outputs(): SetAcceptChainCall__Outputs {
    return new SetAcceptChainCall__Outputs(this);
  }
}

export class SetAcceptChainCall__Inputs {
  _call: SetAcceptChainCall;

  constructor(call: SetAcceptChainCall) {
    this._call = call;
  }

  get chain(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get isAccepted(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetAcceptChainCall__Outputs {
  _call: SetAcceptChainCall;

  constructor(call: SetAcceptChainCall) {
    this._call = call;
  }
}

export class SetAcceptTokenCall extends ethereum.Call {
  get inputs(): SetAcceptTokenCall__Inputs {
    return new SetAcceptTokenCall__Inputs(this);
  }

  get outputs(): SetAcceptTokenCall__Outputs {
    return new SetAcceptTokenCall__Outputs(this);
  }
}

export class SetAcceptTokenCall__Inputs {
  _call: SetAcceptTokenCall;

  constructor(call: SetAcceptTokenCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get isAccepted(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetAcceptTokenCall__Outputs {
  _call: SetAcceptTokenCall;

  constructor(call: SetAcceptTokenCall) {
    this._call = call;
  }
}

export class SetConfirmRequireNumCall extends ethereum.Call {
  get inputs(): SetConfirmRequireNumCall__Inputs {
    return new SetConfirmRequireNumCall__Inputs(this);
  }

  get outputs(): SetConfirmRequireNumCall__Outputs {
    return new SetConfirmRequireNumCall__Outputs(this);
  }
}

export class SetConfirmRequireNumCall__Inputs {
  _call: SetConfirmRequireNumCall;

  constructor(call: SetConfirmRequireNumCall) {
    this._call = call;
  }

  get requireNum(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetConfirmRequireNumCall__Outputs {
  _call: SetConfirmRequireNumCall;

  constructor(call: SetConfirmRequireNumCall) {
    this._call = call;
  }
}

export class SetFeeCall extends ethereum.Call {
  get inputs(): SetFeeCall__Inputs {
    return new SetFeeCall__Inputs(this);
  }

  get outputs(): SetFeeCall__Outputs {
    return new SetFeeCall__Outputs(this);
  }
}

export class SetFeeCall__Inputs {
  _call: SetFeeCall;

  constructor(call: SetFeeCall) {
    this._call = call;
  }

  get chain(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetFeeCall__Outputs {
  _call: SetFeeCall;

  constructor(call: SetFeeCall) {
    this._call = call;
  }
}

export class SetMaxAmountPerDayCall extends ethereum.Call {
  get inputs(): SetMaxAmountPerDayCall__Inputs {
    return new SetMaxAmountPerDayCall__Inputs(this);
  }

  get outputs(): SetMaxAmountPerDayCall__Outputs {
    return new SetMaxAmountPerDayCall__Outputs(this);
  }
}

export class SetMaxAmountPerDayCall__Inputs {
  _call: SetMaxAmountPerDayCall;

  constructor(call: SetMaxAmountPerDayCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetMaxAmountPerDayCall__Outputs {
  _call: SetMaxAmountPerDayCall;

  constructor(call: SetMaxAmountPerDayCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class TransferTokenCall extends ethereum.Call {
  get inputs(): TransferTokenCall__Inputs {
    return new TransferTokenCall__Inputs(this);
  }

  get outputs(): TransferTokenCall__Outputs {
    return new TransferTokenCall__Outputs(this);
  }
}

export class TransferTokenCall__Inputs {
  _call: TransferTokenCall;

  constructor(call: TransferTokenCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class TransferTokenCall__Outputs {
  _call: TransferTokenCall;

  constructor(call: TransferTokenCall) {
    this._call = call;
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}