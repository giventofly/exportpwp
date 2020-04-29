
# Planeswalker points Exporter

Wizards of the Coast [announced](https://magic.gg/news/sunsetting-planeswalker-points) that they will close the
[Planeswalker Points website](https://magic.gg/news/sunsetting-planeswalker-points) 2020, May 27th,
while offering no exporting feature. This means that at that date, *ALL your match history will be deleted*.

The procedure below will allow you to export your match history in a `.csv` file. That file can then be imported
into your sheet processor of choice (Microsoft Excel, Libreoffice Calc, or other).

Go to the [export procedure](#steps).

## Changelog

### 2020-04-29
* Removed unnecessary text (eg. Format: Standard to Standard)

### 2020-04-28
* fixed error on the table header
* fixed names that contained " in them
* team opponents should be correctly tracked now

### 2020-04-27
* added the total number of players per event
* column order fixed, and removed repeated store info

## Export Procedure
<a id="steps"></a>
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
  const date = row.querySelector('.Date').innerText.trim() || "";
  const description = row.querySelector('.Description').innerText.trim().replace(/(")/gm,'\"') || "";
  const location = row.querySelector('.Location').innerText.replace(/(")/gm,'\"').trim() || "";
  const lifetimepoints = row.querySelector('.LifetimePoints').innerText.trim() || "";
  const propoints = row.querySelector('.ProPoints').innerText.trim() || "";
  const multiplier = row.querySelector('.EventMultiplier') ? row.querySelector('.EventMultiplier').innerText.replace(/(Event Multiplier:)/gm,'').trim() : "";
  const totalPlayers = row.querySelector('.EventPlayers') ? row.querySelector('.EventPlayers').innerText.replace(/(Players:)/gm,"").trim() : "";
  const eventFormat = row.querySelector('.EventFormat') ? row.querySelector('.EventFormat').innerText.replace(/(Format:)/gm,"").trim() : "";
  const eventLocation = row.querySelector('.EventLocation') ? row.querySelector('.EventLocation').innerText.replace(/(Location:)/gm,'').replace(/(")/gm,'\"').trim() : "";
  const place = row.querySelector('.EventPlace') ? row.querySelector('.EventPlace').innerText.replace(/(Place:)/gm,'').trim() : "";
  row.querySelectorAll('.MatchHistoryTable .MatchHistoryRow').forEach(match=>{
    const roundNumber = match.querySelector('.MatchPlace') ? match.querySelector('.MatchPlace').innerText.trim() : "";
    const result = match.querySelector('.MatchResult') ? match.querySelector('.MatchResult').innerText.trim() : "";
    let opp = '';
    if(match.querySelector('.MatchOpponentTeam')){
      match.querySelectorAll('.MatchOpponentTeam div').forEach(teamopp=>{
        opp += teamopp.innerText.trim().replace(/(")/gm,'\"') + ', ';
      });
      opp = opp.slice(0, -2);
    }
    else {
      opp = match.querySelector('.MatchOpponent') ? match.querySelector('.MatchOpponent').innerText.trim().replace(/(")/gm,'\"') : "";
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

### step 4

A .csv file with all the info should be downloading (might take sometime according to your browser/processor).

### step 5

Import to your favorite spreadsheet processor and do whatever you want with it :)

____

#### shamefull plug
If you made this far and like stats, you can go visit my other project [mtgmeta.io](https://mtgmeta.io) or follow mtgmeta on twitter [@mtgmetaio](https://twitter.com/mtgmetaio) 


