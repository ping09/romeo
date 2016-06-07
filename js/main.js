//object contain header dom elements and functions for animation
let height = $(window).height()
$(".home").css({
  'height' : height,
})
let arr = []
let li = $("nav").find('li')
for (let i = 0; i<li.length; i++ ) {
  arr.push(li[i].firstChild.nodeValue)
}

for(let j =0; j<arr.length; j++) {
  console.log(`<li>${arr[j]}</li>`)
}
