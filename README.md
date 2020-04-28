# Planeswalker points Exporter

## steps	

### smallnotes

* [wizards](https://magic.gg/news/sunsetting-planeswalker-points) announced that they will erase ALL your match history.
* you can import a .csv file into excel, libreoffice calc, or any other sheet processor
* Errors/bugs found will be fixed upon discovering  them

### updates
* forgot to include the total number of players per event, it has been added.
* column order fixed, and removed repeated store info
* 28, April 2020
* fixed error on the table header
* fixed names that contained " in them
* team opponents should be correctly tracked now


### step 1

Open [https://www.wizards.com/Magic/PlaneswalkerPoints/History](https://www.wizards.com/Magic/PlaneswalkerPoints/History) after you are logged in in the pwp website.


### step 2

Open your browser tools and go to console (F12)

### step 3

Copy and paste this code in the console and press enter/run (it will take sometime loading all the events):

    document.querySelectorAll('a.Expand').forEach(a=>{
      a.focus();
      a.click();
    });

if you also have teamevents please do this after and wait until it finishes:
    
    document.querySelectorAll('.MatchOpponentTeamExpand a').forEach(a=>{
       a.focus();
       a.click();
    });

After everything is loaded/open copy and paste this code:
 ```  
       let content = '"date","description","store","location","points","pro points","multiplier","total event players","format","place","round number","result","opponent"\r\n';
document.querySelectorAll('.HistoryPanelRow').forEach(row=>{
  //console.log(content);
  const date = row.querySelector('.Date').innerText.trim() || "";
  const description = row.querySelector('.Description').innerText.trim().replace(/"/g,'\"') || "";
  const location = row.querySelector('.Location').innerText.trim().replace(/"/g,'\"') || "";
  const lifetimepoints = row.querySelector('.LifetimePoints').innerText.trim() || "";
  const propoints = row.querySelector('.ProPoints').innerText.trim() || "";
  const multiplier = row.querySelector('.EventMultiplier') ? row.querySelector('.EventMultiplier').innerText.trim() : "";
  const totalPlayers = row.querySelector('.EventPlayers') ? row.querySelector('.EventPlayers').innerText.trim() : "";
  const eventFormat = row.querySelector('.EventFormat') ? row.querySelector('.EventFormat').innerText.trim() : "";
  const eventLocation = row.querySelector('.EventLocation') ? row.querySelector('.EventLocation').innerText.trim().replace(/"/g,'\"') : "";
  const place = row.querySelector('.EventPlace') ? row.querySelector('.EventPlace').innerText.trim() : "";
  row.querySelectorAll('.MatchHistoryTable .MatchHistoryRow').forEach(match=>{
    const roundNumber = match.querySelector('.MatchPlace') ? match.querySelector('.MatchPlace').innerText.trim() : "";
    const result = match.querySelector('.MatchResult') ? match.querySelector('.MatchResult').innerText.trim() : "";
    let opp = match.querySelector('.MatchOpponent') ? match.querySelector('.MatchOpponent').innerText.trim().replace(/"/g,'\"') : "";
    if(match.querySelector('.MatchOpponentTeam')){
      opp += ' ';
      match.querySelectorAll('.MatchOpponentTeam div').forEach(teamopp=>{
        opp += teamopp.innerText.trim().replace(/"/g,'\"') + ', ';
      });
    } 
    content += `"${date}","${description}","${location}","${eventLocation}","${lifetimepoints}","${propoints}","${multiplier}","${totalPlayers}","${eventFormat}","${place}","${roundNumber}","${result}","${opp}"\r\n`;
  });
});

let link = document.createElement('a')
link.id = 'download-csv'
link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
link.setAttribute('download', 'pwp.export.csv');
document.body.appendChild(link)
document.querySelector('#download-csv').click();
```
___
**If you have an older browser <safari10, <2017 use this minified and transpilled code**:

    document.querySelectorAll("a.Expand").forEach(function(e){e.focus(),e.click()});
    
    
 next step if you have team events :
    
    document.querySelectorAll(".MatchOpponentTeamExpand a").forEach(function(e){e.focus(),e.click()});

    
and after everything is loaded:

       var content='"date","description","store","location","points","pro points","multiplier","total event players","format","place","round number","result","opponent"\r\n';document.querySelectorAll(".HistoryPanelRow").forEach(function(e){var t=e.querySelector(".Date").innerText.trim()||"",r=e.querySelector(".Description").innerText.trim().replace(/"/g,'"')||"",n=e.querySelector(".Location").innerText.trim().replace(/"/g,'"')||"",c=e.querySelector(".LifetimePoints").innerText.trim()||"",o=e.querySelector(".ProPoints").innerText.trim()||"",l=e.querySelector(".EventMultiplier")?e.querySelector(".EventMultiplier").innerText.trim():"",a=e.querySelector(".EventPlayers")?e.querySelector(".EventPlayers").innerText.trim():"",i=e.querySelector(".EventFormat")?e.querySelector(".EventFormat").innerText.trim():"",u=e.querySelector(".EventLocation")?e.querySelector(".EventLocation").innerText.trim().replace(/""/g,'"'):"",p=e.querySelector(".EventPlace")?e.querySelector(".EventPlace").innerText.trim():"";e.querySelectorAll(".MatchHistoryTable .MatchHistoryRow").forEach(function(e){var y=e.querySelector(".MatchPlace")?e.querySelector(".MatchPlace").innerText.trim():"",m=e.querySelector(".MatchResult")?e.querySelector(".MatchResult").innerText.trim():"",q=e.querySelector(".MatchOpponent")?e.querySelector(".MatchOpponent").innerText.trim().replace(/"/g,'"'):"";e.querySelector(".MatchOpponentTeam")&&(q+=" ",e.querySelectorAll(".MatchOpponentTeam div").forEach(function(e){q+=e.innerText.trim().replace(/"/g,'"')+", "})),content+='"'.concat(t,'","').concat(r,'","').concat(n,'","').concat(u,'","').concat(c,'","').concat(o,'","').concat(l,'","').concat(a,'","').concat(i,'","').concat(p,'","').concat(y,'","').concat(m,'","').concat(q,'"\r\n')})});var link=document.createElement("a");link.id="download-csv",link.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(content)),link.setAttribute("download","pwp.export.csv"),document.body.appendChild(link),document.querySelector("#download-csv").click();
___

### step 4

A .csv file with all the info should be downloading (might take sometime according to your browser/processor).

### step 5

Import to your favorite spreasheet processor and do whatever you want with it :)



____

#### shamefull plug
If you made this far and like stats, you can go visit my other project [mtgmeta.io](https://mtgmeta.io) or follow mtgmeta on twitter [@twitter](https://twitter.com/mtgmetaio) 


