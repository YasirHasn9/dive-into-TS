// to hide the existence function of google map from other engineers to mess up , we are creating a custom map class

export class CustomMap{
  // this is by default public , but we want a private so cant be used outside this class

  private googleMap: google.maps.Map;


  // to make this usable class we need to change the map but with hard coded
  // this is why im passing a and element based on id, for its a string
  constructor(divId:string){
    this.googleMap = new google.maps.Map(document.getElementById(divId) , {
      zoom:1,
      center: {
        lat:0,
        lng:0
      }
    })
  }
}