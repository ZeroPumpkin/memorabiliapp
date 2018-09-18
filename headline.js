'use strict';

const request = require('request');

let artists = new Array(
	"Mick Hucknall",
  "Joss Stone",
  "Samantha Mumba",
  "Daniel Beddingfield",
  "Daniel Powter",
  "Eamon",
  "Newton Faulkner",
  "Vanessa Carlton",
  "Mick Fleetwood",
  "Leon Jackson",
  "AIVIS",
  "Gabrielle",
  "Eternal",
  "B*witched",
  "Lisa Stansfield",
  "Sonia",
  "Amy Studt",
  "Lolly",
  "Charlie from Busted",
  "Enya",
  "Bjork",
  "Lemar",
  "David Sneddon",
  "Javine",
  "Nadine Coyle",
  "Clan Pruch",
  "Lisa Scott-Lee",
  "Faye from Steps",
  "911",
  "5ive",
  "Joey Fatone",
  "Whigfield",
  "Gina G",
  "Natalie Imbruglia",
  "Osama Bin Laden",
  "Gail Platt",
  "Carly Rae Jepson",
  "Tony Blair",
  "Myra Hindley",
  "Grannie Annie",
  "Ant from Ant n Dec",
  "Dec from Ant n Dec",
  "Jacob Rees-Mogg",
  "Roxanne Pallett",
  "Ronan Keating",
  "Michael Barrymore",
  "Ariana Grande",
  "Coleen Nolan",
  "Delta Goodrem",
  "Aidan Smeaton",
  "Richard Branson",
  "Jeremy Kyle",
  "Hillary Clinton",
  "Michelle McManus",
  "Vicky Pollard",
  "Andy Murray",
  "Elsa from Frozen",
  "Heidi Klum",
  "Sir Paul McCartney",
  "the late Joan Rivers",
  "Darius Danesh"
);

let adjectives = new Array(
	"slimey",
  "magnificent",
  "old",
  "filthy",
  "smelly",
  "mouldy",
  "average",
  "stained",
  "crappy",
  "stinky",
  "leaky",
  "sticky",
  "brown",
  "pungent",
  "rigid",
  "used",
  "soiled",
  "lightly-soiled",
  "manky",
  "decomposing",
  "flaky",
  "dirty",
  "lovely",
  "floppy",
  "invisible",
  "seminal",
  "ironic",
  "illegal",
  "moist",
  "delicious",
  "terrible",
  "disappointing",
  "iconic",
  "damp",
  "shiny",
  "dusty",
  "terrific",
  "haunted",
  "dangerous",
  "shoddy",
  "broken",
  "farty",
  "awful",
  "Chinese",
  "poorly-made",
  "stupid",
  "silly",
  "yellowing",
  "scuffed",
  "scratched",
  "rusty",
  "mucky",
  "musical",
  "dry",
  "wet",
  "soggy",
  "grimey",
  "old-timey",
  "imaginary",
  "gross",
  "peachy",
  "cheeky",
  "festive",
  "toned",
  "sophisticated",
  "envy-inducing",
  "comfortable",
  "inspirational",
  "ignorant",
  "beloved",
  "creepy",
  "spooky",
  "busty",
  "unwanted",
  "slutty",
  "radioactive",
  "stolen",
  "risky",
  "dazzling",
  "painful",
  "cheating",
  "chic",
  "lazy",
  "rude",
  "disrespectful",
  "lop-sided",
  "bendy",
  "bent",
  "fruity",
  "flamboyant",
  "fabulous",
  "hideous",
  "shocking",
  "awful",
  "surprising",
  "glam",
  "new",
  "stupid",
  "clever",
  "bereft",
  "shameful",
  "concerned",
  "brilliant",
  "wrecked",
  "tasteful",
  "useless",
  "massive"
);

