
function getPage(){
    var arr = [], l = document.links;
    for(var i=0; i<l.length; i++) {
        if (l[i].href.includes(".zip")) {
            arr.push(l[i].href);            
        }
    }
    return arr;
}
getPage();