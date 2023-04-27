var btn = document.getElementById("btn");
btn.addEventListener("click",showmeans,false);
var ul =document.querySelector('.list');
ul.addEventListener("click",delete_label,false);
function showmeans(e)
{
   /* document.getElementById("d2").value=document.getElementById("d2").value+document.getElementById("d1").value+'\n';*/
   var ul =document.querySelector('.list');
   var link =document.getElementById("d1").value;
  /* ul.prepend(document.querySelector('.list').innerHTML);*/
   /*ul.innerHTML=document.querySelector('.list').innerHTML+"<li>"+link+"</li>";*/
   //ul.innerHTML=ul.innerHTML+"<li>"+link+"</li>";

   var li = document.createElement('li');
   var label = document.createElement('label');
   var btn2 = document.createElement('button');
   li.prepend(label);
   label.innerText = link;
   li.append(btn2);
   btn2.innerText = "刪除";
   ul.append(li);
   //link.value = null;
}
function delete_label(e)
{
   ul.removeChild(e.target.parentElement);
}

// var btn2 =document.getElementById("btn2");
// btn2.addEventListener("click",showdelete,false);
// function showdelete(e)
// {

// }
//var newList=document.createElement('li');
//newList.appendChild(0)
