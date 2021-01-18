/**
 * This is the main TypeScript entry for your application.
 */

const title: string = 'Hello World!';

const element: HTMLParagraphElement = document.createElement('p');

element.innerText = title;

document.getElementById('main').append(element);