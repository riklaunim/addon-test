module.exports = {
  normalizeEntityName: function() {},
  afterInstall: function() {
    var self = this;
    return this.addBowerPackageToProject("admin-lte", "2.3.5").then(function () {
        self.addBowerPackageToProject("font-awesome", "4.6.3");
    });
  }
};
