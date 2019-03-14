import axios from 'axios';

import renderNote from './renderNote';
import { loadStorage, saveStorage } from './storage';
import helpers from './helpers';

const apiUrl        = 'https://api.chucknorris.io/jokes/random';
const btnAdd        = document.querySelector('#add_note');
const btnRemoveAll  = document.querySelector('#remove_notes');
const fieldSearch   = document.querySelector('.search-field');
const body          = document.querySelector('.notes-list');
let arrNotes = loadStorage();


btnAdd.onclick = () => {
  axios(apiUrl)
    .then(response => refillData(response.data));
};


btnRemoveAll.onclick = () => {
  arrNotes = [];
  renderNotes(arrNotes);
};


fieldSearch.oninput = () => {
  let searchText = fieldSearch.value.trim();
  let filterNotes = arrNotes.filter(note => note.content.toLowerCase().includes(searchText.toLowerCase()) );
  renderNotes(filterNotes);
};


const refillData = data => {
  const maxSymbolsCount = 150;
  const newNote = {
    content: helpers.cutContent(data.value, maxSymbolsCount),
    background: helpers.getRandColor()
  };
  arrNotes.push(newNote);
  renderNotes(arrNotes);
};


const renderNotes = arr => {
  body.innerHTML = '';
  arr.forEach((data, i, array) => {
    let note = renderNote(data, i, array, renderNotes); // renderNotes - callback
    body.appendChild(note);
  });
  saveStorage(arrNotes);
};

renderNotes(arrNotes);