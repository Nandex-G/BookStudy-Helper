// Header Book Selection

let isSectionOpen = false
let navSelectionTitle_element = document.querySelector('.navSelection-title')
let navSelection_element = document.querySelector('.navSelection')
let navSelection_body_element = document.querySelector('.navSelection-body')
let navSelection_backBTN_element = document.querySelector('.navSelection-backArrow')
let navSelection_BTN_element = document.querySelector('.navSelection-BTN')

let navSelection_body_element__SAVE
let navSelectionTitle_element__SAVE
let isSubBook_condition

let books = {
    // 'cambridge' : ['Cambridge_20', 'Cambridge_19', 'Cambridge_18', 'Cambridge_17', 'Cambridge_16', 'Cambridge_15', 'Cambridge_14', 'Cambridge_13', 'Cambridge_12', 'Cambridge_11', 'Cambridge_10'],
    'cambridge' : ['Listening','Reading','Writing','Speaking'],
    'collins' : ['Speaking_For_IELTS','Litening_For_IELTS','Reading_For_IELTS','Writing_For_IELTS'],
    'grammarInUse' : ['Sorry, this book is still not added.'],
    '504': ['Lesson_1', 'Lesson_2', 'Lesson_3', 'Lesson_4', 'Lesson_5', 'Lesson_6', 'Lesson_7', 'Lesson_8', 'Lesson_9', 'Lesson_10','Lesson_11', 'Lesson_12', 'Lesson_13', 'Lesson_14', 'Lesson_15','Lesson_16', 'Lesson_17', 'Lesson_18', 'Lesson_19', 'Lesson_20','Lesson_21', 'Lesson_22', 'Lesson_23', 'Lesson_24', 'Lesson_25','Lesson_26', 'Lesson_27', 'Lesson_28', 'Lesson_29', 'Lesson_30','Lesson_31', 'Lesson_32', 'Lesson_33', 'Lesson_34', 'Lesson_35','Lesson_36', 'Lesson_37', 'Lesson_38', 'Lesson_39', 'Lesson_40','Lesson_41', 'Lesson_42']
}
let subBooks = {
    // Cambridge
    'Cambridge_20' : ['Test_1','Test_2','Test_3','Test_4'],
    'Cambridge_19' : ['Test_1','Test_2','Test_3','Test_4'],
    'Cambridge_18' : ['Test_1','Test_2','Test_3','Test_4'],
    'Cambridge_17' : ['Test_1','Test_2','Test_3','Test_4'],
    'Cambridge_16' : ['Test_1','Test_2','Test_3','Test_4'],
    'Cambridge_15' : ['Test_1','Test_2','Test_3','Test_4'],
    'Cambridge_14' : ['Test_1','Test_2','Test_3','Test_4'],
    'Cambridge_13' : ['Test_1','Test_2','Test_3','Test_4'],
    'Cambridge_12' : ['Test_1','Test_2','Test_3','Test_4'],
    'Cambridge_11' : ['Test_1','Test_2','Test_3','Test_4'],
    'Cambridge_10' : ['Test_1','Test_2','Test_3','Test_4'],
    // Collins

}

