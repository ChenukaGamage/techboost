<script setup>
import { ref, computed } from 'vue'
import {
   BIconBatteryFull,
   BIconArrow90degDown,
   BIconAlarm,
} from "bootstrap-icons-vue";

const questions = ref([
   {
      question: 'What is Vue?',
      answer: 0,
      options: [
         'A framework',
         'A library',
         'A type of hat'
      ],
      selected: null
   },
   {
      question: 'What is Vuex used for?',
      answer: 2,
      options: [
         'Eating a delicious snack',
         'Viewing things',
         'State management'
      ],
      selected: null
   },
   {
      question: 'What is Vue Router?',
      answer: 1,
      options: [
         'An ice cream maker',
         'A routing library for Vue',
         'Burger sauce'
      ],
      selected: null
   }
])

const quizCompleted = ref(false)
const currentQuestion = ref(0)
const score = computed(() => {
   let value = 0
   questions.value.map(q => {
      if (q.selected != null && q.answer == q.selected) {
         console.log('correct');
         value += 2
      }
   })
   return value
})

const getCurrentQuestion = computed(() => {
   let question = questions.value[currentQuestion.value]
   question.index = currentQuestion.value
   return question
})

const SetAnswer = (evt) => {
   questions.value[currentQuestion.value].selected = evt.target.value
   evt.target.value = null
}

const nextQuestion = () => {
   if (currentQuestion.value < questions.value.length - 1) {
      currentQuestion.value++
      return
   }
   quizCompleted.value = true
}

const previousQuestion = () => {
   if (currentQuestion.value > 0) {
      currentQuestion.value--
      return
   }
   quizCompleted.value = true
}
</script>

<template>
<main class="app">
   <h1>Quiz</h1>

   <section class="quiz" v-if="!quizCompleted">
      <div class="quiz-info">
         <span class="question">{{ getCurrentQuestion.question }}</span>
         <span class="score">Score {{ score }}/{{ questions.length * 2 }}</span>
      </div>

      <div class="options">
         <label
            v-for="(option, index) in getCurrentQuestion.options"
            :for="'option' + index"
            :class="`option ${
               getCurrentQuestion.selected == index
                  ? index == getCurrentQuestion.answer
                     ? 'correct'
                     : 'wrong'
                  : ''
            } ${
               getCurrentQuestion.selected != null &&
               index != getCurrentQuestion.selected
                  ? 'disabled'
                  : ''
            }`">
            <input 
               type="radio" 
               :id="'option' + index"
               :name="getCurrentQuestion.index" 
               :value="index"
               v-model="getCurrentQuestion.selected"
               :disabled="getCurrentQuestion.selected"
               @change="SetAnswer"
            />
            <span>{{ option }}</span>
         </label>
      </div>
      <div class="container">
         <button 
            type="button" 
            class="btn btn-info p-3 rounded-circle btn-sm opacity-85"
            @click="previousQuestion"
            :disabled="getCurrentQuestion.selected <= 0">
            <i class="bi bi-arrow-left"></i>
         </button>      
         <button 
            type="button" 
            class="btn btn-info p-3 rounded-circle btn-sm opacity-85"
            @click="nextQuestion"
            :disabled="getCurrentQuestion.selected === null">
            <i class="bi bi-arrow-right"></i>
         </button>      
      </div>
   </section>
   <section v-else>
      <h1> Quiz Completed !</h1>
      <p> Your Score is {{ score }}/{{ questions.length * 2 }}</p>
   </section>
</main>
</template>

<style>
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
   background-color: #382a4b;
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
