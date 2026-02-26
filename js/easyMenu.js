/* easy_drawer v1.0.0 ,2024 */
/* create by syo motoyama,2024*/

//ドロワーメニューのボタン要素を取得
const toggleButton = document.querySelector('.drawerButton');
//ドロワーメニューのメニュー要素を取得
const drawerMenu = document.getElementById('drawerMenu');

// ドロワーメニューのボタンをクリックした際の処理
toggleButton.addEventListener('click', function () {
    drawerMenu.classList.toggle('open');
    toggleButton.classList.toggle('close');
});