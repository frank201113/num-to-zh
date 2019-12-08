/**
 * 将阿拉伯数字转成汉字表示法
 * 目前只处理到五位数字的情景
 * eg: 123 -> 一百二十三
 * @param num
 */
const zhNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
export function numToZh(num: string | number): string {
  let rel: string = '';
  // 一位数
  if (Number(num) <= 10) {
    rel = zhNum[Number(num)];
    return rel;
  }
  // 两位数
  if (10 < Number(num) && Number(num) < 20) {
    const tenDigitsArr = String(num).split('');
    rel = '十' + zhNum[Number(tenDigitsArr[1])];
    return rel;
  }
  if (Number(num) < 100) {
    const moreTenArr = String(num).split('');
    if (moreTenArr[1] === '0') {
      rel = zhNum[Number(moreTenArr[0])] + '十';
      return rel;
    }
    rel = zhNum[Number(moreTenArr[0])] + '十' + zhNum[Number(moreTenArr[1])];
  }
  // 三位数
  if (Number(num) >= 100 && Number(num) < 1000) {
    const threeDigitsArr = String(num).split('');
    if (threeDigitsArr[1] === '0' && threeDigitsArr[2] === '0') {
      return (rel = zhNum[Number(threeDigitsArr[0])] + '百');
    }
    if (threeDigitsArr[1] === '0' && threeDigitsArr[2] !== '0') {
      return (rel = zhNum[Number(threeDigitsArr[0])] + '百' + '零' + zhNum[Number(threeDigitsArr[2])]);
    }
    if (threeDigitsArr[1] !== '0' && threeDigitsArr[2] === '0') {
      return (rel = zhNum[Number(threeDigitsArr[0])] + '百' + zhNum[Number(threeDigitsArr[1])] + '十');
    }
    rel =
      zhNum[Number(threeDigitsArr[0])] +
      '百' +
      zhNum[Number(threeDigitsArr[1])] +
      '十' +
      zhNum[Number(threeDigitsArr[2])];
  }
  // 四位数
  if (Number(num) >= 1000 && Number(num) < 10000) {
    const fourDigitsArr = String(num).split('');
    const THOUSAND = zhNum[Number(fourDigitsArr[0])] + '千';
    // eg: 1000
    if (fourDigitsArr[1] === '0' && fourDigitsArr[2] === '0' && fourDigitsArr[3] === '0') {
      return (rel = THOUSAND);
    }
    // eg: 1001
    if (fourDigitsArr[1] === '0' && fourDigitsArr[2] === '0' && fourDigitsArr[3] !== '0') {
      return (rel = THOUSAND + '零' + zhNum[Number(fourDigitsArr[3])]);
    }
    // eg: 1010
    if (fourDigitsArr[1] === '0' && fourDigitsArr[2] !== '0' && fourDigitsArr[3] === '0') {
      return (rel = THOUSAND + '零' + zhNum[Number(fourDigitsArr[2])] + '十');
    }
    // eg: 1011
    if (fourDigitsArr[1] === '0' && fourDigitsArr[2] !== '0' && fourDigitsArr[3] !== '0') {
      return (rel = THOUSAND + '零' + zhNum[Number(fourDigitsArr[2])] + '十' + zhNum[Number(fourDigitsArr[3])]);
    }
    // eg: 1101
    if (fourDigitsArr[1] !== '0' && fourDigitsArr[2] === '0' && fourDigitsArr[3] !== '0') {
      return (rel = THOUSAND + zhNum[Number(fourDigitsArr[1])] + '百' + '零' + zhNum[Number(fourDigitsArr[3])]);
    }
    // eg: 1110
    if (fourDigitsArr[1] !== '0' && fourDigitsArr[2] !== '0' && fourDigitsArr[3] === '0') {
      return (rel = THOUSAND + zhNum[Number(fourDigitsArr[1])] + '百' + zhNum[Number(fourDigitsArr[2])] + '十');
    }
    // eg: 1100
    if (fourDigitsArr[1] !== '0' && fourDigitsArr[2] === '0' && fourDigitsArr[3] === '0') {
      return (rel = THOUSAND + zhNum[Number(fourDigitsArr[1])] + '百');
    }
    rel =
      THOUSAND +
      zhNum[Number(fourDigitsArr[1])] +
      '百' +
      zhNum[Number(fourDigitsArr[2])] +
      '十' +
      zhNum[Number(fourDigitsArr[3])];
  }
  // 五位数
  if (Number(num) >= 10000 && Number(num) < 100000) {
    const fivesDigitsArr = String(num).split('');
    const TEN_THOUSAND = zhNum[Number(fivesDigitsArr[0])] + '万';
    // eg: 10000
    if (
      fivesDigitsArr[1] === '0' &&
      fivesDigitsArr[2] === '0' &&
      fivesDigitsArr[3] === '0' &&
      fivesDigitsArr[4] === '0'
    ) {
      return (rel = TEN_THOUSAND);
    }
    // eg: 11000
    if (
      fivesDigitsArr[1] !== '0' &&
      fivesDigitsArr[2] === '0' &&
      fivesDigitsArr[3] === '0' &&
      fivesDigitsArr[4] === '0'
    ) {
      return (rel = TEN_THOUSAND + zhNum[Number(fivesDigitsArr[1])] + '千');
    }
    // eg: 11100
    if (
      fivesDigitsArr[1] !== '0' &&
      fivesDigitsArr[2] !== '0' &&
      fivesDigitsArr[3] === '0' &&
      fivesDigitsArr[4] === '0'
    ) {
      return (rel = TEN_THOUSAND + zhNum[Number(fivesDigitsArr[1])] + '千' + zhNum[Number(fivesDigitsArr[2])] + '百');
    }
    // eg: 12310
    if (
      fivesDigitsArr[1] !== '0' &&
      fivesDigitsArr[2] !== '0' &&
      fivesDigitsArr[3] !== '0' &&
      fivesDigitsArr[4] === '0'
    ) {
      return (rel =
        TEN_THOUSAND +
        zhNum[Number(fivesDigitsArr[1])] +
        '千' +
        zhNum[Number(fivesDigitsArr[2])] +
        '百' +
        zhNum[Number(fivesDigitsArr[3])] +
        '十');
    }
    // eg: 10001
    if (
      fivesDigitsArr[1] === '0' &&
      fivesDigitsArr[2] === '0' &&
      fivesDigitsArr[3] === '0' &&
      fivesDigitsArr[4] !== '0'
    ) {
      return (rel = TEN_THOUSAND + '零' + zhNum[Number(fivesDigitsArr[4])]);
    }
    // eg: 10010
    if (
      fivesDigitsArr[1] === '0' &&
      fivesDigitsArr[2] === '0' &&
      fivesDigitsArr[3] !== '0' &&
      fivesDigitsArr[4] === '0'
    ) {
      return (rel = TEN_THOUSAND + '零' + zhNum[Number(fivesDigitsArr[3])] + '十');
    }
    // eg: 10011
    if (
      fivesDigitsArr[1] === '0' &&
      fivesDigitsArr[2] === '0' &&
      fivesDigitsArr[3] !== '0' &&
      fivesDigitsArr[4] !== '0'
    ) {
      return (rel = TEN_THOUSAND + '零' + zhNum[Number(fivesDigitsArr[3])] + '十' + zhNum[Number(fivesDigitsArr[4])]);
    }
    // eg: 10100
    if (
      fivesDigitsArr[1] === '0' &&
      fivesDigitsArr[2] !== '0' &&
      fivesDigitsArr[3] === '0' &&
      fivesDigitsArr[4] === '0'
    ) {
      return (rel = TEN_THOUSAND + '零' + zhNum[Number(fivesDigitsArr[2])] + '百');
    }
    // eg: 10101
    if (
      fivesDigitsArr[1] === '0' &&
      fivesDigitsArr[2] !== '0' &&
      fivesDigitsArr[3] === '0' &&
      fivesDigitsArr[4] !== '0'
    ) {
      return (rel =
        TEN_THOUSAND + '零' + zhNum[Number(fivesDigitsArr[2])] + '百' + '零' + zhNum[Number(fivesDigitsArr[4])]);
    }
    // eg: 10110
    if (
      fivesDigitsArr[1] === '0' &&
      fivesDigitsArr[2] !== '0' &&
      fivesDigitsArr[3] !== '0' &&
      fivesDigitsArr[4] === '0'
    ) {
      return (rel =
        TEN_THOUSAND + '零' + zhNum[Number(fivesDigitsArr[2])] + '百' + zhNum[Number(fivesDigitsArr[3])] + '十');
    }
    // eg: 10111
    if (
      fivesDigitsArr[1] === '0' &&
      fivesDigitsArr[2] !== '0' &&
      fivesDigitsArr[3] !== '0' &&
      fivesDigitsArr[4] !== '0'
    ) {
      return (rel =
        TEN_THOUSAND +
        '零' +
        zhNum[Number(fivesDigitsArr[2])] +
        '百' +
        zhNum[Number(fivesDigitsArr[3])] +
        '十' +
        zhNum[Number(fivesDigitsArr[4])]);
    }
    // eg: 11001
    if (
      fivesDigitsArr[1] !== '0' &&
      fivesDigitsArr[2] === '0' &&
      fivesDigitsArr[3] === '0' &&
      fivesDigitsArr[4] !== '0'
    ) {
      return (rel = TEN_THOUSAND + zhNum[Number(fivesDigitsArr[1])] + '千' + '零' + zhNum[Number(fivesDigitsArr[4])]);
    }
    // eg: 11101
    if (
      fivesDigitsArr[1] !== '0' &&
      fivesDigitsArr[2] !== '0' &&
      fivesDigitsArr[3] === '0' &&
      fivesDigitsArr[4] !== '0'
    ) {
      return (rel =
        TEN_THOUSAND +
        zhNum[Number(fivesDigitsArr[1])] +
        '千' +
        zhNum[Number(fivesDigitsArr[2])] +
        '百' +
        '零' +
        zhNum[Number(fivesDigitsArr[4])]);
    }
    // eg: 12345
    rel =
      TEN_THOUSAND +
      zhNum[Number(fivesDigitsArr[1])] +
      '千' +
      zhNum[Number(fivesDigitsArr[2])] +
      '百' +
      zhNum[Number(fivesDigitsArr[3])] +
      '十' +
      zhNum[Number(fivesDigitsArr[4])];
  }
  return rel;
}



