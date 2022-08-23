function updateViewProjects(){
    let html = '';

    html += `
    <div class="header">${Header()}</div>

    <div class="middle">
    <br>
    Her er noen av prosjektene jeg har laget, og vært med på å lage:
    <br>
    <br>
    <a href="https://scarecrow2905.github.io/M2-DanskenOgMeg"/><onclick class="btn" type=button text=''> Hjemmeside</a>


   
    </div>

    <div class="footer">${Footer()}</div>

`

    return html;
}

