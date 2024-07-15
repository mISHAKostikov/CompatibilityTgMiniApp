// import '../Components/Root/Root.js';


window.addEventListener('load',() => {
    window.Telegram.WebApp.expand();
})

let root;

async function main() {
    root = await import('../Components/Root/Root.js');
    alert(2)
}

main();
