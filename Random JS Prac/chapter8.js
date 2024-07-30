let btn1 = document.getElementById('btn1').onclick = () => {
    alert('Button 1 is clicked!');
}
let btn2 = document.getElementById('btn2').onclick = () => {
    alert('Button 2 is clicked!');
}
let btn3 = document.getElementById('btn3').onclick = () => {
    alert('Button 3 is clicked!');
}

// Bookmark manager

document.getElementById('bookmarkForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const siteName = document.getElementById('siteName').value;
    const siteUrl = document.getElementById('siteUrl').value;

    const bookmark = {
        name: siteName,
        url: siteUrl
    };

    if (localStorage.getItem('bookmarks') === null) {
        const bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    document.getElementById('bookmarkForm').reset();
    displayBookmarks();
});

function displayBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    const bookmarksList = document.getElementById('bookmarksList');
    bookmarksList.innerHTML = '';
    bookmarks.forEach(function (bookmark) {
        bookmarksList.innerHTML += `<li><a href="${bookmark.url}" target="_blank">${bookmark.name}</a></li>`;
    });
}

displayBookmarks();




//   < !--Task 5: Create a glowing bulb effect using classList.toggle method in JavaScript-- >

document.getElementById('toggleButton').addEventListener('click', function () {
    document.getElementById('bulb').classList.toggle('glow')
});