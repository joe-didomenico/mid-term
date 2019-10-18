function check_input() {
  hm.style.visibility = "visible";
  hm.style.color = "red";
  if (len_ok(us.value, "User Name") != true) {
      return;
  }
  if (len_ok(pw.value, "password") != true) {
     return;
  }
  if (len_ok(con.value, "password") != true) {
    return;
  }
  if (pw.value === con.value) {
    hm.style.color = "green";
    document.getElementById("hidden-msg").innerHTML = "The input values are good";
    return;
  }
  hm.innerHTML = "The values are different";
}

function len_ok(strToTest, strEl) {
  let lenOfStr = strToTest.length;
  if ((lenOfStr >= 4) & (lenOfStr <= 8)) {
    return true;
  }
  hm.innerHTML = `'The length of "${strEl}" must be between 4 and 8`;
  return false;
}

const bt = document.getElementById("ctr-btn");

bt.addEventListener("click", check_input);
const hm = document.getElementById("hidden-msg");
const us = document.getElementById("uname");
const pw = document.getElementById("pw");
const con = document.getElementById("con");
