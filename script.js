function switchStyles() {
    let linkTag = document.getElementsByTagName('link')[0];
    let currentStylesheet = linkTag.href.replace(/^.*[\\\/]/, '');
    let newStylesheet = this.options[this.selectedIndex].value + '.css';

    linkTag.href = linkTag.href.replace(currentStylesheet, newStylesheet);
}

let optionSelected = document.getElementById('themes');
optionSelected.addEventListener('click', switchStyles);
