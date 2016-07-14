// function addLoadEvent(func) {
//   var oldonload = window.onload;
//   if (typeof window.onload != 'function') {
//     window.onload = func;
//   } else {
//     window.onload = function() {
//       if (oldonload) {
//         oldonload();
//       }
//       func();
//     }
//   }
// }
// addLoadEvent(function() {
//     document.getElementById("email").addEventListener("focus", hideWarning);
//     document.getElementById("pwd").addEventListener("focus", hideWarning);
// });
//
// function getUsername() {
//     return document.getElementById("email");
// }
//
// function getPassword() {
//     return document.getElementById("pwd");
// }
//
// function getPassword_conf() {
//     return document.getElementById("pwd_conf")
// }
//
// function changeRightNav(isloggedIn) {
//
//     var login = document.getElementById("login");
//     var account = document.getElementById("account");
//     if (isloggedIn) {
//         account.style.visibility = 'hidden';
//         login.style.height = 'auto';
//         login.style.visibility = 'visible';
//     } else {
//         login.style.visibility = 'hidden';
//         login.style.height = '0';
//         account.style.visibility = 'visible';
//         account.style.width = 'auto';
//         account.style.height = 'auto';
//     }
// }
//
// function logout() {
//     changeRightNav(true);
// }
//
// function displayWarning() {
//
//     document.getElementById("warning_input").style.visibility = 'visible';
// }
//
// function hideWarning() {
//
//     document.getElementById("warning_input").style.visibility = 'hidden';
// }
//
// function register() {
//     var username = getUsername().value;
//     var password = getPassword().value;
//     var pwd_conf = getPassword_conf().value;
//     console.log(username, password);
//     if (checkInput(username, password, pwd_conf)) {
//         $.ajax({
//             type: 'POST',
//             url: '/highcharts/php/login.php',
//             data: {
//                 username: username,
//                 password: password,
//                 action: 'register'
//             },
//             success: function(result) {
//               if(result == 'false') {
//                 document.getElementById("warning_input").style.visibility = "visible";
//                 document.getElementById("warning_input").innerHTML = "User already exists!";
//               }
//               else {
//                 setTimeout(function(){window.location="highchart_page2.html";}, 2000);
//               }
//             }
//         });
//     }
//     else {
//       displayWarning();
//     }
// }
//
// function checkInput(username, pwd, pwd_conf) {
//     var warning_input = document.getElementById("warning_input");
//     if (username.length == 0 || pwd.length == 0 || pwd_conf.length == 0) {
//         warning_input.innerHTML = "Please fill in all fields!"
//         return false;
//     } else if (pwd !== pwd_conf) {
//         warning_input.innerHTML = "Passwords are different!"
//         return false;
//     } else if (username.indexOf('@') == -1) {
//         warning_input.innerHTML = "Please enter a valid email!"
//         return false;
//     } else {
//         return true;
//     }
// }
//
// function validateLogin() {
//     $.ajax({
//         type: 'POST',
//         url: '/highcharts/php/login.php',
//         data: {
//             username: getUsername().value,
//             password: getPassword().value,
//             action: 'submit'
//         },
//         async: false,
//         success: function(content) {
//             if (content == 'true') {
//                 changeRightNav(false);
//             } else {
//
//                 displayWarning();
//             }
//         }
//     });
// }
