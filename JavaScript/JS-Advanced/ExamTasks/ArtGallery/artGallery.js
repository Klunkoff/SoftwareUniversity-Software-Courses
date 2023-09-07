class ArtGallery {

    constructor(creator) {

        this.creator = creator;
        this.possibleArticles = {

            picture: 200,
            photo: 50,
            item: 250,
        };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {

        articleModel = articleModel.toLowerCase();

        if (!this.possibleArticles.hasOwnProperty(articleModel)) {
            throw new Error('This article model is not included in this gallery!');
        }

        let findArticle = this.listOfArticles.find((article) => article.articleName == articleName);

        if (!findArticle) {
            this.listOfArticles.push({ articleModel, articleName, quantity });

        } else {
            findArticle.quantity += quantity;
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {

        let findGuest = this.guests.find((guest) => guest.guestName == guestName);

        if (findGuest) {
            throw new Error(`${guestName} has already been invited.`);
        }

        let invitedGuest = { guestName, points: 0, purchaseArticle: 0 };

        if (personality == 'Vip') {
            invitedGuest.points = 500;

        } else if (personality == 'Middle') {
            invitedGuest.points = 250;

        } else {
            invitedGuest.points = 50;
        }

        this.guests.push(invitedGuest);

        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {

        let findArticle = this.listOfArticles.find((article) => article.articleName == articleName && article.articleModel == articleModel);
        let findGuest = this.guests.find((guest) => guest.guestName == guestName);

        if (!findArticle) {
            throw new Error('This article is not found.');
        }

        if (findArticle.quantity == 0) {
            return `The ${articleName} is not available.`;
        }

        if (!findGuest) {
            return 'This guest is not invited.';
        }

        if (findGuest.points < this.possibleArticles[articleModel]) {
            return 'You need to more points to purchase the article.';
        }

        findGuest.points -= this.possibleArticles[articleModel];
        findGuest.purchaseArticle++;
        findArticle.quantity--;

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
    }

    showGalleryInfo(criteria) {

        if (criteria == 'article') {

            let result = ['Articles information:'];

            this.listOfArticles.forEach((article) => result.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`));

            return result.join('\n');

        } else if (criteria == 'guest') {

            let result = ['Guests information:'];

            this.guests.forEach((guest) => result.push(`${guest.guestName} - ${guest.purchaseArticle}`));

            return result.join('\n');
        }
    }
}

// input 1
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
// input 2
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));
// input 3
// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));
// input 4
const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));