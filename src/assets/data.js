const bookstoreData = [
  // Fiction Books
  {
    bookID: "1",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    genre: "Classic",
    publicationDate: "1960-07-11",
    isbn: "9780061120084",
    price: 7.99,
    stock: 35,
    description: "A novel about racial injustice in the Deep South.",
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/330px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
    rating: 4.8,
    publisher: "J.B. Lippincott & Co.",
    language: "English",
    format: "Paperback",
    pages: 324,
    sold: 15,
  },
  {
    bookID: "2",
    title: "1984",
    author: "George Orwell",
    category: "Fiction",
    genre: "Dystopian",
    publicationDate: "1949-06-08",
    isbn: "9780451524935",
    price: 9.99,
    stock: 60,
    description: "A dystopian novel set in a totalitarian society under constant surveillance.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg",
    rating: 4.6,
    publisher: "Secker & Warburg",
    language: "English",
    format: "Hardcover",
    pages: 328,
    sold: 20,
  },
  {
    bookID: "3",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
    genre: "Classic",
    publicationDate: "1925-04-10",
    isbn: "9780743273565",
    price: 10.99,
    stock: 50,
    description: "A novel about the American dream.",
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/330px-The_Great_Gatsby_Cover_1925_Retouched.jpg",
    rating: 4.7,
    publisher: "Scribner",
    language: "English",
    format: "Hardcover",
    pages: 180,
    sold: 25,
  },
  {
    bookID: "4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Fiction",
    genre: "Romance",
    publicationDate: "1813-01-28",
    isbn: "9780141439518",
    price: 6.99,
    stock: 45,
    description: "A classic tale of love and manners in Georgian England.",
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/PrideAndPrejudiceTitlePage.jpg/800px-PrideAndPrejudiceTitlePage.jpg",
    rating: 4.5,
    publisher: "T. Egerton, Whitehall",
    language: "English",
    format: "Paperback",
    pages: 432,
    sold: 18,
  },
  {
    bookID: "5",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    category: "Fiction",
    genre: "Coming-of-age",
    publicationDate: "1951-07-16",
    isbn: "9780316769488",
    price: 8.49,
    stock: 55,
    description: "A novel about teenage angst and alienation.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1398034300i/5107.jpg",
    rating: 4.4,
    publisher: "Little, Brown and Company",
    language: "English",
    format: "Paperback",
    pages: 224,
    sold: 30,
  },
  {
    bookID: "6",
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    category: "Fiction",
    genre: "Fantasy",
    publicationDate: "1954-07-29",
    isbn: "9780618640157",
    price: 14.99,
    stock: 40,
    description: "An epic fantasy saga set in the fictional world of Middle-earth.",
    coverImage: "https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif",
    rating: 4.9,
    publisher: "Houghton Mifflin",
    language: "English",
    format: "Hardcover",
    pages: 1178,
    sold: 35,
  },
  {
    bookID: "7",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    category: "Fiction",
    genre: "Fantasy",
    publicationDate: "1997-06-26",
    isbn: "9780590353427",
    price: 11.99,
    stock: 30,
    description: "The first book in the Harry Potter series.",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFKRzqIPBTYkse7NKIPTjw0ggQB02c636StmC1mONyQwec4x1",
    rating: 4.8,
    publisher: "Bloomsbury Publishing",
    language: "English",
    format: "Paperback",
    pages: 320,
    sold: 28,
  },
  {
    bookID: "8",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fiction",
    genre: "Fantasy",
    publicationDate: "1937-09-21",
    isbn: "9780618260300",
    price: 9.99,
    stock: 25,
    description: "A fantasy novel about the journey of Bilbo Baggins.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546071216i/5907.jpg",
    rating: 4.7,
    publisher: "Houghton Mifflin",
    language: "English",
    format: "Paperback",
    pages: 310,
    sold: 20,
  },
  {
    bookID: "9",
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    category: "Fiction",
    genre: "Science Fiction",
    publicationDate: "1953-10-19",
    isbn: "9781451673319",
    price: 8.99,
    stock: 20,
    description: "A dystopian novel about a future society where books are banned.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1608059811i/56302573.jpg",
    publisher: "Ballantine Books",
    language: "English",
    format: "Paperback",
    pages: 249,
    sold: 10,
  },
  {
    bookID: "10",
    title: "Moby-Dick",
    author: "Herman Melville",
    category: "Fiction",
    genre: "Adventure",
    publicationDate: "1851-10-18",
    isbn: "9780142437247",
    price: 10.49,
    stock: 30,
    description: "A novel about Captain Ahab's obsessive quest to kill the white whale, Moby Dick.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327940656i/153747.jpg",
    rating: 4.4,
    publisher: "Harper & Brothers",
    language: "English",
    format: "Paperback",
    pages: 624,
    sold: 25,
  },
  {
    bookID: "11",
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    category: "Fiction",
    genre: "Gothic",
    publicationDate: "1847-10-16",
    isbn: "9780141441146",
    price: 7.49,
    stock: 40,
    description: "A novel about the struggles and triumphs of a young orphan girl.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1557343311i/10210.jpg",
    rating: 4.5,
    publisher: "Smith, Elder & Co.",
    language: "English",
    format: "Paperback",
    pages: 532,
    sold: 18,
  },
  {
    bookID: "12",
    title: "Brave New World",
    author: "Aldous Huxley",
    category: "Fiction",
    genre: "Dystopian",
    publicationDate: "1932-10-27",
    isbn: "9780060850524",
    price: 8.99,
    stock: 35,
    description: "A dystopian novel set in a future world where people are controlled through technology and conditioning.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1575509280i/5129.jpg",
    rating: 4.3,
    publisher: "Chatto & Windus",
    language: "English",
    format: "Paperback",
    pages: 288,
    sold: 12,
  },
  {
      bookID: "13",
      title: "The Handmaid's Tale",
      author: "Margaret Atwood",
      category: "Fiction",
      genre: "Dystopian",
      publicationDate: "1985-09-17",
      isbn: "9780385490818",
      price: 9.49,
      stock: 28,
      description: "A dystopian novel set in a totalitarian society where women are oppressed.",
      coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1578028274i/38447.jpg",
      rating: 4.7,
      publisher: "McClelland & Stewart",
      language: "English",
      format: "Paperback",
      pages: 311,
      sold: 17,
    },
    {
      bookID: "14",
      title: "One Hundred Years of Solitude",
      author: "Gabriel García Márquez",
      category: "Fiction",
      genre: "Magical Realism",
      publicationDate: "1967-05-30",
      isbn: "9780060883287",
      price: 11.99,
      stock: 32,
      description: "A novel about the Buendía family's generations in the fictional town of Macondo.",
      coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327881361i/320.jpg",
      rating: 4.8,
      publisher: "Harper & Row",
      language: "English",
      format: "Paperback",
      pages: 417,
      sold: 20,
    },
    {
      bookID: "15",
      title: "The Road",
      author: "Cormac McCarthy",
      category: "Fiction",
      genre: "Post-apocalyptic",
      publicationDate: "2006-09-26",
      isbn: "9780307387899",
      price: 10.99,
      stock: 20,
      description: "A father and son's journey through a post-apocalyptic America.",
      coverImage: "https://m.media-amazon.com/images/I/81cAuYAq7pL._AC_UF1000,1000_QL80_.jpg",
      rating: 4.5,
      publisher: "Alfred A. Knopf",
      language: "English",
      format: "Paperback",
      pages: 287,
      sold: 15,
    },
    {
      bookID: "16",
      title: "The Hitchhiker's Guide to the Galaxy",
      author: "Douglas Adams",
      category: "Fiction",
      genre: "Science Fiction",
      publicationDate: "1979-10-12",
      isbn: "9780345391803",
      price: 8.99,
      stock: 25,
      description: "A comedic science fiction series about the adventures of Arthur Dent.",
      coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1531891848i/11.jpg",
      rating: 4.6,
      publisher: "Pan Books",
      language: "English",
      format: "Paperback",
      pages: 224,
      sold: 18,
    },
    {
      bookID: "17",
      title: "The Alchemist",
      author: "Paulo Coelho",
      category: "Fiction",
      genre: "Philosophical",
      publicationDate: "1988-01-01",
      isbn: "9780062315007",
      price: 9.99,
      stock: 30,
      description: "A philosophical novel about a young Andalusian shepherd named Santiago.",
      coverImage: "https://booksmandala.com/_next/image?url=https%3A%2F%2Fbooks.bizmandala.com%2Fmedia%2Fbooks%2F9788172234980%2Fimage.jpeg&w=1920&q=75",
      rating: 4.7,
      publisher: "HarperOne",
      language: "English",
      format: "Paperback",
      pages: 208,
      sold: 22,
    },
    {
      bookID: "18",
      title: "Gone with the Wind",
      author: "Margaret Mitchell",
      category: "Fiction",
      genre: "Historical",
      publicationDate: "1936-06-30",
      isbn: "9781416548898",
      price: 12.49,
      stock: 18,
      description: "A historical romance set during the American Civil War and Reconstruction era.",
      coverImage: "https://m.media-amazon.com/images/I/91w1IHrUqZL._AC_UF1000,1000_QL80_.jpg",
      rating: 4.4,
      publisher: "Macmillan Publishers",
      language: "English",
      format: "Hardcover",
      pages: 1037,
      sold: 12,
    },
    {
      bookID: "19",
      title: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      category: "Fiction",
      genre: "Gothic",
      publicationDate: "1890-07-01",
      isbn: "9780486278070",
      price: 6.99,
      stock: 22,
      description: "A philosophical novel about the consequences of vanity and debauchery.",
      coverImage: "https://m.media-amazon.com/images/I/51IPe62r8gL._AC_UF1000,1000_QL80_.jpg",
      rating: 4.3,
      publisher: "Ward, Lock & Co.",
      language: "English",
      format: "Paperback",
      pages: 250,
      sold: 16,
    },
    {
      bookID: "20",
      title: "Catch-22",
      author: "Joseph Heller",
      category: "Fiction",
      genre: "Satire",
      publicationDate: "1961-11-10",
      isbn: "9780684833392",
      price: 8.99,
      stock: 27,
      description: "A satirical novel about the absurdities of war and bureaucracy.",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/9/99/Catch22.jpg",
      rating: 4.5,
      publisher: "Simon & Schuster",
      language: "English",
      format: "Paperback",
      pages: 453,
      sold: 24,
    },
    {
      bookID: "21",
      title: "A Clockwork Orange",
      author: "Anthony Burgess",
      category: "Fiction",
      genre: "Dystopian",
      publicationDate: "1962-09-21",
      isbn: "9780393312836",
      price: 7.99,
      stock: 23,
      description: "A dystopian novella about free will and the morality of violence.",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/2/23/Clockwork_orange.jpg",
      rating: 4.4,
      publisher: "W. W. Norton & Company",
      language: "English",
      format: "Paperback",
      pages: 213,
      sold: 19,
    },
    {
      bookID: "22",
      title: "The Count of Monte Cristo",
      author: "Alexandre Dumas",
      category: "Fiction",
      genre: "Adventure",
      publicationDate: "1844-08-28",
      isbn: "9780141392462",
      price: 9.49,
      stock: 26,
      description: "An adventure novel about a man's quest for revenge after being falsely imprisoned.",
      coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Louis_Fran%C3%A7ais-Dant%C3%A8s_sur_son_rocher.jpg/330px-Louis_Fran%C3%A7ais-Dant%C3%A8s_sur_son_rocher.jpg",
      rating: 4.6,
      publisher: "Pétion",
      language: "English",
      format: "Paperback",
      pages: 1243,
      sold: 21,
    },
    {
      bookID: "23",
      title: "Steve Jobs",
      author: "Walter Isaacson",
      category: "Non-fiction",
      genre: "Biography",
      publicationDate: "2011-10-24",
      isbn: "9781451648539",
      price: 13.99,
      stock: 32,
      description: "A biography of Steve Jobs, co-founder of Apple Inc.",
      coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1511288482i/11084145.jpg",
      rating: 4.6,
      publisher: "Simon & Schuster",
      language: "English",
      format: "Paperback",
      pages: 656,
      sold: 28,
    },
    {
      bookID: "24",
      title: "The Diary of a Young Girl",
      author: "Anne Frank",
      category: "Non-fiction",
      genre: "Memoir",
      publicationDate: "1947-06-25",
      isbn: "9780553296983",
      price: 7.99,
      stock: 40,
      description: "The diary of Anne Frank, a Jewish girl hiding from the Nazis during World War II.",
      coverImage: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1560816565l/48855.jpg",
      rating: 4.7,
      publisher: "Bantam Books",
      language: "English",
      format: "Paperback",
      pages: 283,
      sold: 35,
    },
    {
      bookID: "25",
      title: "The Guns of August",
      author: "Barbara W. Tuchman",
      category: "Non-fiction",
      genre: "Military History",
      publicationDate: "1962-10-05",
      isbn: "9780345476098",
      price: 11.49,
      stock: 22,
      description: "A history of the outbreak of World War I and the first month of the war.",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/8/84/TheGunsOfAugust.jpg",
      rating: 4.5,
      publisher: "Random House",
      language: "English",
      format: "Paperback",
      pages: 511,
      sold: 18,
    },
  
    {
      bookID: "27",
      title: "Cosmos",
      author: "Carl Sagan",
      category: "Non-fiction",
      genre: "Cosmology",
      publicationDate: "1980-10-01",
      isbn: "9780345539434",
      price: 14.99,
      stock: 30,
      description: "A popular science book about the universe and our place in it.",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/9/91/Cosmos_book.gif",
      rating: 4.7,
      publisher: "Random House",
      language: "English",
      format: "Paperback",
      pages: 384,
      sold: 26,
    },
    {
      bookID: "28",
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      category: "Non-fiction",
      genre: "Physics",
      publicationDate: "1988-04-01",
      isbn: "9780553380163",
      price: 10.99,
      stock: 28,
      description: "An exploration of cosmology, the nature of time, and the universe.",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/a/a3/BriefHistoryTime.jpg",
      rating: 4.6,
      publisher: "Bantam Books",
      language: "English",
      format: "Paperback",
      pages: 256,
      sold: 24,
    },
    {
      bookID: "29",
      title: "Man's Search for Meaning",
      author: "Viktor E. Frankl",
      category: "Non-fiction",
      genre: "Psychology",
      publicationDate: "1946-03-01",
      isbn: "9780807014295",
      price: 8.49,
      stock: 35,
      description: "A psychological memoir about Frankl's experiences in Nazi concentration camps.",
      coverImage: "https://media.thuprai.com/front_covers/mans-search-for-meaning.jpg",
      rating: 4.8,
      publisher: "Beacon Press",
      language: "English",
      format: "Paperback",
      pages: 184,
      sold: 30,
    },
    {
      bookID: "30",
      title: "The Power of Habit: Why We Do What We Do in Life and Business",
      author: "Charles Duhigg",
      category: "Non-fiction",
      genre: "Psychology",
      publicationDate: "2012-02-28",
      isbn: "9780812981605",
      price: 11.99,
      stock: 26,
      description: "An exploration of the science behind habits and how they can be changed.",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/7/7f/The_Power_of_Habit.jpg",
      rating: 4.5,
      publisher: "Random House",
      language: "English",
      format: "Paperback",
      pages: 416,
      sold: 22,
    },
    {
      bookID: "31",
      title: "Freakonomics: A Rogue Economist Explores the Hidden Side of Everything",
      author: "Steven D. Levitt and Stephen J. Dubner",
      category: "Non-fiction",
      genre: "Sociology",
      publicationDate: "2005-04-12",
      isbn: "9780061234002",
      price: 9.99,
      stock: 24,
      description: "An exploration of economic theory and its surprising applications in everyday life.",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/6/63/Freakonomics.jpg",
      rating: 4.4,
      publisher: "William Morrow",
      language: "English",
      format: "Paperback",
      pages: 315,
      sold: 20,
    },
    {
      bookID: "32",
      title: "The Tipping Point: How Little Things Can Make a Big Difference",
      author: "Malcolm Gladwell",
      category: "Non-fiction",
      genre: "Sociology",
      publicationDate: "2000-03-01",
      isbn: "9780316346627",
      price: 8.99,
      stock: 30,
      description: "An exploration of how small changes can create a tipping point in social trends.",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/7/73/Thetippingpoint.jpg",
      rating: 4.7,
      publisher: "Little, Brown and Company",
      language: "English",
      format: "Paperback",
      pages: 301,
      sold: 25,
    },
    {
      bookID: "33",
      title: "The Autobiography of Malcolm X",
      author: "Malcolm X and Alex Haley",
      category: "Non-fiction",
      genre: "Biography",
      publicationDate: "1965-10-29",
      isbn: "9780345376718",
      price: 9.99,
      stock: 28,
      description: "The autobiography of Malcolm X, civil rights activist and leader.",
      coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/The_Autobiography_of_Malcolm_X_%281st_ed_dust_jacket_cover%29.jpg/330px-The_Autobiography_of_Malcolm_X_%281st_ed_dust_jacket_cover%29.jpg",
      rating: 4.8,
      publisher: "Ballantine Books",
      language: "English",
      format: "Paperback",
      pages: 460,
      sold: 24,
    },
    {
      bookID: "34",
      title: "Educated",
      author: "Tara Westover",
      category: "Non-fiction",
      genre: "Biography",
      publicationDate: "2018-02-20",
      isbn: "9780399590504",
      price: 11.49,
      stock: 32,
      description: "A memoir about overcoming a difficult upbringing to pursue education.",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/1/1f/Educated_%28Tara_Westover%29.png",
      rating: 4.7,
      publisher: "Random House",
      language: "English",
      format: "Paperback",
      pages: 400,
      sold: 26,
    },
    {
      bookID: "35",
      title: "The Rise and Fall of the Third Reich: A History of Nazi Germany",
      author: "William L. Shirer",
      category: "Non-fiction",
      genre: "History",
      publicationDate: "1960-10-12",
      isbn: "9781451651683",
      price: 14.99,
      stock: 30,
      description: "A comprehensive history of Nazi Germany from its rise to fall.",
      coverImage: "https://upload.wikimedia.org/wikipedia/commons/f/f1/William_L._Shirer_-_The_Rise_and_Fall_of_the_Third_Reich.jpg",
      rating: 4.6,
      publisher: "Simon & Schuster",
      language: "English",
      format: "Paperback",
      pages: 1280,
      sold: 28,
    },
    {
      bookID: "36",
      title: "1491: New Revelations of the Americas Before Columbus",
      author: "Charles C. Mann",
      category: "Non-fiction",
      genre: "History",
      publicationDate: "2005-08-09",
      isbn: "9781400032051",
      price: 12.99,
      stock: 26,
      description: "An exploration of pre-Columbian America and its civilizations.",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/b/b7/1491-cover.jpg",
      rating: 4.5,
      publisher: "Vintage Books",
      language: "English",
      format: "Paperback",
      pages: 541,
      sold: 22,
    },
    {
      bookID: "37",
      title: "The Selfish Gene",
      author: "Richard Dawkins",
      category: "Non-fiction",
      genre: "Science",
      publicationDate: "1976-11-16",
      isbn: "9780192860927",
      price: 10.99,
      stock: 25,
      description: "A book on evolution by biologist Richard Dawkins, focusing on the gene's role.",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/a/a2/The_Selfish_Gene3.jpg",
      rating: 4.7,
      publisher: "Oxford University Press",
      language: "English",
      format: "Paperback",
      pages: 352,
      sold: 20,
    },
    {
      bookID: "38",
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      category: "Non-fiction",
      genre: "Science",
      publicationDate: "2011-02-10",
      isbn: "9780062316097",
      price: 12.99,
      stock: 40,
      description: "Explores the history of Homo sapiens.",
      coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1703329310i/23692271.jpg",
      rating: 4.5,
      publisher: "Harper",
      language: "English",
      format: "Paperback",
      pages: 464,
      sold: 18,
    },
    {
      bookID: "39",
      title: "Quiet: The Power of Introverts in a World That Can't Stop Talking",
      author: "Susan Cain",
      category: "Non-fiction",
      genre: "Psychology",
      publicationDate: "2012-01-24",
      isbn: "9780307352156",
      price: 9.49,
      stock: 35,
      description: "Explores the power and advantages of introverts in a society that values extroversion.",
      coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328562861i/8520610.jpg",
      rating: 4.6,
      publisher: "Broadway Books",
      language: "English",
      format: "Paperback",
      pages: 368,
      sold: 30,
    },
    {
      bookID: "40",
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      category: "Non-fiction",
      genre: "Psychology",
      publicationDate: "2011-10-25",
      isbn: "9780374533557",
      price: 13.99,
      stock: 30,
      description: "Explores the two systems that drive the way we think: fast, intuitive thinking and slower, logical thinking.",
      coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1317793965i/11468377.jpg",
      rating: 4.4,
      publisher: "Farrar, Straus and Giroux",
      language: "English",
      format: "Paperback",
      pages: 512,
      sold: 25,
    },
    {
      bookID: "41",
      title: "The Immortal Life of Henrietta Lacks",
      author: "Rebecca Skloot",
      category: "Non-fiction",
      genre: "Sociology",
      publicationDate: "2010-02-02",
      isbn: "9781400052189",
      price: 11.99,
      stock: 28,
      description: "Tells the story of Henrietta Lacks and the immortal cell line known as HeLa.",
      coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327878144i/6493208.jpg",
      rating: 4.7,
      publisher: "Broadway Books",
      language: "English",
      format: "Paperback",
      pages: 400,
      sold: 24,
    },
    {
      bookID: "42",
      title: "Evicted: Poverty and Profit in the American City",
      author: "Matthew Desmond",
      category: "Non-fiction",
      genre: "Sociology",
      publicationDate: "2016-03-01",
      isbn: "9780553447453",
      price: 14.49,
      stock: 26,
      description: "Examines the impact of eviction on poverty in America's cities.",
      coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442840968i/25852784.jpg",
      rating: 4.8,
      publisher: "Crown Publishing Group",
      language: "English",
      format: "Paperback",
      pages: 448,
      sold: 22,
    },
]
export default bookstoreData;
