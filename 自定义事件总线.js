// class LSEventBus {
//   constructor() {
//     this.eventBus = {}
//   }
//   on(eventName,eventCallback,thisArgument) {
//     let handlers = this.eventBus[eventName]
//     if (!handlers) {
//       handlers = []

//     }
//   }
//   emit(eventName,...paylod) {
//     this.eventBus[eventName] = paylod
//   }
// }
// const eventBus = new LSEventBus()

// eventBus.on("abc", function() {
//   console.log("监听abc1", this)
// }, {name: "why"})

// eventBus.emit("abc", 123)