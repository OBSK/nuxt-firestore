const express = require('express')
const router = express.Router()
const admin = require('firebase-admin');
var serviceAccount = require('../endpoint/account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

router.post('/cliente', (req, res) => {
    var docRef = db.collection('users').doc('alovelace');

    var setAda = docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
    });
    setAda.then(data => {
        res.send('Archivo enviado con exito')
    }).catch(e => res.send('Error'+ e))
})

module.exports = router