/**
 * function that controls which
 * target properties to access
 *
 * @param {String} key object property to check
 * @param {String} action proxy trap e.g get or set
 *
 * @return {Error|null} throws an error if target key
 * starts with underscore
 */
function invariant (key, action) {
  if (key[0] === '_') {
    throw new Error(`Invalid attempt to ${action} private "${key}" property`)
  }
}

/**
 * Prevent property access for clients of object for
 * private properties (throws an error if property
 * to be accessed is preceded by an underscore)
 *
 * Controlling access to target (subject) object properties
 *
 * @return {Object|Boolean} target object or
 * boolean or proxied object
 */
function proxied () {
  return {
    get (target, key) {
      console.log('target', target)
      invariant(key, 'get')
      return target[key]
    },
    set (target, key, value) {
      console.log('key value', key)
      invariant(key, 'set')
      return true
    }
  }
}

// object(subject) to be proxied
const target = {}

const proxy = new Proxy(target, proxied())
proxy.a = 'b'
console.log(proxy.a)
