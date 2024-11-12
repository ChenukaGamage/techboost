// questions.js
export const quizData = {
   1: {
     questions: [
       {
         question: "What is the primary function of the ALU (Arithmetic Logic Unit) in a CPU?",
         options: [
           "To manage memory",
           "To perform arithmetic and logical operations",
           "To store data",
           "To handle input/output operations"
         ],
         answer: 1,  // Correct answer is "To perform arithmetic and logical operations"
         selected: null
       },
       {
         question: "Which of the following is a type of computer memory that is typically volatile?",
         options: ["Hard disk", "Flash drive", "RAM", "CD-ROM"],
         answer: 2,  // Correct answer is "RAM"
         selected: null
       },
       {
         question: "In a CPU, what does the term 'clock speed' refer to?",
         options: [
           "The speed at which data is stored",
           "The rate at which the CPU executes instructions",
           "The speed of RAM",
           "The speed of data transfer between CPU and peripherals"
         ],
         answer: 1,  // Correct answer is "The rate at which the CPU executes instructions"
         selected: null
       },
       {
        question: "What is a primary purpose of the 'def' keyword in Python?",
        options: [
          "To define a function",
          "To declare a variable",
          "To initiate a loop",
          "To end a program"
        ],
        answer: 0,  // Correct answer is "To define a function"
        selected: null
      },
      {
        question: "Which of the following data types is immutable in Python?",
        options: ["List", "Dictionary", "Set", "Tuple"],
        answer: 3,  // Correct answer is "Tuple"
        selected: null
      },
      {
        question: "What does the 'len()' function do in Python?",
        options: [
          "Adds elements to a list",
          "Returns the length of an object",
          "Sorts a list",
          "Deletes elements from a list"
        ],
        answer: 1,  // Correct answer is "Returns the length of an object"
        selected: null
      },
      {
        question: "What will be the output of 'print(type([]))' in Python?",
        options: [
          "<class 'tuple'>",
          "<class 'dict'>",
          "<class 'list'>",
          "<class 'set'>"
        ],
        answer: 2,  // Correct answer is "<class 'list'>"
        selected: null
      },
      {
        question: "Which operator is used for exponentiation in Python?",
        options: ["*", "**", "//", "%"],
        answer: 1,  // Correct answer is "**"
        selected: null
      }
     ]
   },
   2: {
     questions: [
       {
         question: "What is the purpose of the 'def' keyword in Python?",
         options: [
           "To define a loop",
           "To define a function",
           "To define a variable",
           "To define a class"
         ],
         answer: 1,  // Correct answer is "To define a function"
         selected: null
       },
       {
         question: "Which of the following data types is immutable in Python?",
         options: ["List", "Dictionary", "String", "Set"],
         answer: 2,  // Correct answer is "String"
         selected: null
       },
       {
         question: "What does the 'len()' function do in Python?",
         options: [
           "Calculates the sum of a list",
           "Returns the length of an object",
           "Converts a string to uppercase",
           "Returns the maximum value in a list"
         ],
         answer: 1,  // Correct answer is "Returns the length of an object"
         selected: null
       },
       {
        question: "In Python, what is the output of 'print(3 * (2 + 5))'?",
        options: [
          "21",
          "17",
          "25",
          "35"
        ],
        answer: 0,  // Correct answer is "21"
        selected: null
      },
      {
        question: "What does 'PEP' stand for in Python?",
        options: [
          "Python End Program",
          "Python Enhancement Proposal",
          "Python Extended Package",
          "Programming Environment for Python"
        ],
        answer: 1,  // Correct answer is "Python Enhancement Proposal"
        selected: null
      },
      {
        question: "Which of these statements will create an empty dictionary in Python?",
        options: [
          "d = []",
          "d = {}",
          "d = set()",
          "d = dict([])"
        ],
        answer: 1,  // Correct answer is "d = {}"
        selected: null
      },
      {
        question: "How do you start a comment in Python?",
        options: [
          "//",
          "/*",
          "#",
          "!!"
        ],
        answer: 2,  // Correct answer is "#"
        selected: null
      },
      {
        question: "Which keyword is used to handle exceptions in Python?",
        options: [
          "except",
          "catch",
          "handle",
          "error"
        ],
        answer: 0,  // Correct answer is "except"
        selected: null
      }
     ]
   },
   3: {
    questions: [
      {
        question: "What is the default value of an instance variable of type int in Java?",
        options: [
          "0",
          "null",
          "undefined",
          "-1"
        ],
        answer: 0,  // Correct answer is "0"
        selected: null
      },
      {
        question: "Which of the following is not a primitive data type in Java?",
        options: [
          "int",
          "float",
          "String",
          "boolean"
        ],
        answer: 2,  // Correct answer is "String"
        selected: null
      },
      {
        question: "What is the output of the following code snippet: System.out.println(3 + 4 + \"Java\");",
        options: [
          "7 Java",
          "Java7",
          "34 Java",
          "3 + 4 Java"
        ],
        answer: 0,  // Correct answer is "7 Java"
        selected: null
      },
      {
        question: "In Java, what is the size (in bits) of a float data type?",
        options: [
          "32",
          "64",
          "16",
          "8"
        ],
        answer: 0,  // Correct answer is "32"
        selected: null
      }
    ]
  },
  4: {
    questions: [
      {
        question: "Which keyword is used to inherit a class in Java?",
        options: [
          "inherits",
          "extends",
          "implements",
          "inheritsFrom"
        ],
        answer: 1,  // Correct answer is "extends"
        selected: null
      },
      {
        question: "Which method is called first when an application is started in Java?",
        options: [
          "init()",
          "start()",
          "main()",
          "run()"
        ],
        answer: 2,  // Correct answer is "main()"
        selected: null
      },
      {
        question: "What will be the output of the following code? int x = 5; System.out.println(x++);",
        options: [
          "5",
          "6",
          "Error",
          "None of the above"
        ],
        answer: 0,  // Correct answer is "5"
        selected: null
      },
      {
        question: "Which access modifier allows access within the same package and also by subclasses?",
        options: [
          "public",
          "protected",
          "private",
          "default"
        ],
        answer: 1,  // Correct answer is "protected"
        selected: null
      }
    ]
  },
  5: {
    questions: [
      {
        question: "Which logic gate outputs 1 only when both inputs are different?",
        options: [
          "AND Gate",
          "OR Gate",
          "XOR Gate",
          "NAND Gate"
        ],
        answer: 2,  // Correct answer is "XOR Gate"
        selected: null
      },
      {
        question: "What is the sum output of a half-adder when the inputs are A=1 and B=1?",
        options: [
          "0",
          "1",
          "2",
          "3"
        ],
        answer: 1,  // Correct answer is "1"
        selected: null
      },
      {
        question: "What is the function of a multiplexer?",
        options: [
          "To add two numbers",
          "To select one of many inputs based on control lines",
          "To store data",
          "To perform logical operations"
        ],
        answer: 1,  // Correct answer is "To select one of many inputs based on control lines"
        selected: null
      },
      {
        question: "Which of the following is the canonical form for a Boolean expression?",
        options: [
          "Sum of Products (SOP)",
          "Product of Sums (POS)",
          "Both Sum of Products and Product of Sums",
          "Neither SOP nor POS"
        ],
        answer: 2,  // Correct answer is "Both Sum of Products and Product of Sums"
        selected: null
      }
    ]
  },
  6: {
    questions: [
      {
        question: "In a full adder, what is the output carry when A=1, B=1, and Cin=1?",
        options: [
          "0",
          "1",
          "2",
          "None of the above"
        ],
        answer: 1,  // Correct answer is "1"
        selected: null
      },
      {
        question: "Which Karnaugh map configuration corresponds to the Boolean function A'B + AB'?",
        options: [
          "Two adjacent 1's",
          "One 1 in the first row",
          "One 1 in the second column",
          "One 1 in the top-left corner"
        ],
        answer: 0,  // Correct answer is "Two adjacent 1's"
        selected: null
      },
      {
        question: "In a 4-to-1 multiplexer, how many control lines are needed to select one of the inputs?",
        options: [
          "1",
          "2",
          "3",
          "4"
        ],
        answer: 1,  // Correct answer is "2"
        selected: null
      },
      {
        question: "Which Boolean operation is represented by a NAND gate?",
        options: [
          "NOT(AND)",
          "NOT(OR)",
          "AND",
          "OR"
        ],
        answer: 0,  // Correct answer is "NOT(AND)"
        selected: null
      }
    ]
  },


 };
 