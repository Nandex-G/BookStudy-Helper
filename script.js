// Header Book Selection

let isSectionOpen = false
let bookSelectionTitle_element = document.querySelector('.headerBooks_title')
let bookSelection_element = document.querySelector('.headerBooks')
let bookSelectionCloseBTN_element = document.querySelector('.headerBooks_closeBTN')



function HeaderBookSection(topic) {
    let bookSelection_element_children = bookSelection_element.querySelectorAll('li')
    switch (topic) {

        // Listening

        case 'ListeningExam': 
            bookSelectionTitle_element.textContent = 'Listening Exams'
            bookSelection_element_children.forEach(book => {
                book.dataset.topic = topic
            })
        break;

        case 'ListeningTranscript':
            bookSelectionTitle_element.textContent = 'Listening Transcript'
            bookSelection_element_children.forEach(book => {
                book.dataset.topic = topic
            })
        break;

        case 'ListeningWordAndPhrase':
            bookSelectionTitle_element.textContent = 'Listening Words and Phrases'
            bookSelection_element_children.forEach(book => {
                book.dataset.topic = topic
            })
        break;

        // Reading

        case 'ReadingExam':
            bookSelectionTitle_element.textContent = 'Reading Exams'
            bookSelection_element_children.forEach(book => {
                book.dataset.topic = topic
            })
        break;

        case 'ReadingWordAndPhrase':
            bookSelectionTitle_element.textContent = 'Reading Words and Phrases'
            bookSelection_element_children.forEach(book => {
                book.dataset.topic = topic
            })
        break;

        // Word Books

        case 'book504':
            bookSelectionTitle_element.textContent = '504'
        break;
            
        case 'bookTOFEL':
            bookSelectionTitle_element.textContent = 'Essential Words For The TOEFL'
        break;
            

        default:
            bookSelectionTitle_element.textContent = "Not Availible (just yet)"
        break;
    }
    bookSelection_element_children.forEach(book => {
        book.addEventListener('click' , () => {

        })
    })

    if (!isSectionOpen) {
        bookSelection_element.style.height = '100%'
        setTimeout(() => {
            bookSelectionTitle_element.classList.add('headerBooks_title-active')
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
    bookSelectionTitle_element.classList.remove('headerBooks_title-active')
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



//  Window Things

let hero_title = document.querySelector('.hero_title')
let firstScroll = false
window.addEventListener('scroll' , (e) => {

    hero_title.classList.add('hero_title-animation')
    hero_title.style.opacity = 1
    firstScroll = true
})
