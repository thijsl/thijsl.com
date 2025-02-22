const embedYouTube = require("eleventy-plugin-youtube-embed");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy({"img/favicon.ico": "/"});
  eleventyConfig.addPlugin(embedYouTube);
  
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
}; 