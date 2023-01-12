const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};

function SendEmail(){
	Email.send({
Host : "smtp.elasticemail.com",
Username : "asaln8592@gmail.com",
Password : "asheerna",
To : 'asaln4825@gmail.com',
From : document.getElementById("email").value,
Subject : "New contact FRom Enquiry",
Body : "And this is the body"
}).then(
message => alert(message)
);
}