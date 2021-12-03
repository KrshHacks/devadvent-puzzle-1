const findRudolf = forest => {
  for (let i = 0; i < forest.length; i++) {
    for (let j = 0; j < forest[i].length; j++) {
      if (forest[i][j] === '🦌') {
        return { col: j, row: i }
      }
    }
  }

  return { col: -1, row: -1 }
}

module.exports = { findRudolf }
