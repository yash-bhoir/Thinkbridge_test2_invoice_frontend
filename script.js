const API_BASE_URL = 'http://localhost:5254';

document.addEventListener('DOMContentLoaded', function () {
    fetch(`${API_BASE_URL}/api/invoice/1`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error('Request failed with status ' + resp.status);
            }
            return resp.json();
        })
        .then(data => {
            let html = '<h2>Invoice #' + data.invoiceID + '</h2>';
            html += '<p><strong>Customer:</strong> ' + data.customerName + '</p>';
            html += '<ul>';
            data.items.forEach(item => {
                html += `<li>${item.name} - $${item.price.toFixed(2)}</li>`;
            });
            html += '</ul>';
            html += `<p class="total"><strong>Total: $${data.total.toFixed(2)}</strong></p>`;
            document.getElementById('invoice-container').innerHTML = html;
        })
        .catch(err => {
            console.error('Failed to load invoice:', err);
            document.getElementById('invoice-container').innerHTML =
                '<p class="error">Failed to load invoice.</p>';
        });
});
