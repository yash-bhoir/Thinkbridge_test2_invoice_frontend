# Invoice Viewer

Plain HTML/CSS/JS page that displays an invoice pulled from the invoice-api backend.

## Running it

Set the backend URL in `script.js`:

```js
const API_BASE_URL = 'http://localhost:5254';
```

Then just open `index.html`, or serve the folder:

```
python -m http.server 5500
```

The backend needs to be running with at least invoice id 1 seeded.
