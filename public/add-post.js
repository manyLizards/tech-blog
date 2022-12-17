async function newFormHandler(event) {
    event.preventDefault();

    const post_title = document.querySelector('#post_title').value;
    const post_contents = document.querySelector('#post_contents').value
    const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({
            post_title,
            post_contents
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to add dish');
    }
}

document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);