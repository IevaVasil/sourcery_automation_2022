// @ts-check
const { test, expect } = require('@playwright/test');

const data = [
  'Prototype',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
]


data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Concatenating 2 and 3 results in 23', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('23');
    });
  });
});

//Add 1+1
data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Should  add two integers: 1 and 1 ', async ({page}) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('1');
      await page.locator('#number2Field').type('1');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('2');
    });
  });
});

//Add a+3
data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Should not add two integers: a and 3 ', async ({page}) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('a');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();

      await expect(page.locator('#errorMsgField')).toHaveValue('Number 1 is not a number');
});
});
});

//Add 2+a
data.forEach(version => {
  test.describe(version + ': Add', () => {
test('Should add two integers: 2 and a ', async ({page}) => {
  await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.selectOption('#selectBuild', { label: version});
    await page.locator('#number1Field').type('2');
    await page.locator('#number2Field').type('a');
    await page.selectOption('#selectOperationDropdown', {label: 'Add'});
    await page.locator('#calculateButton').click();

    await expect(page.locator('#errorMsgField')).toHaveValue('Number 2 is not a number');
});
});
});

//Add -1+(-1)
data.forEach(version => {
  test.describe(version + ': Add', () => {
test('Should add two integers: -1 and -1 ', async ({page}) => {
  await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.selectOption('#selectBuild', { label: version});
    await page.locator('#number1Field').type('-1');
    await page.locator('#number2Field').type('-1');
    await page.selectOption('#selectOperationDropdown', {label: 'Add'});
    await page.locator('#calculateButton').click();

    await expect(page.locator('#numberAnswerField')).toHaveValue('-2');
});
});
});

//Add 1.2+1.2
data.forEach(version => {
  test.describe(version + ': Add', () => {
test('Should add two integers: 1.2 and 1.2 ', async ({page}) => {
  await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.selectOption('#selectBuild', { label: version});
    await page.locator('#number1Field').type('1.2');
    await page.locator('#number2Field').type('1.2');
    await page.selectOption('#selectOperationDropdown', {label: 'Add'});
    await page.locator('#calculateButton').click();

    await expect(page.locator('#numberAnswerField')).toHaveValue('2.4');
});
});
});

//Add 1.2+1.2 with 'integers only'checkbox selected
data.forEach(version => {
  test.describe(version + ': Add', () => {
test('Should add two integers: 1.2 and 1.2 with integers only checkbox selected', async ({page}) => {
  await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.selectOption('#selectBuild', { label: version});
    await page.locator('#number1Field').type('1.2');
    await page.locator('#number2Field').type('1.2');
    await page.selectOption('#selectOperationDropdown', {label: 'Add'});
    await page.locator('#integerSelect').check();
    await page.locator('#calculateButton').click();

    await expect(page.locator('#numberAnswerField')).toHaveValue('2');
});
});
});


//Substract 2-3
data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Should substract two integers: a and 3 ', async ({page}) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('a');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Substract'});
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('-1');
      });
  });
});

//Substract a-3
data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Should not substract two integers: a and 3 ', async ({page}) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('a');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Substract'});
      await page.locator('#calculateButton').click();

      await expect(page.locator('#errorMsgField')).toHaveValue('Number 1 is not a number');
      });
  });
});

//Substract 2-a
data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Should substract two integers: 2 and a ', async ({page}) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('a');
      await page.selectOption('#selectOperationDropdown', {label: 'Substract'});
      await page.locator('#calculateButton').click();

      await expect(page.locator('#errorMsgField')).toHaveValue('Number 2 is not a number');
      });
  });
});

//Substract	-1 - (-1)
data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Should substract two integers: -1 and -1 ', async ({page}) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-1');
      await page.locator('#number2Field').type('-1');
      await page.selectOption('#selectOperationDropdown', {label: 'Substract'});
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('0');
      });
  });
});

//Substract	1.6 - 1.2 with 'integers only'checkbox selected
data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Should substract two integers: 1.6 and 1.2 with integers only checkbox selected', async ({page}) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('1.6');
      await page.locator('#number2Field').type('1.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Substract'});
      await page.locator('#integerSelect').check();
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('0');
      });
  });
});



//Multiply 1 * 0
data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Should multiply two integers: 1 and 0', async ({page}) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('1');
      await page.locator('#number2Field').type('0');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('0');
      });
  });
});

//Multiply 1 * 1
data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Should multiply two integers: 1 and 1', async ({page}) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('1');
      await page.locator('#number2Field').type('1');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('1');
      });
  });
});

//Multiply 1.6 * 1.2
data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Should multiply two integers: 1.6 and 1.2', async ({page}) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('1.6');
      await page.locator('#number2Field').type('1.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('1.92');
      });
  });
});

//Multiply 1.6 * 1.2 with with integers only checkbox selected
data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Should multiply two integers: 1.6 and 1.2 with integers only checkbox selected', async ({page}) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('1.6');
      await page.locator('#number2Field').type('1.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#integerSelect').check();
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('1');
      });
  });
});

//Multiply A*1
data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Should not multiply two integers: A and 1', async ({page}) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('A');
      await page.locator('#number2Field').type('1');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();

      await expect(page.locator('#errorMsgField')).toHaveValue('Number 1 is not a number');
      });
  });
});

//Multiply 1*a
data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Should not multiply two integers: 1 and a', async ({page}) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('1');
      await page.locator('#number2Field').type('a');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();

      await expect(page.locator('#errorMsgField')).toHaveValue('Number 2 is not a number');
      });
  });
});

//Divide 1/0
data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Should divide two integers: 1 and 0', async ({page}) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('1');
      await page.locator('#number2Field').type('0');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('0');
      });
  });
});

//Divide 1/1
data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Should divide two integers: 1 and 1', async ({page}) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('1');
      await page.locator('#number2Field').type('1');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('1');
      });
  });
});

//Divide a/1
data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Should not divide two integers: a and 1', async ({page}) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('a');
      await page.locator('#number2Field').type('1');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();

      await expect(page.locator('#errorMsgField')).toHaveValue('Number 1 is not a number');
      });
  });
});

//Divide 1/a
data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Should not divide two integers: 1 and a', async ({page}) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('1');
      await page.locator('#number2Field').type('a');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();

      await expect(page.locator('#errorMsgField')).toHaveValue('Number 2 is not a number');
      });
  });
});

//Divide -1/1
data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Should divide two integers: -1 and 1', async ({page}) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-1');
      await page.locator('#number2Field').type('1');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('-1');
      });
  });
});

//Divide 1.6 / 1.2
data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Should divide two integers: 1.6 and 1.2', async ({page}) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('1.6');
      await page.locator('#number2Field').type('1.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('1.3333333333333335');
      });
  });
});

//Divide 1.6 / 1.2 with with integers only checkbox selected
data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Should divide two integers: 1.6 and 1.2 with integers only checkbox selected', async ({page}) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('1.6');
      await page.locator('#number2Field').type('1.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#integerSelect').check();
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('1');
      });
  });
});

//Concatenate 1 and 0
data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Should concatenate two inputs: 1 and 0', async ({page}) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('1');
      await page.locator('#number2Field').type('0');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('10');
      });
  });
});

//Concatenate -1 and 0
data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Should concatenate two inputs: -1 and 0', async ({page}) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-1');
      await page.locator('#number2Field').type('0');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('-10');
      });
  });
});

//Concatenate A and 1
data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Should concatenate two inputs: A and 0', async ({page}) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('A');
      await page.locator('#number2Field').type('1');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();

      await expect(page.locator('#numberAnswerField')).toHaveValue('A1');
      });
  });
});
