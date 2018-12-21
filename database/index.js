const mongoose = require('mongoose');

const picturesSchema = require('./schemas/Pictures.Schema');

mongoose.connect(
  'mongodb://localhost:27017/carousel',
  { useNewUrlParser: true },
);

const PicturesSchema = new mongoose.Schema(picturesSchema, { timestamps: true });

var PicturesModel = mongoose.model('pictures', PicturesSchema);

// PicturesModel.estimatedDocumentCount({}, (err, count) => {
//   console.log(count);
// }).then(() => {
//   mongoose.connection.close();
// });

// console.log(count);
const findPicturesByRoomId = (roomNumber) => {
  return PicturesModel.findOne({ room_id: roomNumber }).then((data) => {
    return data;
  })
}
module.exports = {
  PicturesModel,
  findPicturesByRoomId
};
