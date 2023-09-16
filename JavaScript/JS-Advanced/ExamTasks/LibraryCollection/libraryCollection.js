class LibraryCollection {

    constructor(capacity) {

        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {

        if (this.capacity == this.books.length) {
            throw new Error('Not enough space in the collection.');
        }

        this.books.push({ bookName, bookAuthor, payed: false });

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {

        let findedBook = this.books.find((book) => book.bookName == bookName);

        if (!findedBook) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (findedBook.payed) {
            throw new Error(`${bookName} has already been paid.`);
        }

        findedBook.payed = true;

        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {

        let findedBook = this.books.find((book) => book.bookName == bookName);

        if (!findedBook) {
            throw new Error(`The book, you're looking for, is not found.`);
        }

        if (!findedBook.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        let findedBookIndex = this.books.indexOf(findedBook);
        this.books.splice(findedBookIndex, 1);

        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {

        if (bookAuthor === undefined) {

            let result = []
            let emptySlots = this.capacity - this.books.length;

            result.push(`The book collection has ${emptySlots} empty spots left.`);

            this.books.forEach((book) => {

                let payded = '';

                if (book.payed == false) {
                    payded = 'Not';

                } else if (book.payed == true) {
                    payded = 'Has';
                }

                result.push(`${book.bookName} == ${book.bookAuthor} - ${payded} Paid.`);
            });

            return result.join('\n');
        }

        let findedBook = this.books.find((book) => book.bookAuthor == bookAuthor);
        let payded = '';

        if (!findedBook) {
            throw new Error(`${bookAuthor} is not in the collection.`);
        }

        if (findedBook.payed == false) {
            payded = 'Not';

        } else if (findedBook.payed == true) {
            payded = 'Has';
        }

        return `${findedBook.bookName} == ${bookAuthor} - ${payded} Paid.`;
    }
}

// input 1
// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));

// input 2
// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));

// input 3
// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));

// input 4
// const library = new LibraryCollection(2)
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.getStatistics('Miguel de Cervantes'));

//input 5
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());
