// Variables to access #pixelCanvas table, #sizePicker form, #colorPicker input
const canvas = document.getElementById('pixelCanvas');
let inputHeight = $('#inputHeight');
let inputWidth = $('#inputWidth');
let color = $('#colorPicker');

// Event listener calling makeGrid() function when #inputSubmit input is clicked 
$('#inputSubmit').click(function(event) {
    event.preventDefault();
    makeGrid();
});

// makeGrid() function generates grid from user input
function makeGrid() {
    canvas.innerHTML = '';
    let height = inputHeight.val(); 
    let width = inputWidth.val();

    // addColor() function uses #colorPicker to fill grid with user's color when clicked
    let addColor = function(pixel) {
        pixel.addEventListener('click', function() {
            pixel.style.backgroundColor = color.val();
        });
    }

    // For loop calling addColor() function on canvas table rows inserting data - user's color - into  canvas table data element when clicked   
    for (let i = 0; i < height; i++) {
        let tableRow = canvas.insertRow(i);
        for (let n = 0; n < width; n++) {
            let tableData = tableRow.insertCell(n);
            tableData.addEventListener('click', addColor(tableData));
        }
    }
}
