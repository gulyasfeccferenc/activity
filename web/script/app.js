// Setting some global variables
var DEFAULT_TIME = 60,
    COLOR_SCHEME = getCookie('color_scheme') || 'orange',
    timer, count,
    ajax = {};

//Dealing with AJAX
ajax.x = function() {
    if (typeof XMLHttpRequest !== 'undefined') {
        return new XMLHttpRequest();  
    }
    var versions = [
        "MSXML2.XmlHttp.6.0",
        "MSXML2.XmlHttp.5.0",   
        "MSXML2.XmlHttp.4.0",  
        "MSXML2.XmlHttp.3.0",   
        "MSXML2.XmlHttp.2.0",  
        "Microsoft.XmlHttp"
    ];

    var xhr;
    for(var i = 0; i < versions.length; i++) {  
        try {  
            xhr = new ActiveXObject(versions[i]);  
            break;  
        } catch (e) {
        }  
    }
    return xhr;
};

ajax.send = function(url, callback, method, data, sync) {
    var x = ajax.x();
    x.open(method, url, sync);
    x.onreadystatechange = function() {
        if (x.readyState == 4) {
            callback(x.responseText)
        }
    };
    if (method == 'POST') {
        x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }
    x.send(data)
};

ajax.post = function(url, data, callback, sync) {
    var query = [];
    for (var key in data) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
    ajax.send(url, callback, 'POST', query.join('&'), sync)
};

/**
* Will change the word to the new one.
*
* @param {HTMLDom Element} domElement - Element to change its content
* @param {string} newWord - The new word to show
*/
function showNewWord(domElement, newWord) {
    if (typeof domElement != 'undefined' && domElement != null) {
        domElement.innerHTML = newWord;
    }
}

/**
* This will countdown until reaching zero, refreshing
* the timer every second.
*/
function countdownTimer() {
    displayTime();
    if (count == 0) {

    } else {
        count--;
        timer = setTimeout('countdownTimer()', 1000);
    }
}

/**
* It will reset the global ('timer') timer,
* reinit the global counter and display a play button.
*/
function resetTimer() {
    clearTimeout(timer);
    count = DEFAULT_TIME;
    displayTime('&#9658');
}

/**
* Function which set the inner of the timer with a given value
* or with the value of the global 'count';
*
* @param {string} unique - The unique string you want to show.
*/
function displayTime(unique) {
    var insert = unique || count;
    document.querySelector('#timer_container').innerHTML = insert;
}

/**
* Return with the value of a cookie data
*
* @param {string} cookie - The name of the wanted cookie
* @return {string|null} - The wanted value or null, if there is no match
*/
function getCookie(cookie) {
    var all = document.cookie,
        parts = all.split("="),
        value;
        for (var key in parts) {
            if (parts[key] === 'oa__'+cookie) {
                value = key++;
                continue;
            }
        }
    return current = parts[value+1] || null;
}

/**
* Will set a cookie value
*
* @param {string} cookie - The name of the cookie, without the 'oa__' prefix
* @param {string} value - The new value
*/
function setCookie(cookie, value) {
    document.cookie = "oa__"+cookie+"="+value;
}

/**
* Change the class of the body, according to the argument.
*
* @param {string} value - The new color scheme
*/
function setColorScheme(value) {
    setCookie('color_scheme', value);
    document.body.className = value;
}


