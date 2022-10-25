function getPointsForPlayer(points, player) {
  return points.reduce((pv, cv) => (cv === player ? pv + 1 : pv), 0);
}
function getScore(points) {
  if (points <= 2) return 15 * points;
  if (points == 3) return 40;
}

function score(points) {
  if (points.length == 0) return "Love All";
  if (points.length == 1 && points[0] == 1) return "15 Love";
  if (points.length == 1 && points[0] == 2) return "Love 15";
  if (points.length == 2 && [...points].every((i) => i === 1)) return "30 Love";
  if (points.length == 3 && [...points].every((i) => i === 1)) return "45 Love";
  if (points.length == 4 && [...points].every((i) => i === 1))
    return "Game Player1";
  if (points.length == 2 && [...points].every((i) => i === 2)) return "Love 30";
  if (points.length == 3 && [...points].every((i) => i === 2)) return "Love 45";
  if (points.length == 4 && [...points].every((i) => i === 2))
    return "Game Player2";

  //console.log("score player 1 = " + calcScore(points, 1));
  //console.log("score player 2 = " + calcScore(points, 2));
  if (getPointsForPlayer(points, 1) == getPointsForPlayer(points, 2))
    return points.length / 2 <= 2
      ? 15 * (points.length / 2) + " each"
      : "Deuce";
  else if (points.length / 2 <= 3)
    return (
      getScore(getPointsForPlayer(points, 1)) +
      " " +
      getScore(getPointsForPlayer(points, 2))
    );
  else
    return getPointsForPlayer(points, 1) > getPointsForPlayer(points, 2)
      ? getPointsForPlayer(points, 1) - getPointsForPlayer(points, 2) == 1
        ? "Advantage Player 1"
        : "Game Player 1"
      : getPointsForPlayer(points, 2) - getPointsForPlayer(points, 1) == 1
      ? "Advantage Player 2"
      : "Game Player 2";

  return "Invalid Score";
}

module.exports = score;
