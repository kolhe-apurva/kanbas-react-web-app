function findIndex() {
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ["string1", "string2", "string3"];

  const four = numberArray1.find((a) => a === 4);
  const string3 = stringArray1.find((a) => a === "string3");

  return (
    <div>
      <h2>Find Index</h2>
      <p>fourIndex= {four}</p>
      <p>string3Index = {string3}</p>
    </div>
  );
}
export default findIndex;
