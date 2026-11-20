const questions = [
  {
    topic: "Number",
    question: "Simplify 2(3 + 5) − 4.",
    answers: ["12", "14", "16", "18"],
    correct: 0,
    explanation: "First work inside the brackets: 3 + 5 = 8. Then 2 × 8 − 4 = 16 − 4 = 12."
  },
  {
    topic: "Fractions",
    question: "What is 3/4 + 1/8?",
    answers: ["4/12", "7/8", "1/2", "5/8"],
    correct: 1,
    explanation: "Change 3/4 to 6/8, then add 1/8: 6/8 + 1/8 = 7/8."
  },
  {
    topic: "Decimals",
    question: "Calculate 2.5 × 0.4.",
    answers: ["0.1", "1.0", "10", "100"],
    correct: 1,
    explanation: "2.5 × 4 = 10. Since 0.4 has one decimal place, the answer is 1.0."
  },
  {
    topic: "Algebra",
    question: "If 3x + 5 = 20, find x.",
    answers: ["3", "5", "15", "25"],
    correct: 1,
    explanation: "Subtract 5 from both sides: 3x = 15. Divide both sides by 3, so x = 5."
  },
  {
    topic: "Ratio",
    question: "Divide ₦240 in the ratio 2 : 3.",
    answers: ["₦96 and ₦144", "₦80 and ₦160", "₦100 and ₦140", "₦48 and ₦192"],
    correct: 0,
    explanation: "The ratio has 2 + 3 = 5 parts. Each part is ₦240 ÷ 5 = ₦48. The parts are ₦96 and ₦144."
  },
  {
    topic: "Percentages",
    question: "A shirt costs ₦2,000. It is discounted by 15%. What is the discount?",
    answers: ["₦150", "₦300", "₦450", "₦500"],
    correct: 1,
    explanation: "15% of ₦2,000 = (15/100) × ₦2,000 = ₦300."
  },
  {
    topic: "Indices",
    question: "Simplify 2³ × 2².",
    answers: ["2⁵", "2⁶", "4⁵", "8²"],
    correct: 0,
    explanation: "When multiplying powers with the same base, add the indices: 3 + 2 = 5."
  },
  {
    topic: "Factorisation",
    question: "Factorise completely: 6x + 9.",
    answers: ["3(2x + 3)", "6(x + 9)", "x(6 + 9)", "3x(2 + 3)"],
    correct: 0,
    explanation: "The highest common factor of 6x and 9 is 3, so 6x + 9 = 3(2x + 3)."
  },
  {
    topic: "Geometry",
    question: "Find the area of a triangle with base 12 cm and height 5 cm.",
    answers: ["30 cm²", "60 cm²", "17 cm²", "24 cm²"],
    correct: 0,
    explanation: "Area = ½ × base × height = ½ × 12 × 5 = 30 cm²."
  },
  {
    topic: "Angles",
    question: "Two angles on a straight line are 70° and x°. Find x.",
    answers: ["20°", "70°", "110°", "140°"],
    correct: 2,
    explanation: "Angles on a straight line add to 180°, so x = 180° − 70° = 110°."
  },
  {
    topic: "Statistics",
    question: "Find the mean of 4, 6, 8, 10 and 12.",
    answers: ["8", "10", "40", "6"],
    correct: 0,
    explanation: "The total is 40 and there are 5 numbers, so the mean is 40 ÷ 5 = 8."
  },
  {
    topic: "Probability",
    question: "A fair die is rolled. What is the probability of getting a 5?",
    answers: ["1/6", "1/5", "5/6", "1/2"],
    correct: 0,
    explanation: "A die has 6 equally likely outcomes, and only 1 is a 5."
  },
  {
    topic: "Number",
    question: "Express 3/5 as a percentage.",
    answers: ["35%", "50%", "60%", "75%"],
    correct: 2,
    explanation: "Multiply the fraction by 100: (3 ÷ 5) × 100 = 60%."
  },
  {
    topic: "Mensuration",
    question: "What is the area of a rectangle 8 cm long and 5 cm wide?",
    answers: ["13 cm²", "26 cm²", "40 cm²", "80 cm²"],
    correct: 2,
    explanation: "Area of a rectangle = length × width = 8 × 5 = 40 cm²."
  },
  {
    topic: "Algebra",
    question: "Expand (x + 3)(x + 2).",
    answers: ["x² + 5x + 6", "x² + 6", "x² + 5x + 5", "2x + 5"],
    correct: 0,
    explanation: "Multiply each term: x² + 2x + 3x + 6 = x² + 5x + 6."
  },
  {
    topic: "Geometry",
    question: "How many degrees are in the interior angle sum of a quadrilateral?",
    answers: ["180°", "270°", "360°", "540°"],
    correct: 2,
    explanation: "A quadrilateral can be divided into 2 triangles, so 2 × 180° = 360°."
  },
  {
    topic: "Sets",
    question: "If n(A) = 8 and n(B) = 6 with 3 elements in both sets, find n(A ∪ B).",
    answers: ["11", "14", "17", "3"],
    correct: 0,
    explanation: "n(A ∪ B) = n(A) + n(B) − n(A ∩ B) = 8 + 6 − 3 = 11."
  },
  {
    topic: "Number",
    question: "Which of these numbers is divisible by 3?",
    answers: ["124", "235", "246", "341"],
    correct: 2,
    explanation: "246 has digit sum 2 + 4 + 6 = 12, which is divisible by 3."
  },
  {
    topic: "Mensuration",
    question: "Find the circumference of a circle with radius 7 cm. (Use π = 22/7)",
    answers: ["22 cm", "44 cm", "154 cm", "308 cm"],
    correct: 1,
    explanation: "Circumference = 2πr = 2 × 22/7 × 7 = 44 cm."
  },
  {
    topic: "Statistics",
    question: "Find the median of 3, 7, 5, 9, 1.",
    answers: ["3", "5", "7", "9"],
    correct: 1,
    explanation: "Arrange in order: 1, 3, 5, 7, 9. The median is the middle value, 5."
  }
];

