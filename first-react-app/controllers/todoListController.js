module.exports = {
    index: function* (scope) {
        // 这里的index，指的是views/channelLeadsReport/index.html页面
        yield this.render("index");
    },
}