// import {
//     AdminChanged as AdminChangedEvent,
//     BeaconUpgraded as BeaconUpgradedEvent,
//     Upgraded as UpgradedEvent
//   } from "../generated/ProxyController/Proxycontroller"

//   import { Upgraded } from "../generated/schema"
  
  // export function handleUpgraded(event: UpgradedEvent): void {
  //   let entity = new Upgraded(
  //     event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  //   )
  //   entity.implementation = event.params.implementation
  //   entity.save()

  //   Controller.create(event.params.implementation)
  // }

  


  import {
    FutureRegistered as FutureRegisteredEvent,
    StartingDelaySet as StartingDelaySetEvent,
    NextPeriodSwitchSet as NextPeriodSwitchSetEvent

} from "../generated/ProxyController/Proxycontroller"

import {FutureVault,User,Period} from "../generated/schema"

export function handleFutureRegistered(event: FutureRegisteredEvent): void {
    let entity = new FutureVault(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
    entity.address = event.params._futureVault


    
    entity.save()
    
}


export function handleStartingDelaySet(event: StartingDelaySetEvent):void {
    let entity = new User(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
    entity.delay = event.params._startingDelay

    
    entity.save()
}

export function handleNextPeriodSwitchSet(event: NextPeriodSwitchSetEvent): void {
  let entity = new Period(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  entity.NextPeriodSwitchSet = event.params._nextSwitchTimestamp
  entity.save()
}