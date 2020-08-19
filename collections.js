// collections page tabs toggle

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]')
// loop through the list to find the one tab mouse clicked
tabs.forEach(tab => {
   tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget)

      tabContents.forEach(tabContent => {
         tabContent.classList.remove('active')
      })
      tabs.forEach(tab => {
         tab.classList.remove('active')
      });
      tab.classList.add('active')
      target.classList.add('active');

      
   });
});