import { SanityPipe } from './sanity.pipe';

describe('SanityPipe', () => {
  it('create an instance', () => {
    const pipe = new SanityPipe();
    expect(pipe).toBeTruthy();
  });
});
