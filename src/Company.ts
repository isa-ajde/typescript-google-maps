import { faker } from '@faker-js/faker'
import { MapMarker } from './CustomMap'

export class Company implements MapMarker {
  companyName: string
  catchPhrase: string
  location: {
    lat: number
    lng: number
  }
  color: string

  constructor() {
    this.companyName = faker.company.companySuffix()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
    this.color = faker.color.rgb()
  }

  markerContent(): string {
    return `
        <div>
           <h1>Company Name : ${this.companyName}  </h1>
           <h3>Catchphrase : ${this.catchPhrase} </h3>
        </div>

     `
  }
}
