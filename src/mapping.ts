import { AddPool,Deposit,Withdraw } from '../generated/ShardingDAO/MarketingMiningDelegator'
import { PoolInfo,UserInfo,UserTokenInfo } from '../generated/schema'
import {
  fetchTokenSymbol,
  fetchTokenDecimals,
  exponentToBigDecimal
} from "./helper";
import { Address, BigDecimal } from '@graphprotocol/graph-ts';

export function handleAddPool(event: AddPool): void{
  let poolId = event.params.pid.toString()
  let symbol = fetchTokenSymbol(event.params.tokenAddress)
  let decimals = fetchTokenDecimals(event.params.tokenAddress)
  let poolInfo = new PoolInfo(poolId)
  poolInfo.tokenAddress = event.params.tokenAddress
  poolInfo.tokenSymbol = symbol
  poolInfo.tokenDecimals = decimals
  poolInfo.save()
}

export function handleDeposit(event: Deposit): void{
  let userId = event.params.user.toHex()
  let userInfo = UserInfo.load(userId)
  if(userInfo == null){
    userInfo = createUser(userId)
  }

  let poolId = event.params.pid.toString()
  let poolInfo = PoolInfo.load(poolId)
  let amount = event.params.amount.toBigDecimal()
    .div(exponentToBigDecimal(poolInfo.tokenDecimals.toI32()))
    .truncate(poolInfo.tokenDecimals.toI32())
  updateUserToken(userId,poolId,amount,true)
}

export function handleWithdraw(event: Withdraw): void{
  let userId = event.params.user.toHex()
  let userInfo = UserInfo.load(userId)
  if(userInfo == null){
    userInfo = createUser(userId)
  }

  let poolId = event.params.pid.toString()
  let poolInfo = PoolInfo.load(poolId)
  let amount = event.params.amount.toBigDecimal()
    .div(exponentToBigDecimal(poolInfo.tokenDecimals.toI32()))
    .truncate(poolInfo.tokenDecimals.toI32())
  updateUserToken(userId,poolId,amount,false)
}

export function updateUserToken(userId: string, poolId: string, amount: BigDecimal, isDeposit: boolean):void{
  let userTokenId = userId.concat('-').concat(poolId)
  let userTokenInfo = UserTokenInfo.load(userTokenId)
  if(userTokenInfo == null){
    userTokenInfo = new UserTokenInfo(userTokenId)
    userTokenInfo.user = userId
    userTokenInfo.pool = poolId
    userTokenInfo.amount = amount
  }else{
    if(isDeposit){
      userTokenInfo.amount = userTokenInfo.amount.plus(amount)
    }else{
      userTokenInfo.amount = userTokenInfo.amount.minus(amount)
    }
  }
  userTokenInfo.save()
}

export function createUser(userId: string): UserInfo {
  let userInfo = new UserInfo(userId)
  userInfo.save()
  return userInfo
}