// Kung Fu Panda Character Look Up

// Event Listener
document.getElementById("search").addEventListener("click", searchClicked);

// Event Function
function searchClicked() {
  // Get Input Value (what character to look for?)
  let name = document.getElementById("input-name").value;
  name = name.toLowerCase();

  // Test Input Variable and update the page
  if (name === "Po" || name === "dragon warrior") {
    // Update page to Po
    characters("Po", "images", "Buddy, I am the Dragon Warrior");

    ("Buddy, I am the Dragon Warrior.");
  } else if (name === "tigress" || name === "master tigress") {
    // Update page to Tigress
    characters(
      "Tigress",
      `${images}-images/tigress.png`,
      "That was pretty hardcore!"
    );
  } else if (name === "mantis" || name === "master mantis") {
    // Update page to Mantis
    document.getElementById("character-name").innerHTML = "Master Mantis";
    document.getElementById("main-img").src = "images/mantis.png";
    document.getElementById("quote").innerHTML = "Fear the bug!";
  } else if (name === "monkey" || name === "master monkey") {
    // Update page to Monkey
    document.getElementById("character-name").innerHTML = "Master Monkey";
    document.getElementById("main-img").src = "images/monkey.png";
    document.getElementById("quote").innerHTML = "We should hang out.";
  } else if (name === "crane" || name === "master crane") {
    // Update page to Crane
    document.getElementById("character-name").innerHTML = "Master Crane";
    document.getElementById("main-img").src = "images/crane.png";
    document.getElementById("quote").innerHTML =
      "You can chain my body, but you will never chain my warrior spirit!";
  } else if (name === "viper" || name === "master viper") {
    // Update page to Viper
    document.getElementById("character-name").innerHTML = "Master Viper";
    document.getElementById("main-img").src = "images/viper.png";
    document.getElementById("quote").innerHTML =
      "I don't need to bite to fight!";
  } else if (name === "shifu" || name === "master shifu") {
    // Update page to Master Shifu
    document.getElementById("character-name").innerHTML = "Master Shifu";
    document.getElementById("main-img").src = "images/shifu.png";
    document.getElementById("quote").innerHTML = "There is now a Level Zero.";
  } else if (name === "ping" || name === "mr. ping") {
    // Update page to Mr. Ping
    document.getElementById("character-name").innerHTML = "Mr. Ping";
    document.getElementById("main-img").src = "images/mr-ping.png";
    document.getElementById("quote").innerHTML =
      "We are noodle folk, broth runs through our veins!";
  } else {
    // Update page to Question Mark
    document.getElementById("character-name").innerHTML = "?????";
    document.getElementById("main-img").src = "images/question-mark.png";
    document.getElementById("quote").innerHTML = "Character Not Found";
  }
}

// Helper functions
function characters(name, images, quote) {
  document.getElementById("character-name").innerHTML = name;
  document.getElementById("main-img").src = images;
  document.getElementById("quote").innerHTML = `${quote}`;
}
