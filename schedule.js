
var index = ["アイディア出し","要件定義","UIデザイン","簡略化","UIデザイン2回目","開発"]
var time = ["10","20","20","20","10","120"]
var contents = [
  "何を作るかを決める",
  "どういう機能が必要か決める",
  "UIを紙に書く",
  "実装できるレベルに機能・デザインを簡略化する",
  "簡略したverを紙に書く",
  "実装できるレベルに機能・デザインを簡略化する"
]

/*************  timerの表示を行う  *************/
remaintime = Number(time[0])*60
writeTime()
/**********************************************/

// いまどのindexの工程にいるかを保存しておく変数
var indexNow = 0


// schTableにセットするTableの内容のHTMLソースを作る
var tableContents = '<tr class="table_index"><td>項目</td><td>時間</td><td>内容</td><td></td></tr>'


function setTable() {
  // tableの各行をセット
  for (var i = 0; i < index.length; i++) {
    if (i==indexNow){
      tableContents += '<tr id="nowtask">'
    }
    tableContents += '<td>'+index[i]+'</td><td>'+time[i]+'分</td><td>'+contents[i]+'</td>'
    tableContents += '<td><button value="' + String(i) + '" onclick="deleteRow(this)">削除</button></td></tr>'
  }
  //schTable.innerHTML = tableContents

  //view.htmlに作ったテーブルを渡す
  var parentTable = document.getElementById("schedule_table")
  //parentTable.appendChild(schTable)
  parentTable.innerHTML = tableContents

  // tableContentsの内容をリセット
  tableContents = '<tr class="table_index"><td>項目</td><td>時間</td><td>内容</td><td></td></tr>'
}

function addSchedule() {
  index.push(document.schedule_add.task.value)
  time.push(document.schedule_add.time.value)
  contents.push(document.schedule_add.contents.value)
  setTable()
}

function deleteRow(btn) {
  console.log(btn.value)
  row =  parseInt(btn.value)
  index.splice(row,1)
  time.splice(row,1)
  contents.splice(row,1)
  setTable()
}

setTable()
