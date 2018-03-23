
import $ from 'jquery';
export class Docky {
  constructor(keyword){
    this.keywordSearch = keyword;

  }
  //displayData calls function from frontend
  searchKeyword(displayData, listLength){
    const url = "https://api.betterdoctor.com/2016-03-01/doctors?query="
    const apiKey = process.env.API_KEY;
    let search = this.keywordSearch;
    let suffix = "&location=or-portland&skip=0&limit=10&user_key="
    $.ajax({
       url: (url + search + suffix + apiKey),
       type: 'GET',
       data: {
         format: 'json'
       },
       success: function(response) {
         let test = [];
         for (let i = 0; i < 100; i++){
           if ((response.hits[i].url != null) && (response.hits[i].title != null)) {
             test.push(response.hits[i]);

           }
         }
         //displayData function only works if a success
         displayData(test, search, listLength);
         console.log("apiKey: " + apiKey );
         console.log("search: " + search );
         console.log("url: " + url );

       },
       error: function() {
       }
    })
  }






}
