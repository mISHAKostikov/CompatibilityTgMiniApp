import {Root} from '../Components/Root/Root.js';

let flag = false

window.addEventListener('load',() => {
    // window.Telegram.WebApp.expand();
    a()
})


// let root;
function a() {
    if (flag) return;
    console.log(flag)
    location = location.origin + location.pathname;
    flag = true;
}

// async function b() {
//     root = await import('../Components/Root/Root.js');
// }
