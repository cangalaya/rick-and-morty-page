export const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);    // el objeto tiene instancia open, que>
    xhttp.onreadystatechange = () => {   // onreadystatechange tiene 5 estados:>
    if (xhttp.readyState === 4){
        (xhttp.status === 200) ? resolve(JSON.parse(xhttp.responseText)) : reject(new Error('Error: '+ url_api));
    }
    }
    xhttp.send();
    });
};
