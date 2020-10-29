const BASE_URL = 'https://restcountries.eu/rest/v2';

export default function fetchCountries (serchValue) {
    return fetch(`${BASE_URL}/name/${serchValue}`)
        .then(response => response.json());
};
    