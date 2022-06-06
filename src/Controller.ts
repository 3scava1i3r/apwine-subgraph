import {
    FutureRegistered as FutureRegisteredEvent,
    StartingDelaySet as StartingDelaySetEvent,

} from "../generated/templates/Controller/Controller"

import {FutureVault,User} from "../generated/schema"

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

