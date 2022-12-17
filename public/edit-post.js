async function editFormHandler(event) {
    event.preventDefault();
    const post_title = document.querySelector('#post_title').value;
    const post_contents = document.querySelector('#post_contents').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ]
    const response = await fetch(`/models/post/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            post_title,
            post_contents
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.ok) {
        document.location.replace(`/dish/${id}`);
    } else {
        alert('Failed to edit dish');
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormhandler);