const developer = {
  name: 'richard',
  surname: 'kombol'
}

const upperCaseDeveloper = new Proxy(developer, {
  get: (target, property) => target[property].toUpperCase()
})

console.log(upperCaseDeveloper.name, upperCaseDeveloper.surname)
