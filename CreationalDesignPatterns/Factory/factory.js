
/**
 * Recruitment agency
 */
class RecruitmentAgency {
  /**
   * Recruit different roles into an organization
   */
  constructor () {
    this.objConstructors = {}
  }

  /**
   * Register roles
   * @param {String} role example roles developer, business analyst
   * @param {Object} constructor role objects
   *
   * @return {*} null
   */
  register (role, constructor) {
    this.objConstructors[role] = constructor
  }

  /**
   *
   * @param {String} role
   * @param {String} skills
   * @param {String} benefits
   *
   * @return {Object} member
   */
  getStaffMember (role, skills, benefits) {
    const objConstructor = this.objConstructors[role]
    let member

    if (objConstructor) member = new objConstructor(skills, benefits)

    return member
  }
}

/**
 * Defines a software developer to be hired
 */
class Developer {
  /**
   *
   * @param {String} skills software developer skills
   * @param {String} benefits software developer benefits
   */
  constructor (skills, benefits) {
    this.skills = ['programming'].concat(skills)
    this.salary = 40000
    this.benefits = ['computer'].concat(benefits)
  }
}

/**
 * Defines a business analyst to be hired
 */
class BusinessAnalyst {
  /**
   *
   * @param {String} skills business analyst developer skills
   * @param {String} benefits software developer benefits
   */
  constructor (skills, benefits) {
    this.skills = ['analyzing'].concat(skills)
    this.salary = 60000
    this.benefits = ['computer'].concat(benefits)
  }
}

const agency = new RecruitmentAgency()

agency.register('dev', Developer)
agency.register('ba', BusinessAnalyst)

console.log(new agency.objConstructors.dev())
