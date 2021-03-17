$(document).ready(function() {

  // CREO UN OGGETTO CHE DESCRIVA UNO STUDENTE CON LE PROPRIETA' NOME, COGNOME ED ETA'
  var studente = {
    nome: 'Giuditta',
    cognome: 'Marino',
    eta: '31'
  }

  // STAMPO A SCHERMO TUTTE LE PROPRIETA' DELL'OGGETTO STUDENTE
  console.log(studente);
  for (var key in studente) {
    console.log(key, studente[key]);
    var info = $('#properties').html();
    info += "<li>" + key + ' ' + studente[key] + "</li>";
    $('#properties').html(info);
  }

  // CREO UN ARRAY DI OGGETTI DI STUDENTI
  var studenti = [
    {
      nome: 'Giuditta',
      cognome: 'Marino',
      eta: '31'
    },
    {
      nome: 'Barbara',
      cognome: 'Rossi',
      eta: '40'
    },

    {
      nome: 'Antonia',
      cognome: 'Bianchi',
      eta: '29'
    },

    {
      nome: 'Alessia',
      cognome: 'Neri',
      eta: '34'
    },

    {
      nome: 'Jessica',
      cognome: 'Verdi',
      eta: '26'
    }
  ]

  console.log(studenti);

  // STAMPO PER OGNI STUDENTE NOME E COGNOME
  for (var i = 0; i < studenti.length; i++) {
    console.log(studenti[i]['nome'], studenti[i]['cognome']);
    $('#lista').append('<li>' + studenti[i].nome + ' ' + studenti[i].cognome + '</li>')
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
