// Header Book Selection

let isSectionOpen = false
let bookSelection_element = document.querySelector('.headerBooks')
let bookSelectionCloseBTN_element = document.querySelector('.headerBooks_closeBTN')

function HeaderBookSection() {

    if (!isSectionOpen) {
        bookSelection_element.style.height = '100%'
        setTimeout(() => {
            bookSelection_element.style.overflow = 'visible'
            bookSelectionCloseBTN_element.classList.add('headerBooks_closeBTN-active')
            setTimeout(() => {
                bookSelectionCloseBTN_element.style.overflow = 'visible'
            }, 100);
        }, 300);
        isSectionOpen = true
    }
}   

bookSelectionCloseBTN_element.addEventListener('click' , () => {
    if (isSectionOpen) {
        closingFunc()
        isSectionOpen = false
    }
})

window.addEventListener('keydown' , (e) => {
    if (e.key === 'Escape' && isSectionOpen) {
        closingFunc()
        isSectionOpen = false
    }
})

function closingFunc() {
    bookSelectionCloseBTN_element.style.overflow = 'hidden'
    bookSelectionCloseBTN_element.classList.remove('headerBooks_closeBTN-active')
    setTimeout(() => {
        bookSelection_element.style.overflow = 'hidden'
        setTimeout(() => {
            bookSelection_element.style.height = 0
        }, 100);
    }, 200);
}

// Book Opener

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
