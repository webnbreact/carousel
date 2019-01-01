/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable no-var */
const faker = require('faker');
const mongoose = require('mongoose');
// const Promise = require('bluebird');

mongoose
  .connect(
    'mongodb://localhost:27017/carousel',
    { useNewUrlParser: true },
    () => {
      mongoose.connection.dropCollection('pictures', () => {
        console.log('pictures dropped');
      });
    },
  )
  .then(() => {
    var roomPicturesSchema = new mongoose.Schema(
      {
        name: {
          type: String,
        },
        abstract: {
          type: String,
        },
        image_url: {
          type: [String],
        },
        room_id: {
          type: Number,
        },
      },
      { timestamps: true },
    );

    const pictureMaker = mongoose.model('picture', roomPicturesSchema);
    const collections = [];

    const imageOptions = [
      'animals',
      'business',
      'cats',
      'city',
      'food',
      'nightlife',
      'fashion',
      'people',
      'nature',
      'sports',
      'technics',
      'transport',
    ];

    for (let i = 0; i < 100; i++) {
      const temp = [];
      for (let j = 0; j < 14; j++) {
        const currUrl = faker.image[imageOptions[j % imageOptions.length]]();
        temp.push(currUrl);
      }
      // eslint-disable-next-line vars-on-top
      var obj = {
        name: faker.name.findName(),
        abstract: faker.image.abstract(),
        image_url: temp,
        room_id: i,
      };
      collections.push(obj);
    }
    console.log(collections);
    pictureMaker.create(collections).then(function () {
      mongoose.connection.close();
    });
  });
