var btn = document.getElementById('btn');
var list = document.querySelector('.list');
var text = document.getElementById('text');
btn.onclick = function () {
    if (text.value == '') {
        alert('你没有输入内容。')
    } else {
        var li = document.createElement('li');
        var time = new Date();
        var mytime = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate();
        li.innerHTML = text.value + '<span>' + mytime + '\t' + '<button>删除</button></span>';
        text.value = '';
        list.insertBefore(li, list.children[0]);
        var allB = document.querySelectorAll('button');
        for (var i = 0; i < allB.length; i++) {
            allB[i].onclick = function () {
                list.removeChild(this.parentNode.parentNode);
            }
        }

    }
}