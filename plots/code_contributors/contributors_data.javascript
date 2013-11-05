Wed Oct 12 03:01:20 UTC 2011
Wed Nov 16 22:59:42 UTC 2011
Thu Dec 22 18:23:26 UTC 2011
Thu Feb 02 01:01:22 UTC 2012
Mon Feb 13 23:24:13 UTC 2012
Mon Feb 20 18:03:58 UTC 2012
Tue May 01 23:14:32 UTC 2012
Thu May 03 18:11:07 UTC 2012


elements = document.getElementsByClassName('date')
dates = new Array();
for(var i=0; i < elements.length; i=i+2) { dates.push( elements[i].title ); }
dates


convert in libreoffice calc
remove UTC part
Format->Cells->UserDefined

NN, MMM DD HH:MM:SS YYYY
