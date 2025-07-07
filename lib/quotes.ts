export interface Quote {
  id: number;
  text: string;
  author: string;
  category: string;
}

export const quotes: Quote[] = [
  // Success quotes
  {
    id: 1,
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "success"
  },
  {
    id: 2,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "success"
  },
  {
    id: 3,
    text: "Success is not about being the best. It's about always getting better.",
    author: "Behance",
    category: "success"
  },
  {
    id: 4,
    text: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
    category: "success"
  },
  {
    id: 5,
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    category: "success"
  },

  // Motivation quotes
  {
    id: 6,
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "motivation"
  },
  {
    id: 7,
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
    category: "motivation"
  },
  {
    id: 8,
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    category: "motivation"
  },
  {
    id: 9,
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
    category: "motivation"
  },
  {
    id: 10,
    text: "Your limitation—it's only your imagination.",
    author: "Unknown",
    category: "motivation"
  },

  // Wisdom quotes
  {
    id: 11,
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
    category: "wisdom"
  },
  {
    id: 12,
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
    category: "wisdom"
  },
  {
    id: 13,
    text: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
    category: "wisdom"
  },
  {
    id: 14,
    text: "Yesterday is history, tomorrow is a mystery, today is a gift.",
    author: "Eleanor Roosevelt",
    category: "wisdom"
  },
  {
    id: 15,
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    category: "wisdom"
  },

  // Love quotes
  {
    id: 16,
    text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    author: "Lao Tzu",
    category: "love"
  },
  {
    id: 17,
    text: "The best thing to hold onto in life is each other.",
    author: "Audrey Hepburn",
    category: "love"
  },
  {
    id: 18,
    text: "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
    author: "Unknown",
    category: "love"
  },
  {
    id: 19,
    text: "To love and be loved is to feel the sun from both sides.",
    author: "David Viscott",
    category: "love"
  },
  {
    id: 20,
    text: "Love is composed of a single soul inhabiting two bodies.",
    author: "Aristotle",
    category: "love"
  },

  // Inspiration quotes
  {
    id: 21,
    text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
    author: "Alan Watts",
    category: "inspiration"
  },
  {
    id: 22,
    text: "Life is 10% what happens to you and 90% how you react to it.",
    author: "Charles R. Swindoll",
    category: "inspiration"
  },
  {
    id: 23,
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
    category: "inspiration"
  },
  {
    id: 24,
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
    category: "inspiration"
  },
  {
    id: 25,
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
    category: "inspiration"
  }
];

export const categories = [
  { value: "success", label: "Success" },
  { value: "motivation", label: "Motivation" },
  { value: "wisdom", label: "Wisdom" },
  { value: "love", label: "Love" },
  { value: "inspiration", label: "Inspiration" }
];

export function getQuotesByCategory(category: string, limit: number = 3): Quote[] {
  const filteredQuotes = quotes.filter(quote => quote.category === category);
  const shuffled = filteredQuotes.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, limit);
}