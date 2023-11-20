//Copy to clipboard function

function createCopyButton(preElement) {

  var button = document.createElement('button');
  button.textContent = 'Copy';
  button.className = 'copy-button';
  button.addEventListener('click', function (event) {
    copyCode(event, button);
  });
  preElement.appendChild(button);
}
async function copyCode(event, button) {
  const pre = button.parentElement;
  let code = pre.querySelector("code");
  let text = code.innerText;

  try {
    await navigator.clipboard.writeText(text);
    button.innerText = "Copied";

    setTimeout(() => {
      button.innerText = "Copy";
    }, 1000);
  } catch (err) {
    console.error('Unable to copy to clipboard', err);
  }
}

var codeBlocks = document.querySelectorAll('pre');
codeBlocks.forEach(function (codeBlock) {
  createCopyButton(codeBlock);
});


