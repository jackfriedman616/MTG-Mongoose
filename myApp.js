require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const root = 'https://gatherer.wizards.com/Handlers/Image.ashx?';

const cardSchema = new mongoose.Schema({
  name: String,
  picture: {
    type: String,
    get: v => `${root}${v}`
  },
  manaCost: String,
  manaValue: Number,
  superType: [String],
  cardType: [String], //artifact, creature, instant, etc.
  type: [String], //Human, Arcane, Treasure, Aura, etc.
  rulesText: String,
  power: Number,
  toughness: Number,
  rarity: String,
  expansion: String,
  cardNum: Number,
  artist: String,
  backSide: {
    name: String,
    picture: {
      type: String,
      get: v => `${root}${v}`
    },
    manaCost: String,
    manaValue: Number,
    superType: [String],
    cardType: [String], //artifact, creature, instant, etc.
    type: [String], //Human, Arcane, Treasure, Aura, etc.
    rulesText: String,
    power: Number,
    toughness: Number,
    rarity: String,
    expansion: String,
    cardNum: Number,
    artist: String
  }
});

const Card = mongoose.model('Card', cardSchema);


const createAndSaveCard = (done) => {
  const abrade = new Card({name: 'Abrade', picture: 'multiverseid=636839&type=card', manaCost: '1R', manaValue: 2, cardType: ['Instant'], rulesText: 'Choose One--  *Abrade deals 3 damage to target creature.  *Destroy target artifact.', rarity: 'Common', expansion: 'LCI', cardNum: 131, artist: 'Bartek Fedyczak'});
  abrade.picture;  
  abrade.toObject({ getters: false }).picture; 

  abrade.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

var arrayOfCards = [
  {name: 'Abuelo, Ancestral Echo', picture: 'multiverseid=636939&type=card', manaCost: '1WU', manaValue: 3, superType: ['Legendary'], cardType: ['Creature'], type: ['Spirit'], rulesText: 'Flying, Ward 2  1WU: Exile another target creature or artifact you control. Return it under its owner's control at the beginning of the next end step.', power: 2, toughness: 2, rarity: 'Rare', expansion: 'LCI', cardNum: 219, artist: 'Victor Adame Minguez'},
  {name: 'Abuelo, Ancestral Echo', picture: 'type=card&multiverseid=636505', manaCost: '1WU', manaValue: 3, superType: ['Legendary'], cardType: ['Creature'], type: ['Spirit'], rulesText: 'Flying, Ward 2  1WU: Exile another target creature or artifact you control. Return it under its owner's control at the beginning of the next end step.', power: 2, toughness: 2, rarity: 'Rare', expansion: 'LCI', cardNum: 297, artist: 'Cabrol'},
  {name: 'Abuelo's Awakening', picture: 'type=card&multiverseid=636691', manaCost: 'X3W', manaValue: 4, cardType: ['Sorcery'], rulesText: 'Return target artifact or non-Aura enchantment card from your graveyard to the battlefield with X additional +1/+1 counters on it. It's a 1/1 Spirit creature with flying in addition to its other types.', rarity: 'Rare', expansion: 'LCI', cardNum: 001, artist: 'Eelis Kyttanen'},
  {name: 'Abuelo's Awakening', picture: 'type=card&multiverseid=639750', manaCost: 'X3W', manaValue: 4, cardType: ['Sorcery'], rulesText: 'Return target artifact or non-Aura enchantment card from your graveyard to the battlefield with X additional +1/+1 counters on it. It's a 1/1 Spirit creature with flying in addition to its other types.', rarity: 'Rare', expansion: 'LCI', cardNum: 353, artist: 'Eelis Kyttanen'},
  {name: 'Abyssal Gorestalker', picture: 'multiverseid=636790&type=card'}, manaCost: '4BB', manaValue: 6, cardType: ['Creature'], type: ['Horror'], rulesText: 'When Abyssal Gorestalker enters the battlefield, each player sacrifices two creatures.', power: 6, toughness: 6, rarity: 'Uncommon', expansion: 'LCI', cardNum: 087, artist: 'Maxime Minard'},
  {name: 'Aclazotz, Deepest Betrayal', picture: 'multiverseid=636791&type=card', manaCost: '3BB', manaValue: 5, superType: ['Legendary'], cardType: ['Creature'], type: ['Bat', 'God'], rulesText: 'Flying, lifelink  Whenever Aclazotz attacks, each opponent discards a card. For each opponent who can't, you draw a card.  Whenever an opponent discards a land card, create a 1/1 black Bat creature token with flying.  When Aclazotz dies, return it to the battlefield tapped and transformed under its owner's control.', rarity: 'Mythic Rare', expansion: 'LCI', cardNum: 088, artist: 'Steve Prescott', backSide: {name: 'Temple of the Dead', picture: 'multiverseid=636792&type=card', manaValue: 5, cardType: ['Land'], rulesText: '(Transforms from Aclazotz, Deepest Betrayal.)  Tap: Add B.  2B, Tap: Transform Temple of the Dead. Activate only if a player has one or fewer cards in hand and only as a sorcery.', rarity: 'Mythic Rare', cardNum: 088, artist: 'Steve Prescott'}},
  {name: 'Aclazotz, Deepest Betrayal', picture: 'multiverseid=639434&type=card', manaCost: '3BB', manaValue: 5, superType: ['Legendary'], cardType: ['Creature'], type: ['Bat', 'God'], rulesText: 'Flying, lifelink  Whenever Aclazotz attacks, each opponent discards a card. For each opponent who can't, you draw a card.  Whenever an opponent discards a land card, create a 1/1 black Bat creature token with flying.  When Aclazotz dies, return it to the battlefield tapped and transformed under its owner's control.', rarity: 'Mythic Rare', expansion: 'LCI', cardNum: 316, artist: 'Clint Lockwood', backSide: {name: 'Temple of the Dead', picture: 'multiverseid=639435&type=card', manaValue: 5, cardType: ['Land'], rulesText: '(Transforms from Aclazotz, Deepest Betrayal.)  Tap: Add B.  2B, Tap: Transform Temple of the Dead. Activate only if a player has one or fewer cards in hand and only as a sorcery.', rarity: 'Mythic Rare', cardNum: 316, artist: 'Viko Menezes'}},
  {name: 'Acolyte of Aclazotz', picture: 'multiverseid=636793&type=card', manaCost: '2B', manaValue: 3, cardType: ['Creature'], type: ['Vampire', 'Cleric'], rulesText: 'Tap, Sacrifice another creature or artifact: Each opponent loses 1 life and you gain 1 life.', power: 1, toughness: 4, rarity: 'Common', expansion: 'LCI', cardNum: 089, artist: 'Irina Nordsol'},
  {name: 'Acrobatic Leap', picture: 'multiverseid=636692&type=card'}, manaCost: 'W', manaValue: 1, cardType: ['Instant'], rulesText: 'Target creature gets +1/+3 and gains flying until end of turn. Untap it.', rarity: 'Common', expansion: 'LCI', cardNum: 002, artist: 'Fesbra'},
  {name: 'Adaptive Gemguard', picture: 'multiverseid=636693&type=card', manaCost: '3W', manaValue: 4, cardType: ['Artifact', 'Creature'], type: ['Gnome'], rulesText: 'Tap two untapped artifacts and/or creatures you control: Put a +1/+1 counter on Adaptive Gemguard. Activate only as a sorcery.', power: 3, toughness: 3, rarity: 'Common', expansion: 'LCI', cardNum: 003, artist: 'Anthony Devine'},
  {name: 'Akal Pakal, First Among Equals', picture: 'multiverseid=636499&type=card', manaCost: '2U', manaValue: 3, superType: ['Legendary'], cardType: ['Creature'], type: ['Human', 'Advisor'], rulesText: 'At the beginning of each player's end step, if an artifact entered the battlefield under your control this turn, look at the top two cards of your library. Put one of them into your hand and the other into your graveyard.', power: 1, toughness: 5, rarity: 'Rare', expansion: 'LCI', cardNum: 292, artist: 'Alex Negrea'},
  {name: 'Akal Pakal, First Among Equals', picture: 'type=card&multiverseid=636740', manaCost: '2U', manaValue: 3, superType: ['Legendary'], cardType: ['Creature'], type: ['Human', 'Advisor'], rulesText: 'At the beginning of each player's end step, if an artifact entered the battlefield under your control this turn, look at the top two cards of your library. Put one of them into your hand and the other into your graveyard.', power: 1, toughness: 5, rarity: 'Rare', expansion: 'LCI', cardNum: 44, artist: 'Ryan Pancoast'},
  {name: 'Akawalli, the Seething Tower', picture: 'multiverseid=636940&type=card', manaCost: '1BG', manaValue: 3, superType: ['Legendary'], cardType: ['Creature'], type: ['Fungus'], rulesText: 'Descend 4 — As long as there are four or more permanent cards in your graveyard, Akawalli, the Seething Tower gets +2/+2 and has trample.  Descend 8 — As long as there are eight or more permanent cards in your graveyard, Akawalli gets an additional +2/+2 and can't be blocked by more than one creature.', power: 3, toughness: 3, rarity: 'Uncommon', expansion: 'LCI', cardNum: 220, artist: 'Simon Dominic'},
  {name: 'Akawalli, the Seething Tower', picture: 'type=card&multiverseid=636506', manaCost: '1BG', manaValue: 3, superType: ['Legendary'], cardType: ['Creature'], type: ['Fungus'], rulesText: 'Descend 4 — As long as there are four or more permanent cards in your graveyard, Akawalli, the Seething Tower gets +2/+2 and has trample.  Descend 8 — As long as there are eight or more permanent cards in your graveyard, Akawalli gets an additional +2/+2 and can't be blocked by more than one creature.', power: 3, toughness: 3, rarity: 'Uncommon', expansion: 'LCI', cardNum: 298, artist: 'rishxxv'},
  {name: 'Amalia Benavides Aguirre', picture: 'multiverseid=636941&type=card', manaCost: 'WB', manaValue: 2, superType: ['Legendary'], cardType: ['Creature'], type: ['Vampire', 'Scout'], rulesText: 'Ward—Pay 3 life.  Whenever you gain life, Amalia Benavides Aguirre explores. Then destroy all other creatures if its power is exactly 20. (To have this creature explore, reveal the top card of your library. Put that card into your hand if it's a land. Otherwise, put a +1/+1 counter on this creature, then put the card back or put it into your graveyard.)', power: 2, toughness: 2, rarity: 'Rare', expansion: 'LCI', cardNum: 221, artist: 'Alix Branwyn'},
  {name: 'Amalia Benavides Aguirre', picture: 'type=card&multiverseid=636507', manaCost: 'WB', manaValue: 2, superType: ['Legendary'], cardType: ['Creature'], type: ['Vampire', 'Scout'], rulesText: 'Ward—Pay 3 life.  Whenever you gain life, Amalia Benavides Aguirre explores. Then destroy all other creatures if its power is exactly 20. (To have this creature explore, reveal the top card of your library. Put that card into your hand if it's a land. Otherwise, put a +1/+1 counter on this creature, then put the card back or put it into your graveyard.)', power: 2, toughness: 2, rarity: 'Rare', expansion: 'LCI', cardNum: 299, artist: 'Alex Negrea'},
  {name: "Ancestors' Aid", picture: 'multiverseid=636840&type=card', manaCost: '1R', manaValue: 2, cardType: ['Instant'], rulesText: 'Target creature gets +2/+0 and gains first strike until end of turn.  Create a Treasure token. (It's an artifact with "Tap, Sacrifice this artifact: Add one mana of any color.")', rarity: 'Common', expansion: 'LCI', cardNum: 132, artist: 'Alesssandra Pisano'},
  {name: 'Ancestral Reminiscence', picture: 'multiverseid=636741&type=card', manaCost: '3U', manaValue: 4, cardType: ['Sorcery'], rulesText: 'Draw three cards, then discard a card.', rarity: 'Common', expansion: 'LCI', cardNum: 45, artist: 'Artur Treffner'},
  {name: 'Anim Pakal', picture: 'multiverseid=636943&type=card', manaCost: '1WR', manaValue: 3, superType: ['Legendary'], cardType: ['Creature'], type: ['Human', 'Soldier'], rulesText: 'Whenever you attack with one or more non-Gnome creatures, put a +1/+1 counter on Anim Pakal, then create X 1/1 colorless Gnome artifact creature tokens that are tapped and attacking, where X is the number of +1/+1 counters on Anim Pakal.', power: 1, toughness: 2, rarity: 'Rare', expansion: 'LCI', cardNum: 223, artist: 'Chris Rahn'},
  {name: 'Anim Pakal', picture: 'type=card&multiverseid=636508', manaCost: '1WR', manaValue: 3, superType: ['Legendary'], cardType: ['Creature'], type: ['Human', 'Soldier'], rulesText: 'Whenever you attack with one or more non-Gnome creatures, put a +1/+1 counter on Anim Pakal, then create X 1/1 colorless Gnome artifact creature tokens that are tapped and attacking, where X is the number of +1/+1 counters on Anim Pakal.', power: 1, toughness: 2, rarity: 'Rare', expansion: 'LCI', cardNum: 300, artist: 'Anditya Dita'},
  {name: 'Another Chance', picture: 'multiverseid=636794&type=card', manaCost: '2B', manaValue: 3, cardType: ['Instant'], rulesText: 'You may mill two cards. Then return up to two creature cards from your graveyard to your hand. (To mill two cards, put the top two cards of your library into your graveyard.)', rarity: 'Common', expansion: 'LCI', cardNum: 90, artist: 'Irina Nordsol'},
  {name: 'Armored Kincaller', picture: 'multiverseid=636888&type=card', manaCost: '2G', manaValue: 3, cardType: ['Creature'], type: ['Dinosaur'], rulesText: 'When Armored Kincaller enters the battlefield, you may reveal a Dinosaur card from your hand. If you do or if you control another Dinosaur, you gain 3 life.', power: 3, toughness: 3, rarity: 'Common', expansion: LCI, cardNum: 174, artist: 'John Tedrick'},
  {name: 'Attentive Sunscribe', picture: 'multiverseid=636694&type=card', manaCost: '1W', manaValue: 2, cardType: ['Artifact', 'Creature'], type: ['Gnome'], rulesText: 'Whenever Attentive Sunscribe becomes tapped, scry 1. (Look at the top card of your library. You may put that card on the bottom.)', power: 2, toughness: 2, rarity: 'Common', expansion: 'LCI', cardNum: 4, artist: 'Devin Platts'},   
];

var createManyCards = function(arrayOfCards, done) {
  Card.create(arrayOfCards, function (err, cards) {
    if (err) return console.log(err);
    done(null, cards);
  });
}

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
