function createTable() {
    // Get the table element by its ID
    const table = document.getElementById('myTable');

    // Clear the existing table content (if any)
    table.innerHTML = '';

    // Prompt for number of rows
    const rows = parseInt(prompt('Input number of rows', '0'), 10);
    
    // Prompt for number of columns
    const cols = parseInt(prompt('Input number of columns', '0'), 10);

    // Create the table dynamically
    for (let i = 0; i < rows; i++) {
        // Create a new row
        const row = document.createElement('tr');
        
        for (let j = 0; j < cols; j++) {
            // Create a new cell for each column
            const cell = document.createElement('td');
            
            // Set the text content for the cell
            cell.textContent = `Row-${i} Column-${j}`;
            
            // Append the cell to the row
            row.appendChild(cell);
        }
        
        // Append the row to the table
        table.appendChild(row);
    }
}
