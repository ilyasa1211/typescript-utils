export default function validateEmail(inputEmail: string): boolean {
  // regex get from https://www.w3resource.com/javascript/form/email-validation.php
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail);
}
