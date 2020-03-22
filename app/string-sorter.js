const stringSorter = {
  state: {
    active: "evens",
    evens: ["2", "4"],
    odds: ["1", "3"],
    nany: ["x", "y"]
  },
  setActive: function(newActive) {
    // set the new active array
  },
  addString: function(newString) {
    // add the new string to the correct array
  },
  renderActiveList: function() {
    const listContainer = document.getElementById("selected");
    listContainer.appendChild(document.createElement("ul"));
    listContainer.children[0].innerHTML = stringSorter.state[
      stringSorter.state.active
    ]
      .map(function(item) {
        return `<li>${item}</li>`;
      })
      .join("");
  }
};