const detailedExplanations = {
  "Simplify 2(3 + 5) − 4.": "According to the order of operations, work out brackets first. 3 + 5 = 8, then multiply: 2 × 8 = 16. Finally subtract 4, giving 16 − 4 = 12.",
  "What is 3/4 + 1/8?": "Fractions can only be added directly when they have the same denominator. Convert 3/4 to an equivalent fraction with denominator 8: 3/4 = 6/8. Therefore, 6/8 + 1/8 = 7/8.",
  "Calculate 2.5 × 0.4.": "Ignore the decimal points and multiply 25 × 4 = 100. The factors contain 2 decimal places in total (one in 2.5 and one in 0.4), so place the decimal point two places from the right: 1.00.",
  "If 3x + 5 = 20, find x.": "Subtract 5 from both sides to isolate the term containing x: 3x = 15. Divide both sides by 3. Therefore x = 15 ÷ 3 = 5.",
  "Divide ₦240 in the ratio 2 : 3.": "Add the ratio parts: 2 + 3 = 5. Divide ₦240 by 5 to get one part: ₦48. The two shares are 2 × ₦48 = ₦96 and 3 × ₦48 = ₦144.",
  "A shirt costs ₦2,000. It is discounted by 15%. What is the discount?": "Percentage means out of 100. The discount is 15/100 × ₦2,000. Cancel or divide first: 0.15 × ₦2,000 = ₦300.",
  "Simplify 2³ × 2².": "For multiplication of powers with the same base, keep the base and add the indices. Here 2³ × 2² = 2^(3+2) = 2⁵.",
  "Factorise completely: 6x + 9.": "First identify the highest common factor of 6x and 9, which is 3. Divide each term by 3: 6x ÷ 3 = 2x and 9 ÷ 3 = 3. Therefore 6x + 9 = 3(2x + 3).",
  "Find the area of a triangle with base 12 cm and height 5 cm.": "The formula is Area = ½ × base × perpendicular height. Substitute the measurements: ½ × 12 × 5 = 6 × 5 = 30 cm².",
  "Two angles on a straight line are 70° and x°. Find x.": "Adjacent angles on a straight line form a linear pair and sum to 180°. Therefore x = 180° − 70° = 110°.",
  "Find the mean of 4, 6, 8, 10 and 12.": "The mean is the sum of all values divided by the number of values. Add: 4 + 6 + 8 + 10 + 12 = 40. Then divide by 5, giving 40 ÷ 5 = 8.",
  "A fair die is rolled. What is the probability of getting a 5?": "Probability = favourable outcomes ÷ possible outcomes. A die has six faces, so there are six possible outcomes. A 5 appears on only one face, hence the probability is 1/6.",
  "Express 3/5 as a percentage.": "To convert a fraction to a percentage, multiply by 100%. Thus (3/5) × 100% = (300 ÷ 5)% = 60%.",
  "What is the area of a rectangle 8 cm long and 5 cm wide?": "The area of a rectangle is length × breadth. Substitute 8 cm and 5 cm: 8 × 5 = 40. Include square units, so the area is 40 cm².",
  "Expand (x + 3)(x + 2).": "Use the distributive property: x(x + 2) + 3(x + 2). This gives x² + 2x + 3x + 6. Collect like terms to obtain x² + 5x + 6.",
  "How many degrees are in the interior angle sum of a quadrilateral?": "The formula for an n-sided polygon is (n − 2) × 180°. For a quadrilateral, n = 4, so (4 − 2) × 180° = 2 × 180° = 360°.",
  "If n(A) = 8 and n(B) = 6 with 3 elements in both sets, find n(A ∪ B).": "The union excludes elements common to both sets from being counted twice. Therefore n(A ∪ B) = n(A) + n(B) − n(A ∩ B) = 8 + 6 − 3 = 11.",
  "Which of these numbers is divisible by 3?": "A whole number is divisible by 3 when the sum of its digits is divisible by 3. For 246, 2 + 4 + 6 = 12, and 12 is divisible by 3.",
  "Find the circumference of a circle with radius 7 cm. (Use π = 22/7)": "Circumference = 2πr. Substitute r = 7 cm and π = 22/7: 2 × 22/7 × 7 = 44 cm.",
  "Find the median of 3, 7, 5, 9, 1.": "Arrange the values in ascending order: 1, 3, 5, 7, 9. The median is the middle value, so it is 5."
};

