//  1.
function InstagramPost(authorHandle, content, imageLink, views, likes) {
  this.authorHandle = authorHandle;
  this.content = content;
  this.imageLink = imageLink;
  this.views = views;
  this.likes = likes;
}

// 2.
const post1 = new InstagramPost(
  "johndoe",
  "Kindness is a language!",
  "https://www.kindness.com",
  1000,
  50
);
const post2 = new InstagramPost(
  "janedoe",
  "Have a great day!",
  "https://www.greatday.com",
  500,
  30
);

// 3.
function createPerson(name, age, location) {
  return {
    name: name,
    age: age,
    location: location,
  };
}

// Factory function to create a JAMB scores object
function createJambScores(eng, govt, lit, crk) {
  return {
    eng: eng,
    govt: govt,
    lit: lit,
    crk: crk,
  };
}
const musa = createPerson("Musa Dawodu", 19, "Lekki, Lagos State");
const musaJambScores = createJambScores(70, 85, 82, 94);
musa.jambScores = musaJambScores;
console.log(musa);

//   4.
// 4a. Object.assign()
const obj1 = { a: 1, b: 2 };
const obj2 = Object.assign({}, obj1);
console.log(obj2);

// 4b. Spread syntax (...)
const obj3 = { a: 1, b: 2 };
const obj4 = { ...obj3 };
console.log(obj3);

// 4c. JSON.parse() and JSON.stringify()
const obj5 = { a: 1, b: 2 };
const obj6 = JSON.parse(JSON.stringify(obj5));
console.log(obj6);

// 4d. Object.create()
const obj7 = { a: 1, b: 2 };
const obj8 = Object.create(obj7);

// 5.
const presidentialCandidates = {
  AAC: "Omoyele Sowore",
  ACCORD: "Christopher Imumolen",
  APC: "Bola Ahmed Tinubu",
  LP: "Peter Obi",
  NNPP: "Rabiu Kwankwaso",
  PDP: "Atiku Abubakar",
};

for (const party in presidentialCandidates) {
  console.log(
    `${presidentialCandidates[party]} is the presidential candidate of ${party}`
  );
}
