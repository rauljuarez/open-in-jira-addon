var contextMenu = require("sdk/context-menu");
var self = require("sdk/self");
var tabs = require("sdk/tabs");

var menuItem = contextMenu.Item({
  label: "Open in Jira",
  image: self.data.url("jira.png"),
  context: contextMenu.SelectionContext(),
  contentScript: 'self.on("click", function () {' +
                 '  var text = window.getSelection().toString();' +
                 '  self.postMessage(text);' +
                 '});',
  onMessage: function (selectionText) {
	var url = "https://photorank.atlassian.net/browse/";
  	tabs.open(url + selectionText);

  }
});