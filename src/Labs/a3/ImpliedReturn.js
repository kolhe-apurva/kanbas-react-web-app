function ImpliedReturn() {
  const multiply = (a, b) => a * b;
  const fourTimesFive = multiply(4, 5);
  console.log(fourTimesFive);
  return (
    <div>
      <h2>Implied Return</h2>
      <p>fourTimesFive= {fourTimesFive}</p>
      <p>multiply(4,5)= {multiply(4, 5)}</p>
    </div>
  );
}

export default ImpliedReturn;
