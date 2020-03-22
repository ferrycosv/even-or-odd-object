const stringSorter = {
  state: {
    active: 'evens',
    evens: ['2', '4'],
    odds: ['1', '3'],
    nany: ['x', 'y'],
  },
  setActive: function (newActiveEvent) {
    this.state.active = newActiveEvent.target.value;
  },
  addString: function (newString) {
    if(isNaN(newString)){
      this.state.nany.push(newString);
    }else {
      if(Number(newString) % 2 === 0){
        this.state.evens.push(Number(newString));
      }else{
        this.state.odds.push(Number(newString))
      }
    }
    this.renderActiveList();
  },
  renderActiveList: function () {
    const display = document.getElementById("selected");
    if(this.state.active === "evens"){
      display.innerHTML = this.state.evens.map(x=> x + "<br>").join("");
    } else if( this.state.active === "odds"){
      display.innerHTML = this.state.odds.map(x=> x + "<br>").join("");
    }else if( this.state.active === "nany"){
      display.innerHTML = this.state.nany.map(x=> x + "<br>").join("");
    }
  },

  reset : function(){
    this.state.active =  'evens';
    this.state.evens = [];
    this.state.odds = [];
    this.state.nany = [];
    this.renderActiveList();
   
  }
}
