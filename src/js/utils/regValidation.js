export default function regValidation(name, email, pas) {
  let nameVal = /[a-zA-Z\s]+/;
  let emailVal = /[a-zA-Z0-9]+@(gmail|yahoo|mail)\.com/;
  let pasVal = /[a-zA-Z0-9]{5,}/;

  if (nameVal.test(name) && emailVal.test(email) && pasVal.test(pas)) {
    return true;
  }
  console.log(name);
  console.log(email);
  console.log(pas);
  return false;
}
