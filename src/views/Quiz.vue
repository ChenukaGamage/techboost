<template>
  <main class="app">
    <h1>Quiz</h1>
    <section v-if="!quizCompleted" class="quiz">
      <div class="quiz-info">
        <span class="question">{{ getCurrentQuestion.question }}</span>
        <span class="score">Score: {{ score }}/{{ questions.length * 2 }}</span>
      </div>
      <div class="container">
        <button
          type="button"
          class="btn btn-info p-3 rounded-circle btn-sm opacity-85"
          @click="previousQuestion"
          :disabled="currentQuestion.value <= 0"
        >
          <i class="bi bi-arrow-left"></i>
        </button>
        <button
          type="button"
          class="btn btn-info p-3 rounded-circle btn-sm opacity-85"
          @click="nextQuestion"
          :disabled="getCurrentQuestion.selected === null"
        >
          <i class="bi bi-arrow-right"></i>
        </button>
      </div>
      <div class="options">
        <label
          v-for="(option, index) in getCurrentQuestion.options"
          :key="index"
          :for="'option' + index"
          :class="getOptionClass(index)"
        >
          <input
            type="radio"
            :id="'option' + index"
            :name="getCurrentQuestion.index"
            :value="index"
            v-model="getCurrentQuestion.selected"
            :disabled="getCurrentQuestion.selected !== null"
            @input="SetAnswer"
          />
          <span>{{ option }}</span>
        </label>
      </div>
    </section>
    <section v-else>
      <h1>Quiz Completed!</h1>
      <p>Your Score is {{ score }}/{{ questions.length * 2 }}</p>
    </section>
  </main>
</template>

<script>
import { ref, computed } from "vue";

// Mock quiz data with correct answers
const quizData = {
  1: {
    questions: [
      {
        question: "What is Vue.js?",
        options: ["A library", "A framework", "A database", "A CSS tool"],
        answer: 1, // Correct answer is "A framework"
        selected: null,
      },
      {
        question: "Who created Vue.js?",
        options: ["Evan You", "Jordan Walke", "Brendan Eich", "Guido van Rossum"],
        answer: 0, // Correct answer is "Evan You"
        selected: null,
      },
    ],
  },
  2: {
    questions: [
      {
        question: "What is the virtual DOM?",
        options: ["A UI representation", "A backend concept", "An actual DOM", "A CSS method"],
        answer: 0, // Correct answer is "A UI representation"
        selected: null,
      },
      {
        question: "Which lifecycle hook is called after mounting?",
        options: ["created", "mounted", "destroyed", "updated"],
        answer: 1, // Correct answer is "mounted"
        selected: null,
      },
    ],
  },
};

export default {
  setup() {
    // Assume quiz ID is 1 for this example, replace with dynamic route param if needed
    const questions = ref(quizData[1].questions);
    const quizCompleted = ref(false);
    const currentQuestion = ref(0);

    const score = computed(() =>
      questions.value.reduce((total, q) => (q.selected === q.answer ? total + 2 : total), 0)
    );

    const getCurrentQuestion = computed(() => questions.value[currentQuestion.value] || {});

    const SetAnswer = (evt) => {
      questions.value[currentQuestion.value].selected = parseInt(evt.target.value);
    };

    const nextQuestion = () => {
      if (currentQuestion.value < questions.value.length - 1) {
        currentQuestion.value++;
      } else {
        quizCompleted.value = true;
      }
    };

    const previousQuestion = () => {
      if (currentQuestion.value > 0) {
        currentQuestion.value--;
      }
    };

    const getOptionClass = (index) => {
      const question = getCurrentQuestion.value;
      return `option ${
        question.selected === index
          ? index === question.answer
            ? "correct"
            : "wrong"
          : ""
      } ${question.selected != null && index !== question.selected ? "disabled" : ""}`;
    };

    return {
      questions,
      quizCompleted,
      currentQuestion,
      score,
      getCurrentQuestion,
      SetAnswer,
      nextQuestion,
      previousQuestion,
      getOptionClass,
    };
  },
};
</script>

<style scoped>
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: 'Montserrat', sans-serif;
}
.body {
   background-color: #f9dada;
   color: #000;
}

.app {
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 2rem;
   height: 100vh;
}

h1 {
   font-size: 2rem;
   margin-bottom: 2rem;
}

.quiz {
   background-color: #5f6162;
   padding: 1rem;
   width: 100%;
   max-width: 640px;
   border-radius: 1rem;
}

.quiz-info {
   display: flex;
   justify-content: space-between;
   margin-bottom: 1rem;
}

.quiz-info .question {
   color: #f9dada;
   font-size: 1.5rem;
}

.quiz-info .score {
   color: #fff;
   font-size: 1.5rem;
}

.options {
   margin-bottom: 1rem;
}

.option {
   padding: 1rem;
   display: block;
   background-color: #828ed1;
   margin-bottom: 0.5rem;
   border-radius: 0.5rem;
   cursor: pointer;
}
.option:hover {
   background-color: #1e2b78;
}
.option.correct {
   background-color: #0a0;
}
.option.wrong {
   background-color: #820000;
}
.option:last-of-type {
   margin-bottom: 0;
}
.option.disabled {
   opacity: 0.5;   
}
.option input {
   display: none;
}

.container {
   display: flex;
   justify-content: space-between;
   margin-top: 1rem;
   margin-bottom: 1rem;
}

h2 {
   font-size: 1.5rem;
   margin-bottom: 1rem;
   text-align: center;
}
p {
   font-size: 1.25rem;
   text-align: center;
   color: #2d2d2d;
}

</style>
