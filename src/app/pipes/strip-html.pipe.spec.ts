import { StripHtmlPipe } from './strip-html.pipe';

describe('StripHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new StripHtmlPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return null if no value is passed in', () => {
    const pipe = new StripHtmlPipe();
    expect(pipe.transform()).toBeNull();
  });

  it('should remove HTML characters', () => {
    const pipe = new StripHtmlPipe();
    expect(pipe.transform('<p>hey</p>')).toBe('hey');
  });

  it('should handle HTML tags with attributes', () => {
    const pipe = new StripHtmlPipe();
    expect(pipe.transform('<a href="yourface">hey</a>')).toBe('hey');
  });

  it('should remove nested HTML tags', () => {
    const pipe = new StripHtmlPipe();
    expect(pipe.transform('<a><span>hey</span></a>')).toBe('hey');
  });

  it('should handle text within and without nested HTML tags', () => {
    const pipe = new StripHtmlPipe();
    expect(pipe.transform('<a>hey <span>rob</span></a>')).toBe('hey rob');
  });
});
