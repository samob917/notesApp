

export function clearDiv(div) {
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
}