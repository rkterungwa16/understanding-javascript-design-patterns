/* eslint-disable no-plusplus */
const ReadOnlyEmitter = require('./readOnlyEmitter')

const ticker = new ReadOnlyEmitter((emit) => {
  let tickCount = 0
  setInterval(() => emit('tick', tickCount++), 1000)
})

ticker.on('tick', (tickCount) => {
  console.log(tickCount, 'TICK')
})
