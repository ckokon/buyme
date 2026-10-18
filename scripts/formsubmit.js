window.onload = setForm;

function setForm() {
   document.forms[1].onsubmit = function() {
      if (this.checkValidity()) alert("Thank you for your submission.");
      return false;
   }
}
