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
  const atraxasFall = new Card({ name: 'Atraxa's Fall', picture: 'multiverseid=607224&type=card', manaCost: '1G', manaValue: 2, cardType: ['Sorcery'], rulesText: 'Destroy target artifact, battle, enchantment, or creature with flying.', rarity: 'Common', expansion: 'MOM', cardNum: 176, artist: 'Xavier Ribeiro' });
  atraxasFall.picture;  
  atraxasFall.toObject({ getters: false }).picture; 

  atraxasFall.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

var arrayOfCards = [
  {name: 'Abandon the Post', picture: 'multiverseid=534903&type=card', manaCost: '1R', manaValue: 2, cardType: ['Sorcery'], rulesText: 'Up to two target creatures can't block this turn.  Flashback 3R(You may cast this card from your graveyard for its flashback cost. Then exile it.)', rarity: 'Common', expansion: 'MID', cardNum: 127, artist: 'Zoltan Boros'},
  {name: 'Abrade', picture: 'multiverseid=540992&type=card', manaCost: '1R', manaValue: 2, cardType: ['Instant'], rulesText: 'Choose One--  *Abrade deals 3 damage to target creature.  *Destroy target artifact.', rarity: 'Common', expansion: 'VOW', cardNum: 139, artist: 'Dominik Mayer'},
  {name: 'Abrade', picture: 'multiverseid=636839&type=card', manaCost: '1R', manaValue: 2, cardType: ['Instant'], rulesText: 'Choose One--  *Abrade deals 3 damage to target creature.  *Destroy target artifact.', rarity: 'Common', expansion: 'LCI', cardNum: 131, artist: 'Bartek Fedyczak'},
  {name: 'Abuelo, Ancestral Echo', picture: 'multiverseid=636939&type=card', manaCost: '1WU', manaValue: 3, superType: ['Legendary'], cardType: ['Creature'], type: ['Spirit'], rulesText: 'Flying, Ward 2  1WU: Exile another target creature or artifact you control. Return it under its owner's control at the beginning of the next end step.', power: 2, toughness: 2, rarity: 'Rare', expansion: 'LCI', cardNum: 219, artist: 'Victor Adame Minguez'},
  {name: 'Abuelo, Ancestral Echo', picture: 'type=card&multiverseid=636505', manaCost: '1WU', manaValue: 3, superType: ['Legendary'], cardType: ['Creature'], type: ['Spirit'], rulesText: 'Flying, Ward 2  1WU: Exile another target creature or artifact you control. Return it under its owner's control at the beginning of the next end step.', power: 2, toughness: 2, rarity: 'Rare', expansion: 'LCI', cardNum: 297, artist: 'Cabrol'},
  {name: 'Abuelo's Awakening', picture: 'type=card&multiverseid=636691', manaCost: 'X3W', manaValue: 4, cardType: ['Sorcery'], rulesText: 'Return target artifact or non-Aura enchantment card from your graveyard to the battlefield with X additional +1/+1 counters on it. It's a 1/1 Spirit creature with flying in addition to its other types.', rarity: 'Rare', expansion: 'LCI', cardNum: 001, artist: 'Eelis Kyttanen'},
  {name: 'Abuelo's Awakening', picture: 'type=card&multiverseid=639750', manaCost: 'X3W', manaValue: 4, cardType: ['Sorcery'], rulesText: 'Return target artifact or non-Aura enchantment card from your graveyard to the battlefield with X additional +1/+1 counters on it. It's a 1/1 Spirit creature with flying in addition to its other types.', rarity: 'Rare', expansion: 'LCI', cardNum: 353, artist: 'Eelis Kyttanen'},
  {name: 'Abyssal Gorestalker', picture: 'multiverseid=636790&type=card'}, manaCost: '4BB', manaValue: 6, cardType: ['Creature'], type: ['Horror'], rulesText: 'When Abyssal Gorestalker enters the battlefield, each player sacrifices two creatures.', power: 6, toughness: 6, rarity: 'Uncommon', expansion: 'LCI', cardNum: 087, artist: 'Maxime Minard'},
  {name: 'Academy Loremaster', picture: 'multiverseid=574520&type=card', manaCost: 'UU', manaValue: 2, cardType: ['Creature'], type: ['Human Wizard'], rulesText: 'At the beginning of each player's draw step, that player may draw an additional card. If they do, spells they cast this turn cost 2 more to cast.', power: 2, toughness: 3, rarity: 'Rare', expansion: 'DMU', cardNum: 040, artist: 'Marcela Medeiros'},
  {name: 'Academy Loremaster', picture: 'type=card&multiverseid=577506', manaCost: 'UU', manaValue: 2, cardType: ['Creature'], type: ['Human Wizard'], rulesText: 'At the beginning of each player's draw step, that player may draw an additional card. If they do, spells they cast this turn cost 2 more to cast.', power: 2, toughness: 3, rarity: 'Rare', expansion: 'DMU', cardNum: 391, artist: 'Marcela Medeiros'},
  {name: 'Academy Wall', picture: 'multiverseid=574521&type=card', manaCost: '2U', manaValue: 3, cardType: ['Creature'], type: ['Wall'], rulesText: 'Defender  Whenever you cast an instant or sorcery spell, you may draw a card. If you do, discard a card. This ability triggers only once each turn.', power: 0, toughness: 5, rarity: 'Common', expansion: 'DMU', cardNum: 041, artist: 'Adam Paquette'},
  {name: 'Aclazotz, Deepest Betrayal', picture: 'multiverseid=636791&type=card', manaCost: '3BB', manaValue: 5, superType: ['Legendary'], cardType: ['Creature'], type: ['Bat', 'God'], rulesText: 'Flying, lifelink  Whenever Aclazotz attacks, each opponent discards a card. For each opponent who can't, you draw a card.  Whenever an opponent discards a land card, create a 1/1 black Bat creature token with flying.  When Aclazotz dies, return it to the battlefield tapped and transformed under its owner's control.', rarity: 'Mythic Rare', expansion: 'LCI', cardNum: 088, artist: 'Steve Prescott', backSide: {name: 'Temple of the Dead', picture: 'multiverseid=636792&type=card', manaValue: 5, cardType: ['Land'], rulesText: '(Transforms from Aclazotz, Deepest Betrayal.)  Tap: Add B.  2B, Tap: Transform Temple of the Dead. Activate only if a player has one or fewer cards in hand and only as a sorcery.', rarity: 'Mythic Rare', cardNum: 088, artist: 'Steve Prescott'}},
  {name: 'Aclazotz, Deepest Betrayal', picture: 'multiverseid=639434&type=card', manaCost: '3BB', manaValue: 5, superType: ['Legendary'], cardType: ['Creature'], type: ['Bat', 'God'], rulesText: 'Flying, lifelink  Whenever Aclazotz attacks, each opponent discards a card. For each opponent who can't, you draw a card.  Whenever an opponent discards a land card, create a 1/1 black Bat creature token with flying.  When Aclazotz dies, return it to the battlefield tapped and transformed under its owner's control.', rarity: 'Mythic Rare', expansion: 'LCI', cardNum: 088, artist: 'Steve Prescott', backSide: {name: 'Temple of the Dead', picture: 'multiverseid=636792&type=card', manaValue: 5, cardType: ['Land'], rulesText: '(Transforms from Aclazotz, Deepest Betrayal.)  Tap: Add B.  2B, Tap: Transform Temple of the Dead. Activate only if a player has one or fewer cards in hand and only as a sorcery.', rarity: 'Mythic Rare', cardNum: 088, artist: 'Steve Prescott'}},
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
