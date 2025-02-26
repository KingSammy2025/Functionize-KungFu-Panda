// Kung Fu Panda Character Look Up

// Event Listener
document.getElementById("search").addEventListener("click", searchClicked);

// Event Function
function searchClicked() {
  // Get Input Value (what character to look for?)
  let name = document.getElementById("input-name").value;
  name = name.toLowerCase();

  // Test Input Variable and update the page
  if (name === "po" || name === "dragon warrior") {
    // Update page to Po
    characters("Po", "Buddy, I am the Dragon Warrior");
  } else if (name === "tigress" || name === "master tigress") {
    // Update page to Tigress
    characters("Tigress", "That was pretty hardcore!");
  } else if (name === "mantis" || name === "master mantis") {
    // Update page to Mantis
    characters("Mantis", "Fear the bug!");
  } else if (name === "monkey" || name === "master monkey") {
    // Update page to Monkey
    characters("Monkey", "We should hang out.");
  } else if (name === "crane" || name === "master crane") {
    // Update page to Crane
    characters(
      "Crane",
      "You can chain my body, but you will never chain my warrior spirit!"
    );
  } else if (name === "viper" || name === "master viper") {
    // Update page to Viper
    characters("Viper", "I don't need to bite to fight!");
  } else if (name === "shifu" || name === "master shifu") {
    // Update page to Master Shifu
    characters("Shifu", "There is now a Level Zero.");
  } else if (name === "ping" || name === "mr. ping") {
    // Update page to Mr. Ping
    characters("Ping", "We are noodle folk, broth runs through our veins!");
  } else {
    // Update page to Question Mark
    characters("question-mark", "Character Not Found");
  }
}

// Helper functions
function characters(name, quote) {
  document.getElementById("character-name").innerHTML = name;
  document.getElementById("main-img").src = `images/${name}.png`;
  document.getElementById("quote").innerHTML = `${quote}`;
}

