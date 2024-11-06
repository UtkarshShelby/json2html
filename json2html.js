// json2html.js
export default function json2html(data) {
    // Start the table, including the data-user attribute
    let html = '<table data-user="utkarsh.tiwari1907@gmail.com">';
    
    // Add the table headers
    html += '<thead><tr>';
    if (data.length > 0) {
        // Get all keys (columns) from the first object
        Object.keys(data[0]).forEach(key => {
            html += `<th>${key}</th>`;
        });
    }
    html += '</tr></thead>';

    // Add table rows
    html += '<tbody>';
    data.forEach(row => {
        html += '<tr>';
        // Loop through each key in the row to create the table cells
        Object.keys(row).forEach(key => {
            html += `<td>${row[key]}</td>`;
        });
        html += '</tr>';
    });
    html += '</tbody>';
    
    // Close the table tag
    html += '</table>';

    return html;
}
