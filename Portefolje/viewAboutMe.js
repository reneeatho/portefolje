function updateViewAboutMe(){
    let html = '';

    html += `

    <div class="header">${Header()}</div>
    
    <div class="middle"> 
    <img class="myself" src="renee.jpg"/>
    <br>
    Frøken på 35 år som fant programmering da jeg ble omskolert via Nav.
    <br>
    På fritiden liker jeg å gå turer med hunden, være ute i skog og mark og dra på overnattingsturer.
    <br>
    Er også veldig glad i å ta bilder. Trykk gjerne på Instagram-knappen i bunnen her, for å se kamera-resultater!
    </div>

    <div class="footer">${Footer()}</div>
`

    return html;
}