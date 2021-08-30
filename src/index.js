import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Entry } from './journal.js';

$(document).ready(function() {
  $("form#journal-entries").submit(function(event) {
    event.preventDefault();
    const title = $("input#title").val();
    const body = $("input#entry").val();
    let journalEntry = new Entry(title, body);
    const counted = journalEntry.wordCount(body);
    const vCounted = journalEntry.vowelCount(body);
    $("#word-count").html(counted); 
    $("#journalTitle").html(title);
    $("#vCount").html(vCounted); 
  });
});


// function getTeaser(body) {
//   return body.split(/\s+/).slice(0,8).join(" ");
// }
