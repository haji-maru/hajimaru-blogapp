import $ from "jquery";
import axios from "modules/axios";

// ハート赤になる
const listenInactiveHeartEvent = (articleId) => {
  $(".inactive-heart").on("click", () => {
    axios
      .post(`/api/articles/${articleId}/like`)
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
};

// ハート色なし
const listenActiveHeartEvent = (articleId) => {
  $(".active-heart").on("click", () => {
    axios
      .delete(`/api/articles/${articleId}/like`)
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
};

export { listenInactiveHeartEvent, listenActiveHeartEvent };
