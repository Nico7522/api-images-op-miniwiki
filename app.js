const express = require('express');
// Import des cors
const cors = require('cors')

const app = express();

//Utilisation des cors
app.use(cors())
app.use(express.static('public'));
app.use(express.json());
app.listen(3000, () => {
    console.log(`Server API started on port: 3000`);
})