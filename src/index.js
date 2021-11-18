import "./styles.css";

/**
 * 追加機能
 */
//1.追加ボタンを押したときにフォームの値を取得する
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  //関数に保持した後は、フォームの内容を破棄する
  document.getElementById("add-text").value = "";

  //2.未完了のDOMを生成し、HTMLへ挿入する
  /*
 生成する内容
 <li>
<span>inputText</span>
<button>done</button>
<button>delete</button>
</li>
 */
  const li = document.createElement("li");
  li.className = "list-content";
  const span = document.createElement("span");
  span.innerText = inputText;

  //buttonタグ（完了）の作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "done";
  //完了機能の発火
  completeButton.addEventListener("click", () => {
    alert("done");
  });
  //buttonタグ(削除）の作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  //削除機能の発火
  deleteButton.addEventListener("click", () => {
    alert("delete");
  });

  //liタグの子要素に各要素を詰める
  li.appendChild(span);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(li);
};

//追加ボタンが押されたときにonClickAdd関数が発動する
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

/**
 * 完了機能
 */

/**
 * 削除機能
 */
