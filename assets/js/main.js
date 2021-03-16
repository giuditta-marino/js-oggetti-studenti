$(document).ready(function() {

  // CREO UN OGGETTO CHE DESCRIVA UNO STUDENTE CON LE PROPRIETA' NOME, COGNOME ED ETA'
  var studente = {
    nome: 'Giuditta',
    cognome: 'Marino',
    età: '31'
  }

  // STAMPO A SCHERMO TUTTE LE PROPRIETA' DELL'OGGETTO STUDENTE
  console.log(studente);
  for (var key in studente) {
    console.log(key, studente[key]);
  }

  // CREO UN ARRAY DI OGGETTI DI STUDENTI
  var studenti = [
    {
      nome: 'Giuditta',
      cognome: 'Marino',
      età: '31'
    },
    {
      nome: 'Barbara',
      cognome: 'Rossi',
      età: '40'
    },

    {
      nome: 'Antonia',
      cognome: 'Bianchi',
      età: '29'
    },

    {
      nome: 'Alessia',
      cognome: 'Neri',
      età: '34'
    },

    {
      nome: 'Jessica',
      cognome: 'Verdi',
      età: '26'
    }
  ]

  console.log(studenti);

  // STAMPO PER OGNI STUDENTE NOME E COGNOME
  for (var i = 0; i < studenti.length; i++) {
    console.log(studenti[i]['nome'], studenti[i]['cognome']);
  }

  // AL CLICK SUL BUTTON AGGIUNGI
  $('#aggiungi').click(function() {
    // SALVO IN DELLE VARIABILI I VALUE DEGLI INPUT TRAMITE CUI L'UTENTE INSERISCE NOME COGNOME ED ETA'
    var nome = $('#nome').val();
    var cognome = $('#cognome').val();
    var eta = $('#eta').val();

    // CREO UN OGGETTO NUOVOSTUDENTE CHE CONTIENE LE PROPRIETA' INSERITE TRAMITE INPUT NEL DOM
    var nuovoStudente = {
      nome: nome,
      cognome: cognome,
      età: eta
    }
    console.log(nuovoStudente)
    // PUSHO NELL'ARRAY IL NUOVO OGGETTO
    studenti.push(nuovoStudente);

    console.log(studenti);
  })
  

})
