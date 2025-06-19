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
        answer: "2/12 = 1/6",
        explanation: "Multiply numerators: 1 × 2 = 2. Multiply denominators: 4 × 3 = 12. Simplify: 2/12 = 1/6"
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
