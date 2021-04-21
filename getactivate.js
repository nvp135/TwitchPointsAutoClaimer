var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;if (MutationObserver) 
var observer = new MutationObserver(function(mutations) {
    setTimeout(function () {
        var bonus = document.getElementsByClassName('claimable-bonus__icon');
        for (var i = 0;i<bonus.length;i++) {
            if (i == 0) console.log('Claimed!');
            	bonus[i].click();
            }
    }, Math.random() * 1000 + 2500);
});
observer.observe(document.body, {childList: true, subtree: true});
console.log('Auto claimer is enabled.');