chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var opt = {
    iconUrl: "pp.png",
    type: "list",
    title: "Trade Alert",
    message: "Take a trade",
    priority: 1,
    items: [
      { title: "New Trade", message: request.data },
      { title: "On", message: new Date().toLocaleString() },
    ],
  };
  chrome.notifications.create("notify1", opt, function () {
    console.log("created!");
  });
});
