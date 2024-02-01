document.getElementById('copyToClipboard').onclick = function () {
    var copyText = 'sumedh.udar2000@gmail.com';
    var text = document.getElementById('toolText');

    // Select the text field
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);
    text.setAttribute('style', 'animation: copied 0.1s forwards; color: #2D2D2D;')
    text.innerHTML = 'Copied';
    const myTimeout = setTimeout(textnormal, 1000);
}

function textnormal() {
    var text = document.getElementById('toolText');

    text.innerHTML = 'Copy To Clipboard';
    text.removeAttribute('style');
}