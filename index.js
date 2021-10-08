// open world rpg about shitting

const rl = require("readline-sync");

let messages = require("./messages.json")

let day = 12;

function getmessage(label) {
  msg = messages[label][day]
  if (msg === undefined) {
    return messages[label].default
  }
  return msg
}

// stolen without permission from https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
const sleep = async ms => new Promise(resolve => setTimeout(resolve, ms));

while (true) {
  console.log(`Day ${day}\n`)
  if (day > 11) {
    for (let step = 0; step < 10000; step++) {
      console.clear()
      console.log(`Day ${String.fromCharCode([Math.floor(Math.random() * 26) + 0x61]) + String.fromCharCode([Math.floor(Math.random() * 26) + 0x61])}\n`)
    }
    console.clear()
    d = String.fromCharCode([Math.floor(Math.random() * 26) + 0x61]) + String.fromCharCode([Math.floor(Math.random() * 26) + 0x61])
    for (let step = 0; step < 300; step++) {
      console.log(`Day ${d}`);
    }
    console.clear();
    await sleep(0.5);
    console.log("Day -1000\n");
    await sleep(0.5);
    console.log("???: Daddy, daddy, I wanna play with James!");
    await sleep(2);
    console.clear();
    console.log("Day -1000\n\nMari: Daddy, daddy I wanna play with James!\nYou: Oh sweetheart, we aren't gonna play with him. I just got ready to go home!");
    await sleep(1.5);
    console.log("Mari: Well can we play with him tomorrow?");
    await sleep(2);
    console.log("You: Hmm, sur-");
    await sleep(0.5);
    console.log("Mari: THANK YOU DADDY!");
    await sleep(2);
    console.log("You: No, thank YOU for being in my life you cutie! <3 Now lets go home.");
    await sleep(3);
    console.log(`\n\n\n\nDay ${day}\n`);
    console.log("Home...");
    await sleep(2);
    console.log("Why...");
    await sleep(2);
    console.log("I'll never be able to see my Mari again.");
    await sleep(2);
    console.log("And I'll never be home.");
    await sleep(3);
    console.log("Home.");
    await sleep(5);
    console.log("Ending 0 - Home.");
    process.exit(1);

  }

  let shit = 0;
  // Lets make it so you have to type random key to shit each time check out story i put way too much effort lol
  while (shit < 100) {
    if (Math.floor(Math.random() * 100000) === 0) {
      console.log('Someone freed everyone from this loop of shitting. Noone knows who or how.\n\nEnding 3b - Someone else did it before you.') // Basically ending 3a is the perspective of the guy who freed them and ending 3b is the perspective of a average person in that world.
      process.exit()
    }
    let char = String.fromCharCode([Math.floor(Math.random() * 26) + 0x61]);
    if ((shit === -420) && (day < 3)) { // haha funny number
      let s = rl.keyIn(`Press space to dispense shit `);
      if (s === ' ') {
        console.log("You dispensed your negative shit into the world. It overpowered The Red Eye and freed everyone from this nightmare.\n\nEnding 3a - You freed everyone")
      } else {
        console.log('011101 1011010101 100101111101010100011010101 10111011001 11011111110011 1011010101 11011111101010101011 110111111100110101 1001010101100010100101 111100110110010001 110101011101101111111 10110101011111101010100010001 1001100010101011 1100010010100101001 111010101011000110011110111 10010101101001010010001 10001000010010010111 1000001 1111101110001000001111001 1000001111101111001000001111001111001000001110001110001000001110001111001000001110001110001000001111101110001000001111101110001000001 1111101 1110000101101 1110110110\n\nEnding 2 - █████████████')
        process.exit(1)
      }
      process.exit();
    } else if (shit <= 430) {
      console.log('You fell down. 01000100 01000101 01000001 01010100 01001000 00100000 01000100 01000101 01000001 01010100 01001000 00100000 01000100 01000101 01000001 01010100 01001000 00100000 01000100 01000101 01000001 01010100 01001000 00100000 01000100 01000101 01000001 01010100 01001000 00100000 01000100 01000101 01000001 01010100 01001000 00100000 01000100 01000101 01000001 01010100 01001000 00100000 01000100 01000101 01000001 01010100 01001000\n\nEnding 4 - Fell.');
      process.exit(1);
    }
    let s = rl.keyIn(getmessage("inputmsg").replace('${char}', char));
    if (s === char) {
      ++shit;
      console.log(getmessage('shitgain').replace("${shit}", shit.toString()));
    }
    else {
      shit -= 2;
      console.log(getmessage('shitloss').replace("${shit}", shit.toString()));
    }
  }
  console.log("\nYOU GET TO LIVE ANOTHER DAY\n\nEnding? 1 - Just another day...\n");
  day += 1;
  rl.keyIn('press any key to continue');
  console.clear();
}