import {
  DelegationPauseChanged as DelegationPauseChangedEvent,
  DepositPauseChanged as DepositPauseChangedEvent,
  FutureRegistered as FutureRegisteredEvent,
  FutureSetToBeTerminated as FutureSetToBeTerminatedEvent,
  FutureTerminated as FutureTerminatedEvent,
  FutureUnregistered as FutureUnregisteredEvent,
  NewPerformanceFeeFactor as NewPerformanceFeeFactorEvent,
  NewPeriodDurationIndexSet as NewPeriodDurationIndexSetEvent,
  NextPeriodSwitchSet as NextPeriodSwitchSetEvent,
  PeriodSwitchedByDurationDisabled as PeriodSwitchedByDurationDisabledEvent,
  RegistryChanged as RegistryChangedEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  StartingDelaySet as StartingDelaySetEvent,
  WithdrawalPauseChanged as WithdrawalPauseChangedEvent
} from "../generated/Apwine/Apwine"
import {
  DelegationPauseChanged,
  DepositPauseChanged,
  FutureRegistered,
  FutureSetToBeTerminated,
  FutureTerminated,
  FutureUnregistered,
  NewPerformanceFeeFactor,
  NewPeriodDurationIndexSet,
  NextPeriodSwitchSet,
  PeriodSwitchedByDurationDisabled,
  RegistryChanged,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  StartingDelaySet,
  WithdrawalPauseChanged
} from "../generated/schema"
import {FutureVault} from "../generated/schema"

export function handleDelegationPauseChanged(
  event: DelegationPauseChangedEvent
): void {
  let entity = new DelegationPauseChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._delegationPaused = event.params._delegationPaused
  entity.save()
}

export function handleDepositPauseChanged(
  event: DepositPauseChangedEvent
): void {
  let entity = new DepositPauseChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._futureVault = event.params._futureVault
  entity._depositPaused = event.params._depositPaused
  entity.save()
}

export function handleFutureRegistered(event: FutureRegisteredEvent): void {
  
  // let entity2 = new FutureVault(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  // entity2.save()
  let entity = new FutureRegistered(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._futureVault = event.params._futureVault
  entity.save()
}

export function handleFutureSetToBeTerminated(
  event: FutureSetToBeTerminatedEvent
): void {
  let entity = new FutureSetToBeTerminated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._futureVault = event.params._futureVault
  entity.save()
}

export function handleFutureTerminated(event: FutureTerminatedEvent): void {
  let entity = new FutureTerminated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._futureVault = event.params._futureVault
  entity.save()
}

export function handleFutureUnregistered(event: FutureUnregisteredEvent): void {
  let entity = new FutureUnregistered(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._futureVault = event.params._futureVault
  entity.save()
}

export function handleNewPerformanceFeeFactor(
  event: NewPerformanceFeeFactorEvent
): void {
  let entity = new NewPerformanceFeeFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._futureVault = event.params._futureVault
  entity._feeFactor = event.params._feeFactor
  entity.save()
}

export function handleNewPeriodDurationIndexSet(
  event: NewPeriodDurationIndexSetEvent
): void {
  let entity = new NewPeriodDurationIndexSet(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._periodIndex = event.params._periodIndex
  entity.save()
}

export function handleNextPeriodSwitchSet(
  event: NextPeriodSwitchSetEvent
): void {
  let entity = new NextPeriodSwitchSet(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._periodDuration = event.params._periodDuration
  entity._nextSwitchTimestamp = event.params._nextSwitchTimestamp
  entity.save()
}

export function handlePeriodSwitchedByDurationDisabled(
  event: PeriodSwitchedByDurationDisabledEvent
): void {
  let entity = new PeriodSwitchedByDurationDisabled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._periodDuration = event.params._periodDuration
  entity._periodIndex = event.params._periodIndex
  entity.save()
}

export function handleRegistryChanged(event: RegistryChangedEvent): void {
  let entity = new RegistryChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._registry = event.params._registry
  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole
  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleStartingDelaySet(event: StartingDelaySetEvent): void {
  let entity = new StartingDelaySet(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._startingDelay = event.params._startingDelay
  entity.save()
}

export function handleWithdrawalPauseChanged(
  event: WithdrawalPauseChangedEvent
): void {
  let entity = new WithdrawalPauseChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._futureVault = event.params._futureVault
  entity._withdrawalPaused = event.params._withdrawalPaused
  entity.save()
}
