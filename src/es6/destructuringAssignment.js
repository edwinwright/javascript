
export function test() {
  const list = [
    'A',
    'B',
    'C',
    'D'
  ];

  const [a, b, ,c] = list;

  console.log(a, b, c);
}
