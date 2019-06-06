const data = [
    // "See" ,"Tee", "Noah", "Mao", "Reh", "Leihe", "Schuh", "Gau", "Fee", "Bau"
{value: "See",zahl: "00"}, {value: "Tee",zahl: "01"}, {value: "Noah",zahl: "02"}, {value: "Mao",zahl: "03"}, {value: "Reh",zahl: "04"},
{value: "Leihe",zahl: "05"}, {value: "Schuh",zahl: "06"}, {value: "Gau",zahl: "07"} , {value: "Fee",zahl: "08"}, {value: "Bau",zahl: "09"},
{value: "Tasse",zahl: "10"}, {value: "Tod",zahl: "11"}, {value: "Tanne",zahl: "12"}, {value: "Damm",zahl: "13"}, {value: "Tor",zahl: "14"}, {value: "Tal",zahl: "15"},
{value: "Tisch",zahl: "16"}, {value: "Teig",zahl: "17"}, {value: "Tofu",zahl: "18"}, {value: "Taube",zahl: "19"}, 
{value: "Nuss",zahl: "20"}, {value: "Not",zahl: "21"}, {value: "Nonne",zahl: "22"}, {value: "Nemo",zahl: "23"}, {value: "Nero",zahl: "24"}, {value: "Null",zahl: "25"},
{value: "Nische",zahl: "26"}, {value: "Nokia",zahl: "27"}, {value: "Navy",zahl: "28"}, {value: "Noob",zahl: "29"},
{value: "Maus",zahl: "30"}, {value: "Mitte",zahl: "31"}, {value: "Mann",zahl: "32"}, {value: "Mami",zahl: "33"}, {value: "Meer",zahl: "34"}, {value: "Maul",zahl: "35"},
{value: "Masche",zahl: "36"}, {value: "Mücke",zahl: "37"}, {value: "Mafia",zahl: "38"}, {value: "Mopp",zahl: "39"},
{value: "Rose",zahl: "40"}, {value: "Ratte",zahl: "41"}, {value: "Rhein",zahl: "42"}, {value: "Rom",zahl: "43"}, {value: "Rohr",zahl: "44"}, {value: "Rolle",zahl: "45"},
{value: "Rache",zahl: "46"}, {value: "Rock",zahl: "47"}, {value: "Reif",zahl: "48"}, {value: "Rippe",zahl: "49"},
{value: "Los",zahl: "50"}, {value: "Lot",zahl: "51"}, {value: "Lohn",zahl: "52"}, {value: "Lamm",zahl: "53"}, {value: "Lore",zahl: "54"}, {value: "Lolli",zahl: "55"},
{value: "Lauch",zahl: "56"}, {value: "Lack",zahl: "57"}, {value: "Lauf",zahl: "58"}, {value: "Lippe",zahl: "59"},
{value: "Schuss",zahl: "60"}, {value: "Schotte",zahl: "61"}, {value: "Schnee",zahl: "62"}, {value: "Schaum",zahl: "63"}, {value: "Schere",zahl: "64"}, {value: "Schal",zahl: "65"},
{value: "Schach",zahl: "66"}, {value: "Schock",zahl: "67"}, {value: "Schaf",zahl: "68"}, {value: "Schuppe",zahl: "69"},
{value: "Kasse",zahl: "70"}, {value: "Gott",zahl: "71"}, {value: "Kanne",zahl: "72"}, {value: "Kamm",zahl: "73"}, {value: "Karre",zahl: "74"}, {value: "Gaul",zahl: "75"},
{value: "Koch",zahl: "76"}, {value: "Kakao",zahl: "77"}, {value: "Kaffee",zahl: "78"}, {value: "Kappe",zahl: "79"},
{value: "Fass",zahl: "80"}, {value: "Fett",zahl: "81"}, {value: "Fan",zahl: "82"}, {value: "WM",zahl: "83"}, {value: "Feuer",zahl: "84"}, {value: "Fell",zahl: "85"},
{value: "Fisch",zahl: "86"}, {value: "Waage",zahl: "87"}, {value: "Waffe",zahl: "88"}, {value: "Weib",zahl: "89"},
{value: "Bus",zahl: "90"}, {value: "Boot",zahl: "91"}, {value: "Bahn",zahl: "92"}, {value: "Baum",zahl: "93"}, {value: "Bauer",zahl: "94"}, {value: "Ball",zahl: "95"},
{value: "Bach",zahl: "96"}, {value: "Bock",zahl: "97"}, {value: "Puff",zahl: "98"}, {value: "Puppe",zahl: "99"}

];

function randomWord(){
    return data[Math.floor(Math.random() * data.length)];
  }
 
 export {randomWord, data};



