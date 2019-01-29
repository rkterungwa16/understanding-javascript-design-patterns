const developer = {
  name: 'richard',
  surname: 'kombol'
}

/**
 * Use proxy to modify the developer object
 * convert value for any valid key in developer object
 * to upper case
 *
 * Notice that proxy object (upperCaseDeveloper) has similar properties
 * to the subject (developer)
 *
 * The proxy modifies the original values of the subject
 * property
 *
 * Any invalid property will return a default value
 */
const upperCaseDeveloper = new Proxy(developer, {
  get (target, property) {
    // return the correct value for an existing property
    // if property does not exist return john by default
    return target[property] ?
      target[property].toUpperCase() : 'john'.toUpperCase()
  }
})

console.log(upperCaseDeveloper.name, upperCaseDeveloper.surnam)
