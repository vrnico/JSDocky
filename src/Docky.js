import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Docky(keyword) {
  $.ajax({
    url:
    `https://api.betterdoctor.com/2016-03-01/doctors?query=${keyword}&location=or-portland&skip=0&limit=100&user_key=${"a541d6a82003e4a2a97018e86811a19f"//process.env.exports.apiKey
    }`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      $('#output').append(`<h3>Docky found <span class="keywords">` + response.data.length + `</span> doctors for <div class='keywords'>${keyword}</div></h3>`);
      if (response.data.length === 0) {
        $('.noResult').text('The search provided no matching results.')
      }
      console.log(response);
      for (let i = 0; i < response.data.length; i++) {
        let doctor = response.data[i].profile.last_name;
        let link = response.data[i].practices[0].website;
        let available = response.data[i].practices[0].accepts_new_patients;
        if(link === undefined){
          link = "/"
        }
        if(available === true){
          available = '<span class="in">AVAILABLE</span>';
        } else {
          available = "is NOT accepting new patients at this time";
        }

        console.log("Dr." + doctor);

        $('#output').append(`<a href='${link}'><h4>Dr.${doctor}</a>, ${available}</h4>`);

      }

    },
    error: function() {
      $('.error').text(`We are having trouble handling your request!`)
    }
  });
}
