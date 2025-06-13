// // console.log('Button clicking file added')

// // document.getElementById('btnID').addEventListener('click',function(){
    
// // })

// // step1- set event handler
// document.getElementById('btnID').addEventListener('click',function(event){
//     // step2- prevent default(reloading browser)
//     event.preventDefault
//     console.log('log in button clicked');

//     // step3: get phone number 
//     const phoneNumber= document.getElementById('phone-number').value;
//     console.log(phoneNumber);

//     const pinNumber=document.getElementById('pin-number').value;
//     console.log(phoneNumber,pinNumber)

//     // step 4- validate phone and pin
//     //for practices. will never use it in real life
//     if(phoneNumber==='5' && pinNumber==='1234'){
//             console.log('you are logged in');
//             // allow user to use the web
//     }else{
//         console.log('wrong pin number');
//   

document.getElementById('btnID').addEventListener('click', function(event){
    event.preventDefault();
    console.log('button clicked'); 
    // get phone number and pin
    const phoneNumber=document.getElementById('phone-number').value;
    const pinNumber=document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);

    if(phoneNumber==='5' && pinNumber==='4567'){
        console.log('your are logged in');
        window.location.href='/home.html';
    }else{
        alert('wrong password')
}
})
