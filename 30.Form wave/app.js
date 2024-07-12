

const getData=()=>{
    fetch('https://opentip.kaspersky.com/api/v1/')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}


