function updateVisibility() {
  const isSmallScreen = window.innerWidth <= 992;
}


document.addEventListener("DOMContentLoaded", function() {
  updateVisibility();
  window.addEventListener('resize', updateVisibility);

  const switchButton = document.getElementById('switch');
  const legalText = document.querySelector('.legal-text');
  const yourOwnText = document.querySelector('.your-own-text');
  const legalRepresentationDiv = document.querySelector('.legal-representation');
  const yourOwnDiv = document.querySelector('.your-own');

  switchButton.checked = false;
  legalText.style.color = '#181059';
  legalText.style.fontSize = '18px';
  legalText.style.fontWeight = '500';
  legalRepresentationDiv.style.display = 'block';
  yourOwnDiv.style.display = 'none';

  switchButton.addEventListener('click', function() {
    const isChecked = this.checked;
    const style = isChecked ? '' : '#181059';
    const fontSize = window.innerWidth <= 475 ? '16px' : '18px';

    legalText.style.color = style;
    legalText.style.fontSize = fontSize;
    legalText.style.fontWeight = isChecked ? '' : '500';
    yourOwnText.style.color = isChecked ? '#181059' : '';
    yourOwnText.style.fontSize = fontSize;
    yourOwnText.style.fontWeight = isChecked ? '500' : '';
    legalRepresentationDiv.style.display = isChecked ? 'none' : 'block';
    yourOwnDiv.style.display = isChecked ? 'block' : 'none';
  });
});



function startClaims() {
  document.getElementById('claimForm').style.display = 'block';

}

function createOverlay() {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  
  overlay.addEventListener('click', function() {
    document.getElementById('claimForm').style.display = 'none';
    document.body.removeChild(overlay);
  });
  
  return overlay;
}
