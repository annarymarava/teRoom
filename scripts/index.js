// burger
const burgerBtn = document.getElementById('burger');
const navigationWr = document.getElementById('mobile-nav');
const closeNavMobile = document.getElementById('close-mobile-nav')
burgerBtn.addEventListener('click', ()=> {
    navigationWr.classList.add('active')
})
closeNavMobile.addEventListener('click', ()=> {
    navigationWr.classList.remove('active')
})

// cookie
const closeBtnAlert = document.getElementById('close-cookie-alert');
const alertBtnAlert = document.getElementById('cookie-btn');
const alertCookie = document.getElementById('cookie-alert');
closeBtnAlert.addEventListener('click', ()=> {
    alertCookie.classList.add('none')
})
alertBtnAlert.addEventListener('click', ()=> {
    alertCookie.classList.add('none')
})

// price
const contentRates = document.getElementById('rates-kinds');
const contentSliderTablet = document.getElementById('rates-kinds-tablet');
const contentSliderMobile = document.getElementById('rates-kinds-mobile');
const contentSliderMobileSmall = document.getElementById('rates-kinds-mobile-small');

const select = document.getElementById('rates-kinds-select');
select.addEventListener('change', (e)=> {
    if (e.target.value === '1') {
        contentRates.classList.add('inactive')
        contentSliderTablet.classList.add('inactive')
        contentSliderMobile.classList.add('inactive')
        contentSliderMobileSmall.classList.add('inactive')

    } else {
        contentRates.classList.remove('inactive')
        contentSliderTablet.classList.remove('inactive')
        contentSliderMobile.classList.remove('inactive')
        contentSliderMobileSmall.classList.remove('inactive')

    }
})

// tabs
const tabs = document.getElementById('tabs');
const tabsMobile = document.getElementById('tabs-mobile');
const itemLinks = tabs.getElementsByTagName('li')
const itemLinksMobile = tabsMobile.getElementsByTagName('li')
const itemContent = document.getElementsByClassName('wr-opportunities-projects')
tabs.addEventListener('click', (e)=> {
    if(e.target.closest("li")) {
        for (let i = 0; i < itemLinks.length; i++) {
            if(itemLinks[i].classList.contains('active')){
                itemLinks[i].classList.remove('active')
                itemContent[i].classList.remove('active')
            }
        }
        const id =  e.target.closest("li").id
        for (let i = 0; i < itemContent.length; i++) {
            if(itemContent[i].id.concat('-link') === id){
                itemContent[i].classList.add('active')
            }
        }
        e.target.closest("li").classList.add('active')
    }
})
tabsMobile.addEventListener('click', (e)=> {
    if(e.target.closest("li")) {
        for (let i = 0; i < itemLinksMobile.length; i++) {
            if(itemLinksMobile[i].classList.contains('active')){
                itemLinksMobile[i].classList.remove('active')
                itemContent[i].classList.remove('active')
            }
        }
        const id =  e.target.closest("li").id
        for (let i = 0; i < itemContent.length; i++) {
            if(itemContent[i].id.concat('-link-mobile') === id){
                itemContent[i].classList.add('active')
            }
        }
        e.target.closest("li").classList.add('active')
    }
})

// questions
const elementQuestion = document.getElementById('wr-questions-items');
elementQuestion.style.maxHeight= elementQuestion.offsetHeight+ 'px';
window.addEventListener('resize', ()=> {
    elementQuestion.style = null
    elementQuestion.style.maxHeight= elementQuestion.offsetHeight+ 'px';
})

const wrapperArrayAnswer = elementQuestion.getElementsByClassName('wr-questions-item-full');
elementQuestion.addEventListener('click', (e)=> {
    if(e.target.closest(".wr-questions-item-full")) {
        for (let i = 0; i < wrapperArrayAnswer.length; i++) {
            if(wrapperArrayAnswer[i].classList.contains('active')){
                wrapperArrayAnswer[i].classList.remove('active')
                e.target.closest(".wr-questions-item-full").classList.add('active')
            }
        }


    }
})
// checkbox custom
const checkboxes = document.getElementsByClassName('checkbox')
for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', ()=> {
        console.log(checkboxes[i])
        if (checkboxes[i].checked){
            checkboxes[i].closest('.container-checkbox').classList.add('checked')
        } else {
            checkboxes[i].closest('.container-checkbox').classList.remove('checked')

        }

    })
}