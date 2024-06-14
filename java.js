console.log("Start");

// отступ для основной части
img = document.getElementById("bck")
headh = document.getElementById("hd").offsetHeight
navh = document.getElementById("nv").offsetHeight

elem = document.querySelector('.allhead');
style = window.getComputedStyle(elem);
marginTopValue = style.getPropertyValue('margin-top');
martop = parseInt(marginTopValue, 10);

marginformain = img.height - martop - headh - navh;

mainElement = document.querySelector('main');
mainElement.style.marginTop = marginformain-60+"px";


// dark mode 

let styleMode = localStorage.getItem('styleMode');
const styleButton = document.querySelector('.allbutton');

function replaceClass(originalClass, newClass) {
    const elements = document.querySelectorAll('.' + originalClass);
    elements.forEach(element => {
        element.classList.replace(originalClass, newClass);
    });
}

const textElement = document.querySelector('div');

const enableDarkStyle = () => {
    document.body.classList.add('darkstyle');
    localStorage.setItem('styleMode', 'dark');
    

    document.getElementById('bck').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('bck').src = 'img/bcktop2.png';
        document.getElementById('bck').style.opacity = 1;
    }, 400);

    replaceClass('head1', 'head1dark');
    replaceClass('number1', 'number1Dark');
    replaceClass('mainh1', 'mainh1Dark');
    replaceClass('maintext1', 'maintext1Dark');
    replaceClass('maintext2', 'maintext2Dark');
    replaceClass('inabouth', 'inabouthDark');
    replaceClass('ftr1', 'ftr1Dark');
    replaceClass('INTR', 'INTRDark');
}
const disableDarkstyle = () => {
    document.body.classList.remove('darkstyle');
    localStorage.setItem('styleMode', null );


    document.getElementById('bck').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('bck').src = 'img/bcktop5.png';
        document.getElementById('bck').style.opacity = 1;
    }, 400);

    replaceClass('head1dark', 'head1');
    replaceClass('number1Dark', 'number1');
    replaceClass('mainh1Dark', 'mainh1');
    replaceClass('maintext1Dark', 'maintext1');
    replaceClass('maintext2Dark', 'maintext2');
    replaceClass('inabouthDark', 'inabouth');
    replaceClass('ftr1Dark', 'ftr1');
    replaceClass('INTRDark', 'INTR');
}

styleButton.addEventListener('click', () => {
    styleMode = localStorage.getItem('styleMode');
    if( styleMode !== 'dark'){
        enableDarkStyle();
    }
    else{
        disableDarkstyle();
    }
});

if( styleMode == 'dark' ){
    enableDarkStyle();
}



// Анимация при прокрутке страницы

const classesToObserve = ['.inline1', '.inline2', '.image1'];

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
}, { threshold: 0.5 });

classesToObserve.forEach(className => {
    const elements = document.querySelectorAll(className);
    elements.forEach(element => {
        observer.observe(element);
    });
});