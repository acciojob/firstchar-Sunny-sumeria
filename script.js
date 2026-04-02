function firstChar(text) {
  // your code here
	
  // 1. Remove leading and trailing whitespace
  const trimmedText = text.trim();

  // 2. Check if the string is empty after trimming
  if (trimmedText.length === 0) {
    return "";
  }

  // 3. Return the first character of the trimmed string
  return trimmedText[0];
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
