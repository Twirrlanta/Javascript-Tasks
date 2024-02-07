// )დავალება: შექმენით კლასი სახელად Book კონსტრუქტორით, რომელიც იღებს ორ არგუმენტს: სათაური და ავტორი. დაამატეთ მეთოდი სახელად getDetails, რომელიც აბრუნებს სტრიქონს, რომელიც აერთიანებს წიგნის სათაურსა და ავტორს.

class Book {
    constructor(title, author) {

        this.title = title;
        this.author = author;
    }

    getDetails() {
        console.log(`This book name is ${this.title} and this books author is ${this.author}`)
    }
}

const BookDetails = new Book();
BookDetails.title = "Satauri";
BookDetails.author = "Avtori";

BookDetails.getDetails();

console.log(BookDetails);