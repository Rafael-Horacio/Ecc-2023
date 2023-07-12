/*------------------------------------------
  #search
-------------------------------------------*/
function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  const str = filter;
  const parsed = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  console.log(parsed);
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent.normalize('NFD').replace(/[\u0300-\u036f]/g, '') || a.innerTextnormalize('NFD').replace(/[\u0300-\u036f]/g, '');
    if (txtValue.toUpperCase().indexOf(parsed) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}