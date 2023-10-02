# Web Development Project 3 - *Linear Algebra Flashcards*

Submitted by: **Sean Craig**

This web app: **This is a site to help linear algebra flashcards study for their class by reviewing important vocabulary and concepts for the class. There is functionality to flip cards over to their answer, flip through the cards, and make a guess for what the answer is with a subtle visual queue for a correct or incorrect answer.**

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:

- [✓] **The user can enter their guess in a box before seeing the flipside of the card**
- [✓] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [✓] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [✓] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [ ] A shuffle button is used to randomize the order of the cards
- [✓] A user's answer may be counted as correct even when it is slightly different from the target answer
- [ ] A counter displays the user's current and longest streak of correct responses
- [ ] A user can mark a card that they have mastered and have it removed from the pool of answers as well as added to a list of mastered cards

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of the site:

https://imgur.com/a/4W3pGUp

<img src='https://imgur.com/a/4W3pGUp.gif' title='Video Walkthrough' width='1878' height='806' alt='Video Walkthrough' />

Gif created with ScreenToGif.

## Notes

Spent a good amount of time investigating the possibility of using Google's NLP model API to allow for great leniency with evaluating if answers are right or wrong. There's not enough time and too much risk to work on it alone so I scrapped the idea with only bloat in my node_modules directory to show of it. As always, ChatGPT and YouTube tutorials are a wonderful thing for learning how to reach little goals in development. There's lots of potential to implement more features had I only have had more time to spend for it.
At some point I want to add card-flip-on-next, flip animation, and actaully figure out how to use Google's NLP API.

## License

    Copyright 2023 Sean Craig

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.