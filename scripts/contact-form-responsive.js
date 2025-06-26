document.addEventListener('DOMContentLoaded', function() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzJy0Z7_7dO-AbByhszeqkPX2n2mkdigiIur3uQguhbJp4bINX3SACC1W16hcSd0fdp/exec';
    const form = document.forms['submit-to-google-sheet'];

    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                console.log('Success!', response);
                // Clear form fields
                form.reset();
                // Show success popup
                alert('Your message has been successfully sent!');
            })
            .catch(error => console.error('Error!', error.message));
    });
});
