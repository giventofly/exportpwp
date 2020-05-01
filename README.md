
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

- Open the [exportpwp.js](../../raw/master/exportpwp.js) file, and copy its content
- Paste that content in the console
- Press enter/run (it will take sometime loading and fetching all the events).
- Wait until the `.csv` file is downloaded (might take sometime according to your browser/processor/connection).

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



