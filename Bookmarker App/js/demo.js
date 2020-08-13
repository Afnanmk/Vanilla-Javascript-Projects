// Listen for form submit
const form = document.getElementById('myForm');


// ADD BOOKMARKS
const saveBookmark = (e) => {
    const siteName = document.getElementById('siteName').value;
    const siteUrl = document.getElementById('siteUrl').value;

    if (!validForm(siteName, siteUrl)) {
        return false
    }

    const bookmark = {
        name: siteName,
        url: siteUrl
    };



    // check if there is NO bookmark 
    if (localStorage.getItem('bookmarks') === null) {
        // init bookmarks
        const bookmarks = [];
        // add to Array
        bookmarks.push(bookmark);
        // set bookmark to the localstorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        // get bookmark from localstorage
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // add to array
        bookmarks.push(bookmark);
        // re-set bookmark to the localstorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    form.reset();
    e.preventDefault();

    fetchBookmarks();
}

// DELETE Bookmarks
const deleteBookmark = (url) => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    for (var i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].url == url) {
            bookmarks.splice(i, 1);
        }
    }

    // re-set bookmark

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    fetchBookmarks();
}





// SHOW BOOKMARKS ON BROWSER

const fetchBookmarks = () => {
    const bookmarkResult = document.getElementById('bookmarksResults');

    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    bookmarkResult.innerHTML = '';

    for (var i = 0; i < bookmarks.length; i++) {
        const name = bookmarks[i].name;
        const url = bookmarks[i].url;

        bookmarkResult.innerHTML += `<div class="cards">
        <h3>${name}
        <a class="btn btn-default" target="_blank" href="${url}">Visit</a>
        <a onclick="deleteBookmark(\'${url}\')" class="btn btn-danger" href="#">Delete</a>
        </h3>
        </div>`;
    }

}

const validForm = (siteName, siteUrl) => {
    if (!siteName || !siteUrl) {
        alert("Please fill the form");
        return false;


    }
    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (!siteUrl.match(regex)) {
        alert("Please Give a Valid URL");
        return false;
    }
    return true;
}

form.addEventListener('submit', saveBookmark);