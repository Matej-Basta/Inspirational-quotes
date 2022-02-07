export const RandomQuotes = (props) => {
  const quotesArray = [
    "Tell other people that you are unprecedentedly fascinating.",
    "Believe in the warning, not the failure.",
    "Free your mind until your reflection becomes your guardian angel.",
    "Being a young man can be a full-time job.",
    "Never think of it as karma, think of it as life.",
    "Postponing paranoia destroys your own destiny.",
  ];

  const randomQuote =
    quotesArray[Math.floor(Math.random() * quotesArray.length)];

  return <h1>{randomQuote}</h1>;
};
