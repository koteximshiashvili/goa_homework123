// let promise = new Promise((resolve, reject) => {
//     resolve(setTimeout(() => document.querySelector('.in1').value, document.querySelector('.in2').value))
// });
// document.querySelector('button').addEventListener("click", () => {
    // let in1 = document.querySelector('.in1').value;
    // let in2 = document.querySelector('.in2').value;
//     promise.then(res => setTimeout(() => console.log(in1), parseInt(in2)));
// });
// let in1 = document.querySelector('.in1').value;
// let in2 = parseInt(document.querySelector('.in2').value);
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(in1), in2)
// });
// function createPromise(){
//     return promise.then(res => console.log(res))
// }
// document.querySelector('button').addEventListener("click", () => {
//     in1 = document.querySelector('.in1').value;
//     in2 = parseInt(document.querySelector('.in2').value);
//     createPromise()
// });
// document.querySelector('button').addEventListener("click", () => {
    // let in1 = document.querySelector('.in1').value;
    // let in2 = parseInt(document.querySelector('.in2').value);

//     function createPromise() {
        // let promise = new Promise((resolve, reject) => {
        //     setTimeout(() => resolve(in1), in2);
        // });
//         return promise.then(res => console.log(res));
//     }

//     createPromise();
// });
// function createPromise(message, time){
//     document.querySelector('button').addEventListener("click", () => {
//         new Promise((resolve, reject) => {
//             setTimeout(() => resolve(document.querySelector('.in1').value), parseInt(document.querySelector('.in2').value));
//         }).then(res => console.log(res));
//     });
//     createPromise(document.querySelector('.in1').value, parseInt(document.querySelector('.in2').value))
// };
// createPromise()

