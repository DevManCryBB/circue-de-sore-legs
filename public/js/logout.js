const changeFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#change-username').value.trim();

    // If new name is different than old name, change to new name!
    if (name) {
        const response = await fetch('/api/users', {
        // is method below a PUT now?
        method: 'POST',
        body: JSON.stringify({name}),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/home');
    } else {
        alert(response.statusText);
    }
    }
};

document.querySelector('#change-form').addEventListener('submit', signupFormHandler);