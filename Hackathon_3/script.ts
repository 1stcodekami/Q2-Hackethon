let myName: any = document.getElementById("name");

let phone: any = document.getElementById("phone");
let email: any = document.getElementById("email");
let addrs: any = document.getElementById("addrs");
let pass1: any = document.getElementById("pass1");
let deg1: any = document.getElementById("deg1");
let uni1: any = document.getElementById("uni1");
let pass2: any = document.getElementById("pass2");
let deg2: any = document.getElementById("deg2");
let uni2: any = document.getElementById("uni2");
let skill1: any = document.getElementById("skill1");
let skill2: any = document.getElementById("skill2");
let skill3: any = document.getElementById("skill3");
let lan1: any = document.getElementById("lan1");
let lan2: any = document.getElementById("lan2");
let styear: any = document.getElementById("styear");
let edyear: any = document.getElementById("edyear");
let company: any = document.getElementById("company");
let comloca: any = document.getElementById("comloca");
let jbtle: any = document.getElementById("jbtle");
let achi1: any = document.getElementById("achi1");
let achi2: any = document.getElementById("achi2");
let achi3: any = document.getElementById("achi3");
let pic: any = document.getElementById("pic");

let subbtn = document.getElementById("subbtn");

let form = document.getElementById("form");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("name", myName.value);

  localStorage.setItem("phone", phone.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("addrs", addrs.value);
  localStorage.setItem("pass1", pass1.value);

  localStorage.setItem("deg1", deg1.value);
  localStorage.setItem("uni1", uni1.value);
  localStorage.setItem("pass2", pass2.value);
  localStorage.setItem("deg2", deg2.value);
  localStorage.setItem("uni2", uni2.value);
  localStorage.setItem("skill1", skill1.value);

  localStorage.setItem("skill2", skill2.value);
  localStorage.setItem("skill3", skill3.value);
  localStorage.setItem("lan1", lan1.value);
  localStorage.setItem("lan2", lan2.value);
  localStorage.setItem("styear", styear.value);
  localStorage.setItem("edyear", edyear.value);

  localStorage.setItem("company", company.value);
  localStorage.setItem("comloca", comloca.value);
  localStorage.setItem("jbtle", jbtle.value);

  if (pic.files && pic.files[0]) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      let textImg: any = reader.result;
      localStorage.setItem("profile_pic", textImg);
    });
    reader.readAsDataURL(pic.files[0]);
  }

  window.location.href = "./Resume_1/resume.html";
});
