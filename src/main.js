import { Docky } from './Docky.js';
// import { output } from './Output.js';
import $ from 'jquery';
import './styles.css';


$(document).ready(function() {
  $('#keyword-search').submit(function(event) {
    event.preventDefault();

    let newDocky = new Docky();

    let displayData = function updateResults(array, keyword, results) {
    let searchDisplay = ("#search" + keyword);
    for (let i = 0; i < results; i++){
      $(searchDisplay).append('<li><a href="' + array[i].url + '" target="_blank">' + array[i].title + '</a></li>');
    }

  }

  console.log("page loads");
  newDocky.searchKeyword(displayData, 10);
})

});
