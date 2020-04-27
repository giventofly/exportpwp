# Planeswalker points Exporter

## steps	

### smallnotes

* [wizards](https://magic.gg/news/sunsetting-planeswalker-points) announced that they will erase ALL your match history.
* you can import a .csv file into excel, libreoffice calc, or any other sheet processor
* Errors/bugs found will be fixed upon discovering  them

### updates
* forgot to include the total number of players per event, it has been added.


### step 1

Open [https://www.wizards.com/Magic/PlaneswalkerPoints/History](laneswalkerPoints/History) after you are logged in in the pwp website.

### step 2

Open your browser tools and go to console (F12)

### step 3

Copy and paste this code in the console and press enter/run (it will take sometime loading all the events):

    document.querySelectorAll('a.Expand').forEach(a=>{
      a.focus();
      a.click();
    });

After everything is loaded/open copy and paste this code:
    
       let content = '"date","description","store","points","pro points","multiplier","total event players","format","place","store","round number","result","opponent"\r\n';
    document.querySelectorAll('.HistoryPanelRow').forEach(row=>{
      //console.log(content);
      const date = row.querySelector('.Date').innerText.trim() || "";
      const description = row.querySelector('.Description').innerText.trim() || "";
      const location = row.querySelector('.Location').innerText.trim() || "";
      const lifetimepoints = row.querySelector('.LifetimePoints').innerText.trim() || "";
      const propoints = row.querySelector('.ProPoints').innerText.trim() || "";
      const multiplier = row.querySelector('.EventMultiplier') ? row.querySelector('.EventMultiplier').innerText.trim() : "";
      const totalPlayers = row.querySelector('.EventPlayers') ? row.querySelector('.EventPlayers').innerText.trim() : "";
      const eventFormat = row.querySelector('.EventFormat') ? row.querySelector('.EventFormat').innerText.trim() : "";
      const eventLocation = row.querySelector('.EventLocation') ? row.querySelector('.EventLocation').innerText.trim() : "";
      const place = row.querySelector('.EventPlace') ? row.querySelector('.EventPlace').innerText.trim() : "";
      row.querySelectorAll('.MatchHistoryTable .MatchHistoryRow').forEach(match=>{
        const roundNumber = match.querySelector('.MatchPlace') ? match.querySelector('.MatchPlace').innerText.trim() : "";
        const result = match.querySelector('.MatchResult') ? match.querySelector('.MatchResult').innerText.trim() : "";
        const opp = match.querySelector('.MatchOpponent') ? match.querySelector('.MatchOpponent').innerText.trim() : "";
        content += `"${date}","${description}","${location}","${lifetimepoints}","${propoints}","${multiplier}","${totalPlayers}","${eventFormat}","${eventLocation}","${place}","${roundNumber}","${result}","${opp}"\r\n`;
      });
    });

    let link = document.createElement('a')
    link.id = 'download-csv'
    link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    link.setAttribute('download', 'pwp.export.csv');
    document.body.appendChild(link)
    document.querySelector('#download-csv').click();

___
**If you have an older browser <safari10, <2017 use this minified and transpilled code**:

    document.querySelectorAll("a.Expand").forEach(function(e){e.focus(),e.click()});

and after everything is loaded:

       var content='"date","description","store","points","pro points","multiplier","total event players","format","place","store","round number","result","opponent"\r\n';document.querySelectorAll(".HistoryPanelRow").forEach(function(e){var t=e.querySelector(".Date").innerText.trim()||"",r=e.querySelector(".Description").innerText.trim()||"",n=e.querySelector(".Location").innerText.trim()||"",c=e.querySelector(".LifetimePoints").innerText.trim()||"",o=e.querySelector(".ProPoints").innerText.trim()||"",i=e.querySelector(".EventMultiplier")?e.querySelector(".EventMultiplier").innerText.trim():"",l=e.querySelector(".EventPlayers")?e.querySelector(".EventPlayers").innerText.trim():"",a=e.querySelector(".EventFormat")?e.querySelector(".EventFormat").innerText.trim():"",u=e.querySelector(".EventLocation")?e.querySelector(".EventLocation").innerText.trim():"",y=e.querySelector(".EventPlace")?e.querySelector(".EventPlace").innerText.trim():"";e.querySelectorAll(".MatchHistoryTable .MatchHistoryRow").forEach(function(e){var m=e.querySelector(".MatchPlace")?e.querySelector(".MatchPlace").innerText.trim():"",s=e.querySelector(".MatchResult")?e.querySelector(".MatchResult").innerText.trim():"",q=e.querySelector(".MatchOpponent")?e.querySelector(".MatchOpponent").innerText.trim():"";content+='"'.concat(t,'","').concat(r,'","').concat(n,'","').concat(c,'","').concat(o,'","').concat(i,'","').concat(l,'","').concat(a,'","').concat(u,'","').concat(y,'","').concat(m,'","').concat(s,'","').concat(q,'"\r\n')})});var link=document.createElement("a");link.id="download-csv",link.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(content)),link.setAttribute("download","pwp.export.csv"),document.body.appendChild(link),document.querySelector("#download-csv").click();
___

### step 4

A .csv file with all the info should be downloading (might take sometime according to your browser/processor).

### step 5

Import to your favorite spreasheet processor and do whatever you want with it :)



____

#### shamefull plug
If you made this far and like stats, you can go visit [mtgmeta.io](https://mtgmeta.io)