let items = new Array(
	"ironing board",
  "charging cable",
  "skinflake",
  "shoelace",
  "table lamp",
  "cat's litter tray",
  "toothbrush",
  "ice lolly stick",
  "toenail clipping",
  "keytar",
  "banana",
  "hair",
  "cabbage",
  "cucumber",
  "insole",
  "sponge",
  "moustache comb",
  "door handle",
  "tea tray",
  "milk jug",
  "utility bill",
  "sock",
  "push-pop",
  "jean shorts",
  "tupper",
  "kinder egg",
  "farton",
  "backpack",
  "radiator",
  "sausage",
  "new album",
  "Autobahn Project",
  "vest",
  "waterproof jacket",
  "jam",
  "giraffe",
  "squash racket",
  "tea bag",
  "milk",
  "tea spoon",
  "plate",
  "table",
  "banana muffin",
  "plant pot",
  "wine",
  "toast",
  "bread",
  "cheese",
  "toastie",
  "arse",
  "orange",
  "apple",
  "plum",
  "bum",
  "biscuit crumb",
  "bag",
  "coaster",
  "tissue",
  "toilet brush",
  "pie",
  "yoghurt",
  "tank top",
  "pants",
  "pen",
  "candlestick",
  "chocolate bar",
  "burglary victim",
  "shenanigans",
  "sock and sandal combination",
  "alarm clock",
  "biscuit tin",
  "streetlamp",
  "jersey",
  "hay bail",
  "quantum physics lecture",
  "cerebral palsy leaflet",
  "nicotine gum",
  "postage stamp",
  "plum",
  "Boeing 737",
  "inhaler",
  "antique book collection",
  "iPod shuffle",
  "harpsichord",
  "root canal treatment",
  "Desperate Housewives boxset",
  "personal letter from Princess Diana",
  "dragon",
  "delicious home made soup",
  "hooped earring",
  "overdue bill",
  "dinner for 2",
  "STD test result",
  "bridesmaid",
  "remote control",
  "hat",
  "combustion engine",
  "lifeboat",
  "bottle of Listerine"
);

let verbs = new Array(
	"eats",
  "sleeps with",
  "punches",
  "performs with",
  "slaps",
  "roundhouse kicks",
  "runs over",
  "poisons",
  "tramples on",
  "insults",
  "has beef with",
  "breaks up with",
  "marries",
  "pees on",
  "falls out with",
  "vomits on",
  "paints",
  "licks",
  "terrifies",
  "spoons",
  "plays chess with",
  "gyrates to"
);

let verbs_present = new Array(
  "eating",
  "hitting",
  "slapping",
  "fighting with",
  "licking",
  "punishing",
  "talking to",
  "whispering to",
  "shouting at",
  "arguing with",
  "tickling",
  "chatting to",
  "lubricating",
  "touching",
  "gyrating around",
  "grinding on"
);

