const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

// const username= gameInfo.map(player => player.username +"!");


let usernames=[]
gameInfo.forEach(user => usernames.push(user.username + "!"))


let winners=[]
gameInfo.forEach(user=>{
    if (user.score>5){
        winners.push(user.username)
    }
})

// const winners = gameInfo.filter(player => player.score >5);
winners.map(player=> player.username);

console.log(username)
console.log(winners)



const totalScore = gameInfo.reduce((acc,player) => acc + player.score,0);
console.log(totalScore); 


