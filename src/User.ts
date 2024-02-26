import { faker } from '@faker-js/faker'
import { MapMarker } from './CustomMap'

export class User implements MapMarker {
  name: string
  location: {
    lat: number
    lng: number
  }
  color: string

  constructor() {
    this.name = faker.name.firstName()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
    this.color = faker.color.rgb()
  }

  markerContent(): string {
    return `
    <h3>
      User  name: ${this.name}
    </h3>
     `
  }
}
