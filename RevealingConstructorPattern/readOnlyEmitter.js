const EventEmitter = require('events')

module.exports = class ReadOnlyEmitter extends EventEmitter {
  /**
   *
   * @param {Function} executor
   */
  constructor (executor) {
    super()
    const emit = this.emit.bind(this)
    this.emit = undefined
    executor(emit)
  }
}
