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
      },
      {
        question: "What is the correct way to declare a variable in Python?",
        options: ["let x = 5;", "var x = 5;", "x = 5", "int x = 5;"],
        answer: 2,
      },
      {
        question: "Which function is used to get user input in Python?",
        options: ["scanf()", "cin", "input()", "read()"],
        answer: 2,
      },
      {
        question: "How do you write a single-line comment in Python?",
        options: ["// comment", "# comment", "/* comment */", "<!-- comment -->"],
        answer: 1,
      },
      {
        question: "What is the output of: print('Hello' + 'World')?",
        options: ["Hello World", "Hello+World", "HelloWorld", "Error"],
        answer: 2,
      },
      {
        question: "What keyword is used to define a function in Python?",
        options: ["function", "def", "define", "func"],
        answer: 1,
      },
      {
        question: "What data type does the function len() return?",
        options: ["float", "int", "str", "list"],
        answer: 1,
      },
      {
        question: "Which of the following is not a Python data type?",
        options: ["list", "tuple", "map", "dictionary"],
        answer: 2,
      },
      {
        question: "What is the output of: print(3 * 'abc')?",
        options: ["abcabcabc", "abc*3", "abc", "Error"],
        answer: 0,
      },
      {
        question: "How do you create a new line in a string?",
        options: ["\\n", "\\t", "\\r", "\\s"],
        answer: 0,
      },
      {
        question: "What is the data type of: type(4.0)?",
        options: ["int", "float", "complex", "double"],
        answer: 1,
      },
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
      },
       {
      question: "What does the 'elif' keyword do in Python?",
      options: [
        "Defines another condition in an if statement",
        "Loops through a block of code",
        "Terminates a loop",
        "Creates a variable",
      ],
      answer: 0,
    },
    {
      question: "Which of the following is the correct syntax for an 'if' statement in Python?",
      options: [
        "if condition { ... }",
        "if condition then { ... }",
        "if condition: ...",
        "if condition { ... } else { ... }",
      ],
      answer: 2,
    },
    {
      question: "What is the output of the following code? print(3 == 3)",
      options: [
        "True",
        "False",
        "Error",
        "3",
      ],
      answer: 0,
    },
    {
      question: "What does the 'not' operator do in Python?",
      options: [
        "Negates the condition",
        "Returns the logical negation of the value",
        "Inverts the value of the boolean",
        "None of the above",
      ],
      answer: 1,
    },
    {
      question: "How do you combine multiple conditions in an 'if' statement in Python?",
      options: [
        "Using the 'combine' keyword",
        "Using 'or' and 'and' operators",
        "Using the 'mix' operator",
        "Multiple 'if' statements in sequence",
      ],
      answer: 1,
    },
    {
      question: "Which of the following will be evaluated as False in Python?",
      options: [
        "if 0:",
        "if ''",
        "if None",
        "if 1:",
      ],
      answer: 3,
    },
    {
      question: "Which Python keyword is used to stop the execution of a loop?",
      options: [
        "stop",
        "break",
        "exit",
        "halt",
      ],
      answer: 1,
    },
    {
      question: "What is the result of the following Python expression: 5 > 2 and 3 < 7?",
      options: [
        "True",
        "False",
        "Error",
        "None",
      ],
      answer: 0,
    },
    {
      question: "What is the output of the following code? print(1 < 2 < 3)",
      options: [
        "True",
        "False",
        "Error",
        "None",
      ],
      answer: 0,
    },
    {
      question: "What is the correct way to write a conditional expression (ternary operator) in Python?",
      options: [
        "condition ? true_value : false_value",
        "if condition: true_value else false_value",
        "condition ? (true_value, false_value)",
        "None of the above",
      ],
      answer: 1,
    },
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
      },
      {
        question: "Which of the following is the correct syntax for declaring a variable in Java?",
        options: [
          "int x;",
          "x int;",
          "int x = 0;",
          "0 int x;",
        ],
        answer: 2,
      },
      {
        question: "What is the default value of a boolean variable in Java?",
        options: [
          "false",
          "true",
          "null",
          "0",
        ],
        answer: 0,
      },
      {
        question: "Which method is the entry point for any Java application?",
        options: [
          "start()",
          "main()",
          "run()",
          "init()",
        ],
        answer: 1,
      },
      {
        question: "Which of the following data types is not a primitive type in Java?",
        options: [
          "int",
          "char",
          "String",
          "double",
        ],
        answer: 2,
      },
      {
        question: "Which keyword is used to define a constant in Java?",
        options: [
          "final",
          "constant",
          "static",
          "immutable",
        ],
        answer: 0,
      },
      {
        question: "What will the following code output? `System.out.println(5 + 3 * 2);`",
        options: [
          "16",
          "11",
          "13",
          "23",
        ],
        answer: 1,
      },
      {
        question: "Which of the following is a valid Java identifier?",
        options: [
          "1variable",
          "variable_1",
          "variable-1",
          "variable@1",
        ],
        answer: 1,
      },
      {
        question: "Which of the following is the correct syntax to create a new object of a class in Java?",
        options: [
          "ClassName object = new ClassName();",
          "ClassName object = ClassName();",
          "new ClassName object = ClassName();",
          "ClassName object = new object();",
        ],
        answer: 0,
      },
      {
        question: "What is the purpose of the `public static void main(String[] args)` method in Java?",
        options: [
          "It is the method where execution starts in a Java program",
          "It declares a class in Java",
          "It initializes variables",
          "It compiles the Java code",
        ],
        answer: 0,
      },
      {
        question: "Which of the following is the correct syntax for a single-line comment in Java?",
        options: [
          "/* comment */",
          "// comment",
          "// comment */",
          "<-- comment -->",
        ],
        answer: 1,
      },
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
      },
      {
        question: "Which of the following loops will execute the code block at least once, even if the condition is false?",
        options: [
          "for loop",
          "while loop",
          "do-while loop",
          "for-each loop",
        ],
        answer: 2,
      },
      {
        question: "What will the following code print? `for(int i = 0; i < 5; i++) { System.out.print(i + \" \"); }`",
        options: [
          "0 1 2 3 4",
          "0 1 2 3 4 5",
          "1 2 3 4 5",
          "5 4 3 2 1",
        ],
        answer: 0,
      },
      {
        question: "Which of the following methods can be used to find the length of an array in Java?",
        options: [
          "array.size()",
          "array.length()",
          "array.length",
          "array.getLength()",
        ],
        answer: 2,
      },
      {
        question: "What is the result of the following expression? `int[] arr = {1, 2, 3}; arr[2] = 4;`",
        options: [
          "ArrayIndexOutOfBoundsException",
          "1, 2, 4",
          "1, 2, 3",
          "4, 2, 3",
        ],
        answer: 1,
      },
      {
        question: "What is the correct syntax to declare an array of 10 integers in Java?",
        options: [
          "int[] arr = new int[10];",
          "int arr[] = new int[10];",
          "int[] arr = int[10];",
          "int arr[10];",
        ],
        answer: 0,
      },
      {
        question: "Which of the following is used to handle exceptions in Java?",
        options: [
          "try-catch block",
          "throw-catch block",
          "exception-catch block",
          "catch-throw block",
        ],
        answer: 0,
      },
      {
        question: "What will the following code print? `try { int x = 10 / 0; } catch (ArithmeticException e) { System.out.println(\"Error\"); }`",
        options: [
          "Error",
          "10",
          "ArithmeticException",
          "Nothing",
        ],
        answer: 0,
      },
      {
        question: "Which of the following is NOT a valid type of exception in Java?",
        options: [
          "NullPointerException",
          "IOException",
          "DivideByZeroException",
          "ArithmeticException",
        ],
        answer: 2,
      },
      {
        question: "What is the output of the following code? `int[] arr = {1, 2, 3, 4}; System.out.println(arr[5]);`",
        options: [
          "4",
          "ArrayIndexOutOfBoundsException",
          "1",
          "null",
        ],
        answer: 1,
      },
      {
        question: "Which of the following statements is correct for catching multiple exceptions in Java?",
        options: [
          "catch(Exception1 | Exception2)",
          "catch(Exception1, Exception2)",
          "catch(Exception1 and Exception2)",
          "catch(Exception1, Exception2, Exception3)",
        ],
        answer: 0,
      },
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
      },
      {
        question: "What is the primary function of the CPU?",
        options: [
          "Store data",
          "Perform calculations and execute instructions",
          "Control the input and output devices",
          "Control the power supply",
        ],
        answer: 1,
      },
      {
        question: "What is the purpose of the ALU in the CPU?",
        options: [
          "To execute logical and arithmetic operations",
          "To fetch instructions from memory",
          "To store data temporarily",
          "To manage memory",
        ],
        answer: 0,
      },
      {
        question: "What does the control unit in a CPU do?",
        options: [
          "Performs calculations",
          "Manages the flow of data between components",
          "Stores data in memory",
          "Controls the input and output devices",
        ],
        answer: 1,
      },
      {
        question: "Which component is responsible for transferring data between the CPU and memory?",
        options: [
          "Control Unit",
          "ALU",
          "Memory Unit",
          "Data Bus",
        ],
        answer: 3,
      },
      {
        question: "What is the difference between RAM and ROM?",
        options: [
          "RAM is read-only, and ROM is read-write",
          "RAM is volatile, while ROM is non-volatile",
          "RAM is used for long-term storage, while ROM is used for temporary storage",
          "ROM is faster than RAM",
        ],
        answer: 1,
      },
      {
        question: "What is the purpose of the clock in a CPU?",
        options: [
          "It manages the flow of electricity",
          "It synchronizes the operations of the CPU",
          "It stores data temporarily",
          "It generates power for the CPU",
        ],
        answer: 1,
      },
      {
        question: "Which of the following is an example of secondary memory?",
        options: [
          "RAM",
          "Cache",
          "Hard Disk Drive (HDD)",
          "Registers",
        ],
        answer: 2,
      },
      {
        question: "What does the term 'clock cycle' refer to in a CPU?",
        options: [
          "The time it takes to execute an instruction",
          "The time it takes for the CPU to reset",
          "The time between two instructions being fetched",
          "The speed at which data is transferred",
        ],
        answer: 0,
      },
      {
        question: "Which of the following is not a type of processor architecture?",
        options: [
          "Von Neumann",
          "Harvard",
          "RISC",
          "SRAM",
        ],
        answer: 3,
      },
      {
        question: "What is pipelining in CPU architecture?",
        options: [
          "Executing multiple instructions simultaneously",
          "Breaking down instructions into stages",
          "Performing a single instruction in multiple stages",
          "None of the above",
        ],
        answer: 1,
      },
      {
        question: "What is the primary function of the ALU (Arithmetic Logic Unit) in a computer system?",
        options: [
          "Data storage",
          "Performing arithmetic and logical operations",
          "Handling input and output",
          "Controlling data flow",
        ],
        answer: 1,
      },
      {
        question: "Which of the following is NOT part of the central processing unit (CPU)?",
        options: [
          "Control Unit",
          "Arithmetic Logic Unit",
          "Cache memory",
          "Hard drive",
        ],
        answer: 3,
      },
      {
        question: "What does the control unit (CU) do in a CPU?",
        options: [
          "It performs arithmetic and logical operations",
          "It manages data storage",
          "It fetches, decodes, and executes instructions",
          "It provides power to the CPU",
        ],
        answer: 2,
      },
      {
        question: "In a Von Neumann architecture, which of the following components stores both data and instructions?",
        options: [
          "Registers",
          "Cache",
          "Memory",
          "CPU",
        ],
        answer: 2,
      },
      {
        question: "What is the function of the bus in a computer system?",
        options: [
          "It stores data temporarily",
          "It connects components and transfers data",
          "It processes data",
          "It manages input and output operations",
        ],
        answer: 1,
      },
      {
        question: "Which of the following best describes a register in the context of computer architecture?",
        options: [
          "A permanent storage device",
          "A temporary, high-speed storage area inside the CPU",
          "A type of RAM",
          "A secondary storage device",
        ],
        answer: 1,
      },
      {
        question: "What is the purpose of the fetch-decode-execute cycle in a CPU?",
        options: [
          "To execute the operating system instructions",
          "To run user applications",
          "To execute instructions in a program step by step",
          "To store data in memory",
        ],
        answer: 2,
      },
      {
        question: "What type of memory is directly accessible by the CPU and stores instructions and data?",
        options: [
          "Cache memory",
          "Primary memory (RAM)",
          "Secondary storage (Hard drive)",
          "Optical storage (CD)",
        ],
        answer: 1,
      },
      {
        question: "Which of the following best describes the term 'clock cycle' in computer architecture?",
        options: [
          "The time it takes for the CPU to process a command",
          "The number of operations the CPU can perform in a given time period",
          "The speed at which the memory operates",
          "The frequency at which the CPU fetches instructions from memory",
        ],
        answer: 1,
      },
      {
        question: "Which of the following is NOT a type of processor register?",
        options: [
          "Program Counter",
          "Accumulator",
          "Cache",
          "Instruction Register",
        ],
        answer: 2,
      },
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
      },
      {
        question: "What is the primary function of cache memory in a computer system?",
        options: [
          "To store the operating system permanently",
          "To speed up data access by storing frequently used data",
          "To store data that is no longer in use",
          "To handle input and output operations",
        ],
        answer: 1,
      },
      {
        question: "Which of the following best describes the difference between RAM (Random Access Memory) and ROM (Read-Only Memory)?",
        options: [
          "RAM is non-volatile, while ROM is volatile",
          "RAM is used to store data permanently, while ROM stores data temporarily",
          "RAM is volatile, and data is lost when power is turned off, while ROM is non-volatile",
          "Both RAM and ROM are volatile",
        ],
        answer: 2,
      },
      {
        question: "What is the purpose of virtual memory in computer systems?",
        options: [
          "To increase the physical memory of the CPU",
          "To extend the amount of usable memory beyond physical RAM by using hard drive space",
          "To manage the execution of instructions",
          "To prevent memory leaks from occurring",
        ],
        answer: 1,
      },
      {
        question: "In a computer system, what is the main function of the system bus?",
        options: [
          "It manages memory allocation",
          "It controls the input and output devices",
          "It transfers data between the CPU, memory, and other components",
          "It stores data and instructions temporarily",
        ],
        answer: 2,
      },
      {
        question: "Which of the following is a characteristic of a CISC (Complex Instruction Set Computer) architecture?",
        options: [
          "It uses fewer, simpler instructions",
          "It uses a large number of complex instructions that can perform multiple tasks in a single instruction",
          "It relies heavily on pipelining",
          "It has a reduced set of instructions for faster execution",
        ],
        answer: 1,
      },
      {
        question: "What does the term 'pipelining' refer to in CPU architecture?",
        options: [
          "It allows the CPU to execute instructions in parallel",
          "It stores instructions in multiple stages to improve execution speed",
          "It handles data transfer between registers",
          "It limits the number of instructions the CPU can process at once",
        ],
        answer: 2,
      },
      {
        question: "Which of the following best defines 'data hazards' in a pipelined architecture?",
        options: [
          "A situation where data is lost due to poor memory management",
          "A situation where instructions are delayed due to dependencies on previous instructions' data",
          "A situation where data is fetched from the wrong memory address",
          "A situation where multiple instructions execute at the same time",
        ],
        answer: 1,
      },
      {
        question: "What does the term 'superscalar architecture' refer to in CPU design?",
        options: [
          "A CPU design that allows multiple instructions to be executed simultaneously",
          "A design where a CPU can only execute one instruction at a time",
          "A CPU design that uses simpler, scalar instructions",
          "A type of memory architecture",
        ],
        answer: 0,
      },
      {
        question: "Which of the following best describes a 'Harvard Architecture'?",
        options: [
          "A computer architecture that uses a single memory for both data and instructions",
          "A computer architecture that uses separate memory storage for data and instructions",
          "A computer architecture that doesn't use a CPU",
          "A computer architecture that uses a single processor for all tasks",
        ],
        answer: 1,
      },
      {
        question: "What is a primary benefit of using cache memory in a system?",
        options: [
          "It allows for faster data processing by storing recently accessed data closer to the CPU",
          "It can store data permanently, even after power is lost",
          "It can run applications faster than the primary memory",
          "It acts as a backup in case the main memory fails",
        ],
        answer: 0,
      },
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
      },
      {
        question: "What is the primary role of a front-end developer in full stack development?",
        options: [
          "To manage the server-side logic and databases",
          "To create the visual elements and user interface of a web application",
          "To implement security protocols and authentication",
          "To maintain the backend infrastructure",
        ],
        answer: 1,
      },
      {
        question: "Which of the following is a commonly used front-end framework for building interactive user interfaces?",
        options: [
          "Node.js",
          "React",
          "Express",
          "MongoDB",
        ],
        answer: 1,
      },
      {
        question: "Which of the following is an essential component of a full stack development environment?",
        options: [
          "HTML for front-end development",
          "JavaScript for server-side programming",
          "CSS for database management",
          "SQL for building user interfaces",
        ],
        answer: 0,
      },
      {
        question: "In the context of full stack development, what does the term 'stack' refer to?",
        options: [
          "The programming languages used in the project",
          "The collection of technologies used to build both the front-end and back-end of a web application",
          "The database management system",
          "The cloud platform used for deployment",
        ],
        answer: 1,
      },
      {
        question: "What is the main purpose of using a back-end framework like Express.js in full stack development?",
        options: [
          "To create user interfaces for the web page",
          "To manage the database and data flow between the client and server",
          "To style the application",
          "To handle asynchronous operations on the client-side",
        ],
        answer: 1,
      },
      {
        question: "Which of the following programming languages is primarily used for back-end development in full stack applications?",
        options: [
          "JavaScript",
          "HTML",
          "CSS",
          "PHP",
        ],
        answer: 3,
      },
      {
        question: "Which of the following is the function of CSS in full stack development?",
        options: [
          "To provide dynamic behavior and interactivity",
          "To style the content and layout of web pages",
          "To manage server requests and responses",
          "To store and retrieve data from the database",
        ],
        answer: 1,
      },
      {
        question: "What does 'responsive design' mean in the context of front-end web development?",
        options: [
          "The design adapts to different screen sizes and devices",
          "The design includes interactive elements that respond to user input",
          "The design makes the application load faster",
          "The design ensures data is fetched quickly from the server",
        ],
        answer: 0,
      },
      {
        question: "Which of the following is a common database used in full stack development?",
        options: [
          "MySQL",
          "React.js",
          "Bootstrap",
          "Sass",
        ],
        answer: 0,
      },
      {
        question: "In a full stack application, what is the primary function of an API?",
        options: [
          "To store data in a database",
          "To allow the front-end to communicate with the back-end and exchange data",
          "To design the user interface",
          "To ensure secure authentication for users",
        ],
        answer: 1,
      },
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
      },
      {
        question: "What is the main function of Node.js in full stack development?",
        options: [
          "To create user interfaces for the web page",
          "To handle server-side operations and manage requests",
          "To provide data storage solutions",
          "To design the layout of the web page",
        ],
        answer: 1,
      },
      {
        question: "Which of the following is a key advantage of using MongoDB in full stack development?",
        options: [
          "It is a relational database system",
          "It stores data in JSON-like format, which is easy to work with in JavaScript",
          "It requires no server-side coding",
          "It is primarily used for front-end development",
        ],
        answer: 1,
      },
      {
        question: "In the context of web applications, what does 'CRUD' stand for?",
        options: [
          "Create, Read, Update, Delete",
          "Create, Render, Update, Design",
          "Cache, Render, Update, Deploy",
          "Classify, Render, Update, Delete",
        ],
        answer: 0,
      },
      {
        question: "Which HTTP method is used to retrieve data from a server in a full stack web application?",
        options: [
          "POST",
          "PUT",
          "GET",
          "DELETE",
        ],
        answer: 2,
      },
      {
        question: "What is the purpose of using Express.js in a full stack application?",
        options: [
          "To style the user interface",
          "To manage routes, requests, and server-side logic",
          "To store data in MongoDB",
          "To authenticate users",
        ],
        answer: 1,
      },
      {
        question: "Which of the following technologies is used to build the back-end of a web application?",
        options: [
          "Vue.js",
          "Node.js",
          "HTML",
          "CSS",
        ],
        answer: 1,
      },
      {
        question: "What is a RESTful API, and why is it important in full stack development?",
        options: [
          "A method for rendering pages on the server side",
          "An architectural style for creating APIs that allow front-end and back-end communication",
          "A design pattern used for building user interfaces",
          "A security protocol for managing data privacy",
        ],
        answer: 1,
      },
      {
        question: "Which of the following is used to manage data flow between the front-end and back-end in a full stack application?",
        options: [
          "Bootstrap",
          "REST API",
          "MongoDB",
          "React.js",
        ],
        answer: 1,
      },
      {
        question: "Which of the following best describes the role of a back-end developer in full stack development?",
        options: [
          "Designing the layout and style of the web pages",
          "Writing code for client-side interactivity",
          "Managing the server, database, and API logic",
          "Ensuring the website is responsive across different devices",
        ],
        answer: 2,
      },
      {
        question: "Which of the following frameworks is commonly used for building the front-end of a web application in full stack development?",
        options: [
          "Angular",
          "Node.js",
          "Express.js",
          "MongoDB",
        ],
        answer: 0,
      },
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
      },
      {
        question: "What is Artificial Intelligence (AI)?",
        options: [
          "The ability of machines to perform tasks that require human intelligence",
          "The study of building robots",
          "A type of programming language used in robotics",
          "The ability to create complex 3D models",
        ],
        answer: 0,
      },
      {
        question: "Which of the following is an example of machine learning?",
        options: [
          "A computer running a set of pre-written instructions",
          "A robot recognizing objects based on past experiences",
          "A search engine displaying the most relevant results based on keywords",
          "A video game character following a fixed set of movements",
        ],
        answer: 1,
      },
      {
        question: "Which of the following tasks can be classified under the field of AI?",
        options: [
          "Image recognition",
          "Sorting data in a spreadsheet",
          "Programming web applications",
          "Designing websites",
        ],
        answer: 0,
      },
      {
        question: "What is supervised learning in machine learning?",
        options: [
          "Learning from unlabeled data",
          "Learning from labeled data where the output is known",
          "Learning by trial and error",
          "Learning without feedback or guidance",
        ],
        answer: 1,
      },
      {
        question: "Which of the following is an example of unsupervised learning?",
        options: [
          "Classifying emails as spam or not spam",
          "Predicting the price of houses based on data",
          "Clustering customers based on purchase behavior",
          "Training a neural network to recognize images",
        ],
        answer: 2,
      },
      {
        question: "What is a neural network in AI?",
        options: [
          "A type of programming language for building AI systems",
          "A system that mimics the human brain to solve complex problems",
          "A database used to store AI models",
          "A hardware component used in AI systems",
        ],
        answer: 1,
      },
      {
        question: "What does the term 'data preprocessing' refer to in AI?",
        options: [
          "The process of collecting data from the internet",
          "The cleaning and transformation of raw data into a usable format",
          "The process of training a model with data",
          "The process of designing an AI algorithm",
        ],
        answer: 1,
      },
      {
        question: "Which of the following is a major challenge in AI?",
        options: [
          "Lack of available data",
          "Inability to write code",
          "Lack of human resources",
          "Ethical concerns and bias in algorithms",
        ],
        answer: 3,
      },
      {
        question: "What is reinforcement learning in AI?",
        options: [
          "Learning from past experiences and labeled data",
          "Learning through trial and error with rewards and punishments",
          "Learning without supervision from an instructor",
          "Learning by observing other systems perform tasks",
        ],
        answer: 1,
      },
      {
        question: "What is the Turing Test used for in the field of AI?",
        options: [
          "To measure the speed of an AI system",
          "To determine if a machine can exhibit intelligent behavior indistinguishable from a human",
          "To evaluate the accuracy of a machine learning model",
          "To test the efficiency of an algorithm",
        ],
        answer: 1,
      },
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
      },
      {
        question: "Which of the following is an example of a search algorithm in AI?",
        options: [
          "A* search",
          "Neural networks",
          "K-means clustering",
          "Decision trees",
        ],
        answer: 0,
      },
      {
        question: "What does the heuristic function do in a search algorithm?",
        options: [
          "It calculates the shortest path between two nodes",
          "It measures the quality of the solution",
          "It helps the algorithm decide which path to explore next",
          "It updates the AI model during learning",
        ],
        answer: 2,
      },
      {
        question: "What is a minimax algorithm used for?",
        options: [
          "Optimizing a search tree in game playing",
          "Training machine learning models",
          "Determining the optimal path in a graph",
          "Selecting the best features for a model",
        ],
        answer: 0,
      },
      {
        question: "Which of the following is an example of an adversarial search problem?",
        options: [
          "Finding the shortest path between two points on a map",
          "Determining the best move in a chess game",
          "Clustering similar data points together",
          "Recognizing faces in images",
        ],
        answer: 1,
      },
      {
        question: "What is the purpose of reinforcement learning?",
        options: [
          "To learn patterns in data without supervision",
          "To classify data into predefined categories",
          "To maximize long-term rewards through trial and error",
          "To generate realistic images based on input data",
        ],
        answer: 2,
      },
      {
        question: "Which of the following is a key concept in the Q-learning algorithm?",
        options: [
          "Minimizing the error between predicted and actual outcomes",
          "Maximizing the cumulative reward over time",
          "Learning through labeled data",
          "Training a neural network to recognize patterns",
        ],
        answer: 1,
      },
      {
        question: "What is a decision tree used for in AI?",
        options: [
          "Representing a sequence of actions in reinforcement learning",
          "Classifying data by making a series of binary decisions",
          "Creating clusters of similar data points",
          "Storing knowledge in a hierarchical structure",
        ],
        answer: 1,
      },
      {
        question: "Which of the following is a common application of AI in natural language processing?",
        options: [
          "Speech recognition",
          "Object detection in images",
          "Generating realistic images from text descriptions",
          "Predicting stock market trends",
        ],
        answer: 0,
      },
      {
        question: "What is the purpose of backpropagation in neural networks?",
        options: [
          "To improve the accuracy of the model by adjusting weights based on error",
          "To simulate the human brain's neural connections",
          "To search for patterns in unstructured data",
          "To evaluate the performance of a machine learning algorithm",
        ],
        answer: 0,
      },
      {
        question: "What is a significant challenge in training deep learning models?",
        options: [
          "The inability to use large datasets",
          "The difficulty in tuning hyperparameters",
          "The lack of appropriate programming languages",
          "The need for extensive human input for feature extraction",
        ],
        answer: 1,
      },
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
      },
      {
        question: "Which of the following is the primary goal of Human-Computer Interaction (HCI)?",
        options: [
          "To create efficient software algorithms",
          "To improve the usability and experience of human-computer interaction",
          "To reduce the hardware requirements of systems",
          "To increase the processing power of computers",
        ],
        answer: 1,
      },
      {
        question: "What is meant by 'usability' in the context of HCI?",
        options: [
          "The technical performance of a computer system",
          "How easy and intuitive it is for users to interact with a system",
          "The speed at which a computer can process data",
          "The ability of a system to handle complex tasks",
        ],
        answer: 1,
      },
      {
        question: "What is a common method for evaluating usability in HCI?",
        options: [
          "Code reviews",
          "User testing and feedback",
          "Memory usage analysis",
          "Performance benchmarks",
        ],
        answer: 1,
      },
      {
        question: "Which of the following is NOT a principle of good interface design?",
        options: [
          "Consistency",
          "Simplicity",
          "Clarity",
          "Complexity",
        ],
        answer: 3,
      },
      {
        question: "What does the term 'affordance' refer to in HCI?",
        options: [
          "The visual appeal of a system's design",
          "The characteristics of an interface that suggest its use",
          "The number of features a system can handle",
          "The complexity of tasks that can be performed using the system",
        ],
        answer: 1,
      },
      {
        question: "Which of the following is a benefit of a good user interface?",
        options: [
          "Increased learning curve",
          "Reduced accessibility",
          "Improved user satisfaction and productivity",
          "Increased complexity of the system",
        ],
        answer: 2,
      },
      {
        question: "What is the 'interaction design' process focused on?",
        options: [
          "Building software architecture",
          "Creating efficient algorithms",
          "Designing the flow of user interactions with the system",
          "Developing hardware systems",
        ],
        answer: 2,
      },
      {
        question: "What is 'feedback' in the context of HCI?",
        options: [
          "The response given by a system after a user action",
          "The amount of data that can be processed by the system",
          "The error rate in a system's response",
          "The response time of the system's hardware",
        ],
        answer: 0,
      },
      {
        question: "Which of the following is a key factor in designing for accessibility in HCI?",
        options: [
          "Prioritizing aesthetics over functionality",
          "Ensuring the system is usable by people with various disabilities",
          "Using the most advanced technology available",
          "Limiting system functionality to power users",
        ],
        answer: 1,
      },
      {
        question: "Which concept in HCI refers to making a system's interface intuitive and easy to use for a wide range of users?",
        options: [
          "User-centered design",
          "Responsive design",
          "Information overload",
          "Skeuomorphism",
        ],
        answer: 0,
      },
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
      },
      {
        question: "What does the term 'user-centered design' refer to in HCI?",
        options: [
          "Designing with a focus on the system’s functionality",
          "Designing based on user needs, preferences, and behaviors",
          "Focusing on aesthetics and visual appeal",
          "Creating designs that are only accessible to advanced users",
        ],
        answer: 1,
      },
      {
        question: "Which of the following is an example of a direct manipulation interface?",
        options: [
          "A command-line interface",
          "A touchscreen interface with gestures",
          "A voice-based assistant",
          "A text editor with keyboard shortcuts",
        ],
        answer: 1,
      },
      {
        question: "What is the main purpose of prototyping in HCI?",
        options: [
          "To create a final version of the system",
          "To test ideas and gather feedback on the design",
          "To implement system architecture",
          "To optimize performance and speed",
        ],
        answer: 1,
      },
      {
        question: "Which of the following best describes a 'cognitive walkthrough' in usability testing?",
        options: [
          "A test to assess how the system handles large data",
          "A test in which users perform tasks while the system records their actions",
          "A structured process where evaluators walk through the interface and predict user behaviors",
          "A simulation of the system’s performance under heavy load",
        ],
        answer: 2,
      },
      {
        question: "What is the concept of 'affordance' in relation to interactive design?",
        options: [
          "The ease with which users can perform tasks on the system",
          "The physical or visual cues that suggest how an object should be used",
          "The responsiveness of a system to user input",
          "The amount of data a system can process at a time",
        ],
        answer: 1,
      },
      {
        question: "In the context of HCI, what is 'feedback' and why is it important?",
        options: [
          "The visual design of the system, important for aesthetics",
          "The system’s response to user actions, important for guiding users and confirming actions",
          "The system’s memory usage, important for performance",
          "The time it takes for the system to process a request",
        ],
        answer: 1,
      },
      {
        question: "Which of the following is a common principle in designing interfaces for mobile applications?",
        options: [
          "Minimizing touch interaction to improve accuracy",
          "Providing as much information as possible on each screen",
          "Using simple, easy-to-read text and large buttons",
          "Limiting the use of icons and buttons",
        ],
        answer: 2,
      },
      {
        question: "What does 'contextual inquiry' involve in the design process?",
        options: [
          "Asking users to evaluate prototypes remotely",
          "Observing users in their natural environment to understand how they interact with systems",
          "Creating use cases for the system based on user stories",
          "Designing systems that can be used in any context",
        ],
        answer: 1,
      },
      {
        question: "What is a key characteristic of a 'responsive design' in HCI?",
        options: [
          "The design adapts to different screen sizes and devices",
          "The system prioritizes performance over user experience",
          "The design is fixed and doesn’t change with user input",
          "The interface is only functional on desktop computers",
        ],
        answer: 0,
      },
      {
        question: "Which of the following is an example of a user interface element that provides clear feedback to the user?",
        options: [
          "A text field that highlights in red when incorrect input is provided",
          "A menu bar with a variety of options",
          "A complex series of options that require multiple steps to select",
          "A list of instructions with no visual cues",
        ],
        answer: 0,
      },
    ]
  }
  
  
  
  


 };
 