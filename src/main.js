import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Docky } from './Docky.js';


$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    const keyword = $('#keyword').val();
    $('#userInput').fadeOut();
    Docky(keyword);
  });
});
