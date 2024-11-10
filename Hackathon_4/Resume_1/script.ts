
window.addEventListener("load", () => {
  
    let name = localStorage.getItem("name");
    let  desig = localStorage.getItem("desig");
    let  phone = localStorage.getItem("phone");
    let  email = localStorage.getItem("email");
    let  addrs = localStorage.getItem("addrs");
   
  
    let  deg1 = localStorage.getItem("deg1");
    let  pass1 = localStorage.getItem("pass1");
    let  uni1 = localStorage.getItem("uni1");
    let  pass2 = localStorage.getItem("pass2");
    let  deg2 = localStorage.getItem("deg2");
    let  uni2 = localStorage.getItem("uni2");
    let  skill1 = localStorage.getItem("skill1");
  
    let  skill2 = localStorage.getItem("skill2");
    let  skill3 = localStorage.getItem("skill3");
    let  lan1 = localStorage.getItem("lan1");
    let  lan2 = localStorage.getItem("lan2");
    let  styear = localStorage.getItem("styear");
    let  edyear = localStorage.getItem("edyear");
  
    let  company = localStorage.getItem("company");
    let  comloca = localStorage.getItem("comloca");
    let  jbtle = localStorage.getItem("jbtle");
   
    let  picture = localStorage.getItem("profile_pic");

  
    let resName:any = document.getElementById('resName')
    resName.textContent = name
  
    let email1:any = document.getElementById('email1')
    email1.textContent = email

    let resdesig:any = document.getElementById('resdesig')
    resdesig.textContent = desig

    let resphone:any = document.getElementById('resphone')
    resphone.textContent = phone

    let resAddres:any = document.getElementById('resAddres')
    resAddres.textContent = addrs
  
    let resdeg1:any = document.getElementById('resdeg1')
    resdeg1.textContent = deg1;

    let resUni1:any = document.getElementById('resUni1')
    resUni1.textContent = uni1;

    let resPass1:any = document.getElementById('resPass1')
    resPass1.textContent = pass1

    let resdeg2:any = document.getElementById('resdeg2')
    resdeg2.textContent = deg2;

    let resUni2:any = document.getElementById('resUni2')
    resUni2.textContent = uni2;

    let resPass2:any = document.getElementById('resPass2')
    resPass2.textContent = pass2;

    let resSkill1:any = document.getElementById('resSkill1')
    resSkill1.textContent = skill1;

    let resSkill2:any = document.getElementById('resSkill2')
    resSkill2.textContent = skill2;

    let resSkill3:any = document.getElementById('resSkill3')
    resSkill3.textContent = skill3

    let resLag1:any = document.getElementById('resLag1')
    resLag1.textContent = lan1;

    let resLag2:any = document.getElementById('resLag2')
    resLag2.textContent = lan2;

    let resStyr:any = document.getElementById('resStyr')
    resStyr.textContent = styear

    let resEdyr:any = document.getElementById('resEdyr')
    resEdyr.textContent = edyear

    let resCompany:any = document.getElementById('resCompany')
    resCompany.textContent = company

    let resImg:any = document.getElementById('resImg')
    resImg.src = picture
    


  
  
    
  });
  


//----------For Print Document------------

let print_doc = document.getElementById('print_btn');
print_doc?.addEventListener('click',()=>{
    window.print()
})


//----------For Edit Button------------

let edit_btn = document.getElementById('edit_btn');
edit_btn?.addEventListener('click',()=>{
    window.history.back()
})
