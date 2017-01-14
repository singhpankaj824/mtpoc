var mb_page={
	"Headings":{
		"H1":{
			"Text":"",
			"Link":"",
		},
		"H2":[],
		"H3":[],
		"H4":[],
		"H5":[],
		"H6":[]
	},
	
	"Content":[],
	
	"Links":[],
};

var contentClickHandler = function(e) {
	var url = e.pageUrl;
	var selectedContent = "";
	if (e.selectionText) {
		// The user selected some text, put this in the message.
		selectedContent = e.selectionText;
	}	
	alert("Selected Content: " + selectedContent);
};
		
var headingClickHandler = function(e) {
	var url = e.pageUrl;
	var selectedHeading = "";

	if (e.selectionText) {
		// The user selected some text, put this in the message.
		selectedHeading = e.selectionText;
	}
			
	alert("Selected Heading: " + selectedHeading);
};

chrome.contextMenus.create({
	"id":"mbHeading",
	"title": "Heading",
	"contexts": ["selection", "image", "link"],
	"onclick" : headingClickHandler
});
chrome.contextMenus.create({
	"id":"mbHeadingH1",
	"title": "H1",
	"contexts": ["selection", "image", "link"],
	"parentId":"mbHeading",
	"onclick" : headingClickHandler
});
chrome.contextMenus.create({
	"id":"mbHeadingH1Text",
	"title": "Text",
	"contexts": ["selection", "image", "link"],
	"parentId":"mbHeadingH1",
	"onclick" : headingClickHandler
});
chrome.contextMenus.create({
	"id":"mbHeadingH1Link",
	"title": "Link",
	"contexts": ["selection", "link"],
	"parentId":"mbHeadingH1",
	"onclick" : headingClickHandler
});
chrome.contextMenus.create({
	"id":"mbHeadingH2",
	"title": "H2",
	"contexts": ["selection"],
	"parentId":"mbHeading",
	"onclick" : headingClickHandler
});
chrome.contextMenus.create({
	"id":"mbHeadingH3",
	"title": "H3",
	"contexts": ["selection"],
	"parentId":"mbHeading",
	"onclick" : headingClickHandler
});

chrome.contextMenus.create({
	"id":"mbHeadingH4",
	"title": "H4",
	"contexts": ["selection"],
	"parentId":"mbHeading",
	"onclick" : headingClickHandler
});
chrome.contextMenus.create({
	"id":"mbHeadingH5",
	"title": "H5",
	"contexts": ["selection"],
	"parentId":"mbHeading",
	"onclick" : headingClickHandler
});
chrome.contextMenus.create({
	"id":"mbHeadingH6",
	"title": "H6",
	"contexts": ["selection"],
	"parentId":"mbHeading",
	"onclick" : headingClickHandler
});

chrome.contextMenus.create({
	"id":"mbContent",
	"title": "Content",
	"contexts": ["selection"],
	"onclick" : contentClickHandler
});

chrome.contextMenus.create({
	"title": "Generate Profiling json",
	"contexts": ["page"],
	"onclick" : generateJsonClickHandler
});		  