elements = document.getElementsByClassName('date')
dates = new Array();
for(var i=0; i < elements.length; i=i+2) { dates.push( elements[i].title ); }
dates


convert in libreoffice calc
remove UTC part
Format->Cells->UserDefined

DDD MMM DD HH:MM:SS YYYY

Tue Jun 18 17:31:44 2013

