import './styles.css';
import debounce from 'lodash.debounce';


import listTpl from './templates/list.hbs';
import countryTpl from './templates/country.hbs';
import fetchCountries from './js/fetchCountries.js';
import { noticeManyMatces, noticeValidMatces } from './js/notise.js';


const refs = {
    inputForm: document.querySelector('.form-control'),
    countyConteiner: document.querySelector('.js-container'),
}

refs.inputForm.addEventListener('input', debounce(onInputSerch, 1000));


function onInputSerch() {
  const serchValue = refs.inputForm.value;
  clearCountysContainer();
    return fetchCountries(serchValue).then(data => dataLengthIf(data));
}

function dataLengthIf(data) {
  if (data.length >= 2 && data.length <= 10) {
      clearValueInput();
      return appendListMarkup(data);
    } else if (data.length > 10) {
      clearValueInput();
      return noticeManyMatces();
    }
    else if (data.status === 404) {
      clearValueInput();
      return noticeValidMatces();
    }
    else {
      clearValueInput();
      return appendCountryMarkup(data);
    };
    
}

function appendCountryMarkup(countrys) {
  refs.countyConteiner.insertAdjacentHTML('beforeend', countryTpl(countrys));
}

function appendListMarkup(countrys) {
  refs.countyConteiner.insertAdjacentHTML('beforeend', listTpl(countrys));
}

function clearCountysContainer() {
  refs.countyConteiner.innerHTML = '';
}

function clearValueInput() {
  refs.inputForm.value = '';
}