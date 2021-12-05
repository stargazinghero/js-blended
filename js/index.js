const keys = document.querySelectorAll('.key__item');

const playSound = (event) => {
    console.log(event.currentTarget.dataset.key);
    const code = event.currentTarget.dataset.key;
    const audio = document.querySelector(`audio[data-key='${code}']`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    event.currentTarget.classList.add('playing')
    console.log(audio);
}
  
keys.forEach(btn => { btn.addEventListener('click', playSound) });
    
    