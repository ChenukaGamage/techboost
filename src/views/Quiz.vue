<template>
  <div class="container text-center mt-4">
    <h1>Quiz for Chapter {{ quizId }}</h1>
    <div v-if="quiz">
      <div v-for="(question, index) in quiz.questions" :key="index" class="mt-3">
        <h3>{{ question.text }}</h3>
        <ul>
          <li v-for="(option, optIndex) in question.options" :key="optIndex">
            <button
              class="btn mt-2"
              :class="{
                'btn-success': isCorrectAnswer(index, optIndex) && submitted, // Highlight correct answer in green
                'btn-danger': isIncorrectAnswer(index, optIndex) && submitted, // Highlight incorrect answer in red
                'btn-outline-primary': userAnswers[index] === null, // Default style for unanswered questions
                'btn-secondary': userAnswers[index] !== null && optIndex === this.quiz.questions[index].correctAnswer && !isCorrectAnswer(index, optIndex) // Highlight correct answer if user answered incorrectly
              }"
              @click="selectAnswer(index, optIndex)"
              :disabled="userAnswers[index] !== null"
            >
              {{ option }}
            </button>
          </li>
        </ul>
      </div>
      <div class="mt-4">
        <button class="btn btn-primary" @click="submitQuiz">Submit Quiz</button>
      </div>
      <div v-if="submitted" class="mt-4">
        <h3>Your Score: {{ score }}/{{ quiz.questions.length }}</h3>
      </div>
    </div>
    <p v-else>Loading quiz...</p>
  </div>
</template>

<script>
// Mock quiz data with correct answers
const quizData = {
  1: {
    questions: [
      {
        text: "What is Vue.js?",
        options: ["A library", "A framework", "A database", "A CSS tool"],
        correctAnswer: 1 // Correct answer is "A framework"
      },
      {
        text: "Who created Vue.js?",
        options: ["Evan You", "Jordan Walke", "Brendan Eich", "Guido van Rossum"],
        correctAnswer: 0 // Correct answer is "Evan You"
      }
    ]
  },
  2: {
    questions: [
      {
        text: "What is the virtual DOM?",
        options: ["A UI representation", "A backend concept", "An actual DOM", "A CSS method"],
        correctAnswer: 0 // Correct answer is "A UI representation"
      },
      {
        text: "Which lifecycle hook is called after mounting?",
        options: ["created", "mounted", "destroyed", "updated"],
        correctAnswer: 1 // Correct answer is "mounted"
      }
    ]
  }
};

export default {
  name: 'Quiz',
  data() {
    return {
      userAnswers: [], // Initialize without a fixed length
      submitted: false, // Track if the quiz has been submitted
      score: 0 // Initialize score
    };
  },
  computed: {
    quizId() {
      return this.$route.params.quizId; // Get the quizId from the route parameters
    },
    quiz() {
      return quizData[this.quizId]; // Retrieve quiz based on quizId
    }
  },
  created() {
    const quiz = this.quiz; // Get the current quiz based on quizId
    if (quiz) {
      this.userAnswers = Array(quiz.questions.length).fill(null); // Initialize userAnswers based on quiz length
    }
  },
  methods: {
    selectAnswer(questionIndex, optionIndex) {
      this.userAnswers[questionIndex] = optionIndex; // Store the user's selected answer
    },
    isCorrectAnswer(questionIndex, optionIndex) {
      return this.userAnswers[questionIndex] === optionIndex && optionIndex === this.quiz.questions[questionIndex].correctAnswer;
    },
    isIncorrectAnswer(questionIndex, optionIndex) {
      return this.userAnswers[questionIndex] === optionIndex && optionIndex !== this.quiz.questions[questionIndex].correctAnswer;
    },
    submitQuiz() {
      this.score = this.userAnswers.reduce((acc, answer, index) => {
        return acc + (answer === this.quiz.questions[index].correctAnswer ? 1 : 0);
      }, 0);
      this.submitted = true; // Mark the quiz as submitted
    }
  }
};
</script>

<style scoped>
.container {
  color: #ffffff;
  background-color: #34495e;
  padding: 2rem;
  border-radius: 10px;
}
button {
  width: 100%;
}
</style>
