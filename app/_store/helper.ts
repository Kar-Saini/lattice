const CHARS = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

export function genrateId() {
  let id = "";
  for (let i = 0; i < 8; i++) {
    const index = Math.floor(Math.random() * CHARS.length);
    id += CHARS[index];
  }
  return id;
}
const WORDS = [
  "horizon",
  "cascade",
  "ember",
  "velocity",
  "serenity",
  "crimson",
  "wander",
  "echo",
  "luminous",
  "mystic",
  "harbor",
  "quartz",
  "solstice",
  "ember",
  "nebula",
  "radiant",
  "voyage",
  "zenith",
  "meadow",
  "aurora",
];

export function generateName() {
  const name = [];
  for (let i = 0; i < 2; i++) {
    const index = Math.floor(Math.random() * WORDS.length);
    name.push(WORDS[index]);
  }
  return name.join("-");
}
