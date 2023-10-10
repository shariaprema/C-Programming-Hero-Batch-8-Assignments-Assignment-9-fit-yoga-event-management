<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: (B:`ReferenceError: greetign is not defined`) 
Explanation: In the code provided, there is a typo in the variable declaration. "greetign" is declared instead of "greeting," and since "greetign" is not defined anywhere in the code, it will result in a ReferenceError when you try to log it. The correct variable name is "greeting," but due to the typo, it is not defined, so the correct answer is option B.

<i>Write your explanation here</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: (C: `"12"`)
Explanation: In the provided code, the sum function takes two parameters, a and b, and attempts to add them together using the + operator. When you call sum(1, "2"), JavaScript implicitly converts the number 1 to a string "1" and then performs string concatenation because one of the operands is a string. So, the result of 1 + "2" is "12", which is a string, making option C, "12," the correct answer.

<i>Write your explanation here</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: (A: ['🍕', '🍫', '🥑', '🍔'])
Explanation: In the given code, the info.favoriteFood property is initially set to the first element of the food array, which is "🍕". Later, it is reassigned to "🍝". However, this reassignment does not affect the original food array in any way. Therefore, when you log food, it remains unchanged, resulting in option A being the correct answer.




<i>Write your explanation here</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: (B: Hi there, undefined)
Explanation: In the sayHi function, there is a parameter name. When you call sayHi() without providing an argument, the name parameter is undefined. Therefore, the function returns "Hi there, undefined," as it concatenates the undefined value with the string. This is why option B is the correct answer.

<i>Write your explanation here</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: (B: 2)

Explanation: In the given code, the forEach method iterates over each element in the nums array and checks if the element num is truthy. The condition if (num) will evaluate to true for all elements in the array except for the first one (0), as zero is a falsy value in JavaScript. Therefore, the count variable is incremented for the other three elements (1, 2, and 3), resulting in a final value of 2 for count. This is why option B is the correct answer.

<i>Write your explanation here</i>

</p>
</details>
