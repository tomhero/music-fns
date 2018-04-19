// https://en.wikipedia.org/wiki/Pentatonic_scale

import isPentatonicScale from './';

describe('isPentatonicScale', () => {
  it('should return true on Pentatonic Scale', () => {
    const scale = [2, 2, 1, 2, 2];
    expect(isPentatonicScale(scale)).toBe(true);
  });

  it('should return false on non Pentatonic Scale', () => {
    const scale = [2, 2, 1, 2, 2, 1, 1];
    expect(isPentatonicScale(scale)).toBe(false);
  });
});
