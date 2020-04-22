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

    // To construct a FormData object that contains the data from an existing <form>,
    // specify that form element when creating the FormData object.
    const formDataObj = new FormData(bookDetailsForm);
    console.log("ENTRIES", formDataObj.entries());
    const formData = {};

    // Use the iterator returned by .entries() to put all the form data in a friendly object
    for (var [key, value] of formDataObj.entries()) {
        formData[key] = value;
    }

    // Update CSS vars
    //setproperty is sometimes used like so:
    // <rulesSelector>.style.setProperty("background-color", "yellow");
    if (formData.width) root.style.setProperty('--base-width', formData.width + 'px');
    if (formData.series) root.style.setProperty('--background-color', formData.series);

    // Change background
    if (formData.artwork_select) coverArt.style.backgroundImage = `url(${formData.artwork_select})`;

    // Update HTML
    if (formData.title) title.innerHTML = formData.title;
    if (formData.author) author.innerHTML = formData.author;

    clearForm();
}


/* Methods of the FormData object
    append()
    delete()
    entries()
    get()
    getAll()
    has()
    keys()
    set()
    values()
*/

// More style interaction
// var setprop = document.styleSheets[0].cssRules[0]<selector>.style.setProperty("background-color", "yellow");
