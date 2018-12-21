const picturesSchema = {
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
};

module.exports = picturesSchema;
