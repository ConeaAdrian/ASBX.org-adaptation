

function handleSwitchClick(e) {
  const legalText = document.querySelector('.legal-text');
  const yourOwnText = document.querySelector('.your-own-text');
  const legalRepresentationDiv = document.querySelector('.legal-representation');
  const yourOwnDiv = document.querySelector('.your-own');
  if (e.checked){
      legalText.style.color="#000"
      legalText.style.fontWeight="300"
      yourOwnText.style.fontWeight="500"
      yourOwnText.style.color="#003366"
      legalRepresentationDiv.style.display="none"
      yourOwnDiv.style.display="block"
  }
  else{
      legalText.removeAttribute("style")
      yourOwnText.removeAttribute("style")
      legalRepresentationDiv.removeAttribute("style")
      yourOwnDiv.removeAttribute("style")
  }
}