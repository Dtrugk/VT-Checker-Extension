// Search Hash -------------------------------------------------------------------------------------------------------------
var contextMenuItem00 = {
    "id": "VirusTotal Search File",
    "title": "File Hash",
    "contexts": ["selection"]
};

// Search IP ---------------------------------------------------------------------------------------------------------------
var contextMenuItem01 = {
    "id": "VirusTotal check IP",
    "title": "IP address",
    "contexts": ["selection"]
};

// Search Domain -----------------------------------------------------------------------------------------------------------
var contextMenuItem02 = {
    "id": "VirusTotal Search Domain",
    "title": "Domain",
    "contexts": ["selection"]
};

// Create context menu items
chrome.contextMenus.create(contextMenuItem00);
chrome.contextMenus.create(contextMenuItem01);
chrome.contextMenus.create(contextMenuItem02);

// Single onClicked listener
chrome.contextMenus.onClicked.addListener(function (clickData) {
    if (clickData.selectionText) {
        let newURL;

        switch (clickData.menuItemId) {
            case "VirusTotal Search File":
                newURL = 'https://www.virustotal.com/gui/file/' + encodeURIComponent(clickData.selectionText);
                break;
            case "VirusTotal Search IP":
                newURL = 'https://www.virustotal.com/gui/ip-address/' + encodeURIComponent(clickData.selectionText);
                break;
            case "VirusTotal Search Domain":
                newURL = 'https://www.virustotal.com/gui/domain/' + encodeURIComponent(clickData.selectionText);
                break;
            default:
                return; 
        }

        chrome.tabs.create({ url: newURL });
    }
});


// Creator: GPT-4 (Code :D) + Kiendt19 (idea) :D 