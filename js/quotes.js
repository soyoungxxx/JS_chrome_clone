const quotes = [
    {
        quote: "Tis better to have loved and lost, than never to have loved at all",
        author: "Alfred, Lord Tennyson",
    },
    {
        quote: "When you believe in a thing, believe in it all the way, implicitly and unquestionable.",
        author: "Walt Disney",
    },
    {
        quote: "If you focus on what you left behind, you will never see what lies ahead.",
        author: "Ratatouille",
    },
    {
        quote: "You cannot be happy every day. But there are happy things every day.",
        author: "Winnie the Pooh",
    },
    {
        quote: "The past can hurt, but the way I see it, you can either run from it or learn from it.",
        author: "Lion King",
    },
    {
        quote: "Today's special moments are tomorrow's memories.",
        author: "Aladdin",
    },
    {
        quote: "Sometimes the smallest things take up the most room in your heart.",
        author: "Winnie the Pooh",
    },
    {
        quote: "Our fate lives within us, you only hae to be brave enough to see it.",
        author: "Brave",
    },
    {
        quote: "The very things that hold you down are going to lift you up.",
        author: "Dumbo",
    },
    {
        quote: "Life is a journey to be experienced, not a problem to be solved.",
        author: "Winnie the Pooh",
    },
    {
        quote: "I never look back, darling. It distracts from the now.",
        author: "The incredibles",
    },
    {
        quote: "How do you spell love? You don't spell it. You feel it.",
        author: "Winnie the Pooh",
    },
    {
        quote: "Love is putting someone else's needs befor yours.",
        author: "Frozen",
    },
    {
        quote: "The onely thing predictable about life is it's unpredictablility.",
        author: "Ratatouille",
    },
]
// 14

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;