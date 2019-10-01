for (
  let capacity = 10, counter = 1;
  capacity < 1000;
  capacity += capacity >> 1, counter++
) {
  console.log(counter, capacity);
  /* Output:
   * 1 10
   * 2 15
   * 3 22
   * 4 33
   * 5 49
   * 6 73
   * 7 109
   * 8 163
   * 9 244
   * 10 366
   * 11 549
   * 12 823
   * 13 1234
   */
}
