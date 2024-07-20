let btn=document.querySelector('.btn');
let element=document.getElementById('joke');
const joke = [
    "Why don’t scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "Why can’t you give Elsa a balloon? Because she will let it go!",
    "How does a penguin build its house? Igloos it together.",
    "Why don’t some couples go to the gym? Because some relationships don’t work out.",
    "Why did the math book look sad? Because it had too many problems.",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What do you get when you cross a snowman and a vampire? Frostbite.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "Why are ghosts bad at lying? Because they are too transparent.",
    "What did one wall say to the other wall? I’ll meet you at the corner.",
    "Why was the big cat disqualified from the race? Because it was a cheetah.",
    "Why don’t oysters share their pearls? Because they are shellfish.",
    "What’s orange and sounds like a parrot? A carrot.",
    "Why did the coffee file a police report? It got mugged.",
    "How does a scientist freshen their breath? With experi-mints.",
    "What did the janitor say when he jumped out of the closet? Supplies!",
    "Why are frogs so happy? Because they eat whatever bugs them.",
    "What’s brown and sticky? A stick.",
    "Why did the chicken join a band? Because it had the drumsticks.",
    "What do you call a fish with no eyes? Fsh.",
    "Why don’t elephants use computers? Because they are afraid of the mouse.",
    "Why did the golfer bring extra socks? In case he gets a hole in one.",
    "What did the buffalo say to his son when he dropped him off at school? Bison.",
    "Why are math books always unhappy? Because they have too many problems.",
    "What do you call a factory that sells good products? A satisfactory.",
    "Why don’t some couples go to the gym? Because some relationships don’t work out.",
    "What kind of tree fits in your hand? A palm tree.",
    "What do you call cheese that isn't yours? Nacho cheese.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "Why did the computer go to the doctor? Because it had a virus.",
    "What do you call a snowman with a six-pack? An abdominal snowman.",
    "What do you call a dog magician? A labracadabrador.",
    "Why don’t you ever see elephants hiding in trees? Because they’re so good at it.",
    "What do you call a cow with no legs? Ground beef.",
    "What do you call a can opener that doesn’t work? A can’t opener.",
    "Why don’t you ever see hippopotamuses hiding in trees? Because they’re so good at it.",
    "Why do cows wear bells? Because their horns don’t work.",
    "What do you call a bear with no teeth? A gummy bear.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "What’s a skeleton’s least favorite room in the house? The living room.",
    "Why did the tomato turn red? Because it saw the salad dressing.",
    "What do you call an alligator in a vest? An investigator.",
    "Why did the bicycle fall over? Because it was two-tired.",
    "What do you call fake spaghetti? An impasta.",
    "Why don’t scientists trust atoms? Because they make up everything.",
    "Why did the gym close down? It just didn’t work out.",
    "What did the buffalo say when his son left for college? Bison.",
    "Why don’t some couples go to the gym? Because some relationships don’t work out.",
    "What do you call a belt with a watch on it? A waist of time.",
    "What do you call a fake noodle? An impasta.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "What did one ocean say to the other ocean? Nothing, they just waved.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "What did the grape do when he got stepped on? Nothing but let out a little wine!",
    "Why don’t some couples go to the gym? Because some relationships don’t work out.",
    "What do you call a snowman with a six-pack? An abdominal snowman.",
    "Why did the chicken join a band? Because it had the drumsticks.",
    "What did the janitor say when he jumped out of the closet? Supplies!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "Why don’t scientists trust atoms? Because they make up everything.",
    "What’s orange and sounds like a parrot? A carrot.",
    "Why did the bicycle fall over? Because it was two-tired.",
    "What do you call fake spaghetti? An impasta.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "What do you call a snowman with a six-pack? An abdominal snowman.",
    "Why don’t some couples go to the gym? Because some relationships don’t work out.",
    "What did the grape do when he got stepped on? Nothing but let out a little wine.",
    "Why did thebicycle fall over? Because it was two-tired.",
    "What do you call fake spaghetti? An impasta.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "Why was the math book sad? It had too many problems.",
    "Why don’t some couples go to the gym? Because some relationships don’t work out.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "Why don’t some couples go to the gym? Because some relationships don’t work out.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "Why did the bicycle fall over? Because it was two-tired.",
    "Why don’t scientists trust atoms? Because they make up everything.",
    "Why did the chicken join a band? Because it had the drumsticks.",
    "Why don’t some couples go to the gym? Because some relationships don’t work out.",
    "Why don’t some couples go to the gym? Because some relationships don’t work out.",
    "Why don’t scientists trust atoms? Because they make up everything.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "Why don’t some couples go to the gym? Because some relationships don’t work out.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "Why don’t scientists trust atoms? Because they make up everything.",
    "Why did the bicycle fall over? Because it was two-tired.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "Why don’t scientists trust atoms? Because they make up everything.",
    "Why don’t some couples go to the gym? Because some relationships don’t work out.",
    "Why did the chicken join a band? Because it had the drumsticks."]

// let random=Math.floor(Math.random()*joke.length-1)
// let randomJoke=joke[random]
// document.querySelector('#joke').innerHTML="Loading....Joke";

//     let element=document.getElementById('joke');
//     element.innerHTML=""+randomJoke+"";
// });
function printJoke() {
    element.innerHTML = "Loading....Joke";
    setTimeout(() => {
        let randomJoke = joke[Math.floor(Math.random() * joke.length)];
        element.innerHTML = "😊😆" + randomJoke + "😂🤣";
    }, 2000); // wait for 1 second before printing the joke
}

printJoke();

setInterval(printJoke, 4 * 60 * 1000); // print a joke every 4 minutes

btn.addEventListener('click', printJoke);

setTimeout(printJoke, 5 * 60 * 1000);
