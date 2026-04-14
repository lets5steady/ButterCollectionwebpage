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

// メニュー外をクリックした際にドロワーを閉じる処理
document.addEventListener('click', function (e) {
    if (!drawerMenu.contains(e.target) && !toggleButton.contains(e.target)) {
        drawerMenu.classList.remove('open');
        toggleButton.classList.remove('close');
    }
});