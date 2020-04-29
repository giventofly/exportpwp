
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

Copy and paste this code in the console and press enter/run (it will take sometime loading all the events):

```javascript
document.querySelectorAll('a.Expand').forEach(a=>{
  a.focus();
  a.click();
});
```

if you also have teamevents please do this after and wait until it finishes:

```javascript
document.querySelectorAll('.MatchOpponentTeamExpand a').forEach(a=>{
   a.focus();
   a.click();
});
```

After everything is loaded/open, copy and paste the code from this file:

- [exportpwp.js](exportpwp.js) use the raw option to copy the code or [direct raw exportpwp.js](https://raw.githubusercontent.com/giventofly/exportpwp/master/exportpwp.js)

### Step 4

A .csv file with all the info should be downloading (might take sometime according to your browser/processor).

### Step 5

Import to your favorite spreadsheet processor and do whatever you want with it :)

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

## Credits

* If you made this far and like stats, you can go visit my other project [mtgmeta.io](https://mtgmeta.io) or follow mtgmeta on twitter [@mtgmetaio](https://twitter.com/mtgmetaio)
* Special thanks to [libreforce](https://github.com/liberforce) for helping with the readme formatation and bug/features hunt!


