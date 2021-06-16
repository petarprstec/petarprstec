var datum_vrijeme = new Date();
var mjeseci = new Array("Siječanj","Veljača","Ožujak","Travanj","Svibanj","Lipanj","Srpanj","Kolovoz","Rujan","Listopad","Studeni","Prosinac");
var datum = datum_vrijeme.getDate() + "." + mjeseci[datum_vrijeme.getMonth()] + ", " + datum_vrijeme.getFullYear();