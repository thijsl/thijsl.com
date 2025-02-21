module.exports = function(eleventyConfig) {
  // Copy the "assets" directory to the output
  eleventyConfig.addPassthroughCopy("assets");
  
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
}; 