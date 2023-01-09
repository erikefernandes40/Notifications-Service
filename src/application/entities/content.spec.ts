import { Content } from './content';

describe('Notification Content', () => {
  it('it should be able to create a notification content', () => {
    const content = new Content('Voce recebeu uma solicitação de amizade!');

    expect(content).toBeTruthy();
  });

  it('it should not be able to create a notification content with less than 5 caracters', () => {
    expect(() => new Content('aaa')).toThrow(
      'Content must be longer than or equal 5 caracters!',
    );
  });

  it('it should not be able to create a notification content with more than 240 caracters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow(
      'Content must be longer than or equal 5 caracters!',
    );
  });
});
