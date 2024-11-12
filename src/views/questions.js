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
  7: {
    questions: [
      {
        question: "Which of the following best describes the purpose of state in React.js?",
        options: [
          "It stores the URL of the current page",
          "It stores data that is static and does not change",
          "It holds dynamic data that can change over time and triggers re-rendering of components when updated",
          "It is used to manage CSS styling within components"
        ],
        answer: 2,  // Correct answer is "It holds dynamic data that can change over time and triggers re-rendering of components when updated"
        selected: null
      },
      {
        question: "In Vue.js, what is the purpose of the 'v-for' directive?",
        options: [
          "To bind a variable to a DOM element",
          "To iterate over an array or object and render a list of items",
          "To apply conditional rendering to DOM elements",
          "To create a new component dynamically"
        ],
        answer: 1,  // Correct answer is "To iterate over an array or object and render a list of items"
        selected: null
      },
      {
        question: "Which HTML tag is used to create an unordered list?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        answer: 0,  // Correct answer is "<ul>"
        selected: null
      },
      {
        question: "Which of the following CSS properties is used to center an element horizontally on the page?",
        options: [
          "float: center;",
          "margin: 0 auto;",
          "position: center;",
          "align-items: center;"
        ],
        answer: 1,  // Correct answer is "margin: 0 auto;"
        selected: null
      }
    ]
  },
  8: {
    questions: [
      {
        question: "Which method is used in Express.js to handle HTTP GET requests?",
        options: [
          "app.post()",
          "app.put()",
          "app.get()",
          "app.delete()"
        ],
        answer: 2,  // Correct answer is "app.get()"
        selected: null
      },
      {
        question: "What is the role of a REST API in web development?",
        options: [
          "It manages the database connections and queries",
          "It is a protocol for sending emails",
          "It allows communication between the front-end and back-end by defining a set of endpoints and methods for retrieving, creating, updating, and deleting data",
          "It provides a mechanism for data encryption"
        ],
        answer: 2,  // Correct answer is "It allows communication between the front-end and back-end by defining a set of endpoints and methods for retrieving, creating, updating, and deleting data"
        selected: null
      },
      {
        question: "In Node.js, which module is commonly used to work with file systems?",
        options: ["http", "fs", "express", "mongodb"],
        answer: 1,  // Correct answer is "fs"
        selected: null
      },
      {
        question: "Which of the following is a NoSQL database commonly used in full-stack web development?",
        options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
        answer: 2,  // Correct answer is "MongoDB"
        selected: null
      }
    ]
  },
  9: {
    questions: [
      {
        question: "What is the primary function of an Artificial Neural Network (ANN)?",
        options: [
          "To simulate the human brain's decision-making process",
          "To store data in a neural structure",
          "To classify data based on pre-defined categories",
          "To optimize search algorithms"
        ],
        answer: 0,  // Correct answer is "To simulate the human brain's decision-making process"
        selected: null
      },
      {
        question: "In the context of AI, what is an example of an uninformed search algorithm?",
        options: [
          "A* Search",
          "Breadth-First Search",
          "Best-First Search",
          "Greedy Search"
        ],
        answer: 1,  // Correct answer is "Breadth-First Search"
        selected: null
      },
      {
        question: "Which of the following best describes a Convolutional Neural Network (CNN)?",
        options: [
          "A type of artificial neural network used for data mining",
          "A neural network primarily used for processing structured data",
          "A deep learning algorithm specifically designed for image recognition",
          "A machine learning algorithm for natural language processing"
        ],
        answer: 2,  // Correct answer is "A deep learning algorithm specifically designed for image recognition"
        selected: null
      },
      {
        question: "Which of the following search strategies guarantees an optimal solution when the heuristic is admissible?",
        options: [
          "Depth-First Search",
          "Breadth-First Search",
          "A* Search",
          "Greedy Search"
        ],
        answer: 2,  // Correct answer is "A* Search"
        selected: null
      }
    ]
  },
  10: {
    questions: [
      {
        question: "In a neural network, what is the purpose of an activation function?",
        options: [
          "To initialize the weights of the neurons",
          "To introduce non-linearity into the network",
          "To calculate the output based on input data",
          "To adjust the network's learning rate"
        ],
        answer: 1,  // Correct answer is "To introduce non-linearity into the network"
        selected: null
      },
      {
        question: "Which of the following is a characteristic of an informed search algorithm?",
        options: [
          "It does not use any knowledge about the problem domain",
          "It uses a heuristic to guide the search towards the goal",
          "It explores all possible paths in a random order",
          "It uses breadth-first exploration"
        ],
        answer: 1,  // Correct answer is "It uses a heuristic to guide the search towards the goal"
        selected: null
      },
      {
        question: "What is a key feature of Convolutional Neural Networks (CNNs) that differentiates them from other neural networks?",
        options: [
          "They use convolutions and pooling layers for feature extraction",
          "They require fewer data points to train than fully connected networks",
          "They are exclusively used for sequence data",
          "They rely solely on recurrent layers"
        ],
        answer: 0,  // Correct answer is "They use convolutions and pooling layers for feature extraction"
        selected: null
      },
      {
        question: "What is the primary advantage of using the backpropagation algorithm in neural networks?",
        options: [
          "It increases the number of neurons in the network",
          "It helps to optimize the weights through gradient descent",
          "It allows the network to learn from unsupervised data",
          "It automatically selects the optimal activation function"
        ],
        answer: 1,  // Correct answer is "It helps to optimize the weights through gradient descent"
        selected: null
      }
    ]
  },
  11: {
    questions: [
      {
        question: "Which of the following is a key focus of Human-Computer Interaction (HCI)?",
        options: [
          "Designing efficient algorithms",
          "Improving communication between humans and computers",
          "Maximizing computational power",
          "Building scalable databases"
        ],
        answer: 1,  // Correct answer is "Improving communication between humans and computers"
        selected: null
      },
      {
        question: "What does 'affordance' refer to in HCI design?",
        options: [
          "The visual design of the interface",
          "The functionality of the system that is suggested by the design",
          "The speed at which a system responds",
          "The process of debugging a system"
        ],
        answer: 1,  // Correct answer is "The functionality of the system that is suggested by the design"
        selected: null
      },
      {
        question: "Which theory emphasizes the need for interfaces that can be customized to suit individual users' needs?",
        options: [
          "Distributed Cognition",
          "Activity Theory",
          "Cognitive Load Theory",
          "User-Centered Design"
        ],
        answer: 3,  // Correct answer is "User-Centered Design"
        selected: null
      },
      {
        question: "Which of the following is a key characteristic of emotional computing in HCI?",
        options: [
          "Computers process and recognize human emotions",
          "Human emotions are ignored to enhance performance",
          "Computers are programmed to mimic emotions without interaction",
          "Humans are discouraged from expressing emotions while interacting with systems"
        ],
        answer: 0,  // Correct answer is "Computers process and recognize human emotions"
        selected: null
      },
      {
        question: "Which design principle focuses on reducing cognitive load by presenting information in a simple, clear manner?",
        options: [
          "Consistency",
          "Clarity",
          "Efficiency",
          "Feedback"
        ],
        answer: 1,  // Correct answer is "Clarity"
        selected: null
      },
      {
        question: "What is the primary goal of adaptive interfaces in HCI?",
        options: [
          "To increase computational power",
          "To reduce the need for user input",
          "To adjust the system according to users' preferences and contexts",
          "To increase the system's learning capability"
        ],
        answer: 2,  // Correct answer is "To adjust the system according to users' preferences and contexts"
        selected: null
      },
      {
        question: "Which of the following is an example of an intelligent user interface (IUI)?",
        options: [
          "Voice-controlled assistants like Siri or Alexa",
          "A command-line terminal",
          "A traditional desktop environment with icons",
          "A basic calculator application"
        ],
        answer: 0,  // Correct answer is "Voice-controlled assistants like Siri or Alexa"
        selected: null
      },
      {
        question: "What is the primary focus of the Theory of Affordances in HCI?",
        options: [
          "How the design of objects can suggest their functionality",
          "How users emotionally react to different systems",
          "How the cognitive load impacts system usability",
          "How systems respond to user commands"
        ],
        answer: 0,  // Correct answer is "How the design of objects can suggest their functionality"
        selected: null
      }
    ]
  },
  
  12: {
    questions: [
      {
        question: "Which of the following is a widely used method to evaluate user interface designs in HCI?",
        options: [
          "Controlled experiments",
          "Thematic analysis",
          "Fitts' law",
          "A/B testing"
        ],
        answer: 3,  // Correct answer is "A/B testing"
        selected: null
      },
      {
        question: "In terms of HCI, what does 'usability' primarily refer to?",
        options: [
          "The speed at which a system operates",
          "The ease with which users can complete tasks using the system",
          "The aesthetic quality of the interface",
          "The complexity of the system's design"
        ],
        answer: 1,  // Correct answer is "The ease with which users can complete tasks using the system"
        selected: null
      },
      {
        question: "What is the role of a 'persona' in the context of User-Centered Design (UCD)?",
        options: [
          "To represent the users and their goals, behaviors, and challenges",
          "To represent the system's technical specifications",
          "To track system performance metrics",
          "To define the aesthetic style of the interface"
        ],
        answer: 0,  // Correct answer is "To represent the users and their goals, behaviors, and challenges"
        selected: null
      },
      {
        question: "Which of the following is an example of an 'intelligent' or 'smart' device in the context of HCI?",
        options: [
          "A digital wristwatch that monitors health data",
          "A traditional microwave oven with basic controls",
          "A basic landline phone",
          "A mechanical clock"
        ],
        answer: 0,  // Correct answer is "A digital wristwatch that monitors health data"
        selected: null
      },
      {
        question: "Which of the following is a type of user interface that uses physical gestures for interaction?",
        options: [
          "Touchscreen interface",
          "Voice interface",
          "Gesture-based interface",
          "Command-line interface"
        ],
        answer: 2,  // Correct answer is "Gesture-based interface"
        selected: null
      },
      {
        question: "What is a key challenge in designing for smart devices in HCI?",
        options: [
          "Ensuring they operate without any connectivity",
          "Designing them to ignore user behavior",
          "Ensuring seamless interaction and contextual awareness",
          "Designing them with a traditional interface"
        ],
        answer: 2,  // Correct answer is "Ensuring seamless interaction and contextual awareness"
        selected: null
      },
      {
        question: "Which of the following best defines a 'context-aware' system in HCI?",
        options: [
          "A system that responds to environmental stimuli and adapts to the user’s context",
          "A system that allows users to manually adjust settings",
          "A system that functions only in certain fixed conditions",
          "A system that is based on voice input alone"
        ],
        answer: 0,  // Correct answer is "A system that responds to environmental stimuli and adapts to the user’s context"
        selected: null
      },
      {
        question: "Which of the following theories focuses on the cognitive processes involved in human interaction with computers?",
        options: [
          "Cognitive Load Theory",
          "Cultural Theory",
          "Transactional Theory",
          "Media Richness Theory"
        ],
        answer: 0,  // Correct answer is "Cognitive Load Theory"
        selected: null
      }
    ]
  }
  
  
  
  


 };
 