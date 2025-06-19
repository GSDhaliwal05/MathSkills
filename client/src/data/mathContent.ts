import { TopicContent } from "@shared/schema";

export const mathContent: Record<string, TopicContent> = {
  numbers: {
    definitions: [
      {
        term: "Factor",
        definition: "A number that divides evenly into another number. For example, 3 is a factor of 12 because 12 ÷ 3 = 4."
      },
      {
        term: "Multiple",
        definition: "The result of multiplying a number by an integer. For example, multiples of 4 are 4, 8, 12, 16..."
      },
      {
        term: "Prime Number",
        definition: "A natural number greater than 1 with exactly two factors: 1 and itself. Examples: 2, 3, 5, 7, 11..."
      },
      {
        term: "Composite Number",
        definition: "A natural number greater than 1 with more than two factors. Examples: 4, 6, 8, 9, 10..."
      },
      {
        term: "LCM (Least Common Multiple)",
        definition: "The smallest positive number that is a multiple of two or more numbers."
      },
      {
        term: "GCF (Greatest Common Factor)",
        definition: "The largest positive number that divides evenly into two or more numbers."
      }
    ],
    examples: [
      {
        title: "Finding the GCF of 24 and 36",
        problem: "Find the greatest common factor of 24 and 36",
        steps: [
          { description: "List the factors of each number" },
          { description: "Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24" },
          { description: "Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36" },
          { description: "Identify common factors: 1, 2, 3, 4, 6, 12" }
        ],
        answer: "The greatest common factor is 12"
      },
      {
        title: "Finding the LCM of 8 and 12",
        problem: "Find the least common multiple of 8 and 12",
        steps: [
          { description: "List the first few multiples of each number" },
          { description: "Multiples of 8: 8, 16, 24, 32, 40, 48..." },
          { description: "Multiples of 12: 12, 24, 36, 48, 60..." },
          { description: "Identify common multiples: 24, 48..." }
        ],
        answer: "The least common multiple is 24"
      }
    ],
    questions: [
      {
        id: "num1",
        question: "What is the GCF of 18 and 30?",
        answer: "6",
        explanation: "Factors of 18: 1, 2, 3, 6, 9, 18. Factors of 30: 1, 2, 3, 5, 6, 10, 15, 30. Common factors: 1, 2, 3, 6. The greatest is 6."
      },
      {
        id: "num2",
        question: "Is 17 a prime or composite number?",
        answer: "Prime",
        explanation: "17 is prime because its only factors are 1 and 17."
      },
      {
        id: "num3",
        question: "What is the LCM of 6 and 9?",
        answer: "18",
        explanation: "Multiples of 6: 6, 12, 18, 24... Multiples of 9: 9, 18, 27... The least common multiple is 18."
      },
      {
        id: "num4",
        question: "What is the GCF of 24 and 36?",
        answer: "12",
        explanation: "Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24. Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36. The greatest common factor is 12."
      },
      {
        id: "num5",
        question: "List the first 5 multiples of 7.",
        answer: "7, 14, 21, 28, 35",
        explanation: "Multiples are found by multiplying 7 by 1, 2, 3, 4, and 5."
      },
      {
        id: "num6",
        question: "Is 21 prime or composite?",
        answer: "Composite",
        explanation: "21 is composite because it has factors other than 1 and itself: 1, 3, 7, 21."
      },
      {
        id: "num7",
        question: "What is the LCM of 4 and 10?",
        answer: "20",
        explanation: "Multiples of 4: 4, 8, 12, 16, 20... Multiples of 10: 10, 20, 30... The LCM is 20."
      },
      {
        id: "num8",
        question: "What are all the factors of 16?",
        answer: "1, 2, 4, 8, 16",
        explanation: "Factors are numbers that divide evenly into 16: 16÷1=16, 16÷2=8, 16÷4=4, 16÷8=2, 16÷16=1."
      }
    ]
  },
  exponents: {
    definitions: [
      {
        term: "Exponent",
        definition: "A number that shows how many times the base is multiplied by itself. In 2³, 3 is the exponent."
      },
      {
        term: "Square",
        definition: "A number multiplied by itself. 5² = 5 × 5 = 25."
      },
      {
        term: "Square Root",
        definition: "A number that when multiplied by itself gives the original number. √25 = 5."
      },
      {
        term: "BEDMAS",
        definition: "Order of operations: Brackets, Exponents, Division/Multiplication, Addition/Subtraction."
      },
      {
        term: "Scientific Notation",
        definition: "A way to write very large or small numbers using powers of 10. Example: 3.2 × 10⁴."
      },
      {
        term: "Power",
        definition: "The result of raising a base to an exponent. 2³ = 8, so 8 is the power."
      }
    ],
    examples: [
      {
        title: "Using BEDMAS: 3 + 2² × (8 - 3)",
        problem: "Calculate 3 + 2² × (8 - 3) using order of operations",
        steps: [
          { description: "Brackets first: (8 - 3) = 5" },
          { description: "Exponents: 2² = 4" },
          { description: "Multiplication: 4 × 5 = 20" },
          { description: "Addition: 3 + 20 = 23" }
        ],
        answer: "23"
      },
      {
        title: "Scientific Notation: Converting 45,000",
        problem: "Write 45,000 in scientific notation",
        steps: [
          { description: "Move decimal point to get a number between 1 and 10: 4.5" },
          { description: "Count decimal places moved: 4 places to the left" },
          { description: "Write as: 4.5 × 10⁴" }
        ],
        answer: "4.5 × 10⁴"
      }
    ],
    questions: [
      {
        id: "exp1",
        question: "Calculate 5² + √36",
        answer: "31",
        explanation: "5² = 25, √36 = 6, so 25 + 6 = 31"
      },
      {
        id: "exp2",
        question: "Write 0.000032 in scientific notation",
        answer: "3.2 × 10⁻⁵",
        explanation: "Move decimal 5 places right to get 3.2, use negative exponent."
      },
      {
        id: "exp3",
        question: "Calculate 3² × 2³",
        answer: "72",
        explanation: "3² = 9, 2³ = 8, so 9 × 8 = 72"
      },
      {
        id: "exp4",
        question: "What is √81?",
        answer: "9",
        explanation: "9 × 9 = 81, so the square root of 81 is 9"
      },
      {
        id: "exp5",
        question: "Using BEDMAS, calculate: 4 + 3² × 2",
        answer: "22",
        explanation: "Exponents first: 3² = 9. Then multiplication: 9 × 2 = 18. Finally addition: 4 + 18 = 22"
      },
      {
        id: "exp6",
        question: "Write 650,000 in scientific notation",
        answer: "6.5 × 10⁵",
        explanation: "Move decimal 5 places left to get 6.5, so it's 6.5 × 10⁵"
      },
      {
        id: "exp7",
        question: "Calculate (2³)²",
        answer: "64",
        explanation: "2³ = 8, then 8² = 64. Or use the power rule: (2³)² = 2⁶ = 64"
      },
      {
        id: "exp8",
        question: "What is 4⁰?",
        answer: "1",
        explanation: "Any number to the power of 0 equals 1"
      }
    ]
  },
  integers: {
    definitions: [
      {
        term: "Integer",
        definition: "Whole numbers including negatives: ..., -3, -2, -1, 0, 1, 2, 3, ..."
      },
      {
        term: "Positive Integer",
        definition: "Integers greater than zero: 1, 2, 3, 4, ..."
      },
      {
        term: "Negative Integer",
        definition: "Integers less than zero: -1, -2, -3, -4, ..."
      },
      {
        term: "Opposite Integers",
        definition: "Integers that are the same distance from zero but on opposite sides: 5 and -5."
      }
    ],
    examples: [
      {
        title: "Adding Integers with Different Signs",
        problem: "Calculate (-8) + (+12)",
        steps: [
          { description: "Different signs: subtract and use sign of larger number" },
          { description: "12 - 8 = 4" },
          { description: "Since 12 is positive and larger, result is positive" }
        ],
        answer: "+4"
      },
      {
        title: "Multiplying Integers with Same Signs",
        problem: "Calculate (-6) × (-7)",
        steps: [
          { description: "Same signs (both negative): result is positive" },
          { description: "6 × 7 = 42" },
          { description: "Result is positive: +42" }
        ],
        answer: "+42"
      }
    ],
    questions: [
      {
        id: "int1",
        question: "Calculate: (-8) + (+12)",
        answer: "+4",
        explanation: "Different signs: subtract and use sign of larger number. 12 - 8 = 4, and 12 is positive."
      },
      {
        id: "int2",
        question: "Calculate: (-6) × (-7)",
        answer: "+42",
        explanation: "Same signs (both negative): result is positive. 6 × 7 = 42"
      },
      {
        id: "int3",
        question: "Calculate: (-15) + (-9)",
        answer: "-24",
        explanation: "Same signs (both negative): add and keep the negative sign. 15 + 9 = 24, so the answer is -24."
      },
      {
        id: "int4",
        question: "Calculate: (+18) - (+25)",
        answer: "-7",
        explanation: "Subtracting a positive is like adding a negative: 18 + (-25) = -7."
      },
      {
        id: "int5",
        question: "Calculate: (-12) ÷ (+3)",
        answer: "-4",
        explanation: "Different signs: result is negative. 12 ÷ 3 = 4, so the answer is -4."
      },
      {
        id: "int6",
        question: "Calculate: (+5) × (-8)",
        answer: "-40",
        explanation: "Different signs: result is negative. 5 × 8 = 40, so the answer is -40."
      },
      {
        id: "int7",
        question: "What is the opposite of -17?",
        answer: "+17",
        explanation: "The opposite of a negative number is the positive version of that number."
      },
      {
        id: "int8",
        question: "Using BEDMAS, calculate: (-3)² + 4 × (-2)",
        answer: "1",
        explanation: "Exponents first: (-3)² = 9. Then multiplication: 4 × (-2) = -8. Finally addition: 9 + (-8) = 1."
      }
    ]
  },
  financial: {
    definitions: [
      {
        term: "Percent",
        definition: "A ratio out of 100. 25% means 25 out of 100, or 0.25 as a decimal."
      },
      {
        term: "Discount",
        definition: "A reduction in price. A 20% discount means you pay 80% of the original price."
      },
      {
        term: "Tax",
        definition: "An additional amount added to the price. 13% tax means you pay 113% of the original price."
      },
      {
        term: "Simple Interest",
        definition: "Interest calculated only on the principal amount. Formula: I = P × r × t"
      },
      {
        term: "Compound Interest",
        definition: "Interest calculated on principal plus previously earned interest."
      },
      {
        term: "Principal",
        definition: "The original amount of money invested or borrowed."
      }
    ],
    examples: [
      {
        title: "Calculating Final Price with Discount and Tax",
        problem: "A $50 shirt has a 25% discount, then 13% tax is added",
        steps: [
          { description: "Calculate discount: $50 × 0.25 = $12.50" },
          { description: "Price after discount: $50 - $12.50 = $37.50" },
          { description: "Calculate tax: $37.50 × 0.13 = $4.88" },
          { description: "Final price: $37.50 + $4.88 = $42.38" }
        ],
        answer: "$42.38"
      },
      {
        title: "Simple Interest Calculation",
        problem: "Calculate interest on $1000 at 5% per year for 3 years",
        steps: [
          { description: "Formula: I = P × r × t" },
          { description: "I = $1000 × 0.05 × 3" },
          { description: "I = $150" },
          { description: "Total Amount: $1000 + $150 = $1150" }
        ],
        answer: "$150 interest, $1150 total"
      }
    ],
    questions: [
      {
        id: "fin1",
        question: "A $80 jacket has a 30% discount. What is the sale price?",
        answer: "$56",
        explanation: "Discount: $80 × 0.30 = $24. Sale price: $80 - $24 = $56"
      },
      {
        id: "fin2",
        question: "Calculate simple interest: $500 at 4% for 2 years",
        answer: "$40",
        explanation: "I = P × r × t = $500 × 0.04 × 2 = $40"
      },
      {
        id: "fin3",
        question: "A $120 item has 15% tax added. What is the total cost?",
        answer: "$138",
        explanation: "Tax: $120 × 0.15 = $18. Total: $120 + $18 = $138"
      },
      {
        id: "fin4",
        question: "Convert 0.75 to a percentage",
        answer: "75%",
        explanation: "Multiply by 100: 0.75 × 100 = 75%"
      },
      {
        id: "fin5",
        question: "What is 25% of $200?",
        answer: "$50",
        explanation: "25% = 0.25, so $200 × 0.25 = $50"
      },
      {
        id: "fin6",
        question: "A $60 game is on sale for 40% off. What's the discount amount?",
        answer: "$24",
        explanation: "Discount: $60 × 0.40 = $24"
      },
      {
        id: "fin7",
        question: "Calculate interest: $800 principal, 6% rate, 18 months",
        answer: "$72",
        explanation: "18 months = 1.5 years. I = $800 × 0.06 × 1.5 = $72"
      },
      {
        id: "fin8",
        question: "A $45 meal has 18% tip added. What's the total?",
        answer: "$53.10",
        explanation: "Tip: $45 × 0.18 = $8.10. Total: $45 + $8.10 = $53.10"
      }
    ]
  },
  data: {
    definitions: [
      {
        term: "Survey",
        definition: "A method of collecting data by asking questions to a group of people."
      },
      {
        term: "Bar Graph",
        definition: "A chart that uses bars to compare different categories of data."
      },
      {
        term: "Line Graph",
        definition: "A graph that shows data changes over time using connected points."
      },
      {
        term: "Circle Graph (Pie Chart)",
        definition: "A circular chart divided into sections to show parts of a whole."
      },
      {
        term: "Mean",
        definition: "The average of a set of numbers. Add all values and divide by count."
      },
      {
        term: "Median",
        definition: "The middle value when data is arranged in order from least to greatest."
      }
    ],
    examples: [
      {
        title: "Calculating the Mean",
        problem: "Find the mean of: 8, 12, 6, 14, 10",
        steps: [
          { description: "Add all values: 8 + 12 + 6 + 14 + 10 = 50" },
          { description: "Count the values: 5 numbers" },
          { description: "Divide sum by count: 50 ÷ 5 = 10" }
        ],
        answer: "The mean is 10"
      },
      {
        title: "Choosing the Right Graph Type",
        problem: "What type of graph is best for showing temperature changes throughout a day?",
        steps: [
          { description: "Consider what we're measuring: temperature over time" },
          { description: "Line graphs show changes over time" },
          { description: "Bar graphs compare categories" },
          { description: "Circle graphs show parts of a whole" }
        ],
        answer: "Line graph - best for showing changes over time"
      }
    ],
    questions: [
      {
        id: "data1",
        question: "Find the mean of: 8, 12, 6, 14, 10",
        answer: "10",
        explanation: "Sum: 8 + 12 + 6 + 14 + 10 = 50. Mean: 50 ÷ 5 = 10"
      },
      {
        id: "data2",
        question: "What type of graph is best for showing how temperature changes throughout a day?",
        answer: "Line Graph",
        explanation: "Line graphs are best for showing changes over time."
      },
      {
        id: "data3",
        question: "Find the median of: 3, 7, 1, 9, 5",
        answer: "5",
        explanation: "First arrange in order: 1, 3, 5, 7, 9. The middle value is 5."
      },
      {
        id: "data4",
        question: "What graph type shows parts of a whole?",
        answer: "Circle Graph",
        explanation: "Circle graphs (pie charts) divide a circle into sections to show how parts make up the whole."
      },
      {
        id: "data5",
        question: "Find the mean of: 15, 20, 25, 30",
        answer: "22.5",
        explanation: "Sum: 15 + 20 + 25 + 30 = 90. Mean: 90 ÷ 4 = 22.5"
      },
      {
        id: "data6",
        question: "Which graph type compares different categories?",
        answer: "Bar Graph",
        explanation: "Bar graphs use bars of different heights to compare quantities across categories."
      },
      {
        id: "data7",
        question: "Find the median of: 12, 8, 15, 6, 20, 10",
        answer: "11",
        explanation: "Arrange in order: 6, 8, 10, 12, 15, 20. Middle values are 10 and 12. Median: (10 + 12) ÷ 2 = 11"
      },
      {
        id: "data8",
        question: "What is a survey used for?",
        answer: "Collecting data",
        explanation: "A survey is a method of collecting data by asking questions to a group of people."
      }
    ]
  },
  fractions: {
    definitions: [
      {
        term: "Fraction",
        definition: "A number that represents part of a whole. Written as numerator/denominator."
      },
      {
        term: "Numerator",
        definition: "The top number in a fraction that shows how many parts you have."
      },
      {
        term: "Denominator",
        definition: "The bottom number in a fraction that shows how many equal parts in total."
      },
      {
        term: "Equivalent Fractions",
        definition: "Fractions that represent the same value. Example: 1/2 = 2/4 = 3/6"
      },
      {
        term: "Simplest Form",
        definition: "A fraction where the numerator and denominator have no common factors except 1."
      },
      {
        term: "Mixed Number",
        definition: "A number with a whole number part and a fraction part. Example: 2¾"
      }
    ],
    examples: [
      {
        title: "Adding Fractions: 2/5 + 1/3",
        problem: "Add 2/5 + 1/3",
        steps: [
          { description: "Find common denominator: LCM of 5 and 3 = 15" },
          { description: "Convert fractions: 2/5 = 6/15, 1/3 = 5/15" },
          { description: "Add numerators: 6/15 + 5/15 = 11/15" }
        ],
        answer: "11/15"
      },
      {
        title: "Converting Fraction to Percent: 3/4",
        problem: "Convert 3/4 to a percent",
        steps: [
          { description: "Convert to decimal: 3 ÷ 4 = 0.75" },
          { description: "Multiply by 100: 0.75 × 100 = 75" },
          { description: "Add percent sign: 75%" }
        ],
        answer: "75%"
      }
    ],
    questions: [
      {
        id: "frac1",
        question: "Simplify 12/18 to lowest terms",
        answer: "2/3",
        explanation: "GCF of 12 and 18 is 6. Divide both by 6: 12÷6 = 2, 18÷6 = 3"
      },
      {
        id: "frac2",
        question: "Calculate: 1/4 × 2/3",
        answer: "1/6",
        explanation: "Multiply numerators: 1 × 2 = 2. Multiply denominators: 4 × 3 = 12. Simplify: 2/12 = 1/6"
      },
      {
        id: "frac3",
        question: "Add: 1/3 + 1/6",
        answer: "1/2",
        explanation: "Common denominator is 6. Convert: 1/3 = 2/6. Add: 2/6 + 1/6 = 3/6 = 1/2"
      },
      {
        id: "frac4",
        question: "Convert 3/5 to a decimal",
        answer: "0.6",
        explanation: "Divide numerator by denominator: 3 ÷ 5 = 0.6"
      },
      {
        id: "frac5",
        question: "Subtract: 5/8 - 1/4",
        answer: "3/8",
        explanation: "Common denominator is 8. Convert: 1/4 = 2/8. Subtract: 5/8 - 2/8 = 3/8"
      },
      {
        id: "frac6",
        question: "Calculate: 2/3 ÷ 1/4",
        answer: "8/3",
        explanation: "Multiply by reciprocal: 2/3 × 4/1 = 8/3"
      },
      {
        id: "frac7",
        question: "Convert 0.25 to a fraction",
        answer: "1/4",
        explanation: "0.25 = 25/100. Simplify by dividing by 25: 25÷25 = 1, 100÷25 = 4"
      },
      {
        id: "frac8",
        question: "What is 3/4 as a percentage?",
        answer: "75%",
        explanation: "Convert to decimal: 3 ÷ 4 = 0.75. Convert to percent: 0.75 × 100 = 75%"
      }
    ]
  },
  algebra: {
    definitions: [
      {
        term: "Variable",
        definition: "A letter that represents an unknown number. Example: x, y, n"
      },
      {
        term: "Expression",
        definition: "A mathematical phrase with numbers, variables, and operations. Example: 3x + 5"
      },
      {
        term: "Equation",
        definition: "A mathematical statement that two expressions are equal. Example: 2x + 3 = 11"
      },
      {
        term: "Linear Equation",
        definition: "An equation whose graph is a straight line. Example: y = 2x + 1"
      },
      {
        term: "Coefficient",
        definition: "The number multiplied by a variable. In 5x, the coefficient is 5."
      },
      {
        term: "Like Terms",
        definition: "Terms with the same variable and exponent. Example: 3x and 7x"
      }
    ],
    examples: [
      {
        title: "Solving: 2x + 5 = 13",
        problem: "Solve for x: 2x + 5 = 13",
        steps: [
          { description: "Subtract 5 from both sides: 2x = 8" },
          { description: "Divide both sides by 2: x = 4" },
          { description: "Check: 2(4) + 5 = 8 + 5 = 13 ✓" }
        ],
        answer: "x = 4"
      },
      {
        title: "Simplifying: 3x + 2x - 4 + 7",
        problem: "Simplify the expression 3x + 2x - 4 + 7",
        steps: [
          { description: "Combine like terms with x: 3x + 2x = 5x" },
          { description: "Combine constant terms: -4 + 7 = 3" },
          { description: "Final expression: 5x + 3" }
        ],
        answer: "5x + 3"
      }
    ],
    questions: [
      {
        id: "alg1",
        question: "Solve: x + 7 = 15",
        answer: "x = 8",
        explanation: "Subtract 7 from both sides: x = 15 - 7 = 8"
      },
      {
        id: "alg2",
        question: "Simplify: 4x + 3x - 2",
        answer: "7x - 2",
        explanation: "Combine like terms: 4x + 3x = 7x. The expression becomes 7x - 2"
      },
      {
        id: "alg3",
        question: "Solve: 3x = 21",
        answer: "x = 7",
        explanation: "Divide both sides by 3: x = 21 ÷ 3 = 7"
      },
      {
        id: "alg4",
        question: "What is the coefficient of x in 9x + 5?",
        answer: "9",
        explanation: "The coefficient is the number multiplied by the variable. In 9x, the coefficient is 9"
      },
      {
        id: "alg5",
        question: "Solve: 2x - 6 = 10",
        answer: "x = 8",
        explanation: "Add 6 to both sides: 2x = 16. Divide by 2: x = 8"
      },
      {
        id: "alg6",
        question: "Evaluate 3n + 4 when n = 5",
        answer: "19",
        explanation: "Substitute n = 5: 3(5) + 4 = 15 + 4 = 19"
      },
      {
        id: "alg7",
        question: "Combine like terms: 8y - 3y + 2",
        answer: "5y + 2",
        explanation: "Combine y terms: 8y - 3y = 5y. The expression becomes 5y + 2"
      },
      {
        id: "alg8",
        question: "Solve: x/4 = 12",
        answer: "x = 48",
        explanation: "Multiply both sides by 4: x = 12 × 4 = 48"
      },
      {
        id: "alg2",
        question: "Simplify: 4y + 3 + 2y - 1",
        answer: "6y + 2",
        explanation: "Combine like terms: 4y + 2y = 6y, and 3 - 1 = 2"
      }
    ]
  },
  measurements: {
    definitions: [
      {
        term: "Angle",
        definition: "The space between two lines that meet at a point, measured in degrees."
      },
      {
        term: "Circumference",
        definition: "The distance around a circle. Formula: C = πd or C = 2πr"
      },
      {
        term: "Area of Circle",
        definition: "The space inside a circle. Formula: A = πr²"
      },
      {
        term: "Volume of Cylinder",
        definition: "The space inside a cylinder. Formula: V = πr²h"
      },
      {
        term: "Radius",
        definition: "The distance from the center of a circle to its edge."
      },
      {
        term: "Diameter",
        definition: "The distance across a circle through its center. Diameter = 2 × radius"
      }
    ],
    examples: [
      {
        title: "Finding Area of a Circle (radius = 5 cm)",
        problem: "Find the area of a circle with radius 5 cm",
        steps: [
          { description: "Formula: A = πr²" },
          { description: "Square the radius: 5² = 25" },
          { description: "Multiply by π: A = π × 25 = 25π" },
          { description: "Calculate: A ≈ 25 × 3.14 = 78.5 cm²" }
        ],
        answer: "78.5 cm²"
      },
      {
        title: "Volume of Cylinder (r = 3 cm, h = 8 cm)",
        problem: "Find the volume of a cylinder with radius 3 cm and height 8 cm",
        steps: [
          { description: "Formula: V = πr²h" },
          { description: "Calculate r²: 3² = 9" },
          { description: "Multiply: V = π × 9 × 8 = 72π" },
          { description: "Calculate: V ≈ 72 × 3.14 = 226.08 cm³" }
        ],
        answer: "226.08 cm³"
      }
    ],
    questions: [
      {
        id: "meas1",
        question: "Find the circumference of a circle with diameter 12 cm",
        answer: "37.68 cm",
        explanation: "C = πd = π × 12 ≈ 3.14 × 12 = 37.68 cm"
      },
      {
        id: "meas2",
        question: "What type of angle is 125°?",
        answer: "Obtuse Angle",
        explanation: "125° is greater than 90° but less than 180°, so it's obtuse."
      },
      {
        id: "meas3",
        question: "Find the area of a circle with radius 6 cm",
        answer: "113.04 cm²",
        explanation: "A = πr² = π × 6² = π × 36 ≈ 3.14 × 36 = 113.04 cm²"
      },
      {
        id: "meas4",
        question: "What is the diameter of a circle with radius 8 cm?",
        answer: "16 cm",
        explanation: "Diameter = 2 × radius = 2 × 8 = 16 cm"
      },
      {
        id: "meas5",
        question: "Find the volume of a cylinder: radius 4 cm, height 10 cm",
        answer: "502.4 cm³",
        explanation: "V = πr²h = π × 4² × 10 = π × 16 × 10 = 160π ≈ 502.4 cm³"
      },
      {
        id: "meas6",
        question: "What type of angle is 90°?",
        answer: "Right Angle",
        explanation: "A 90° angle is exactly a right angle, forming a perfect corner."
      },
      {
        id: "meas7",
        question: "Find the circumference of a circle with radius 5 cm",
        answer: "31.4 cm",
        explanation: "C = 2πr = 2 × π × 5 = 10π ≈ 31.4 cm"
      },
      {
        id: "meas8",
        question: "What type of angle is 45°?",
        answer: "Acute Angle",
        explanation: "45° is less than 90°, so it's an acute angle."
      }
    ]
  }
};

