import $ from "jquery";
import axios from "modules/axios";
import { listenInactiveHeartEvent, listenActiveHeartEvent } from "modules/handle_heart";

// console.log(); コンソール出力
// debugger 処理を止める

// いいねボタン切替
const handleHeartDisplay = (hasLiked) => {
  if (hasLiked) {
    $(".active-heart").removeClass("hidden");
  } else {
    $(".inactive-heart").removeClass("hidden");
  }
};

const handleCommentForm = () => {
  // フォーム切替
  $(".show-comment-form").on("click", () => {
    $(".show-comment-form").addClass("hidden");
    $(".comment-text-area").removeClass("hidden");
  });
};

// コメント追加
const appendNewComment = (comment) => {
  $(".comments-container").append(`<div class="article_comment"><p>${comment.content}</p></div>`);
};

document.addEventListener("DOMContentLoaded", () => {
  const dataset = $("#article-show").data();
  const articleId = dataset.articleId;

  // コメント一覧
  axios
    .get(`/api/articles/${articleId}/comments`)
    .then((response) => {
      const comments = response.data;
      comments.forEach((comment) => {
        appendNewComment(comment);
      });
    })
    .catch((error) => {
      window.alert("失敗しました");
    });

  // フォーム切替
  handleCommentForm();

  // コメント追加
  $(".add-comment-button").on("click", () => {
    const content = $("#comment_content").val();
    if (!content) {
      window.alert("コメントを入力してください");
    } else {
      axios
        .post(`/api/articles/${articleId}/comments`, {
          comment: { content: content },
        })
        .then((response) => {
          const comment = response.data;
          appendNewComment(comment);
        });
      $("#comment_content").val("");
    }
  });

  // いいねボタン切替
  axios.get(`/api/articles/${articleId}/like`).then((response) => {
    const hasLiked = response.data.hasLiked;
    handleHeartDisplay(hasLiked);
  });
  listenInactiveHeartEvent(articleId);
  listenActiveHeartEvent(articleId);
});