questions.forEach((item) => {
  if (detailedExplanations[item.question]) item.explanation = detailedExplanations[item.question];
});

questions.push(
  { topic: "Number", question: "Which of these is a prime number?", answers: ["21", "27", "29", "33"], correct: 2, explanation: "A prime number has exactly two factors: 1 and itself. 29 is divisible only by 1 and 29, while the others have additional factors." },
  { topic: "Number", question: "Find the LCM of 6 and 8.", answers: ["12", "24", "48", "14"], correct: 1, explanation: "List multiples: 6 = 6, 12, 18, 24, 30; 8 = 8, 16, 24, 32. The smallest common multiple is 24." },
  { topic: "Fractions", question: "Subtract 2/5 from 3/4.", answers: ["7/20", "1/20", "5/9", "1/1"], correct: 0, explanation: "Use the LCM of 4 and 5, which is 20. Convert: 3/4 = 15/20 and 2/5 = 8/20. Then 15/20 − 8/20 = 7/20." },
  { topic: "Fractions", question: "Convert 7/4 to a mixed number.", answers: ["1 1/4", "1 3/4", "2 1/4", "3 1/4"], correct: 1, explanation: "Divide 7 by 4. It goes once with remainder 3, so the whole number is 1 and the remainder becomes 3/4: 1 3/4." },
  { topic: "Fractions", question: "What is 2/3 × 9/10?", answers: ["18/30", "3/5", "6/30", "11/13"], correct: 1, explanation: "Multiply numerators and denominators: (2 × 9)/(3 × 10) = 18/30. Divide both terms by 6 to obtain 3/5." },
  { topic: "Fractions", question: "Divide 3/5 by 2/7.", answers: ["6/35", "21/10", "10/21", "6/10"], correct: 1, explanation: "To divide by a fraction, multiply by its reciprocal: 3/5 ÷ 2/7 = 3/5 × 7/2 = 21/10." },
  { topic: "Fractions", question: "Simplify 12/18.", answers: ["2/3", "3/4", "6/9", "4/6"], correct: 0, explanation: "Find the highest common factor of 12 and 18, which is 6. Divide both numerator and denominator by 6 to get 2/3." },
  { topic: "Decimals", question: "Round 3.746 to two decimal places.", answers: ["3.74", "3.75", "3.76", "3.70"], correct: 1, explanation: "At two decimal places, the digits are 74 and the next digit is 6. Since 6 is 5 or more, add 1 to 74, giving 3.75." },
  { topic: "Decimals", question: "What is 6.4 + 2.35?", answers: ["8.75", "8.39", "8.75", "7.75"], correct: 0, explanation: "Align the decimal points: 6.40 + 2.35 = 8.75. Adding trailing zeroes does not change the value." },
  { topic: "Decimals", question: "Convert 0.125 to a fraction.", answers: ["1/8", "1/4", "5/8", "1/125"], correct: 0, explanation: "0.125 is 125/1000. Divide numerator and denominator by 125, giving the simplest fraction 1/8." },
  { topic: "Decimals", question: "Calculate 4.2 ÷ 0.7.", answers: ["0.6", "6", "60", "0.06"], correct: 1, explanation: "Both numbers have one decimal place, so multiply each by 10: 42 ÷ 7 = 6." },
  { topic: "Decimals", question: "Which decimal is greatest?", answers: ["0.305", "0.35", "0.053", "0.3"], correct: 1, explanation: "Compare digit by digit after the decimal point: 0.350 is greater than 0.305 and 0.300. Therefore 0.35 is greatest." },
  { topic: "Algebra", question: "Simplify 5a + 3a − 2a.", answers: ["6a", "10a", "5a²", "a"], correct: 0, explanation: "These are like terms because they all contain a. Add and subtract their coefficients: 5 + 3 − 2 = 6. The result is 6a." },
  { topic: "Algebra", question: "Solve 2y − 7 = 9.", answers: ["y = 1", "y = 8", "y = 16", "y = −8"], correct: 1, explanation: "Add 7 to both sides: 2y = 16. Divide by 2: y = 8." },
  { topic: "Algebra", question: "Find the value of 4m + 1 when m = 3.", answers: ["13", "12", "7", "14"], correct: 0, explanation: "Substitute m = 3 into the expression: 4 × 3 + 1 = 12 + 1 = 13." },
  { topic: "Ratio", question: "Simplify the ratio 18 : 24.", answers: ["2 : 3", "3 : 4", "6 : 8", "9 : 12"], correct: 1, explanation: "Divide both parts by their highest common factor, 6: 18 ÷ 6 = 3 and 24 ÷ 6 = 4. The simplest ratio is 3 : 4." },
  { topic: "Ratio", question: "If a : b = 3 : 5 and b = 20, find a.", answers: ["10", "12", "15", "18"], correct: 1, explanation: "Each part in the ratio is 20 ÷ 5 = 4. Therefore a = 3 × 4 = 12." },
  { topic: "Ratio", question: "A map uses scale 1 : 50,000. What actual distance is 4 cm on the map?", answers: ["2 km", "20 km", "200 m", "50 km"], correct: 0, explanation: "The actual length is 4 × 50,000 cm = 200,000 cm. Since 100,000 cm = 1 km, the distance is 2 km." },
  { topic: "Ratio", question: "The ratio of boys to girls is 4 : 5. If there are 36 pupils, how many boys are there?", answers: ["16", "20", "24", "32"], correct: 0, explanation: "There are 4 + 5 = 9 ratio parts. One part is 36 ÷ 9 = 4, so boys = 4 × 4 = 16." },
  { topic: "Ratio", question: "Share 45 pencils in the ratio 1 : 2 : 2.", answers: ["9, 18, 18", "10, 15, 20", "15, 15, 15", "5, 20, 20"], correct: 0, explanation: "The total ratio is 1 + 2 + 2 = 5 parts. One part is 45 ÷ 5 = 9; the shares are 9, 18 and 18." },
  { topic: "Percentages", question: "Convert 3/8 to a percentage.", answers: ["37.5%", "38%", "35%", "75%"], correct: 0, explanation: "Multiply 3/8 by 100: (300 ÷ 8)% = 37.5%. Alternatively, divide 3 by 8 and then multiply by 100." },
  { topic: "Percentages", question: "Increase ₦800 by 10%.", answers: ["₦880", "₦810", "₦900", "₦808"], correct: 0, explanation: "10% of ₦800 is ₦80. An increase means add it to the original amount: ₦800 + ₦80 = ₦880." },
  { topic: "Percentages", question: "What percentage of 80 is 20?", answers: ["20%", "25%", "40%", "15%"], correct: 1, explanation: "Use (part ÷ whole) × 100%. Here (20 ÷ 80) × 100% = ¼ × 100% = 25%." },
  { topic: "Percentages", question: "A ₦1,000 item is reduced to ₦850. What is the percentage decrease?", answers: ["15%", "85%", "150%", "5%"], correct: 0, explanation: "Decrease = ₦1,000 − ₦850 = ₦150. Percentage decrease = (150 ÷ 1000) × 100% = 15%." },
  { topic: "Percentages", question: "Express 0.72 as a percentage.", answers: ["7.2%", "72%", "720%", "0.72%"], correct: 1, explanation: "To convert a decimal to a percentage, multiply by 100. Therefore 0.72 × 100 = 72%." },
  { topic: "Indices", question: "Evaluate 5⁰.", answers: ["0", "1", "5", "50"], correct: 1, explanation: "A non-zero number raised to the power zero is 1. Therefore 5⁰ = 1." },
  { topic: "Indices", question: "Simplify 3⁴ ÷ 3².", answers: ["3²", "3⁶", "1³", "9²"], correct: 0, explanation: "For division of powers with the same base, subtract the indices: 3^(4−2) = 3²." },
  { topic: "Indices", question: "Simplify (2³)².", answers: ["2⁵", "2⁶", "4³", "8²"], correct: 1, explanation: "When raising a power to another power, multiply the indices: 2^(3×2) = 2⁶." },
  { topic: "Indices", question: "Write 1/5³ using a negative index.", answers: ["5³", "5⁻³", "3⁻⁵", "−5³"], correct: 1, explanation: "The reciprocal of a positive power is the same base raised to the negative power: 1/5³ = 5⁻³." },
  { topic: "Indices", question: "Evaluate 10² × 10⁻¹.", answers: ["10", "100", "10⁻³", "1"], correct: 0, explanation: "Add the indices because it is multiplication: 10^(2 + (−1)) = 10¹ = 10." },
  { topic: "Factorisation", question: "Factorise x² + 5x.", answers: ["x(x + 5)", "(x + 5)²", "5(x + 1)", "x²(1 + 5)"], correct: 0, explanation: "The common factor is x. Divide each term by x: x² ÷ x = x and 5x ÷ x = 5. Thus x² + 5x = x(x + 5)." },
  { topic: "Factorisation", question: "Factorise x² − 9.", answers: ["(x − 3)(x + 3)", "(x − 9)(x + 1)", "(x − 3)²", "(x + 9)(x − 1)"], correct: 0, explanation: "This is a difference of two squares: x² − 3² = (x − 3)(x + 3)." },
  { topic: "Factorisation", question: "Factorise x² + 7x + 12.", answers: ["(x + 3)(x + 4)", "(x + 6)(x + 2)", "(x − 3)(x − 4)", "(x + 1)(x + 12)"], correct: 0, explanation: "Find two numbers whose sum is 7 and product is 12. The numbers are 3 and 4, so x² + 7x + 12 = (x + 3)(x + 4)." },
  { topic: "Factorisation", question: "Factorise 4a² − 16.", answers: ["4(a² − 4)", "4(a − 2)(a + 2)", "(2a − 4)(2a + 4)", "Both first and second"], correct: 3, explanation: "First take out 4: 4(a² − 4). Then factorise the difference of squares: a² − 4 = (a − 2)(a + 2). Fully factorised, 4(a − 2)(a + 2). The first and second descriptions can be used as equivalent steps." },
  { topic: "Geometry", question: "What is the volume of a cube of side 3 cm?", answers: ["9 cm³", "27 cm³", "18 cm³", "36 cm³"], correct: 1, explanation: "The volume of a cube is side³. Substitute 3 cm: 3³ = 3 × 3 × 3 = 27 cm³." },
  { topic: "Geometry", question: "A circle has diameter 14 cm. Find its radius.", answers: ["7 cm", "28 cm", "14 cm", "3.5 cm"], correct: 0, explanation: "The radius is half the diameter. Divide 14 cm by 2 to obtain 7 cm." },
  { topic: "Geometry", question: "Find the perimeter of a square of side 9 cm.", answers: ["18 cm", "36 cm", "81 cm", "27 cm"], correct: 1, explanation: "A square has four equal sides. Perimeter = 4 × 9 cm = 36 cm." },
  { topic: "Angles", question: "Two vertically opposite angles are equal. If one angle is 65°, find the opposite angle.", answers: ["25°", "115°", "65°", "130°"], correct: 2, explanation: "Vertically opposite angles are formed by intersecting straight lines and are equal. Therefore, the opposite angle is also 65°." },
  { topic: "Angles", question: "Find the third angle of a triangle if two angles are 50° and 60°.", answers: ["70°", "80°", "90°", "110°"], correct: 0, explanation: "The sum of angles in a triangle is 180°. The third angle = 180° − (50° + 60°) = 180° − 110° = 70°." },
  { topic: "Angles", question: "Find a reflex angle if it and 40° form a full turn.", answers: ["140°", "320°", "220°", "180°"], correct: 1, explanation: "Angles around a point sum to 360°. Therefore the reflex angle is 360° − 40° = 320°." },
  { topic: "Angles", question: "One of two complementary angles is 35°. Find the other.", answers: ["55°", "145°", "65°", "125°"], correct: 0, explanation: "Complementary angles add to 90°. The other angle is 90° − 35° = 55°." },
  { topic: "Angles", question: "Two corresponding angles are equal. If one is 72°, find the other.", answers: ["18°", "108°", "72°", "144°"], correct: 2, explanation: "Corresponding angles are equal when a transversal crosses parallel lines. Therefore the other angle is 72°." },
  { topic: "Statistics", question: "Find the mode of 2, 5, 5, 7, 9.", answers: ["2", "5", "7", "9"], correct: 1, explanation: "The mode is the value that occurs most frequently. 5 occurs twice, while every other value occurs once." },
  { topic: "Statistics", question: "Find the range of 3, 8, 5, 12, 7.", answers: ["5", "9", "12", "15"], correct: 1, explanation: "Range = highest value − lowest value. The highest is 12 and the lowest is 3, so the range is 12 − 3 = 9." },
  { topic: "Statistics", question: "Find the median of 6, 2, 9, 4.", answers: ["4", "5", "6", "7"], correct: 1, explanation: "Arrange the values: 2, 4, 6, 9. There are two middle values, 4 and 6. Their mean is (4 + 6) ÷ 2 = 5." },
  { topic: "Probability", question: "A bag contains 3 red balls and 2 blue balls. Find the probability of picking red.", answers: ["2/5", "3/5", "3/2", "1/5"], correct: 1, explanation: "There are 3 red balls and 5 balls altogether. Probability = favourable outcomes ÷ total outcomes = 3/5." },
  { topic: "Probability", question: "A coin is tossed. What is the probability of heads?", answers: ["0", "1/2", "1", "1/4"], correct: 1, explanation: "A coin has two equally likely outcomes: head or tail. One of these is a head, so the probability is 1/2." },
  { topic: "Probability", question: "A card is drawn from a standard 52-card deck. What is the probability of a king?", answers: ["1/52", "4/52", "13/52", "1/13"], correct: 3, explanation: "There are 4 kings among 52 cards, so the probability is 4/52. This simplifies by dividing by 4 to 1/13." },
  { topic: "Probability", question: "What is the probability of an impossible event?", answers: ["0", "1", "1/2", "Between 0 and 1"], correct: 0, explanation: "An impossible event has no favourable outcomes. Its probability is therefore 0." },
  { topic: "Probability", question: "What is the probability of a certain event?", answers: ["0", "1", "1/2", "It depends"], correct: 1, explanation: "A certain event is guaranteed to happen, so all possible outcomes are favourable. Its probability is 1." },
  { topic: "Mensuration", question: "Find the perimeter of a rectangle 10 cm long and 4 cm wide.", answers: ["28 cm", "40 cm", "14 cm", "20 cm"], correct: 0, explanation: "Perimeter = 2(length + width) = 2(10 + 4) = 28 cm." },
  { topic: "Mensuration", question: "Find the area of a parallelogram with base 9 cm and height 6 cm.", answers: ["54 cm²", "15 cm²", "30 cm²", "45 cm²"], correct: 0, explanation: "Area = base × perpendicular height = 9 × 6 = 54 cm²." },
  { topic: "Mensuration", question: "Find the volume of a cuboid 5 cm long, 4 cm wide and 3 cm high.", answers: ["12 cm³", "60 cm³", "35 cm³", "48 cm³"], correct: 1, explanation: "Volume = length × width × height = 5 × 4 × 3 = 60 cm³." },
  { topic: "Sets", question: "If A = {1, 2, 3} and B = {3, 4, 5}, find A ∩ B.", answers: ["{1, 2}", "{3}", "{4, 5}", "{1, 2, 3, 4, 5}"], correct: 1, explanation: "The intersection contains elements found in both sets. Only 3 occurs in both A and B, so A ∩ B = {3}." },
  { topic: "Sets", question: "If A = {1, 2, 3} and B = {3, 4, 5}, find A ∪ B.", answers: ["{1, 2, 3}", "{3}", "{1, 2, 3, 4, 5}", "{4, 5}"], correct: 2, explanation: "The union contains every element belonging to either set, with no repetition: {1, 2, 3, 4, 5}." },
  { topic: "Sets", question: "How many subsets has a set with 3 elements?", answers: ["3", "6", "8", "9"], correct: 2, explanation: "The number of subsets of a set with n elements is 2ⁿ. For n = 3, 2³ = 8." },
  { topic: "Sets", question: "Which symbol means 'is an element of'?", answers: ["∈", "∉", "⊂", "∪"], correct: 0, explanation: "The symbol ∈ means membership. For example, 2 ∈ {1, 2, 3} means that 2 is an element of the set." },
  { topic: "Sets", question: "Find n(A) if A = {a, b, c, d}.", answers: ["2", "3", "4", "8"], correct: 2, explanation: "n(A) denotes the number of elements in set A. The set has four distinct elements, so n(A) = 4." }
);

