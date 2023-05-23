$(document).ready(function () {
  const userids = () => {
    let result = "";
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;

    for (let i = 0; i < 7; i++) {
      if (0 <= i && i < 4) {
        //charAt() : 문자열에서 특정 인덱스에 위치하는 유니코드 단일문자를 반환
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      } else {
        result += "*";
      }
    }
    return result;
  };

  const id_list = $("#randomId");
  function make_id() {
    id_list.html(userids());
  }
  make_id();

  //random date
  const review_date = $(".review_random_date");
  const start = new Date(2023, 1, 1);
  const end = new Date();
  function getRandomDate(start, end) {
    const startDate = start.getTime();
    const endDate = end.getTime();

    return new Date(startDate + Math.random() * (endDate - startDate));
  }

  const msgs = Array(100)
    .fill(0)
    .map((_, i) => ({
      id: i + 1,
      userID: userids(),
      timestamp: getRandomDate(start, end),
    }));

  const map1 = msgs.map((x, i) => {
    const date = new Date(x.timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return {
      id: x.id,
      timestamp: `${year}-${month}-${day}`,
    };
  });

  function randomDate() {
    review_date.html(map1[0].timestamp);
  }
  randomDate();

  console.log(randomDate);
  console.log(map1);
});
