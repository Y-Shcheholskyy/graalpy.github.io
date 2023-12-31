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

//mobile-menu
document.addEventListener('DOMContentLoaded', function () {
  var menuToggle = document.getElementById('mobile-menu-toggle');
  var menu = document.querySelector('.menu__list');

  menuToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    menu.classList.toggle('show');
  });

  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
      menu.classList.remove('show');
    }
  });
});

if ($('.js-show-menu').length) {
  $(".js-show-menu, .overlay").click(function (e) {
    e.preventDefault();
    $('body').toggleClass('overflow-hidden');
    $(".menu-btn--menu").toggleClass('menu-open').toggleClass('close');
    $('.menu__list').toggleClass('open');
    $('.menu__logo').toggleClass('open');
    $('.menu__downloads').toggleClass('open');
    $('.menu').toggleClass('open');
    $('.overlay').fadeToggle();
  });
}

if ($(".js-show-sidebar").length) {
  $(".js-show-sidebar, .overlay").click(function (e) {
    e.preventDefault();
    $('body').toggleClass('overflow-hidden');
    $(".menu-btn--sidebar").toggleClass('menu-open');
    $('.sidebar').toggleClass('open');
    $('.overlay').fadeToggle();
  });
}





