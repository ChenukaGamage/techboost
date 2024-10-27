<template>
  <div class="container text-center mt-4">
    <h1>Quiz for Chapter {{ quizId }}</h1>
    <div v-if="quiz">
      <div v-for="(question, index) in quiz.questions" :key="index" class="mt-3">
        <h3>{{ question.text }}</h3>
        <ul>
          <li v-for="(option, optIndex) in question.options" :key="optIndex">
            <button class="btn btn-outline-primary mt-2">{{ option }}</button>
          </li>
        </ul>
      </div>
    </div>
    <p v-else>Loading quiz...</p>
  </div>
</template>

<script>
// Mock quiz data
const quizData = {
  1: {
    questions: [
      { text: "What is Vue.js?", options: ["A library", "A framework", "A database", "A CSS tool"] },
      { text: "Who created Vue.js?", options: ["Evan You", "Jordan Walke", "Brendan Eich", "Guido van Rossum"] }
    ]
  },
  2: {
    questions: [
      { text: "What is the virtual DOM?", options: ["A UI representation", "A backend concept", "An actual DOM", "A CSS method"] },
      { text: "Which lifecycle hook is called after mounting?", options: ["created", "mounted", "destroyed", "updated"] }
    ]
  }
  // Add more quizzes as needed
};

export default {
  name: 'Quiz',
  computed: {
    quizId() {
      return this.$route.params.quizId;
    },
    quiz() {
      return quizData[this.quizId]; // Retrieve quiz based on quizId
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
