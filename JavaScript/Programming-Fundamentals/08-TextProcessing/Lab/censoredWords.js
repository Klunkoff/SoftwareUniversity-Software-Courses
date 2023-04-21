function censoredWords(text, censorWord) {

    while (text.includes(censorWord)) {
        text = text.replace(censorWord, '*'.repeat(censorWord.length));
    }

    console.log(text);
}

censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');