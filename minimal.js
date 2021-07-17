// let q= document.createElement('li');
// q.className= "qc";
// q.innerText='oooo'
// let l= document.createElement('li');
// l.className= "lc";
// l.innerText='iiii'


// let a = document.querySelector('ul.list');
// a.appendChild(q);
// a.appendChild(q);
// console.log(a);
// let z=document.getElementById('m');
// z.removeChild(document.getElementById('f'));
// let p=document.getElementById('d');
// p.replaceWith(l);

// document.getElementById('d').addEventListener('mouseover',function(e){
//     let vari;
//     document.body.style.backgroundColor= `rgb(${e.offsetY},15,${e.offsetX/2})`
//     console.log(vari);
// });
let str = 'python';
let links = document.links;
let ref;
Array.from(links).forEach(function (e) {
    ref = e.href;
    if (ref.includes(str)) {
        console.log(ref);
    }
});

