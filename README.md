# PHQ-9 Depression Screener Questionnaire
A PHQ-9 depression screener and assessment built using React/Redux and Node.js on the server.

### User Stories
1) As a patient, I would like to take the PHQ-9 depression screener and get the assessment score along with its explanation.
2) As a patient, if I score moderate depression or higher, I would like to be presented with three options for therapists that I can choose.


## Development

### Installing Dependencies

From within the root directory:

```sh
git clone https://github.com/ellier7/PHQ-9_screener.git
cd PHQ-9_screener
npm install
npm run build
npm run start
open localhost:8000 in your browser
```

### My approach
On the client, I used React/Redux to manage the state and Webpack and Babel to transpile and bundle ES2015/JSX code. The answer to each question is presented as a bootstrap button. I built an action creator that is triggered each time a user clicks on a button. Each answer has a different value (0-3). When a answer is clicked on, I store the question index and answer value in an object. To calculate the score when the user submits their answers, I reduce over the Object keys to present a total score. If the score is >= 10, the user is presented with 3 names and addresses of therapists they can select. Once they select a therapist, a thank you note is displayed. If the user scores below a 10, only the thank you note is displayed.
