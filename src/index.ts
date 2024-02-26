import { Company } from './Company'
import { CustomMap } from './CustomMap'
import { User } from './User'

const user = new User()
const compnay = new Company()
const custom = new CustomMap('map')

custom.addUserAndCompanyMarker(user)
custom.addUserAndCompanyMarker(compnay)