var Modal = (function() {

    var trigger = $qsa('.modal__trigger'); // what you click to activate the modal
    var modals = $qsa('.modal'); // the entire modal (takes up entire window)
    var modalsbg = $qsa('.modal__bg'); // the entire modal (takes up entire window)
    var content = $qsa('.modal__content'); // the inner content of the modal
    var closers = $qsa('.modal__close'); // an element used to close the modal
    var w = window;
    var isOpen = false;
    var contentDelay = 400; // duration after you click the button and wait for the content to show
    var len = trigger.length;

    // make it easier for yourself by not having to type as much to select an element
    function $qsa(el) {
        return document.querySelectorAll(el);
    }

    var getId = function(event) {

        event.preventDefault();
        var self = this;
        // get the value of the data-modal attribute from the button
        var modalId = self.dataset.modal;
        var len = modalId.length;
        // remove the '#' from the string
        var modalIdTrimmed = modalId.substring(1, len);
        // select the modal we want to activate
        var modal = document.getElementById(modalIdTrimmed);
        // execute function that creates the temporary expanding div
        makeDiv(self, modal);
    };

    var makeDiv = function(self, modal) {

        var fakediv = document.getElementById('modal__temp');

        /**
         * if there isn't a 'fakediv', create one and append it to the button that was
         * clicked. after that execute the function 'moveTrig' which handles the animations.
         */

        if (fakediv === null) {
            var div = document.createElement('div');
            div.id = 'modal__temp';
            self.appendChild(div);
            moveTrig(self, modal, div);
        }
    };

    var moveTrig = function(trig, modal, div) {
        var trigProps = trig.getBoundingClientRect();
        var m = modal;
        var mProps = m.querySelector('.modal__content').getBoundingClientRect();
        var transX, transY, scaleX, scaleY;
        var xc = w.innerWidth / 2;
        var yc = w.innerHeight / 2;

        // this class increases z-index value so the button goes overtop the other buttons
        trig.classList.add('modal__trigger--active');

        // these values are used for scale the temporary div to the same size as the modal
        scaleX = mProps.width / trigProps.width;
        scaleY = mProps.height / trigProps.height;

        scaleX = scaleX.toFixed(3); // round to 3 decimal places
        scaleY = scaleY.toFixed(3);

        // these values are used to move the button to the center of the window
        transX = Math.round(xc - trigProps.left - trigProps.width / 2);
        transY = Math.round(yc - trigProps.top - trigProps.height / 2);

        // if the modal is aligned to the top then move the button to the center-y of the modal instead of the window
        if (m.classList.contains('modal--align-top')) {
            transY = Math.round(mProps.height / 2 + mProps.top - trigProps.top - trigProps.height / 2);
        }

        // translate button to center of screen
        trig.style.transform = 'translate(' + transX + 'px, ' + transY + 'px)';
        trig.style.webkitTransform = 'translate(' + transX + 'px, ' + transY + 'px)';
        // expand temporary div to the same size as the modal
        div.style.transform = 'scale(' + scaleX + ',' + scaleY + ')';
        div.style.webkitTransform = 'scale(' + scaleX + ',' + scaleY + ')';

        window.setTimeout(function() {
            window.requestAnimationFrame(function() {
                open(m, div);
            });
        }, contentDelay);

    };

    var open = function(m, div) {

        if (!isOpen) {
            // select the content inside the modal
            var content = m.querySelector('.modal__content');
            // reveal the modal
            m.classList.add('modal--active');
            // reveal the modal content
            content.classList.add('modal__content--active');

            /**
             * when the modal content is finished transitioning, fadeout the temporary
             * expanding div so when the window resizes it isn't visible ( it doesn't
             * move with the window).
             */

            content.addEventListener('transitionend', hideDiv, false);

            isOpen = true;
        }

        function hideDiv() {
            // fadeout div so that it can't be seen when the window is resized
            div.style.opacity = '0';
            content.removeEventListener('transitionend', hideDiv, false);
        }
    };

    var close = function(event) {

        event.preventDefault();
        //event.stopImmediatePropagation();

        var target = event.target;
        var div = document.getElementById('modal__temp');

        /**
         * make sure the modal__bg or modal__close was clicked, we don't want to be able to click
         * inside the modal and have it close.
         */

        if (isOpen && target.classList.contains('modal__bg') || target.classList.contains('modal__close')) {

            // make the hidden div visible again and remove the transforms so it scales back to its original size
            div.style.opacity = '1';
            div.removeAttribute('style');

            /**
             * iterate through the modals and modal contents and triggers to remove their active classes.
             * remove the inline css from the trigger to move it back into its original position.
             */

            for (var i = 0; i < len; i++) {
                modals[i].classList.remove('modal--active');
                content[i].classList.remove('modal__content--active');
                trigger[i].style.transform = 'none';
                trigger[i].style.webkitTransform = 'none';
                trigger[i].classList.remove('modal__trigger--active');
            }

            // when the temporary div is opacity:1 again, we want to remove it from the dom
            div.addEventListener('transitionend', removeDiv, false);

            isOpen = false;

        }

        function removeDiv() {
            setTimeout(function() {
                window.requestAnimationFrame(function() {
                    // remove the temp div from the dom with a slight delay so the animation looks good
                    div.remove();
                });
            }, contentDelay - 50);
        }

    };

    var bindActions = function() {
        for (var i = 0; i < len; i++) {
            trigger[i].addEventListener('click', getId, false);
            closers[i].addEventListener('click', close, false);
            modalsbg[i].addEventListener('click', close, false);
        }
    };

    var init = function() {
        bindActions();
    };

    return {
        init: init
    };
}());

document.addEventListener('DOMContentLoaded', function(e) {
    var newWordButton = document.querySelector('.modal__trigger.floating'),
        wordContainer = document.querySelector('.modal__content p'),
        counterButton = document.querySelector('#timer_container');
    document.addEventListener('click', function(e) {
        if (e.target == newWordButton || e.target.parentNode == newWordButton) {
            ajax.post('/random', {}, function(e) {
                showNewWord(wordContainer, e);
                resetTimer();
            });
        } else if (e.target == counterButton && count == DEFAULT_TIME) {
            countdownTimer();
        } else if (e.target.hasAttribute("data-color")) {
            setColorScheme(e.target.getAttribute('data-color'));    
        }
    });

    

    init();
})

function init() {
    Modal.init();
    setColorScheme(COLOR_SCHEME);
}