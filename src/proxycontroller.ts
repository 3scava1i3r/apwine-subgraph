import {
    AdminChanged as AdminChangedEvent,
    BeaconUpgraded as BeaconUpgradedEvent,
    Upgraded as UpgradedEvent
  } from "../generated/ProxyController/Proxycontroller"
  import { Upgraded } from "../generated/schema"
  import { Controller } from "../generated/templates"
  
  export function handleUpgraded(event: UpgradedEvent): void {
    let entity = new Upgraded(
      event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    )
    entity.implementation = event.params.implementation
    entity.save()

    Controller.create(event.params.implementation)
    
    
  }
  
  export function handleAdminChanged(event: AdminChangedEvent): void {
    
  }


  export function handleBeaconUpgraded(event: BeaconUpgradedEvent ): void {}