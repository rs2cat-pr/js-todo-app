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

        .removeChild(undoButton.parentNode);
      //親要素に書かれたテキストを取得
      const text = undoTarget.firstElementChild.innerText;
      //undoボタンの親要素をリセットする
      undoTarget.innerText = null;
      //<li>に再度Todoの内容を詰める
      //doneボタン、deleteボタンを生成、<li>の子要素にする
      const span = document.createElement("span");
      span.innerText = text;
      //buttonタグ（完了）の作成
      const completeButton = document.createElement("button");
      completeButton.innerText = "done";

      //buttonタグ(削除）の作成
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "delete";
      //削除機能の発火
      deleteButton.addEventListener("click", () => {
        //削除ボタンの親タグ<li>を未完了リストから削除
        deleteFromList("incomplete-list", deleteButton.parentNode);
      });

      //<li>タグのl子要素に各要素を設定
      undoTarget.appendChild(span);
      undoTarget.appendChild(completeButton);
      undoTarget.appendChild(deleteButton);

      //<li>を未完了リストの配下に置く
      document.getElementById("incomplete-list").appendChild(undoTarget);
    });
    //<li>タグのl子要素に各要素を設定
    addTarget.appendChild(span);
    addTarget.appendChild(undoButton);
    //完了リストに<li>を追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  /**
   * 削除機能
   */
  //buttonタグ(削除）の作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  //削除機能の発火
  deleteButton.addEventListener("click", () => {
    //削除ボタンの親タグ<li>を未完了リストから削除
    deleteFromList("incomplete-list", deleteButton.parentNode);
  });

  //liタグの子要素に各要素を詰める
  li.appendChild(span);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(li);
};

//リストから各要素を削除する関数を定義
const deleteFromList = (listName, target) => {
  document.getElementById(listName).removeChild(target);
};
