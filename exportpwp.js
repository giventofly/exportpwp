let content = '"date","description","store","location","points","pro points","multiplier","total event players","format","place","round number","result","opponent"\r\n';

document.querySelectorAll('.HistoryPanelRow').forEach(row=>{
  const date = row.querySelector('.Date').innerText.trim() || "";
  const description = row.querySelector('.Description').innerText.trim().replace(/(")/gm,'""') || "";
  const location = row.querySelector('.Location').innerText.replace(/(")/gm,'""').trim() || "";
  const lifetimepoints = row.querySelector('.LifetimePoints').innerText.trim() || "";
  const propoints = row.querySelector('.ProPoints').innerText.trim() || "";
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
    content += `"${date}","${description}","${location}","${eventLocation}","${lifetimepoints}","${propoints}","${multiplier}","${totalPlayers}","${eventFormat}","${place}","${roundNumber}","${result}","${opp}"\r\n`;
  });
});

let link = document.createElement('a')
link.id = 'download-csv'
link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
link.setAttribute('download', 'pwp.export.csv');
document.body.appendChild(link)
document.querySelector('#download-csv').click();

