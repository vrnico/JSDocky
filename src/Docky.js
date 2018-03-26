import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Docky(keyword) {
  $.ajax({
    url:
    `https://api.betterdoctor.com/2016-03-01/doctors?query=${keyword}&location=or-portland&skip=0&limit=100&user_key=${process.env.exports.apiKey}`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      $('#output').append(`<h2>found <span class="keywords">` + response.data.length + `</span> doctors for <div class='keywords'>${keyword}</div></h2>`);
      if (response.data.length === 0) {
        $('.noResult').text('The search provided no matching results.')
      }
      console.log(process.env.exports.apiKey);
      for (let i = 0; i < response.data.length; i++) {
        let doctor = response.data[i].profile.last_name;
        let link = response.data[i].practices[0].website;
        let available = response.data[i].practices[0].accepts_new_patients;
        let address = response.data[i].practices[0].visit_address.street;
        let googleMaps = (`http://maps.google.com/maps?q=` + address);

        if(link === undefined){

          link = googleMaps;
        }
        if(available === true){
          available = '<span class="in">available</span>';
        } else {
          available = "is NOT accepting new patients at this time";
        }

        $('#output').append(`<a href='${link}' target='_blank'><h4>Dr.${doctor}</a>, ${available}</h4>`);

      }

    },
    error: function() {
      $('.noResult').text(`We are having trouble handling your request!`)
    }
  });
}
