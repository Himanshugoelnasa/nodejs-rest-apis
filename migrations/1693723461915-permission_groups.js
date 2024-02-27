import connectDB from '../app/database/connect.js';
connectDB();

import Model from '../app/models/PermissionGroups.js';

module.exports = {
  up: async () => {
    await Model.createCollection();
  },
  down: async () => {
    await Model.collection.drop();
  },
};
