# To Run

[![CodeQL](https://github.com/SOliv1/flash-cards-ca/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/SOliv1/flash-cards-ca/actions/workflows/codeql-analysis.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/6693605e-ab3a-456a-9f94-68db2f3c5a49/deploy-status?branch=master)](https://app.netlify.com/sites/flash-cards-react-router-ca/deploys)

View deplyed site with [Netlify here](https://flash-cards-react-router-ca.netlify.app/) 

Run `npm start` in the project root and the app will be available on port 3000.


# State

The app's state is totally normalized, with slices for topics, quizzes, and cards.

# Routes

- `/new-topic` – form to create a new topic
- `/topics` – index of all topics
- `/topics/:topicId` – page for an individual topic
- `/new-quiz` – form to create a new quiz
- `/quizzes` – index of all quizzes
- `/quizzes/:quizId` – page for an individual quiz

# To Test

1. Create topics
2. Create quizzes
3. Visit the page for an individual quiz and flip the cards over

# Questions

Is this appropriately scoped? Does it have too many features? Too few?
