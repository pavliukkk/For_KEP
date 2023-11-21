var tab;
var tabContent;

window.onload=function(){
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
    generate();
    generatePadding();
    generatePosition();
}

function hideTabsContent(a){
    for(var i = a; i<tabContent.length; i++){
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}

document.getElementById('tabs').onclick= function(event){
    var target = event.target;
    if (target.className == 'tab'){
        for(var i = 0; i< tab.length; i++){
            if(target == tab[i]){
                showTabsContent(i);
                break;
            }
        }
    }
}

function showTabsContent(b){
    if(tabContent[b].classList.contains('hide')){
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}

function generate(){
    var rtl = document.getElementById('rtl').value;
    var rtr = document.getElementById('rtr').value;
    var rbr = document.getElementById('rbr').value;
    var rbl = document.getElementById('rbl').value;

    var ttl = document.getElementById('ttl');
    var ttr = document.getElementById('ttr');
    var tbr = document.getElementById('tbr');
    var tbl = document.getElementById('tbl');

    var block = document.getElementById('block');

    var codeText = document.getElementById('codeText');

    ttl.value = rtl;
    ttr.value = rtr;
    tbr.value = rbr;
    tbl.value = rbl;
    

    cssCode = rtl + "px " + rtr + "px " + rbr + "px " + rbl + "px";

    codeText.textContent = "border-radius: "+  cssCode + ";";
    block.style.borderRadius = cssCode;
    
}

function generatePadding() {
    var rPadTop = document.getElementById('rPadTop').value;
    var rPadRight = document.getElementById('rPadRight').value;
    var rPadBottom = document.getElementById('rPadBottom').value;
    var rPadLeft = document.getElementById('rPadLeft').value;

    var tPadTop = document.getElementById('tPadTop');
    var tPadRight = document.getElementById('tPadRight');
    var tPadBottom = document.getElementById('tPadBottom');
    var tPadLeft = document.getElementById('tPadLeft');

    var blockPad = document.querySelector('.blockPad');
    var codeTextPad = document.getElementById('codeTextPad');

    tPadTop.value = rPadTop;
    tPadRight.value = rPadRight;
    tPadBottom.value = rPadBottom;
    tPadLeft.value = rPadLeft;

    cssCode = rPadTop + "px " + rPadRight + "px " + rPadBottom + "px " + rPadLeft + "px";

    codeTextPad.textContent = "padding: " + cssCode + ";";
    blockPad.style.padding = cssCode;
}

function generatePosition() {
    var positionSelect = document.getElementById('positionSelect');
    var rTop = document.getElementById('rTop').value;
    var rRight = document.getElementById('rRight').value;
    var rBottom = document.getElementById('rBottom').value;
    var rLeft = document.getElementById('rLeft').value;

    var tTop = document.getElementById('tTop');
    var tRight = document.getElementById('tRight');
    var tBottom = document.getElementById('tBottom');
    var tLeft = document.getElementById('tLeft');

    var blockPosition = document.getElementById('blockPosition');
    var codeTextPosition = document.getElementById('codeTextPosition');

    tTop.value = rTop;
    tRight.value = rRight;
    tBottom.value = rBottom;
    tLeft.value = rLeft;

    var selectedValue = positionSelect.value;
    cssCode = selectedValue + ": " + rTop + "px " + rRight + "px " + rBottom + "px " + rLeft + "px";

    codeTextPosition.textContent = "position: " + cssCode + ";";
    blockPosition.style.position = selectedValue;
    blockPosition.style.top = rTop + "px";
    blockPosition.style.right = rRight + "px";
    blockPosition.style.bottom = rBottom + "px";
    blockPosition.style.left = rLeft + "px";
}
