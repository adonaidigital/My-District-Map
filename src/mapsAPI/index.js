
class Asset{
   static apiURL(){
       return "https://api.foursquare.com/v2";
    }
    static auth(){
        const myKeys = {
            client_id:"THR5YLBVNNYJPTF34LJICT0VG1V4P3M5ECABCHQOANCAYDFX",
            client_secret:"QTT5B0EWHUPCYED5RBQO1ATTCIKNRWU5B4LEOCSQHWX1EXMB",
            v:"20181008",
            near:"Honolulu, HI"
           
        };
        return Object.keys(myKeys)
            .map(key => `${key}=${myKeys[key]}`)
            .join("&");
    }
    static header(){
        return {Accept:'application/json'};
    }

    static urlRuns(params){
        if (params){
          return ""
        }
        return Object.keys(params)
            .map(key => `${key}=${params[key]}`)
            .join("&");
    }
    static preFetch(endpoint, method, params){
          let data = {
              method,
              header: Asset.header()
          };
    return fetch(`${Asset.apiURL()}${endpoint}?${Asset.auth()}&${Asset.urlRuns(params)}`,
             data)
            .then(res => res.json())
            .catch(error => {console.log("ERROR! " + error);
        })                    
    }
}
export default class fourSq{
    static search(params){
        return Asset.preFetch('/venues/search','GET',params);
    }
    static venueDetails(VENUE_ID){
        return Asset.preFetch(`/venues/${VENUE_ID}`,'GET');
    }
    static venuePhotos(VENUE_ID){
        return Asset.preFetch(`/venues/${VENUE_ID}/photos`,'GET');
    }
}