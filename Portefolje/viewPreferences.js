function updateViewPreferences(){
    let html = '';

    html += `
    <div class="header">${Header()}</div>

    <div class="middle">
    <br>
    Jeg liker veldig godt å jobbe med front-end utvikling. Da dette er noe jeg synes er morsomt.
    <br>
    Samtidig er det en glede å se endringene man legger inn i et prosjekt. Og man ser at man faktisk bygger noe fra start, til slutt.
    <br>
    Tror mine foretrukne kodespråk er HTML, Javascript og CSS. 
    <br> 
    Men det er mye mer jeg kunne tenke meg å lære, da jeg først blir tryggere på disse områdene.
    </div>

    <div class="footer">${Footer()}</div>

    
`

    return html;
}