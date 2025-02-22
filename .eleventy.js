module.exports = function(eleventyConfig) {
  // Copy the "assets" directory to the output
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy({"img/favicon.ico": "/"});
  
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
}; 