
const myBooks = [
    { age: 'Adult', genre: 'Urban Fantasy', pages: 350, published: true, status: 'Published', title: 'The Blood That Bonds', yearFinished: 2009, yearPublished: 2009 },
    { age: 'Adult', genre: 'Urban Fantasy', pages: 489, published: true, status: 'Published', title: 'Blood Hunt', yearFinished: 2011, yearPublished: 2011 },
    { age: 'Adult', genre: 'Urban Fantasy', pages: 510, published: true, status: 'Published', title: 'The Children of the Sun', yearFinished: 2012,yearPublished: 2012 },
    { age: 'Young Adult', genre: 'Science Fiction', pages: 341, published: true, status: 'Published', title: 'The Broken God Machine', yearFinished: 2013, yearPublished: 2013 },
    { age: 'Middle Grade', genre: 'Urban Fantasy', pages: 280, published: false, status: 'Trunked', title: 'The Werewolf at the Window', yearFinished: 2013, yearPublished: 0 },
    { age: 'Adult', genre: 'Thriller', pages: 395, published: true, status: 'Published', title: 'Elixir', yearFinished: 2014, yearPublished: 2018 },
    { age: 'Adult', genre: 'Sci-Fi / Horror', pages: 430, published: false, status: 'Trunked', title: 'Pulse', yearFinished: 2015, yearPublished: 0 },
    { age: 'Adult', genre: 'Space Opera', pages: 380, published: false, status: 'Shopping to Agents', title: 'Divergence Point', yearFinished: 2017, yearPublished: 0 },
    { age: 'Adult', genre: 'Urban Fantasy', pages: 350, published: false, status: 'Shopping to Agents', title: 'Possessed', yearFinished: 2019, yearPublished: 0 },
  ];

  document.addEventListener('DOMContentLoaded', () => {
    // get the table body and select dropdown items
    const tbody = document.getElementById('bookList');
    const select = document.getElementById('select');

    // On load
    fillData('all', tbody);

    // On Change selected option
    select.addEventListener('change', e => {
        fillData(select.value, tbody);
    });
  });


  const fillData = (selecVal, tbody) => {
    let bookList = myBooks;

    // show all or just published?
    if (selecVal === 'published') {
        bookList = myBooks.filter(book => book.published);
    }

    
  }