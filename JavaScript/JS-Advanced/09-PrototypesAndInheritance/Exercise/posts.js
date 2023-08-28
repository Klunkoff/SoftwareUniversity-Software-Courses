function solution() {

    class Post {

        constructor(title, content) {

            this.title = title;
            this.content = content;
        }

        toString() {

            let result = [`Post: ${this.title}`, `Content: ${this.content}`];
            return result.join('\n');
        }
    }

    class SocialMediaPost extends Post {

        constructor(title, content, likes, dislikes) {

            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {

            this.comments.push(comment);
        }

        toString() {

            let commentResult = [];

            if (this.comments.length) {

                commentResult = ['Comments:'];
                this.comments.forEach((el) => commentResult.push(` * ${el}`));
            }

            let result = [`Post: ${this.title}`, `Content: ${this.content}`,
            `Rating: ${this.likes - this.dislikes}`];

            return (result.concat(commentResult)).join('\n');
        }
    }

    class BlogPost extends Post {

        constructor(title, content, views) {

            super(title, content);
            this.views = views;
        }

        view() {

            this.views++;
            // console.log(this);
            return this;
        }

        toString() {

            let result = [`Post: ${this.title}`, `Content: ${this.content}`,
            `Views: ${this.views}`];

            return result.join('\n');
        }
    }

    return {

        Post,
        SocialMediaPost,
        BlogPost,
    }
}

const classes = solution();
// let post = new classes.Post("Post", "Content");

// console.log(post.toString());

// // Post: Post
// // Content: Content

// let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

// scm.addComment("Good post");
// scm.addComment("Very good post");
// scm.addComment("Wow!");

// console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!

let proba = new classes.BlogPost('kasjhdaksjdh', 'asdasd', 5);

console.log(proba.toString());

proba.view();
proba.view();
proba.view();

console.log(proba.toString());