const $btn = document.getElementById('btn');

let start = 0;
let flag = false

$btn.addEventListener('mousedown', () => {
    start = new Date();
    flag = false;
    console.time('timer')
    console.log('down')
});

$btn.addEventListener('mouseup', () => {
    console.log('up')
    console.timeEnd('timer')
    start = 0;
});

(function LongPress() {

    console.log(start && new Date() - start)

    if(start && new Date() - start > 800) {
        
        if(!flag) {
            flag = true;
            start = 0;
            console.timeEnd('timer')
            alert('Happen!')
        }
    }

    requestAnimationFrame(LongPress)
})();