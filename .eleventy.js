module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy('src/styles');
  return{
    dir:{
      input: "src",
      output: "_site"
    }
  }
};