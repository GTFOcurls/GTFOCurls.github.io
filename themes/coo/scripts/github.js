hexo.extend.helper.register("request_cheatsheet", function () {
    return `https://github.com/GTFOcurls/GTFOCurls.github.io/issues/new?title=Cheatsheet+request%3A+&labels=request&template=cheatsheet-request.md`;
});

hexo.extend.helper.register("contributing", function () {
    return `https://github.com/GTFOcurls/GTFOCurls.github.io`;
});


hexo.extend.helper.register("edit_page", function () {
    let postPage = this.page['layout'] === 'post';
    let url = "https://github.com/GTFOcurls/GTFOCurls.github.io";
    if (postPage) {
        url += `/blob/main/source/_posts/${this.page.slug}.md`;
    }
    return url;
});