let infos = new Array(
	"{0} {1} {2} inspired a generation",
  "{0} {1} {2} used to murder cat",
  "'{0} {1} {2} changed my life', says {3}.",
  "I lost my virginity to {0} {1} {2}",
  "{0} comeback thwarted by {1} {2}",
  "You'll never believe what {0} {1} {2} looks like now!",
  "PPI? Amazing trick I didn't know about until I discovered {0} {1} {2}!",
  "New study finds that {0} {2} causes CANCER, especially when {1}!",
  "'Look at my {1} {2},' tweets {3}.",
  "{3} to star in panto as {1} {2}",
  "'I'd sell my {1} {2} to be famous again', says {3}.",
  "{3} vs. {3} Twitter spat prompts mass {2}-burning",
  "{3}, {3} and {3} to form supergroup after loss of {0} {1} {2}",
  "The Autobahn Project combines {4}, {4} and {1} {4} to DELIVER to our customers from Edinburgh", 
  "'I wouldn't piss on {3} if he or she were on fire', says {3}.",
  "{5} reasons we're excited about {0} {1} {2}",
  "{3} and {0} whirlwind romance over due to {1} {2}",
  "'Had the pleasure of meeting {3} at a charity do once. He was surprisingly down to earth, and VERY funny.' tweets Limmy'",
  "Does your workplace have a license to play {3} and {0} {1} music?",
  "{1}! {3} {6} {3} with {1} {2} on final day of Glastonbury.",
  "'It's raining {4}?!' - {5} songs {3} has been mishearing the lyrics of.",
  "{1}! {3} {6} {3} and starts trauma-informed dance and yoga classes.",
  "{1}! {3} {6} {3} and we are #crying!",
  "Trouble in paradise? {0} {1} {2} up for sale on eBay, starting bid is {5} pence.",
  "Thrice the shame! {3} {6}, {6} and {6} {3}, all in the same weekend!",
  "{3} bursts into tears at mention of {1} {2} at {2} convention.",
  "'{4}? I've heard of them, but would never have them in my own house,' admits {3}.",
  "Caught red handed! {3} {6} {2}!",
  "{5}-time Brit Award winner {3} {6} {3}, blames {1} {2}",
  "{3} opens up about attraction to {1} {4}.",
  "The new fitness trend? {3} {6} {1} {2} {5} times a week.",
  "{3} is looking {1}, just {5} days after going cold-turkey on {1} {2} addiction.",
  "Revealed: how {3} had to borrow {0} {1} {4} after spending last of savings on {4}.",
  "{0} new curves! Uses a very clever styling trick involving {1} {4} to appear more {1}!",
  "Tricky knowledge quiz about {4} has left {3} stumped! Are YOU {1} enough to score full marks?",
  "{3} narrowly avoids awkward run-in with {3} while carrying {1} {2}.",
  "25th James Bond film to be directed by {3}, after {3} turns the role down: too busy with {2} business.",
  "Face-off at the EU: Russian ambassador accuses UK of allowing {3} to smuggle {5} {1} {4} into Russia.",
  "EXCLUSIVE: {1} CCTV footage shows how {3} {6} {1} {2} while {3} cheers.",
  "EXCLUSIVE: Owner of hotel where {3} stayed for {5} months reveals how hotel room was left full of {1} {4}.",
  "{3} accuses {3} of plotting incompetent Novichok attacks with a box of poisoned {4}.",
  "Could {3} be the next Doctor Who? 'NO!' says BBC. 'Too {1}!'",
  "'{1}' {3} needs professional help, says friend {3}.",
  "{3} walked in on {3} '{7} {2}'.",
  "EXCLUSIVE: {3} spotted {7} {3} while on holiday.",
  "Forget {0} {1} {4}! John Lewis unveils line of {4} designed by {3}.",
  "'AND they begin step 2 with '{4}'. Like, do {1} {4} not mean anything anymore? What's that all about?' says Stu T Thomson.",
  "Concerning! {3} hasn't seen flatmate {3} in {5} months, fears {1} {2} dependency is responsible.",
  "'{7} my {2}!' {3} describes #PerfectNightIn.",
  "New job! {3} quits showbiz to spend more time {7} {4}.",
  "'I get my {4} from Waitrose, but my {1} {4} from Asda,' says {3}.",
  "'{3} only said one thing to me in {5} weeks: '{1} {4}'!' {3} opens up about their {1} friendship.",
  "Tesco announces trade-in offer for customers to exchange old {3} CD's in for one {1} {2}.",
  "{1}! Dematologist reveals {3} uses {2} to get rid of disgusting skin disorder.",
  "Sweatshop workers paid in {4} by secret company owned by {3} and {3} joint venture.",
  "Embarrassed {3} loses expensive {2} after a heavy weekend.",
  "Does your company meet the new EU {2} regulations? Take this quiz to find out!",
  "Junkie {3} hits rock bottom! Caught snorting ashes of {0} burnt {2}.",
  "Immigrants want YOUR {4} and they'll do ANYTHING to get their {1} hands on them!",
  "{3} dies in {1} accident involving {2}.",
  "'Where are all my {4}, {3}?' demands {3} after business deal goes horribly wrong.",
  "{3} lost at sea for {5} days after {2} interferes with navigation systems.",
  "Calculate how many {4} your bank owes you with this {1}, {3}-endorsed app!",
  "Brilliant doctor says {3} is MEDICAL MARVEL after removing {2} from previously undiscovered orifice!",
  "EXCLUSIVE! {3} reveals {1} affair with {3}!",
  "Local boy, {5}, hailed as the next {3}.",
  "Furious {3} and {3} at loggerheads over Westminster’s {1} new policy on {0} {1} {2}.",
  "Stu Thomson start supper club, serves {4}, {4} and {1} {4}."
);

