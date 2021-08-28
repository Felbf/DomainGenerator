/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".net", ".us", ".io"];

  for (let i = 0; i < pronoun.length; i++) {
    let pronouns = pronoun[i];
    for (let j = 0; j < adj.length; j++) {
      let adjs = adj[j];

      for (let z = 0; z < noun.length; z++) {
        let nouns = noun[z];

        for (let k = 0; k < domain.length; k++) {
          let domains = domain[k];
          console.log(`${pronouns}${adjs}${nouns}${domains}`);
        }
      }
    }
  }
  console.log(`${pronoun[0]}${adj[0]}${noun[0]}${domain[0]}`);
};
