let booksPreviewlist = document.querySelectorAll('.books_cambridge-books span');
let activeBook = null;

booksPreviewlist.forEach(book => {
    book.addEventListener('click', (event) => {
        event.stopPropagation();
        
        let buttons = book.querySelectorAll('button');
        let paragraph = book.querySelector('p');

        if (activeBook && activeBook !== book) {
            resetBook(activeBook);
        }

        let isActive = book.classList.contains('bookActiveWidth');

        if (!isActive) {
            book.classList.add('bookActiveWidth');
            buttons.forEach(btn => btn.classList.add('bookActiveButtons'));
            paragraph.classList.add('bookActiveP');
            activeBook = book;
        } else {
            resetBook(book);
        }
    });
});

document.addEventListener('click', () => {
    if (activeBook) {
        resetBook(activeBook);
        activeBook = null;
    }
});

function resetBook(book) {
    book.classList.remove('bookActiveWidth');
    let buttons = book.querySelectorAll('button');
    let paragraph = book.querySelector('p');

    buttons.forEach(btn => btn.classList.remove('bookActiveButtons'));
    paragraph.classList.remove('bookActiveP');
}
