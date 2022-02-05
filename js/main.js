const detail=document.getElementById('detail');
const showmore=document.getElementById('buttdet');
const showless=document.getElementById('buttless');
const details=document.getElementById('details');
const showmores=document.getElementById('buttdets');
const showlesss=document.getElementById('buttlesss');
function change()
{
detail.style.display="inline";
showmore.style.display="none";
showless.style.display="inline-block";
}

function less()
{
detail.style.display="none";
showmore.style.display="inline-block";
showless.style.display="none";
}
function changes()
{
details.style.display="inline";
showmores.style.display="none";
showlesss.style.display="inline-block";
}
function lesss()
{
details.style.display="none";
showmores.style.display="inline-block";
showlesss.style.display="none";
}