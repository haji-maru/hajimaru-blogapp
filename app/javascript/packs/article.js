import $ from "jquery";
import axios from "axios";
import { csrfToken } from "rails-ujs";

axios.defaults.headers.common["X-CSRF-Token"] = csrfToken();

// console.log(); コンソール出力
// debugger 処理を止める

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
  axios.get(`/articles/${articleId}/comments`).then((response) => {
    const comments = response.data;
    comments.forEach((comment) => {
      appendNewComment(comment);
    });
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
        .post(`/articles/${articleId}/comments`, {
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
  axios.get(`/articles/${articleId}/like`).then((response) => {
    const hasLiked = response.data.hasLiked;
    handleHeartDisplay(hasLiked);
  });

  $(".inactive-heart").on("click", () => {
    axios
      .post(`/articles/${articleId}/like`)
      .then((response) => {
        if (response.data.status === "ok") {
          $(".active-heart").removeClass("hidden");
          $(".inactive-heart").addClass("hidden");
        }
      })
      .catch((e) => {
        window.alert("Error");
        console.log(e);
      });
  });

  $(".active-heart").on("click", () => {
    axios
      .delete(`/articles/${articleId}/like`)
      .then((response) => {
        if (response.data.status === "ok") {
          $(".active-heart").addClass("hidden");
          $(".inactive-heart").removeClass("hidden");
        }
      })
      .catch((e) => {
        window.alert("Error");
        console.log(e);
      });
  });
});
