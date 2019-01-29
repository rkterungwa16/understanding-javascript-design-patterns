/**
 * Add default values to an object
 * When a missing key is requested you get value from
 * defaults
 * @param {Object} defaults
 *
 * @return {ProxyConstructor} es6 proxy
 */
function propDefault (defaults) {
  const handler = {
    get (obj, prop) {
      // Use Reflect module to call the original function
      // that would have ran if we haven't proxied the object
      return Reflect.get(obj, prop) || defaults[prop]
    }
  }

  return new Proxy({}, handler)
}

const myObj = propDefault({
  name: 'no name'
})

/**
 * @return {*} void
 */
function log () {
  const isIn = 'name' in myObj ? 'is in' : 'is not in'
  console.log(`name = "${myObj.name}" (name ${isIn} myObj)`)
}

log()
myObj.name = 'Bob'
log()
delete myObj.name
log()
