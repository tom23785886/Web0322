function getPositionXY(element) { 
    var rect = element.getBoundingClientRect(); 
    document.getElementById('text').innerHTML  
    = 'X: ' + rect.x + '<br>' + 'Y: ' + rect.y; 
} 