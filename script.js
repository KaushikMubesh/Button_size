let a = document.getElementById('positive')
let b = document.getElementById('negative')
let c = document.getElementById('ans')
let image = document.getElementById("Image")
let but = document.getElementById("but")
let line = ['Enna illaya', 'poi thana solra ', 'sari vilayadunathu pothum', 'appo paasam illa', 'un alavuku meri poi solra', 'marubadiyum solree ', 'poi sollatha', 'nee sollu na v2ku varum pothu paathukuren', 'Ethavathu kepala ', 'sari amma mela paasam iruka ', 'athum illaya ', 'unaya pethathuku en amma 2 erumaya pethurukalam', 'sari ammava vidu appava ', 'neelam manusiya ', 'appo en mela paasam illa', 'sari ellathayum vidu', 'baby amma?', 'unaku kundi kaluvi vittu valathavala aviyaluku ethu venum enum venum', 'ennatha iruthalum unga kavitha athai puthiya kamichita pathala', 'KADAYATHA !', ' sari enaya konjamavathu pudikuma ', 'oru bit', 'papom na vanthu check panren ', 'sari last kelvi ', 'enaya uanku romba pudikumla']
function size2() {
    c.innerHTML="enna illanu press panra "
    b.addEventListener("click", hg)
}
let t = -1
let i = 100
let wid = 150
let ip = 100
let wp = 150
let j = 100
let k = 190
let l = 120
function hg() {
    t = t + 1
    i = i + 9
    wid = wid + 9
    j = j - 5
    k = k - 14
    l = l - 5
    kaushik = wid + "px"
    f = k + "px"
    e = j + "px"
    d = i + "px"
    pad = l + "px"
    a.style.height = d
    a.style.width = kaushik
    b.style.marginLeft = f
    but.style.paddingTop = pad
    c.innerHTML = line[t]
}
function size() {
    c.innerHTML = "Nambitiya avlo scene lam illa,enaku unaya suthama pudikathu I_HATE_YOU!"
    b.disabled=true
    b.style.opacity=0
  //  if (image.src.match("image/heart-arrow-vector-icon-love-symbol-cupid-heart-valentine-s-day-vector-icon-heart-arrow-vector-icon-love-symbol-cupid-199598774-removebg-preview-removebg-preview.png")) {
        image.src = "image/download-removebg-preview-removebg-preview (1).png"
    //}
    //else {
      //  image.src = "image/download-removebg-preview-removebg-preview (1).png"
   // }


}