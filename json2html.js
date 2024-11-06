// json2html.js
export default function json2html(data) {
    // Start the table, including the data-user attribute
    let html = '<table data-user="utkarsh.tiwari1907@gmail.com">';
    
    // Ensure the table header always has 'Name', 'Age', 'Gender'
    const headers = ["Name", "Age", "Gender"];
    
    // Add the table headers (fixed to be 'Name', 'Age', 'Gender')
    html += '<thead><tr>';
    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });
    html += '</tr></thead>';

    // Add table rows
    html += '<tbody>';
    data.forEach(row => {
        html += '<tr>';
        
        // Ensure every row has 'Name', 'Age', and 'Gender' data
        headers.forEach(header => {
            // If the header exists in the row, add its value; otherwise, leave an empty cell
            html += `<td>${row[header] !== undefined ? row[header] : ''}</td>`;
        });
        html += '</tr>';
    });
    html += '</tbody>';
    
    // Close the table tag
    html += '</table>';

    return html;
}

