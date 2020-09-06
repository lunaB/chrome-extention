chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.url) {
        console.log(changeInfo.url)

        chrome.storage.sync.set({'url': ''}, function () {
            // 저장 완료
        });
    }
});