var active = false;

function activate_filter() {
  chrome.tabs.executeScript({
     file: 'filter.js'
   });
}

if (active) {
  document.getElementById('toggle_filter').addEventListener('click', activate_filter);
  document.getElementById('toggle_filter').innerHTML = "Deactivate Filter"
} else {
  document.getElementById('toggle_filter').addEventListener('click', activate_filter);
  document.getElementById('toggle_filter').innerHTML = "Activate Filter"  
}
