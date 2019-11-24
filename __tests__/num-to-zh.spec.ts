import { numToZh } from '../lib/index';

test('num-to-zh 1 to equal 一', () => {
  expect(numToZh(1)).toBe('一');
});

test('num-to-zh 11 to equal 十一', () => {
  expect(numToZh(11)).toBe('十一');
});

test('num-to-zh 21 to equal 二十一', () => {
  expect(numToZh(21)).toBe('二十一');
});

test('num-to-zh 100 to equal 一百', () => {
  expect(numToZh(100)).toBe('一百');
});

test('num-to-zh 909 to equal 九百零九', () => {
  expect(numToZh(909)).toBe('九百零九');
});

test('num-to-zh 990 to equal 九百九十', () => {
  expect(numToZh(990)).toBe('九百九十');
});

test('num-to-zh 999 to equal 九百九十九', () => {
  expect(numToZh(999)).toBe('九百九十九');
});

test('num-to-zh 3000 to equal 三千', () => {
  expect(numToZh(3000)).toBe('三千');
});

test('num-to-zh 3001 to equal 三千零一', () => {
  expect(numToZh(3001)).toBe('三千零一');
});

test('num-to-zh 3020 to equal 三千零二十', () => {
  expect(numToZh(3020)).toBe('三千零二十');
});

test('num-to-zh 3200 to equal 三千二百', () => {
  expect(numToZh(3200)).toBe('三千二百');
});

test('num-to-zh 3210 to equal 三千二百一十', () => {
  expect(numToZh(3210)).toBe('三千二百一十');
});

test('num-to-zh 3215 to equal 三千二百一十五', () => {
  expect(numToZh(3215)).toBe('三千二百一十五');
});

test('num-to-zh 20000 to equal 二万', () => {
  expect(numToZh(20000)).toBe('二万');
});

test('num-to-zh 20001 to equal 二万零一', () => {
  expect(numToZh(20001)).toBe('二万零一');
});

test('num-to-zh 21001 to equal 二万一千零一', () => {
  expect(numToZh(21001)).toBe('二万一千零一');
});

test('num-to-zh 21301 to equal 二万一千三百零一', () => {
  expect(numToZh(21301)).toBe('二万一千三百零一');
});

test('num-to-zh 21351 to equal 二万一千三百五十一', () => {
  expect(numToZh(21351)).toBe('二万一千三百五十一');
});

test('num-to-zh 20351 to equal 二万零三百五十一', () => {
  expect(numToZh(20351)).toBe('二万零三百五十一');
});

test('num-to-zh 20051 to equal 二万零五十一', () => {
  expect(numToZh(20051)).toBe('二万零五十一');
});

test('num-to-zh 99999 to equal 九万九千九百九十九', () => {
  expect(numToZh(99999)).toBe('九万九千九百九十九');
});

