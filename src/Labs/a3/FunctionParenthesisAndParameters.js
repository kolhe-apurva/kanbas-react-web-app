function FunctionParenthesisAndParameters() {
  const square = (a) => a * a;
  const plusOne = (a) => a + 1;
  const twoSquared = square(2);
  const threePlusOne = plusOne(3);

  return (
    <div>
      <h2>Function Parenthesis and Parameters</h2>
      <p>twoSquared = {twoSquared}</p>
      <p>square(2) = {square(2)}</p>
      <p>threePlusOne = {threePlusOne}</p>
      <p>plusOne(3) = {plusOne(3)}</p>
    </div>
  );
}

export default FunctionParenthesisAndParameters;
