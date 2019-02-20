import play from './game'

const runTrial = (trials: number, maxRounds: number, numBlindCards: number) => {
  let minASum = 0
  let minBSum = 0
  let playCountSum = 0
  let terminations = 0
  for (let i = 0; i < trials; i++) {
    const { minA, minB, playCount } = play(maxRounds, numBlindCards)
    minASum += minA
    minBSum += minB
    playCountSum += playCount
    if (playCount < maxRounds) {
      terminations++
    }
  }
  return {
    minA: minASum / trials,
    minB: minBSum / trials,
    playCount: playCountSum / trials,
    terminations: terminations / trials
  }
}
export default function collectData(start: number) {
  for (let maxRounds = start; maxRounds <= 5000; maxRounds += 10) {
    const { minA, minB, playCount, terminations } = runTrial(1000, maxRounds, 1)
    console.info(
      `${maxRounds},${Math.min(minA, minB)},${playCount},${terminations}`
    )
  }
}

collectData(Number(process.argv[2] || '10'))
