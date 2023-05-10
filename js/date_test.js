(function () {
  //user id 난수만들기
  const userids = () => {
    let result = "";
    const characters = "abcdefghijklmnopqrstuvwxyz";
    const charactersLength = characters.length;
    //for (var i = 0, chr; i < str.length; i++) {
    for (let i = 0; i < 7; i++) {
      if (0 < i && i < 3) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
        // result = "";
      } else {
        result += "*";
      }
    }
    return result;
  };
  const id_list = document.getElementsByClassName(".randomId");
  function make_id() {
    id_list.innerHTML = userids;
  }
  make_id();

  //리뷰날짜 난수만들기
  const review_date = document.getElementsByClassName(".randomDate");

  /*
  function getRandomDate(start, end) {
    const start = new Date(2023, 1, 1),
      end = new Date(),
      startDate = start.getTime();
    endDate = end.getTime();

    return new Date(startDate + Math.random() * (endDate - startDate));
  }
  */

  const msgs = Array(100)
    .fill(0)
    .map((_, i) => ({
      id: i + 1,
      userID: make_id(),
      //   timestamp: new Date().getTime() + i * 1000 * 60,
      timestamp: getRandomDate(),
    }));

  const map1 = msgs.map((x, i) => {
    return {
      id: x.id,
      // userID: x.userID,
      timestamp: new Date(x.timestamp).toLocaleString("ko-KR", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
      }),
    };
  });

  function randomDate() {
    review_date.innerHTML = msgs[0].timestamp;
  }
  randomDate();

  console.log(randomDate);
  console.log(map1);
});
