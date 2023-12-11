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
  cardNumber: Number,
  artist: String
});

const Card = mongoose.model('Card', cardSchema);



const createAndSaveCard = (done) => {
  const atraxasFall = new Card({ name: 'Atraxa's Fall', picture: 'multiverseid=607224&type=card', manaCost: '1G', manaValue: 2, cardType: ['Sorcery'], rulesText: 'Destroy target artifact, battle, enchantment, or creature with flying.', rarity: 'Common', expansion: 'MOM', cardNumber: 176, artist: 'Xavier Ribeiro' });
  atraxasFall.picture;  
  atraxasFall.toObject({ getters: false }).picture; 

  atraxasFall.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

var arrayOfCards = [
  {name: 'Abandon the Post', picture: 'multiverseid=534903&type=card', manaCost: '1R', manaValue: 2, cardType: ['Sorcery'], rulesText: 'Up to two target creatures can't block this turn.  Flashback 3R(You may cast this card from your graveyard for its flashback cost. Then exile it.)', rarity: 'Common', expansion: 'MID', cardNumber: 127, artist: 'Zoltan Boros'},
  {name: 'Abrade', picture: 'multiverseid=540992&type=card', manaCost: '1R', manaValue: 2, cardType: ['Instant'], rulesText: 'Choose One--  *Abrade deals 3 damage to target creature.  *Destroy target artifact.', rarity: 'Common', expansion: 'VOW', cardNumber: 139, artist: 'Dominik Mayer'},
  {name: 'Abrade', picture: 'multiverseid=636839&type=card', manaCost: '1R', manaValue: 2, cardType: ['Instant'], rulesText: 'Choose One--  *Abrade deals 3 damage to target creature.  *Destroy target artifact.', rarity: 'Common', expansion: 'VOW', cardNumber: 131, artist: 'Bartek Fedyczak'},
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
