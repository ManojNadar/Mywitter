// window.onload = () => {
//   // ----
//   // let darkLight = document.getElementById("darkLight");
//   // let screen = document.getElementById("screen");
//   // let nav_names = document.querySelectorAll("nav_names");
//   // let nav_icon = document.querySelectorAll("nac_icon");
//   // let left_container = document.getElementById("left_container");
//   // let left = document.getElementById("left");
//   // darkLight.addEventListener("click", function () {
//   //   if (darkLight.innerHTML === "Enable Light Mode") {
//   //     darkLight.innerHTML = "Enable Dark Mode";
//   //     screen.style.backgroundColor = "white";
//   //     screen.style.color = "black";
//   //     left.style.backgroundColor = "white";
//   //     left_container.style.backgroundColor = "white";
//   //     nav_icon.style.color = "white";
//   //   } else {
//   //     darkLight.innerHTML = "Enable Light Mode";
//   //     screen.style.backgroundColor = "black";
//   //     left_container.style.backgroundColor = "black";
//   //     screen.style.color = "white";
//   //     nav_names.style.color = "white";
//   //     nav_icon.style.color = "black";
//   //   }
//   // });
// };

// window.addEventListener("load", function () {
//   verified.dispatchEvent(new Event("click"));
// });

window.onload = () => {
  let user_Profile = document.getElementById("user_Profile");
  let dropdown_profile = document.getElementById("dropdown_profile");

  user_Profile.addEventListener("click", function () {
    if (dropdown_profile.style.display == "none") {
      dropdown_profile.style.display = "block";
    } else {
      dropdown_profile.style.display = "none";
    }
  });

  let modal_container = document.getElementById("modal_container");

  let close = document.getElementById("close");

  let verified = document.getElementById("verified");

  verified.addEventListener("click", function () {
    console.log("clicked");
    // alert("clicked");
    modal_container.style.display = "block";
  });

  close.addEventListener("click", function () {
    modal_container.style.display = "none";
  });

  let more_dropDown = document.getElementById("more_dropDown");
  let more = document.getElementById("single_nav_more");
  let back_arrow = document.getElementById("back_arrow");

  more.addEventListener("click", function () {
    if (more_dropDown.style.display === "none") {
      more_dropDown.style.display = "block";
    } else {
      more_dropDown.style.display = "none";
    }
  });

  let draft_section = document.getElementById("draft_section");
  let draft_dropDown_container = document.getElementById(
    "draft_dropDown_container"
  );

  draft_section.addEventListener("click", function () {
    draft_dropDown_container.style.display = "block";
    more_dropDown.style.display = "none";
  });

  back_arrow.addEventListener("click", function () {
    draft_dropDown_container.style.display = "none";
  });

  let prof_tools = document.getElementById("prof_tools");
  let professional_tools = document.getElementById("professional_tools");
  let proffesional_dropDown = document.getElementById("proffesional_dropDown");

  let twitter_for_professionals = document.getElementById(
    "twitter_for_professionals"
  );

  let close_proffesional_modal = document.getElementById(
    "close_proffesional_modal"
  );

  prof_tools.addEventListener("click", function () {
    if (professional_tools.style.display === "none") {
      professional_tools.style.display = "block";
    } else {
      professional_tools.style.display = "none";
    }
  });

  proffesional_dropDown.addEventListener("click", function () {
    twitter_for_professionals.style.display = "block";
    professional_tools.style.display = "none";
    more_dropDown.style.display = "none";
  });

  close_proffesional_modal.addEventListener("click", function () {
    twitter_for_professionals.style.display = "none";
  });
};
