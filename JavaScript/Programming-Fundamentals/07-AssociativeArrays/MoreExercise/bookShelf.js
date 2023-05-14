function bookShelf(input) {

    const shelves = {};

    for (const line of input) {

        if (line.includes("->")) {
            const [shelfId, shelfGenre] = line.split(" -> ");

            if (!shelves.hasOwnProperty(shelfId)) {
                shelves[shelfId] = { genre: shelfGenre, books: [] };
            }

        } else {
            const [bookInfo, bookGenre] = line.split(", ");
            const [bookTitle, bookAuthor] = bookInfo.split(": ");

            for (const shelfId in shelves) {

                if (shelves[shelfId].genre === bookGenre) {
                    shelves[shelfId].books.push({ title: bookTitle, author: bookAuthor });
                }
            }
        }
    }

    const sortedShelves = Object.entries(shelves)
        .sort((a, b) => b[1].books.length - a[1].books.length || a[1].genre.localeCompare(b[1].genre));

    for (const [shelfId, shelfInfo] of sortedShelves) {

        const sortedBooks = shelfInfo.books.sort((a, b) => a.title.localeCompare(b.title));
        console.log(`${shelfId} ${shelfInfo.genre}: ${shelfInfo.books.length}`);
        
        for (const book of sortedBooks) {
            console.log(`--> ${book.title}: ${book.author}`);
        }
    }
}

const input1 = ['1 -> history', '1 -> action',
    'Death in Time: Criss Bell, mystery', '2 -> mystery',
    '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history', '2 -> romance',
    'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history'];

const input2 = ['1 -> mystery', '2 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Lions and Rats: Gabe Roads, history',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi'];

bookShelf(input2);