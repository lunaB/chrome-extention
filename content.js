chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'hello!') {
        console.log(request.url)
    }
});