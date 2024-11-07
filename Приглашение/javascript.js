let butYes = document.querySelector(".yes");
let butNo = document.querySelector(".no");
let content = document.querySelector(".content");

butYes.addEventListener("click", function () {
  content.innerHTML = `
    <div class="text">
        Чудесно! Ждём с нетерпением 💖
      </div>
    `;
});

butNo.addEventListener("click", function () {
  content.innerHTML = `
    <div class="text">
        Такие ответы не принимаются. 
      </div>
      <button class="nono">Ну правда никак...</button>
    `;

  let butNono = document.querySelector(".nono");

  butNono.addEventListener("click", function () {
    content.innerHTML = `
    <div class="text">
        У нас нет слов...
      </div>
      <button class="nonono">Мне жаль...</button>
    `;
    let butNonono = document.querySelector(".nonono");
    butNonono.addEventListener("click", function () {
      content.innerHTML = `
    <div class="text">
        😢
        Пожалуйста, напишите нам об этом в личные сообщения
      </div>
      
    `;
    });
  });
});