//////////////////////////////////////////////////////////////////////////////////////////
exports.getPlaceholderDocu = function() {
  return [
    '{0} = Random Name (possessive form)',
    '{1} = Random Adjective',
    '{2} = Random Item',
    '{3} = Random Name',
    '{4} = Random Item (plural form)',
    '{5} = Random Number between 5 and 10',
    '{6} = Random Verb',
    '{7} = Random Verb (present participle)'
  ];
}

exports.getExampleTemplate = function() {
  return random(infos);
}

function random(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function possessive(word) {
  if (word[word.length - 1] != "s") {
    return word + "'s";
  }
  else {
    return word + "'";
  }
}

function getImageForPhrase(phrase) {
	console.log("getting image for phrase " + phrase);

	// $.get("https://www.googleapis.com/customsearch/v1?cx=010825317578803827572%3Aewmrtaxo2-0&searchType=image&key=AIzaSyD1VaweEt2G9tHh6lwnvzxKZGpW3QavbWo&q=" + encodeURIComponent(phrase),
 //      function(data, status) {
 //      	if (status == "success") {
 //          let image_res = random(data.items);
 //          return image_res.link;
 //          console.log("got image result", image_res);
 //        }
 //        else {
 //        	console.log(data, status);
 //          return null;
 //        }
 //      }
 //  );

  request("https://www.googleapis.com/customsearch/v1?cx=010825317578803827572%3Aewmrtaxo2-0&searchType=image&key=AIzaSyD1VaweEt2G9tHh6lwnvzxKZGpW3QavbWo&q=" + encodeURIComponent(phrase),
      {json: true}, (err, res, body) => { 
        if (err) { return console.log(err); }

        let image_res = random(body.items);
        return image_res.link;
      }
  );
}

function FormatArgs(array, is_possessive = false, is_plural = false, use_for_image = true) {
	this.array = array;
  this.is_possessive = is_possessive;
  this.is_plural = is_plural;
  this.use_for_image = use_for_image;
}

var pluralize = require('pluralize');

function getHeadlineObject(phrase) {
  let a = phrase;
  
  let image_phrases = [];
  
  for (let k in arguments) {
    if (k == 0) continue; // skip the first argument

  	let token = "{" + (k - 1) + "}";

  	while (a.indexOf(token) != -1) {
      let arg = arguments[k];

    	let replacement = random(arg.array);
      
      console.log(arg);
      
      if (arg.is_possessive) {
      	replacement = possessive(replacement);
      }
      
      if (arg.is_plural) {
      	replacement = pluralize(replacement);
      }
 
      if (arg.use_for_image) {
				image_phrases.push(replacement);
      }
      
    	a = a.replace(token, replacement);
    }
  }
  
  let image_phrase = random(image_phrases);
  console.log(image_phrase, image_phrases);
  
  let image_url = null; //getImageForPhrase(image_phrase);
  
  let init_lower_char = 0;
  if (a.charAt(0) == "'") {
  	init_lower_char = 1;
  }
  a = a.charAt(init_lower_char).toUpperCase() + a.slice(init_lower_char + 1);
  if (init_lower_char == 1) {
  	a = "'" + a;
  }
  
  return {
    headline: a,
    image_url: image_url
  };
}

exports.getHeadline = function(template) {
  let headline = template != null ? template : random(infos);

  let headline_obj = getHeadlineObject(headline, 
    new FormatArgs(artists, true),
    new FormatArgs(adjectives, undefined, undefined, false),
    new FormatArgs(items),
    new FormatArgs(artists),
    new FormatArgs(items, false, true),
    new FormatArgs(new Array(5, 6, 7, 8, 9, 10), undefined, undefined, false),
    new FormatArgs(verbs, undefined, undefined, false),
    new FormatArgs(verbs_present, undefined, undefined, false)
  );

  console.log(headline_obj);

  return headline_obj;
}

//$('#headline').text(headline);
//$('#sub').text(sub);