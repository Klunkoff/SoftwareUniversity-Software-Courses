class Story {

    constructor(title, creator) {

        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {

        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;

        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`;

        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
        }
    }

    like(username) {

        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");

        } else if (this.creator === username) {
            throw new Error("You can't like your own story!");

        } else {
            this._likes.push(username);
            return `${username} liked ${this.title}!`;
        }
    }

    dislike(username) {

        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!");

        } else {
            this._likes = this._likes.filter((like) => like !== username);
            return `${username} disliked ${this.title}`;
        }
    }

    comment(username, content, id) {

        if (id === undefined || !this._comments.some((comment) => comment.Id === id)) {

            const newComment = {
                Id: this._comments.length + 1,
                Username: username,
                Content: content,
                Replies: [],
            };

            this._comments.push(newComment);
            return `${username} commented on ${this.title}`;

        } else {
            const comment = this._comments.find((comment) => comment.Id === id);
            const replyId = comment.Replies.length + 1;
            const newReply = {

                Id: `${id}.${replyId}`,
                Username: username,
                Content: content,
            };

            comment.Replies.push(newReply);
            return "You replied successfully";
        }
    }

    toString(sortingType) {

        let sortedComments = this._comments.slice();

        if (sortingType === "asc") {

            sortedComments.sort((a, b) => a.Id - b.Id);
            sortedComments.forEach((comment) => {
                comment.Replies.sort((a, b) => a.Id - b.Id);
            });

        } else if (sortingType === "desc") {

            sortedComments.sort((a, b) => b.Id - a.Id);
            sortedComments.forEach((comment) => {
                comment.Replies.sort((a, b) => b.Id - a.Id);
            });

        } else if (sortingType === "username") {

            sortedComments.sort((a, b) => a.Username.localeCompare(b.Username));
            sortedComments.forEach((comment) => {
                comment.Replies.sort((a, b) => a.Username.localeCompare(b.Username));
            });
        }

        let result = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:`;

        if (this._comments.length !== 0) {

            sortedComments.forEach((comment) => {
                result += `\n-- ${comment.Id}. ${comment.Username}: ${comment.Content}`;
                comment.Replies.forEach((reply) => {
                    result += `\n--- ${reply.Id}. ${reply.Username}: ${reply.Content}`;
                });
            });
        }

        return result;
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));