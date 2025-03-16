/* Week 10 Assignment by Derek McGuire */

let id = 0;

document.getElementById('add').addEventListener('click', () => {
    // Create variable to identify the parent element, the table
    let table = document.getElementById('list');
    // Create a variable to insert a row. Start with 1 because row 0 is the header
    // did (id + 1) to create an ascending output for the Id
    let row = table.insertRow(id + 1);
    // Performing the actions to add rows:
    // Add a Playlist Location Number (uses positive incrementation):
    // AND had to add a + 1 to all of it to avoid having a '0' displayed on first row.
    row.insertCell(0).innerHTML = (id++) + 1;
    // Add Artist:
    row.insertCell(1).innerHTML = document.getElementById('artist').value;
    // Add Song:
    row.insertCell(2).innerHTML = document.getElementById('song').value;
    // Add YouTube Link:
    row.insertCell(3).innerHTML = document.getElementById('youtube').value;
    // Clear the fields of artist, song, YouTube link
    document.getElementById('artist').value = '';
    document.getElementById('song').value = '';
    document.getElementById('youtube').value = '';
});