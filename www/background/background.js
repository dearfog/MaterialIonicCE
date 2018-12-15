chrome.runtime.onMessage.addListener(function (arg, sender, sendResponse) {
    console.log(arg);    
    chrome.downloads.download({
        url: arg.link
    });
});
