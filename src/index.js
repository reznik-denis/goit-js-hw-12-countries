import './styles.css';
import debounce from 'lodash.debounce'
import listTpl from './templates/list.hbs';
import countryTpl from './templates/country.hbs';
import fetchCountries from './js/fetchCountries.js'

// const fethCounties = new FetchCountries();

const refs = {
    inputForm: document.querySelector('.form-control'),
    countyConteiner: document.querySelector('.js-container'),
}

refs.inputForm.addEventListener('input', debounce(onInputSerch, 1000));


function onInputSerch() {
    const serchValue = refs.inputForm.value;
    return fetchCountries(serchValue).then(data => dataLengthIf(data));
}

function dataLengthIf(data) {
    if (data.length >= 2 && data.length <= 10) {
       return appendListMarkup(data);
    } else { return appendCountryMarkup(data) };
    
}

function appendCountryMarkup(countrys) {
  refs.countyConteiner.insertAdjacentHTML('beforeend', countryTpl(countrys));
}

function appendListMarkup(countrys) {
  refs.countyConteiner.insertAdjacentHTML('beforeend', listTpl(countrys));
}