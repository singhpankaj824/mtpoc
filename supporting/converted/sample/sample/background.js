var mb_page=[{
 	"heading": "article1",
 	"content": "ct1",
	"id": "b9ec1d34-a2dd-9139-41fd-3614e83300a4",
 	"sub": [{
 		"heading": "article1_subarticle",
 		"content": "article1_subarticle",
		"id": "b45a8513-a4b6-d5bd-f5e5-f94beeadd516",
 		"sub": [{
 			"heading": "article1_subarticle_article1_subarticle",
 			"content": "article1_subarticle",
			"id": "88397416-9c51-e545-8b5c-d5f15fca308f",
 			"sub": []
 		}]
 	}]
 }, {
 	"heading": "article2",
 	"content": "article2-content",
	"id": "1c2c0bbf-716d-8aec-ebc9-ab570d8345f7",
 	"sub": [{
 		"heading": "article2_subarticle",
 		"content": "article2-content",
		"id": "d90eb1f2-0851-a8d1-4ccd-78e9db9b2a8f",
 		"sub": []
 	}]
 }];

var getHTMLOfSelection = function() {
  var range;
  if (document.selection && document.selection.createRange) {
    range = document.selection.createRange();
    return range.htmlText;
  }
  else if (window.getSelection) {
    var selection = window.getSelection();
    if (selection.rangeCount > 0) {
      range = selection.getRangeAt(0);
      var clonedSelection = range.cloneContents();
      var div = document.createElement('div');
      div.appendChild(clonedSelection);
      return div.innerHTML;
    }
    else {
      return '';
    }
  }
  else {
    return '';
  }
}

 
var storeContentToIndexJson= function(indexJson, e){
	indexJson.forEach(function(item, index){
		
		var parentMenuItemId = e.parentMenuItemId;
		var selectedContent = getHTMLOfSelection()//e.selectionText;
		
		if(parentMenuItemId != undefined && parentMenuItemId != ""){
			
			var parentHeading = parentMenuItemId.split("MTID")[0];
			var parentId = parentMenuItemId.split("MTID")[1];
			
			if(parentHeading.toLowerCase() == item.heading.toLowerCase() && parentId.toLowerCase() == item.id.toLowerCase()){
				item.content = selectedContent;
				return;
			}
		}
		if(item.sub.length>0){
			storeContentToIndexJson(item.sub, e);
		}
	});
};
 
var selectionClickHandler = function(e)
{
	storeContentToIndexJson(mb_page, e);
};
 
var generateContextMenu = function(indexJson, parentId){
	indexJson.forEach(function(item, index){
		chrome.contextMenus.create({
			"id":item.heading +"MTID"+item.id,
			"title": item.heading,
			"contexts": ["selection", "link", "image"],
			"parentId":parentId,
			"onclick" : selectionClickHandler
		});
		chrome.contextMenus.create({
			"title": "Content",
			"contexts": ["selection", "link", "image"],
			"parentId":item.heading+"MTID"+item.id,
			"onclick" : selectionClickHandler
		});
		if(item.sub.length>0){
			generateContextMenu(item.sub, (item.heading+"MTID"+item.id));
		}
	});
};

chrome.contextMenus.create({
	"id":"contentMapping",
	"title": "Content Mapper",
	"contexts": ["selection", "link", "image"]
});

generateContextMenu(mb_page, "contentMapping"); 

