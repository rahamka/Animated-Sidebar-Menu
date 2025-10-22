let discover = document.getElementById("discover");
let projects = document.getElementById("projects");
let message = document.getElementById("message");
let setting = document.getElementById("setting");
let logout = document.getElementById("logout");

const anchors = [discover, projects, message, setting, logout];

// store default icons and full names
const data = {
  discover: ["🔎", "Discover"],
  projects: ["🥇", "Projects"],
  message: ["💬", "Message"],
  setting: ["⚙", "Setting"],
  logout: ["↪", "LogOut"],
};

// hover effect
anchors.forEach((el) => {
  el.addEventListener("mouseover", () => {
    const [icon, name] = data[el.id];
    el.innerText = `${icon} ${name}`;
  });

  el.addEventListener("mouseleave", () => {
    // Only collapse back if it's not the active (clicked) one
    if (!el.classList.contains("clickStyle")) {
      el.innerText = data[el.id][0];
    }
  });

  // click effect
  el.addEventListener("click", () => {
    anchors.forEach((a) => {
      a.classList.remove("clickStyle");
      a.innerText = data[a.id][0];
    });
    el.classList.add("clickStyle");
    el.innerText = `${data[el.id][0]} ${data[el.id][1]}`;
  });
});
