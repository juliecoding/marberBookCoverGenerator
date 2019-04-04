const bookDetailsForm = document.getElementById('bookDetailsForm');
bookDetailsForm.onsubmit = handleFormSubmit;

function clearForm() {
    bookDetailsForm.reset();
}

function handleFormSubmit(e) {
    e.preventDefault();

    //Find elements to change
    const root = document.documentElement;
    const title = document.getElementById('bookTitleHeader')
    const author = document.getElementById('authorNameHeader')
    const coverArt = document.getElementById('coverArtImage')

    const formData = new FormData(bookDetailsForm);
    const handyFormData = {};

    // Use the iterator returned by .entries() to put all the form data in a friendly object
    for (var [key, value] of formData.entries()) {
        handyFormData[key] = value;
    }

    console.log(handyFormData);

    // Update CSS vars
    if (handyFormData.width) root.style.setProperty('--base-width', handyFormData.width + 'px');
    if (handyFormData.series) root.style.setProperty('--background-color', handyFormData.series);

    // Change background
    if (handyFormData.artwork_select) coverArt.style.backgroundImage = `url(${handyFormData.artwork_select})`;

    // Update HTML
    if (handyFormData.title) title.innerHTML = handyFormData.title;
    if (handyFormData.author) author.innerHTML = handyFormData.author;

    clearForm();
}