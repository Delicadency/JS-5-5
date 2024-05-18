function sentenceToUpperCase(sentence) {
  if (typeof sentence !== "string") {
    return "Nieprawidowy rodzaj danych. Wprowadź dowolny tekst.";
  } else {
    const splitSentence = sentence.split(" ");
    if (splitSentence.length === 1) {
      return sentence.toUpperCase();
    } else {
      const array = splitSentence.map((word, index) => {
        if (index % 2 !== 0) {
          return word.toUpperCase();
        } else {
          return word;
        }
      });
      const joinedSentence = array.join(" ");
      return joinedSentence;
    }
  }
}