function navSelectionOpener(category , topic) {
    if (category == 'books') {
        switch (topic) {

            case 'cambridgeIELTS': 
                navSelectionTitle_element.textContent = 'Cambridge IELTS'
                navSelectionTitle_element__SAVE = 'Cambridge IELTS'
                isSubBook_condition = false
                bookMaker('cambridge' , false)
            break;
    
            case 'collins':
                navSelectionTitle_element.textContent = 'Collins'
                navSelectionTitle_element__SAVE = 'Collins'
                isSubBook_condition = false
                bookMaker('collins' , false)
            break;

            case 'grammarInUse' :
                navSelectionTitle_element.textContent = 'Grammar In Use'
                bookMaker('grammarInUse' , false)
                isSubBook_condition = false
                navSelectionTitle_element__SAVE = 'Grammar In Use'
            break;

            default:
                navSelectionTitle_element.textContent = "Still not available"
                navSelectionTitle_element__SAVE = "Still not available"
            break;
        }
    } else if (category == 'vocabulary') {
        switch (topic) {

            case '504': 
                navSelectionTitle_element.textContent = '504 Absolutely Essential Words'
                navSelectionTitle_element__SAVE = '504 Absolutely Essential Words'
                isSubBook_condition = false
                bookMaker('504' , false)
            break;
    
            case 'E_TOFEL':
                navSelectionTitle_element.textContent = 'Essential Words For The TOEFL'
                navSelectionTitle_element__SAVE = 'Essential Words For The TOEFL'
                isSubBook_condition = false
                bookMaker('E_TOFEL' , false)
            break;

            default:
                navSelectionTitle_element.textContent = "Still not available"
                navSelectionTitle_element__SAVE = "Still not available"
            break;
        }    
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



    function bookMaker(book , isSubBooks) {
        navSelection_body_element.style.opacity = 0
        navSelection_backBTN_element.style.opacity = 0
        setTimeout(() => {
            navSelectionTitle_element.innerHTML = navSelectionTitle_element__SAVE
            navSelection_body_element.innerHTML = ''
            if (book in books) {
                books[book].forEach((bookItem) => {
                    if (navSelection_body_element.id != bookItem) {
                        if (navSelection_body_element.id == 'none') {
                            navSelection_body_element.innerHTML += `<li id="${bookItem}"><a href="pages/${bookItem}.html">${bookItem.replaceAll("_", " ")}<a></li>`
                        } else {
                            navSelection_body_element.innerHTML += `<li id="${bookItem}"><a href="${bookItem}.html">${bookItem.replaceAll("_", " ")}<a></li>`
                        }
                    } else {
                        navSelection_body_element.innerHTML += `<li style="opacity : .5;" id="${bookItem}">${bookItem.replaceAll("_", " ")}</li>`
                    }
                    navSelection_body_element.style.opacity = 1
                    if (isSubBooks == true) {
                        navSelection_body_element.querySelectorAll('li').forEach((bookChild) => {
                            bookChild.addEventListener('click' , (e) => {
                                navSelection_body_element__SAVE = book
                                navSelectionTitle_element.textContent = e.target.id.replaceAll("_", " ")
                                subBookMaker(e.target.id)           
                            })
                        })
                    }
                })
            } else {
                navSelection_body_element.innerHTML = '<li>This book is still not available.</li>'      
                navSelection_body_element.style.opacity = 1      
            }
        }, 200);
    }

    function subBookMaker(bookID) {
        navSelection_backBTN_element.style.opacity = 1
        navSelection_backBTN_element.addEventListener('click' , () => {
            bookMaker(navSelection_body_element__SAVE , isSubBook_condition )
        })
        navSelection_body_element.style.opacity = 0
        setTimeout(() => {
            navSelection_body_element.innerHTML = ''
            if (bookID in subBooks) {
                subBooks[bookID].forEach((subBook) => {
                    navSelection_body_element.innerHTML += `<li id="${subBook}">${subBook.replaceAll("_"," ")}</li>`
                    navSelection_body_element.style.opacity = 1
                })
            } else {
                navSelection_body_element.innerHTML = '<li>This book is still not available.</li>'
                navSelection_body_element.style.opacity = 1
            }
            navSelection_backBTN_element
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
            setTimeout(() => {
                navSelection_body_element.innerHTML = ''
            }, 300);
        }, 100);
    }, 200);
} 


// Hero Section

// let hero_title = document.querySelector('.hero_title')
// let firstScroll = false
// window.addEventListener('scroll' , (e) => {

//     hero_title.classList.add('hero_title-animation')
//     hero_title.style.opacity = 1
//     firstScroll = true
// })

