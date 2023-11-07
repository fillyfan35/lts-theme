function showSearch(e) {
  e.preventDefault();
  document.querySelector('.main-search .search-container').classList.remove('hide');
  document.querySelector('.main-search .search-container').classList.add('show');
  document.querySelector('.main-search .search-container.show input[type=search]').focus();
  return true;
}

function closeSearch(e) {
  e.preventDefault();
  document.querySelector('.main-search .search-container').classList.add('hide');
  document.querySelector('.main-search .search-container').classList.remove('show');
  return true;
}

function focusOutCloseSearch(e) {
  if (!e.relatedTarget.closest('.main-search .search-container')) {
    closeSearch(e);
  }
}

function keyboardSearchShortcuts() {
  document.addEventListener('keydown', function (e) {
    if (document.activeElement.closest('.main-search .search-container')) {
      if (e.keyCode === 27) {
        closeSearch(e);
      }
    }
  });
}

function searchIconFocus(e) {
  if (!e.relatedTarget.closest('.main-search .search-container')) {
    showSearch(e);
  }
}

function openSearch(e) {
  document.querySelector('.main-button').classList.remove('collapsed');
  document.querySelector('.main-button').setAttribute("aria-expanded", "true");
  document.querySelector('.navigation-wrapper .navbar-wrapper').classList.add('show');
}

function closeQuickLink(e) {
  document.querySelector('.utility_nav_ut').classList.remove('show');
  document.querySelector('.quick-link-btn').classList.add('collapsed');
  document.querySelector('.quick-link-btn').setAttribute("aria-expanded", "false");
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector('.main-search .search-container').classList.add('hide');
  document.querySelector('.main-search .search_icon').addEventListener('focus', searchIconFocus);
  document.querySelector('.main-search .search_icon').addEventListener('click', showSearch);
  document.querySelector('.main-search .close_search button').addEventListener('click', closeSearch);
  document.querySelector('.mobile-search .search_icon').addEventListener('focus', searchIconFocus);
  document.querySelector('.mobile-search .search_icon').addEventListener('click', showSearch);
  document.querySelector('.mobile-search .search_icon').addEventListener('focus', openSearch);
  document.querySelector('.mobile-search .search_icon').addEventListener('click', openSearch);
  document.querySelector('.mobile-search .search_icon').addEventListener('focus', closeQuickLink);
  document.querySelector('.mobile-search .search_icon').addEventListener('click', closeQuickLink);

});