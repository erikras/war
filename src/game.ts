import shuffle from 'knuth-shuffle-seeded'
type Card = number
type Deck = Card[]

export default function play(maxRounds: number, numBlindCards: number) {
  const makeDeck = (): Deck =>
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].reduce(
      (deck: Deck, card: Card) => [...deck, card, card, card, card],
      []
    )

  const deck = shuffle(makeDeck())
  let a: Deck = deck.slice(0, 26)
  let b: Deck = deck.slice(26, 52)

  let playCount = 0
  let minA = 26
  let minB = 26
  while (a.length && b.length && playCount < maxRounds) {
    if (a.length + b.length < 52) {
      throw Error()
    }
    minA = Math.min(a.length, minA)
    minB = Math.min(b.length, minB)
    const aCard: Card | undefined = a.shift()
    const bCard: Card | undefined = b.shift()
    if (aCard && bCard) {
      if (aCard > bCard) {
        a.push(aCard)
        a.push(bCard)
      } else if (aCard < bCard) {
        b.push(aCard)
        b.push(bCard)
      } else {
        // WAR!
        let cardsToWin: Deck = [aCard, bCard]
        while (true) {
          playCount++
          if (playCount >= maxRounds) {
            break
          }
          for (let i = 0; i < numBlindCards; i++) {
            const aBlind: Card | undefined = a.shift()
            const bBlind: Card | undefined = b.shift()
            if (!aBlind || !bBlind) {
              break
            }
            cardsToWin.push(aBlind, bBlind)
          }
          const aWarCard: Card | undefined = a.shift()
          const bWarCard: Card | undefined = b.shift()
          if (!aWarCard || !bWarCard) {
            break
          }
          cardsToWin.push(aWarCard, bWarCard)
          if (aWarCard > bWarCard) {
            a = [...a, ...cardsToWin]
            break
          } else if (aWarCard < bWarCard) {
            b = [...b, ...cardsToWin]
            break
          }
        }
      }
      playCount++
    }
  }
  return { a: a.length, b: b.length, minA, minB, playCount }
}