export const topicInfo = {
  numbers: {
    title: "Numbers",
    description: "Factors, multiples, LCM, GCF, composite numbers and prime numbers",
    icon: "fas fa-hashtag",
    color: "from-blue-500 to-blue-600"
  },
  exponents: {
    title: "Exponents", 
    description: "Squares, square root, estimating square roots, BEDMAS, scientific notation, powers",
    icon: "fas fa-superscript",
    color: "from-purple-500 to-purple-600"
  },
  integers: {
    title: "Integers",
    description: "Operations with integers, BEDMAS, integer rules",
    icon: "fas fa-plus-minus",
    color: "from-red-500 to-red-600"
  },
  financial: {
    title: "Financial Literacy",
    description: "Calculating percents, discounts, taxes, simple interest, compound interest",
    icon: "fas fa-dollar-sign",
    color: "from-green-500 to-green-600"
  },
  data: {
    title: "Data Management",
    description: "Surveys, graphs and charts",
    icon: "fas fa-chart-bar",
    color: "from-yellow-500 to-yellow-600"
  },
  fractions: {
    title: "Fractions",
    description: "Simplifying, equivalent fractions, converting between fractions, decimals and percents, operations with fractions",
    icon: "fas fa-divide",
    color: "from-blue-500 to-blue-600"
  },
  algebra: {
    title: "Algebra",
    description: "Expressions, solving equations and graphing linear equations", 
    icon: "fas fa-function",
    color: "from-purple-500 to-purple-600"
  },
  measurements: {
    title: "Measurements",
    description: "Angles, Circles and Cylinders",
    icon: "fas fa-ruler",
    color: "from-red-500 to-red-600"
  }
};
