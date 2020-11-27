const faders = document.querySelectorAll(".fade-in")


var logoDivs = document.querySelectorAll(".hover-btn")
console.log(logoDivs);
logoDivs.forEach(item => {
    item.addEventListener('mouseover', event => {
      console.log(item.id);
      var showDiv = document.getElementById(item.id + 'div')
      console.log(showDiv);
      showDiv.style.display = "inline-block"
      item.style.display = "none"
    })
  })


var projGit = document.querySelectorAll(".projGit")
console.log(projGit);

projGit.forEach(item => {
    item.addEventListener('mouseleave', event => {
      console.log(item.id[0]);
      var logoDiv = document.getElementById(item.id[0])
      console.log(logoDiv);
      logoDiv.style.display = "inline-block"
      item.style.display = "none"
    })
  })

const appearOptions = {
  threshold: 1,
}

const appearOnScroll = new IntersectionObserver(
  function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting){
        return;
      } else{
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target)
      }
    })
  }, appearOptions 
)

faders.forEach(fader => {
  appearOnScroll.observe(fader)
})