questions.forEach((item, index) => {
  item.year = String(2022 + (index % 4));
});

const topicFilter = document.querySelector("#topic-filter");
const yearFilter = document.querySelector("#year-filter");
const questionCounter = document.querySelector("#question-counter");
const topicTag = document.querySelector("#topic-tag");
const questionText = document.querySelector("#question-text");
const answerList = document.querySelector("#answer-list");
const feedback = document.querySelector("#feedback");
const previousButton = document.querySelector("#previous-button");
const nextButton = document.querySelector("#next-button");
const resetButton = document.querySelector("#reset-button");
const scoreCount = document.querySelector("#score-count");
const answeredCount = document.querySelector("#answered-count");
const completionFill = document.querySelector("#completion-fill");
const encouragement = document.querySelector("#encouragement");

let filteredQuestions = [...questions];
let currentIndex = 0;
let answers = new Array(questions.length).fill(null);

const topicNames = [...new Set(questions.map((item) => item.topic))].sort();
topicNames.forEach((topic) => {
  const option = document.createElement("option");
  option.value = topic;
  option.textContent = topic;
  topicFilter.appendChild(option);
});

function getOriginalIndex(question) {
  return questions.indexOf(question);
}

function renderQuestion() {
  const question = filteredQuestions[currentIndex];
  if (!question) return;

  const originalIndex = getOriginalIndex(question);
  const selectedAnswer = answers[originalIndex];

  questionCounter.textContent = `QUESTION ${currentIndex + 1} OF ${filteredQuestions.length}`;
  topicTag.textContent = `${question.topic} · ${question.year}`;
  questionText.textContent = question.question;
  answerList.innerHTML = "";
  feedback.hidden = true;
  feedback.className = "feedback";

  question.answers.forEach((answer, answerIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + answerIndex)}</span><span class="option-text">${answer}</span><span class="option-mark" aria-hidden="true"></span>`;
    button.setAttribute("aria-pressed", selectedAnswer === answerIndex ? "true" : "false");

    if (selectedAnswer !== null) {
      button.disabled = true;
      if (answerIndex === question.correct) button.classList.add("correct");
      if (answerIndex === selectedAnswer && answerIndex !== question.correct) button.classList.add("incorrect");
    }

    button.addEventListener("click", () => chooseAnswer(answerIndex));
    answerList.appendChild(button);
  });

  if (selectedAnswer !== null) showFeedback(question, selectedAnswer);

  previousButton.disabled = currentIndex === 0;
  nextButton.innerHTML = currentIndex === filteredQuestions.length - 1
    ? `Finish <span aria-hidden="true">✓</span>`
    : `Next question <span aria-hidden="true">→</span>`;
  updateProgress();
}

function chooseAnswer(answerIndex) {
  const question = filteredQuestions[currentIndex];
  const originalIndex = getOriginalIndex(question);
  if (answers[originalIndex] !== null) return;

  answers[originalIndex] = answerIndex;
  renderQuestion();
}

function showFeedback(question, selectedAnswer) {
  const isCorrect = selectedAnswer === question.correct;
  feedback.hidden = false;
  feedback.classList.add(isCorrect ? "correct-feedback" : "incorrect-feedback");
  feedback.innerHTML = `
    <strong>${isCorrect ? "Correct!" : "Not quite."}</strong>
    <p>${question.explanation}</p>
  `;
}

function updateProgress() {
  const answered = answers.filter((answer) => answer !== null).length;
  const score = answers.reduce((total, answer, index) => {
    return answer !== null && answer === questions[index].correct ? total + 1 : total;
  }, 0);
  const percent = filteredQuestions.length ? Math.round((filteredQuestions.filter((q) => answers[getOriginalIndex(q)] !== null).length / filteredQuestions.length) * 100) : 0;

  scoreCount.innerHTML = `${score}<span> / ${answered}</span>`;
  answeredCount.textContent = answered;
  completionFill.style.width = `${percent}%`;

  if (answered === 0) encouragement.textContent = "Every question is a chance to grow.";
  else if (score === answered) encouragement.textContent = "Excellent work—keep going!";
  else if (percent === 100) encouragement.textContent = "Practice complete. Review and try again!";
  else encouragement.textContent = "Good effort. You’re getting stronger.";
}

function applyFilters() {
  const topicValue = topicFilter.value;
  const yearValue = yearFilter.value;
  filteredQuestions = questions.filter((item) => {
    const matchesTopic = topicValue === "all" || item.topic === topicValue;
    const matchesYear = yearValue === "all" || item.year === yearValue;
    return matchesTopic && matchesYear;
  });
  currentIndex = 0;
  renderQuestion();
}

topicFilter.addEventListener("change", applyFilters);
yearFilter.addEventListener("change", applyFilters);

previousButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    renderQuestion();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < filteredQuestions.length - 1) {
    currentIndex += 1;
    renderQuestion();
  } else {
    topicFilter.focus();
  }
});

resetButton.addEventListener("click", () => {
  answers = new Array(questions.length).fill(null);
  topicFilter.value = "all";
  yearFilter.value = "all";
  filteredQuestions = [...questions];
  currentIndex = 0;
  renderQuestion();
});

renderQuestion();