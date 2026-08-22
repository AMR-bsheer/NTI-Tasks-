function capitalizeWords(text) {
  return text
    .trim()
    .split(/\s+/)
    .map(word => word[0]?.toUpperCase() + word.slice(1))
    .join(" ");
}

function countWords(text) {
  const words = text.trim().split(/\s+/);
  return text.trim() ? words.length : 0;
}

function reverseText(text) {
  const characters = [...text];
  return characters.reverse().join("");
}

function isPalindrome(text) {
  const normalizedText = text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "");

  const reversedText = [...normalizedText].reverse().join("");

  return normalizedText === reversedText;
}

module.exports = {
  capitalizeWords,
  countWords,
  reverseText,
  isPalindrome
};
