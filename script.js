<script>
        function searchfun() {
    var input, filter, tables, tr, td, i, j, txtValue, found;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "";
    tables = document.querySelectorAll('table'); // Select all tables

    for (var t = 0; t < tables.length; t++) {
        tr = tables[t].getElementsByTagName('tr');
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td");
            found = false;
            for (j = 0; j < td.length; j++) {
                if (td[j]) {
                    txtValue = td[j].textContent || td[j].innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        found = true;
                        break; // Break out of the inner loop, we found a match
                    }
                }
            }
            if (found) {
                var row = tr[i].cloneNode(true);
                resultsDiv.appendChild(row); // Clone the entire row
                // Check if the cell contains "DELETERIOUS" and add a class
                var cells = row.getElementsByTagName('td');
                for (var k = 0; k < cells.length; k++) {
                    if (cells[k].innerText === 'DELETERIOUS') {
                        cells[k].classList.add('deleterious');
                    }
                }
                break; // Exit the loop once a match is found for the current table
            }
        }
    }
}

    </script>