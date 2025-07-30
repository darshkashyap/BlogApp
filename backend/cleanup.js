// cleanup.js
const mongoose = require('mongoose');
const { Blog } = require('./model');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL)
  .then(async () => {
    const result = await Blog.deleteMany({ author: { $exists: false } });
    console.log(`🧹 Deleted ${result.deletedCount} blog(s) without author.`);
    process.exit();
  })
  .catch(err => {
    console.error('❌ Cleanup error:', err);
    process.exit(1);
  });
