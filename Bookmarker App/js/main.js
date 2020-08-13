const form = document.getElementById('myForm');


const saveBookmark = (e) => {
    const siteName = document.getElementById('siteName').value;
    const siteUrl = document.getElementById('siteUrl').value;

    if (!validForm(siteName, siteUrl)) {
        return false;
    }

    const bookmark = {
        name: siteName,
        url: siteUrl
    }

    if (localStorage.getItem('bookmarks') == null) {
        const bookmarks = [];

        bookmarks.push(bookmark);

        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {

        const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

        bookmarks.push(bookmark);

        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    form.reset();
    e.preventDefault();
    fetchBookmark();
}

const deleteBookmark = (url) => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    for (var i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].url == url) {
            bookmarks.splice(i, 1);
        }
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    fetchBookmark();
}

const fetchBookmark = () => {
    const bookmarkResults = document.getElementById('bookmarksResults');

    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    bookmarkResults.innerHTML = '';
    for (var i = 0; i < bookmarks.length; i++) {
        name = bookmarks[i].name;
        url = bookmarks[i].url;

        bookmarkResults.innerHTML += `<div class="cards">
        <h3>${name}
        <a class="btn btn-default" target="_blank" href="${url}">Visit</a>
        <a onclick="deleteBookmark(\'${url}\')" class="btn btn-danger" href="#">Delete</a>
        </h3>
        </div>`;
    }

}

const validForm = (siteName, siteUrl) => {
    if (!siteName || !siteUrl) {
        alert("please fill all the form");
        return false;
    }
    return true;

}

form.addEventListener('submit', saveBookmark);