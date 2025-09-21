const Formatter = (function(doc){
    'use strict'

    const makeUpperCase = (text) => {
        return text.toUpperCase();
    }

    const writeToDom = (selector, message) => {
        if(!doc && 'querySelector' in doc) {
            doc.querySelector(selector).innerHTML = message;
        }
    }

    return { makeUpperCase, writeToDom };
})(document);

const text = Formatter.makeUpperCase('hello world');
Formatter.writeToDom('.target', text);