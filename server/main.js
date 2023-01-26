import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import { BooksCollection } from '../imports/api/BooksCollection';

async function insertLink({ title, url }) {
  await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
}

function insertBook({title, image, description}) {
   BooksCollection.insert({title, description});
}

Meteor.startup(async () => {
  if (BooksCollection.find().count() === 0) {
    insertBook({title:'Contacto',image:'Image', description:'Libro de Carl Sagan'});
  }
});
