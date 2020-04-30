
# Planeswalker points Exporter

Wizards of the Coast [announced](https://magic.gg/news/sunsetting-planeswalker-points) that they will close the
[Planeswalker Points website](https://magic.gg/news/sunsetting-planeswalker-points) 2020, May 27th,
while offering no exporting feature. This means that at that date, *ALL your match history will be deleted*.

The procedure below will allow you to export your match history in a `.csv` file. That file can then be imported
into your sheet processor of choice (Microsoft Excel, Libreoffice Calc, or other).

- [Export Procedure](#export-procedure)
- [Changelog](#changelog)
- [Credits](#credits)

## Export Procedure
### Step 1

Open [https://www.wizards.com/Magic/PlaneswalkerPoints/History](https://www.wizards.com/Magic/PlaneswalkerPoints/History) after you are logged in in the pwp website.

### Step 2

Open your browser tools and go to console (F12)

### Step 3

Copy and paste the code inside the link in the console and press enter/run (it will take sometime loading and fetching all the events).

Check the code to copy [exportpwp.js](exportpwp.js) or just copy it from below.

<details>
  <summary>Click to see the code to copy and paste</summary>
  
  ```javascript
      

const checkEverythingIsLoaded = setInterval(isLoaded, 5000);
const totalEventsToLoad = document.querySelectorAll('a.Expand').length;

document.querySelectorAll('a.Expand').forEach(a=>{
  a.focus();
  a.click();
});

function saveCSV(){
  let content = '"date","description","store","location","participation poins","points","pro points","multiplier","total event players","format","place","round number","result","opponent"\r\n';

document.querySelectorAll('.HistoryPanelRow').forEach(row=>{
  const date = row.querySelector('.Date').innerText.trim() || "";
  const description = row.querySelector('.Description').innerText.trim().replace(/(")/gm,'""') || "";
  const location = row.querySelector('.Location').innerText.replace(/(")/gm,'""').trim() || "";
  const lifetimepoints = row.querySelector('.LifetimePoints').innerText.trim() || "";
  const propoints = row.querySelector('.ProPoints').innerText.trim() || "";
  const participationpoints = row.querySelector('.EventParticipationPoints') ? row.querySelector('.EventParticipationPoints').innerText.replace(row.querySelector('.EventParticipationPoints b').innerText,'').trim() : "";
  const multiplier = row.querySelector('.EventMultiplier') ? row.querySelector('.EventMultiplier').innerText.replace(row.querySelector('.EventMultiplier b').innerText,'').trim() : "";
  const totalPlayers = row.querySelector('.EventPlayers') ? row.querySelector('.EventPlayers').innerText.replace(row.querySelector('.EventPlayers b').innerText,"").trim() : "";
  const eventFormat = row.querySelector('.EventFormat') ? row.querySelector('.EventFormat').innerText.replace(row.querySelector('.EventFormat b').innerText,"").trim() : "";
  const eventLocation = row.querySelector('.EventLocation') ? row.querySelector('.EventLocation').innerText.replace(row.querySelector('.EventLocation b').innerText,'').replace(/(")/gm,'""').trim() : "";
  const place = row.querySelector('.EventPlace') ? row.querySelector('.EventPlace').innerText.replace(row.querySelector('.EventPlace b').innerText,'').trim() : "";
  row.querySelectorAll('.MatchHistoryTable .MatchHistoryRow').forEach(match=>{
    const roundNumber = match.querySelector('.MatchPlace') ? match.querySelector('.MatchPlace').innerText.trim() : "";
    const result = match.querySelector('.MatchResult') ? match.querySelector('.MatchResult').innerText.trim() : "";
    let opp = '';
    if(match.querySelector('.MatchOpponentTeam')){
      match.querySelectorAll('.MatchOpponentTeam div').forEach(teamopp=>{
        opp += teamopp.innerText.trim().replace(/(")/gm,'""') + ', ';
      });
      opp = opp.slice(0, -2);
    }
    else {
      opp = match.querySelector('.MatchOpponent') ? match.querySelector('.MatchOpponent').innerText.trim().replace(/(")/gm,'""') : "";
    }
    content += `"${date}","${description}","${location}","${eventLocation}","${participationpoints}","${lifetimepoints}","${propoints}","${multiplier}","${totalPlayers}","${eventFormat}","${place}","${roundNumber}","${result}","${opp}"\r\n`;
  });
});

let link = document.createElement('a')
link.id = 'download-csv'
link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
link.setAttribute('download', 'pwp.export.csv');
document.body.appendChild(link)
document.querySelector('#download-csv').click();


}

function isLoaded(){
  if(document.querySelectorAll('a.Expand').length == 0 && document.querySelectorAll('.EventSummary').length == totalEventsToLoad){
    clearInterval(checkEverythingIsLoaded);
    saveCSV();
  }
}

  ```
</details>


And just wait until the `.csv` file is downloaded (might take sometime according to your browser/processor/connection).

### Step 4

Import to your favorite spreadsheet processor and do whatever you want with it :)

## Changelog

### 2020-04-30
* Internationalization removal of extra fields: e.g. "Format: Standard" to "Standard"
* Fixed escaping double quotes correctly when they appeared
* Participation points added
* Just one time code paste - checks for everything to be loaded

### 2020-04-29
* Removed unnecessary text (eg. Format: Standard to Standard)
* Fixed names that contained " in them (again) for proper import in LibreOffice Calc

### 2020-04-28
* fixed error on the table header
* fixed names that contained " in them
* team opponents should be correctly tracked now

### 2020-04-27
* added the total number of players per event
* column order fixed, and removed repeated store info

## Credits

* If you made this far and like stats, you can go visit my other project [mtgmeta.io](https://mtgmeta.io) or follow mtgmeta on twitter [@mtgmetaio](https://twitter.com/mtgmetaio)
*  Thanks to [zendamacf](https://github.com/zendamacf) and [liberforce](https://github.com/liberforce) for helping with the readme formatting, bug hunting, features and code improvements!



