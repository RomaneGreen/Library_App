require("./index.css");
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ifError } from "assert";
import "jquery";

//Grab Elements
var data = document.getElementById("data");
var list = document.getElementById("list");

function addToList() {
  document.getElementById("add").addEventListener("click", function() {
    if(data.value == ''|| datab.value == '' || datac.value == ''){
      return alert('please fill out all input fields');
      }
      else{
    
    var list = document.getElementById("list");
    var listLi = document.createElement("li");

    //add items from inputs to book library
    var listItems = document.createTextNode(
      data.value + " \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 " + datab.value + " \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0  " + datac.value+" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\ ");
    listLi.appendChild(listItems);
    $(listLi).append(" <button id = 'dd' class = 'btn btn-danger'>Delete</button>"); //append delete button
    $(listLi).append(" <button id = 'read' class = 'btn-primary'>Yes</button>"); // add yes/no button
    document.getElementById("list").appendChild(listLi);

    data.value = '';
    datab.value = '';
    datac.value = '';
    }

    //Yes or No button functionality
    $(document).on("click", "#read", function() {
      $(this).text(function(i, v) {
        return v === "Yes" ? "No" : "Yes";
      });
    });
    // delete or keep button functionality
    $(document).on("click", "#dd", function() {
      $(this)
        .parent()
        .remove();
    });
  });
}

addToList();
