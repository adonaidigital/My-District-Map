class Assets{
   static baseURL(){
       return "https://api.foursquare.com/v2";
    }
    static auth(){
        const myKeys = {
            client_id: "THR5YLBVNNYJPTF34LJICT0VG1V4P3M5ECABCHQOANCAYDFX",
            client_secret: "QTT5B0EWHUPCYED5RBQO1ATTCIKNRWU5B4LEOCSQHWX1EXMB",
            v: "20181004"
        };
        return Object.keys(myKeys)
        .map(key => `${key}={myKeys[key]}`).join('&');
    }
    static urlSupplier(urlParams){
        if (urlParams){

        }
        return Object.keys(urlParams).map(key => `${key}={urlParams[key]}`).join('&');
    }
    static header(){
        return {Accept: 'application/json'};
    }
    static firstFetch(endpoint, method, urlParams){
          let requestData = {
              method,
              header: Assets.header()
          };
    return fetch(
        `${Assets.baseURL()}${endpoint}?${Assets.auth()}&${Assets.urlSupplier(urlParams)}`,
          requestData 
        ).then(res => res.json());      
    }
}
export default class SquareAPI{
    static search(urlParams){
        return Assets.firstFetch('/venues/search','GET', urlParams);
    }
    static venueDetails(VENUE_ID){
        return Assets.firstFetch(`/venues/${VENUE_ID}`,'GET');
    }
    static venuePhotos(VENUE_ID){
        return Assets.firstFetch(`/venues/${VENUE_ID}/photos`, 'GET');
    }
}