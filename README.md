# Will This Game Of War Ever End?

If you've ever played the game of [War](<https://en.wikipedia.org/wiki/War_(card_game)>), especially as a parent against a child, you may have wondered, "_OMG, is this game ever going to end??_" This project simulates the game to answer that very question. TL;DR: "No, probably not."

For the purposes of this simulation, if you _ever_ run out of cards, either during normal play or during a "war" scenario, you lose the game.

Each trial consisted of 1000 games, with randomly shuffled decks. What varied for each trial was how many maximum plays (card flips that could result in winning or losing cards) were allowed to be played before stopping. I was interested in how the probability of the game terminating goes up as you continue to play more and more rounds, and also how many "blind cards" (played face down to be won or lost in a "war") are played during a "war" scenario, as some people play with different rules about that.

## Probability of Termination

With one blind card, the probability of the game ever ending goes up pretty linearly, but then levels out at about 60%, no matter how long you play. If you're playing with one blind card rules, you've got to play about 3,000 card flips to get to a 50-50 chance of the game ending. That's about two hours of playing _very_ quickly with a flip every 2.4 seconds.

With two blind cards, you can get to a 50-50 chance of the game ending with only 1,250 flips, that's just under an hour at the 2.4 seconds per flip rate, with the maximum probability of the game ending maxing out at around 73%, no matter how long you play. With three blind cards, the 50-50 point comes quickly at only 450 flips, and gets all the way up to a 90% chance of completion if you play forever.

![Probability of Termination](https://raw.githubusercontent.com/erikras/war/master/charts/termination.jpg)

## Average Total Plays

How many plays you will probably have for any given hard "Okay, we're not gonna play more than X times" limit?

You can be pretty certain that if you are playing with three blind cards, you probably won't end up playing more than 1,000 flips, no matter what your limit.

![Average Total Plays](https://raw.githubusercontent.com/erikras/war/master/charts/plays.jpg)

## Minimum Card Count

What is the smallest hand you might get down to if you play forever (a game that does not terminate)?

If you're playing with one blind card, the answer is about 12, or just under a quarter of the entire deck. For two blind cards, the answer is 11, and for three blind cards, the answer is 10.

![Minimum Card Count](https://raw.githubusercontent.com/erikras/war/master/charts/cards.jpg)

## Conclusion

If you want your game of War to finish earlier, use more blind cards during each "war" scenario. But even so, you still might play until the heat death of the universe. ☠️

---

by Erik Rasmussen [@erikras](https://twitter.com/erikras)

[Source code on Github](https://github.com/erikras/war)
