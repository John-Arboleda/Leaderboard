export default (() => {

  const sendScores = async (url, userName, userScore) => {
    const gameResult = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        user: userName.value,
        score: userScore.value,
      }),
    });
    userName.value = '';
    userScore.value = '';
    return gameResult.json();
  };
  
  const getScore = async (url) => {
    const score = await fetch(url);
    return score.json();
  };

  const displayScores = ((scores) => {
    const scoreArray = scores.result;
    const scoreDetail = scoreArray.map((b) => `
      <li>${b.user} : ${b.score}</li>
    `).join('');
    document.getElementById('scores-list').innerHTML = `${scoreDetail}`;
  });

  return {
    sendScores,
    getScore,
    displayScores,
  };
})();