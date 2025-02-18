// Class to represent a book
class Book {
    constructor(title, published, author, id) {
        this.title = title;
        this.published = published;
        this.author = author;
        this.id = id;
    }
}

// Class to represent a member
class Member {
    constructor(member_id, name, borrow_name, isavailable) {
        this.member_id = member_id;
        this.name = name;
        //this.borrow_books = [];
    }

    // Method to borrow a book
    borrow_book(id) {
        if (!this.isavailable) {
            console.log("Book is not available");
            return;
        }
        this.borrow_books.push(id);
        return id;
    }

    // Method to return a book
    return_book(id) {
        if (id < 0) {
            console.log("Enter valid book ID");
            return;
        }
        const book_id = this.borrow_books.findIndex((book_id) => book_id === id);
        if (book_id !== -1) {
            this.borrow_books.splice(book_id, 1);
        } else {
            console.log("Book ID not found in borrowed books");
        }
    }
}

// Class to represent the library
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }

    // Method to add a book to the library
    addBook(book) {
        this.books.push(book);
    }

    // Method to add a member to the library
    addMember(member) {
        this.members.push(member);
    }

    // Method to check all books in the library
    checkingBook() {
        this.books.map((item) => console.table(item));
    }

    // Method to check all members in the library
    checkingMember() {
        this.members.map((member) => console.table(member));
    }
}

// Create an instance of Library
const kit_lab = new Library();

// Creating some books in the library
const book1 = new Book("Physics", 2018, "HC Verma", 1924);
const book2 = new Book("Maths", 2008, "RD Sharma", 2651);
const book3 = new Book("Chemistry", 2015, "NV Sir", 3094);
const book4 = new Book("Biology", 2019, "DR Rema Vergis", 4273);

// Adding books to the library
kit_lab.addBook(book1);
kit_lab.addBook(book2);
kit_lab.addBook(book3);
kit_lab.addBook(book4);

// Check all books in the library
console.log("\n Avialable books are as following :");
kit_lab.checkingBook();

// Adding a new member to the library
console.log("\n New member added :");
const new_member = new Member(2, "Karthick");
const new_member2 = new Member(2, "Parth");
kit_lab.addMember(new_member);
kit_lab.addMember(new_member2);

// Check all members in the library
kit_lab.checkingMember();
