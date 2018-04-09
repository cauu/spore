const StatusCode = {
  NOT_LOADED: 'NOT_LOADED',
  LOADING_SOURCE_CODE: 'LOADING_SOURCE_CODE',
  NOT_BOOTSTRAPPED: 'NOT_BOOTSTRAPPED',
  BOOTSTRAPPING: 'BOOTSTRAPPING',
  NOT_MOUNTED: 'NOT_MOUNTED',
  MOUNTING: 'MOUNTING',
  MOUNTED: 'MOUNTED',
  UNMOUNTING: 'UNMOUNTING',
  UNLOADING: 'UNLOADING',
  SKIP_BECAUSE_BROKEN: 'SKIP_BECAUSE_BROKEN'
};

const SporeEvent = {
  LOADING: 'spore.loading',
  BOOTSTRAPPING: 'spore.bootstrapping',
  MOUNTING: 'spore.mounting',
  UNLOADING: 'spore.unloading',
  UNMOUNTING: 'spore.unmounting',
  ROUTING_NAVIGATE: 'spore.routing.navigate',
  ROUTING_CHANGE: 'spore.routing.change',
  ROUTING_BEFORE: 'spore.routing.before',
  CHILD_MOUNT: 'spore.child.mount',
  CHILD_UNMOUNT: 'spore.child.unmount'
};

export {
  StatusCode,
  SporeEvent
};