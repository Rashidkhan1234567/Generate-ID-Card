"use strict";

//    Create varaibles

const userName = document.getElementById("username");
const age = document.getElementById("age");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const gender = document.getElementsByName("value-radio");
const rollNumber = Math.floor(Math.random() * (100000 - 10000 + 1)) + 10000;
const generateBtn = document.getElementById("Generate");
let body = document.getElementById("body");
let count1 = document.getElementById("count");
let count2 = 0;
let save_IdCards = [];
//    Create a function to check the input

generateBtn.addEventListener("click", () => {
  let name = userName.value;
  let userAge = age.value;
  let userEmail = email.value;
  let userPhone = phone.value;
  let userGender = "";

  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      userGender = gender[i].value;
      break;
    }
  }

  if (name === "" || userAge === "" || userEmail === "" || userPhone === "") {
    Swal.fire({
      title: "Please fill all the required fields",
      icon: "warning",
    });
  } else {
    if (!/^[a-zA-Z]+$/.test(name)) {
      Swal.fire({
        title: "Name should only contain letters",
        icon: "warning",
      });
      return;
    } else {
      if (!/^\d+$/.test(userAge) || userAge < 18 || userAge > 99) {
        Swal.fire({
          title: "Age should be a number between 18 and 99",
          icon: "warning",
        });
        return;
      } else {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
          Swal.fire({
            title: "Invalid email format",
            icon: "warning",
          });
          return;
        } else {
          if (!/^\d{11}$/.test(userPhone)) {
            Swal.fire({
              title: "Phone number should be 11 digits",
              icon: "warning",
            });
            return;
          } else {
            if (userGender == "") {
              Swal.fire({
                title: "Please select gender",
                icon: "warning",
              });
              return;
            } else {
              save_IdCards.push({
                name: name,
                age: userAge,
                roll: rollNumber,
                gender: userGender,
                phone: userPhone,
                email: userEmail,
              });

              //   localStorage.setItem(name, JSON.stringify(user));
              //   let local = JSON.parse(localStorage.getItem(name));
              //   if (name == local.name) {
              //     Swal.fire({
              //       title: `${name} is already exist`,
              //       icon: "warning",
              //     });

              //     return;
              //   }else{}
              //   console.log(local.name);
              //   console.log(local.age);
              //   console.log(local.roll);
              //   console.log(local.gender);
              //   console.log(local.phone);
              //   console.log(local.email);
              body.innerHTML += `<div class="id_card">
              <div class="btn">
              <button type="button" title="edit" class="edit"><i class="fa-regular fa-pen-to-square"></i></button>
              <button type="button" title="print" class="print"><i class="fa-solid fa-print"></i></button>
              <button type="button" title="delete" class="del"><i class="fa-solid fa-trash"></i></button>
              </div>
                  <img src="Img/download.png" />
                  <div class="text">
                                  <div class="default">
                                    <p>Name</p>
                                    <p>Age</p>
                                    <p>Roll number</p>
                                    <p>Gender</p>
                                    <p>Phone Number</p>
                                    <p>Email</p>
                                  </div>
                                  <div class="style">
                                   <h2>:</h2>
                                   <h2>:</h2>
                                   <h2>:</h2>
                                   <h2>:</h2>
                                   <h2>:</h2>
                                   <h2>:</h2>
                                  </div>
                                  <div class="change">
                                    <p id="name">${name}</p>
                                    <p id="age">${userAge}</p>
                                    <p id="roll">${rollNumber}</p>
                                    <p id="gender">${userGender}</p>
                                    <p id="phone">${userPhone}</p>
                                    <p id="email">${userEmail}</p>
                                  </div>
                                </div>
                              </div>`;

              count2++;
              count1.textContent = count2;
              Swal.fire({
                title: "Id Card created successfully",
                icon: "success",
              });
              userName.value = "";
              age.value = "";
              email.value = "";
              phone.value = "";
              gender[0].checked = false;
              gender[1].checked = false;
              gender[2].checked = false;
              userGender = "";
            }
          }
        }
      }
    }
  }

  let edit = document.querySelectorAll(".edit");
  let prt = document.querySelectorAll(".print");
  let del = document.querySelectorAll(".del");

  //      Delete Function

  del.forEach((e) => {
    e.addEventListener("click", () => {
      let parent = e.parentNode.parentNode;
      parent.remove();
      count2--;
      count1.textContent = count2;
    });
  });

  //        Print Function

  prt.forEach((e) => {
    e.addEventListener("click", () => {
      let parent = e.parentNode.parentNode;
      let data = {
        name: parent.querySelector("#name").textContent,
        age: parent.querySelector("#age").textContent,
        roll: parent.querySelector("#roll").textContent,
        gender: parent.querySelector("#gender").textContent,
        phone: parent.querySelector("#phone").textContent,
        email: parent.querySelector("#email").textContent,
      };
      let newWindow = window.open("", "", "height=500, width=500");
      newWindow.document.write(`
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
      integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="icon" href="Img/logo.jpeg">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Student Form</title>
  </head>
  <body>
<div class="id_card">
                  <img src="Img/download.png" />
                  <div class="text">
                                  <div class="default">
                                    <p>Name</p>
                                    <p>Age</p>
                                    <p>Roll number</p>
                                    <p>Gender</p>
                                    <p>Phone Number</p>
                                    <p>Email</p>
                                  </div>
                                  <div class="style">
                                   <h2>:</h2>
                                   <h2>:</h2>
                                   <h2>:</h2>
                                   <h2>:</h2>
                                   <h2>:</h2>
                                   <h2>:</h2>
                                  </div>
                                  <div class="change">
                                    <p id="name">${data.name}</p>
                                    <p id="age">${data.age}</p>
                                    <p id="roll">${data.roll}</p>
                                    <p id="gender">${data.gender}</p>
                                    <p id="phone">${data.phone}</p>
                                    <p id="email">${data.email}</p>
                                  </div>
                                </div>
                              </div>
       <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
       <script src="script.js"></script>
         </body>
        </html>

        `);
      newWindow.document.close();
      newWindow.print();
    });
  });

  //    Edit  Function

  let editDisplay = document.querySelector(".editdisplay");
  let save_cards = document.querySelector(".save_cards");
  let Student_form = document.querySelector(".Student_form");
  edit.forEach((e) => {
    e.addEventListener("click", () => {
      editDisplay.style.animation = "moveRight 1s alternate";
      editDisplay.style.display = "block";
      Student_form.style.filter = "blur(5px)";
      save_cards.style.filter = "blur(5px)";

      let submit = document.getElementById("submit");

      submit.addEventListener("click", () => {
        let edit_username = document.getElementById("edit_username").value;
        let edit_age = document.getElementById("edit_age").value;
        let edit_email = document.getElementById("edit_email").value;
        let edit_phone = document.getElementById("edit_phone").value;
        let edit_gender = document.getElementsByName("edit_gender");
        let saveGender;
        for (const gender of edit_gender) {
          if (gender.checked) {
            saveGender = gender.value;
            break;
          }
        }
        
if (!/^[a-zA-Z]+$/.test(edit_username)) {
  Swal.fire({
    title: "Name should only contain letters",
    icon: "warning",
  });
  return;
} else {
  let parent = e.parentNode.parentNode;
  parent.querySelector("#name").textContent = edit_username;
  Swal.fire({
    title: "Id Card updated successfully",
    icon: "success",
  });
  document.getElementById("edit_username").innerHTML = "";
  editDisplay.style.animation = "moveLeft 1s alternate";
  setTimeout(() => {
    editDisplay.style.display = "none";
    Student_form.style.filter = "blur(0px)";
    save_cards.style.filter = "blur(0px)";
  }, 995);
  if (!/^\d+$/.test(edit_age) || edit_age < 18 || edit_age > 99) {
    Swal.fire({
      title: "Age should be a number between 18 and 99",
      icon: "warning",
    });
    return;
  } else {
    let parent = e.parentNode.parentNode;
    parent.querySelector("#age").textContent = edit_age;
    Swal.fire({
      title: "Id Card updated successfully",
      icon: "success",
    });
  document.getElementById("edit_age").innerHTML = ""

    editDisplay.style.animation = "moveLeft 1s alternate";
    setTimeout(() => {
      editDisplay.style.display = "none";
      Student_form.style.filter = "blur(0px)";
      save_cards.style.filter = "blur(0px)";
    }, 995);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(edit_email)) {
      Swal.fire({
        title: "Invalid email format",
        icon: "warning",
      });
      return;
    } else {
      let parent = e.parentNode.parentNode;
      parent.querySelector("#email").textContent = edit_email;
      Swal.fire({
        title: "Id Card updated successfully",
        icon: "success",
      });

      document.getElementById("edit_email").innerHTML = ""

      editDisplay.style.animation = "moveLeft 1s alternate";
      setTimeout(() => {
        editDisplay.style.display = "none";
        Student_form.style.filter = "blur(0px)";
        save_cards.style.filter = "blur(0px)";
      }, 995);
      if (!/^\d{11}$/.test(edit_phone)) {
        Swal.fire({
          title: "Phone number should be 11 digits",
          icon: "warning",
        });
        return;
      } else {
        let parent = e.parentNode.parentNode;
        parent.querySelector("#phone").textContent = edit_phone;
        
        Swal.fire({
          title: "Id Card updated successfully",
          icon: "success",
        });
        document.getElementById("edit_phone").innerHTML = ""

        editDisplay.style.animation = "moveLeft 1s alternate";
        setTimeout(() => {
          editDisplay.style.display = "none";
          Student_form.style.filter = "blur(0px)";
          save_cards.style.filter = "blur(0px)";
        }, 995);
        if (saveGender == "") {
          Swal.fire({
            title: "Please select gender",
            icon: "warning",
          });
          return;
        } else {
          let parent = e.parentNode.parentNode;
          parent.querySelector("#gender").textContent = saveGender;
          Swal.fire({
            title: "Id Card updated successfully",
            icon: "success",
          });
          saveGender = "";
          edit_gender[0].checked = false;
          edit_gender[1].checked = false;
          edit_gender[2].checked = false;

          editDisplay.style.animation = "moveLeft 1s alternate";
          setTimeout(() => {
            editDisplay.style.display = "none";
            Student_form.style.filter = "blur(0px)";
            save_cards.style.filter = "blur(0px)";
          }, 995);
        }
      }
    }
  }
}
      });
    });
  });

  let Cancel = document.getElementById("Cancel");
  Cancel.addEventListener("click", () => {
    editDisplay.style.animation = "moveLeft 1s alternate";
    setTimeout(() => {
      editDisplay.style.display = "none";
      Student_form.style.filter = "blur(0px)";
      save_cards.style.filter = "blur(0px)";
    }, 995);
  });
});
