export default {
  words: [
    {
      word: 'plethora',
      synonyms: [
        {
          word: 'scads'
        },
        {
          word: 'heaps'
        },
        {
          word: 'loads'
        },
      ],
      usages: [
        {
          usage: 'She had a plethora of options.'
        },
        {
          usage: 'There were a plethora of pinatas.'
        }
      ],
      test: {
        question: 'What is the best example?',
        options: [
          {
            ordinal: 1,
            option: 'A',
            text: 'The plethora bit me.'
          },
          {
            ordinal: 2,
            option: 'B',
            text: 'Plethora to the rescue!'
          },
          {
            ordinal: 3,
            option: 'C',
            text: 'You have a plethora of pinatas.'
          },
        ]
      }
    },
    {
      word: 'epitome',
      synonyms: [
        {
          word: 'archetype'
        },
        {
          word: 'embodiment'
        },
        {
          word: 'paragon'
        },
      ],
      usages: [
        {
          usage: 'She was the epitome of timeliness.'
        },
        {
          usage: 'It was the epitome of irony.'
        }
      ],
      test: {
        question: 'What is the best example?',
        options: [
          {
            ordinal: 1,
            option: 'A',
            text: 'Epitome is delicious.',
            correct: false,
          },
          {
            ordinal: 2,
            option: 'B',
            text: 'Her epitome was the best',
            correct: false,
          },
          {
            ordinal: 3,
            option: 'C',
            text: 'He was the epitome of a great developer.',
            correct: true,
          },
        ]
      }
    },
  ],
  test: {
    answers: [],
    score: '',
  },
};
