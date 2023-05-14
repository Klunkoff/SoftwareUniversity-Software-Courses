function comments(inputArray) {

    const users = {};
    const articles = {};

    for (const line of inputArray) {

        if (line.startsWith("user ")) {

            const username = line.substring(5);
            users[username] = {};

        } else if (line.startsWith("article ")) {

            const articleName = line.substring(8);
            articles[articleName] = { comments: [] };

        } else if (line.includes(" posts on ")) {

            const [username, rest] = line.split(" posts on ");
            const [articleName, comment] = rest.split(": ");
            const commentObj = { username, title: comment.split(", ")[0], content: comment.split(", ")[1] };

            if (users[username] && articles[articleName]) {

                articles[articleName].comments.push(commentObj);
                users[username][articleName] = commentObj;
            }
        }
    }

    const sortedArticles = Object.entries(articles).sort((a, b) => b[1].comments.length - a[1].comments.length);

    for (const [articleName, article] of sortedArticles) {
        console.log(`Comments on ${articleName}`);
        const sortedComments = article.comments.sort((a, b) => a.username.localeCompare(b.username));

        for (const comment of sortedComments) {
            console.log(`--- From user ${comment.username}: ${comment.title} - ${comment.content}`);
        }
    }
}

let input1 = ['user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books', 'article Movies', 'article Shopping',
    'user someUser', 'user uSeR4', 'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'];

let input2 = ['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment',
    'article Bobby', 'article Steven', 'user Liam', 'user Henry',
    'Mark posts on Bobby: Is, I do really like them',
    'Mark posts on Steven: title, Run',
    'someUser posts on Movies: Like'];

comments(input2);