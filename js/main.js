const elForm = document.querySelector(".form");
const elNameInput = document.querySelector(".name-input");
const elTelInput = document.querySelector(".tel-input");
const elEmailInput = document.querySelector(".email-input");
const elMassage = document.querySelector(".massage-input");

elForm.addEventListener("submit", function(evt) {
   evt.preventDefault();

   const nameValue = elNameInput.value.trim();
   const telValue = elTelInput.value.trim();
   const emailValue = elEmailInput.value.trim();
   const textValue = elMassage.value.trim();
   
   if (!isNaN(nameValue)) {
      alert("Ismda raqam ishlatish mumkun emas!");
      return;
   } 
   if (nameValue.length < 2) {
      alert("Ism 2ta yoki undan kop harfdan iboratbo'lishi kerak!");
      return;
   } 
   if (!telValue.startsWith("+998")) {
      alert("Telefon raqamingiz +998 bilan boshlanishi kerak!");
      return;
   } 
   if (telValue.length < 13) {
      alert("Telefon raqamingizni 13ta raqamdan ko'p yoki kam bo'lmasligi kerak!");
      return;
   }
   if (!emailValue.endsWith("@gmail.com")) {
      alert("Emailni xato to'ldirdingiz");
      return;
   }
   if (textValue.length < 5) {
      alert("5tadan ko'proq so'z yozing!");
      return;
   } 
   if (textValue.length > 50) {
      alert("50tadan kamroq soz kiriting!");
      return;
   }
});