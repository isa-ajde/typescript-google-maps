export interface MapMarker {
  location: {
    lat: number
    lng: number
  }
  markerContent(): string
  color: string
}

//!!! googleMap'in dışarıdan erişimini englelemeke için böyle bir şey yaptık yoksa bunda gerek yoktu
export class CustomMap {
  private googleMap: google.maps.Map
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: { lat: 37.915696, lng: 40.205634 },
      }
    )
  }

  addUserAndCompanyMarker(concat: MapMarker) {
    // concat.location   :  burda concat.location'a tek erişebiliyoruz çünkü ortak olan bir tek location var
    const marker = new google.maps.Marker({
      // Marker:  haritada   konum belirlemek için  harita bir tane konum 2 tane yukarıdaki haritaya bakıyor her iki konum
      map: this.googleMap,
      position: {
        lat: concat.location.lat,
        lng: concat.location.lng,
      },
    })
    marker.addListener('click', () => {
      const InfoWindow = new google.maps.InfoWindow({
        content: concat.markerContent(),
      })
      InfoWindow.open(this.googleMap, marker)
    })
  }
}
