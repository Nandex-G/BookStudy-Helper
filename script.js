// Header Book Selection

let isSectionOpen = false
let navSelectionTitle_element = document.querySelector('.navSelection-title')
let navSelection_element = document.querySelector('.navSelection')
let navSelection_body_element = document.querySelector('.navSelection-body')
let navSelection_BTN_element = document.querySelector('.navSelection-BTN')


let books = {
    'cambridge' : ['Cambridge_10' , 'Cambridge_11' , 'Cambridge_12' , 'Cambridge_13' , 'Cambridge_14' , 'Cambridge_15' , 'Cambridge_16' , 'Cambridge_17' , 'Cambridge_18' , 'Cambridge_19' , 'Cambridge_20'],
    'collins' : ['Lesson_1','Lesson_2','Lesson_3','Lesson_4','Lesson_5',]
}




function navSelectionOpener(category , topic) {
    let navSelection_element_children = navSelection_element.querySelectorAll('li')
    if (category == 'books') {
        switch (topic) {

            case 'cambridgeIELTS': 
                navSelectionTitle_element.textContent = 'Cambridge IELTS'
                bookMaker('cambridge')
            break;
    
            case 'collins':
                navSelectionTitle_element.textContent = 'Collins'
                bookMaker('collins')
            break;

            case 'grammarInUse' :
                navSelectionTitle_element.textContent = 'Grammar In Use'
                bookMaker('grammarInUse')
            break;

            default:
                navSelectionTitle_element.textContent = "Still not available"
            break;
        }
    } else if (category == 'vocabulary') {
        
    } else if (condition== 'camShortcuts') {
        
    }



    if (!isSectionOpen) {
        navSelection_element.style.height = '100%'
        setTimeout(() => {
            navSelectionTitle_element.classList.add('navLinks_titles-active')
            navSelection_element.style.overflow = 'visible'
            navSelection_BTN_element.classList.add('navSelection-BTN-active')
            setTimeout(() => {
                navSelection_BTN_element.style.overflow = 'visible'
            }, 100);
        }, 300);
        isSectionOpen = true
    }

    function bookMaker(book) {
        navSelection_body_element.style.opacity = 0
        setTimeout(() => {
            navSelection_body_element.innerHTML = ''
            if (book in books) {
                books[book].forEach((book) => {
                    navSelection_body_element.innerHTML += `<li id="${book}">${book.replace('_' , ' ')}</li>`
                    navSelection_body_element.style.opacity = 1
                })
            } else {
                navSelection_body_element.innerHTML = '<li>This book is still not available.</li>'      
                navSelection_body_element.style.opacity = 1      
            }
        }, 200);
    }
}   

navSelection_BTN_element.addEventListener('click' , () => {
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
    navSelectionTitle_element.classList.remove('navLinks_titles-active')
    navSelection_BTN_element.style.overflow = 'hidden'
    navSelection_BTN_element.classList.remove('navSelection-BTN-active')
    setTimeout(() => {
        navSelection_element.style.overflow = 'hidden'
        setTimeout(() => {
            navSelection_element.style.height = 0
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
