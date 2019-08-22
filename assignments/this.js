/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. if you don't have any context, like an object, the value of “this” will be the window/console Object
* 2. whatevery you have preceding the dot, the object before that dot is this
* 3. when you use a constructor function this refers to the specific instance of the object that is created and returned by the constructor function.
* 4. when you use js call or apply method is used, this is explicitly defined
*
* write out a code example of each explanation above
*/
/*
// Principle 1
function whoIsIt(name) {
    console.log(this);
    return name;
  }
  whoIsIt("It's Me");
// code example for Window Binding

// Principle 2
const friend = {
    personality: "kind",
    bestFriend: function() {
      console.log(`Sheri is so ${this.personality}`);
      console.log(this);
    }
  };
  friend.bestFriend();
// code example for Implicit Binding

// Principle 3
function partyTime(fun) {
    this.music = "music",
    this.dance = "dance",
    this.party = function() {
      console.log("This" + " " + this.music + " " + "is great to" + " " + this.dance + " " + "to!");
      console.log(this);
    };
  }
  
  const Toni = new partyTime();
 
  Toni.party();
// code example for New Binding

// Principle 4
Toni.party.call(Toni); 
// code example for Explicit Binding*/