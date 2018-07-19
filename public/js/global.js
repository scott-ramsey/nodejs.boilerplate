function post(url, data) {
    // Default options are marked with *
    return fetch(url, {
        body: JSON.stringify(data), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
    })
    .then(response => response.json()) // parses response to JSON
}

function setLogoutButton() {
    var li = document.createElement('li');
    var a = document.createElement('a');

    a.innerText = 'Logout';
    a.href = '#';

    a.addEventListener('click', (e) => {
        e.preventDefault();

        gigya.accounts.logout({
            callback: (e) => {
                location = '/';
            }
        });
    });

    li.appendChild(a);
    document.getElementById('right-nav').appendChild(li);
}