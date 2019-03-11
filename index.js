function dwarfRollCall(dwarves) {
  var s = ''
  for (var i = 0; i < dwarves.length; i++) {
     s+= (i + 1) +`. ${dwarves[i]} `
  }
  return s
}

function summonCaptainPlanet(planeteerCalls){
    
    for(var i = 0; i < planeteerCalls.length; i++) {
      planeteerCalls[i] = planeteerCalls[i].toUpperCase() + `!`
    }
    return planeteerCalls
}



function longPlaneteerCalls(words) {
 for(var i= 0; words.length; i++) {
   if (words[i].length <= 4) {
     return false
   } else return true
 } 
}

 

function findTheCheese (foods) {
 var cheese = ['cheddar', 'gouda', 'camembert', 'blue']
  for (var i = 0; i < foods.length; i++) {
    for (var b = 0; b < cheese.length; b++) { 
    if (foods[i] === cheese[b]) {
      return foods[i] 
    }
  }
  }  return `no cheese!`
}

function wordsWb(words) {
  var w = []
  for (var i = 0; i < words.length; i++) {
    if (words[i].startsWith('b') === true) {
      w.push(words[i])
    } 
  } 
  return w
}