module.exports = function (eleventyConfig){
    //copy dirs
    eleventyConfig.addPassthroughCopy ("src/images");
    eleventyConfig.addPassthroughCopy ("src/fonts");

    //dirs
    return{
        dir:{
            input: "src",
            output: "public"
        },
    };
};