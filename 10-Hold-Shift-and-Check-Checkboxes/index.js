const checkboxs = document.querySelectorAll('input[type="checkbox"]');

let lastChecked;
checkboxs.forEach((checkboxx) => {
  checkboxx.addEventListener('click', function (e) {
    let inBetween = false;
    //check if the shift key is down and there is a checked element
    if (e.shiftKey && this.checked) {
      checkboxs.forEach((checkbox) => {
        console.log(checkbox);

        if (checkbox === this || checkbox === lastChecked) {
          inBetween = !inBetween;
          console.log('this is in between');
        }

        if (inBetween) {
          checkbox.checked = true;
        }
      });
    }
    lastChecked = this;
  });
});
