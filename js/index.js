Quotes = [
  {
    Quote: "“Be yourself; everyone else is already taken.”",
    auther: "― Oscar Wilde",
  },
  {
    Quote:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    auther: "― Marilyn Monroe",
  },
  {
    Quote: "“So many books, so little time.”",
    auther: "― Frank Zappa",
  },
  {
    Quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    auther: "― Albert Einstein",
  },
  {
    Quote: "“A room without books is like a body without a soul.”",
    auther: "― Marcus Tullius Cicero",
  },
  {
    Quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    auther: "― Bernard M. Baruch",
  },
  {
    Quote:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    auther: "― Dr. Seuss",
  },
  {
    Quote: "“You only live once, but if you do it right, once is enough.”",
    auther: "― Mae West",
  },
  {
    Quote: "“Be the change that you wish to see in the world.”",
    auther: "― Mahatma Gandhi",
  },
  {
    Quote:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
    auther: "― Robert Frost",
  },
  {
    Quote: "“If you tell the truth, you don't have to remember anything.”",
    auther: "― Mark Twain",
  },
  {
    Quote:
      "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
    auther: "― Maya Angelou",
  },
  {
    Quote: "“A friend is someone who knows all about you and still loves you.”",
    auther: "― Elbert Hubbard",
  },
];

function getQuotes() {
  var randomNumber = Math.floor(Math.random() * Quotes.length);
  document.getElementById(
    "quote"
  ).innerHTML = `<p class="fs-3 fw-bold"> ${Quotes[randomNumber].Quote} </p>`;
  document.getElementById(
    "auther"
  ).innerHTML = `<p class="fs-3"> ${Quotes[randomNumber].auther} </p>`;
}
  