const path = require("path");

const root = path.join(__dirname, "..");
const public = path.join(root, "public");
const config = path.join(root, "config");
const src = path.join(root, "src");
const index = path.join(public, "index.html");

module.exports = {
  root,
  public,
  config,
  src,
  index,
};
