export const registerKeyboardInputListener = (
  textToUpdate: Phaser.Text,
  keysToListen: string[],
  onEnterPressed: (inputText: string) => void
) => {
  const game = textToUpdate.game;
  const addCodeDigit = (c: string) => () => {
    textToUpdate.text = textToUpdate.text + c;
  };

  const rmCodeDigit = () => {
    const len = textToUpdate.text.length;
    if (len > 0) textToUpdate.text = textToUpdate.text.substring(0, len - 1);
  };

  const submitCode = () => {
    onEnterPressed(textToUpdate.text);
  };

  const registerKeyListener = (keyCode: number, listener: () => void) =>
    game.input.keyboard.addKey(keyCode).onDown.add(listener, game);

  registerKeyListener(Phaser.Keyboard.BACKSPACE, rmCodeDigit);
  registerKeyListener(Phaser.Keyboard.ENTER, submitCode);
  keysToListen.forEach(key =>
    registerKeyListener(key.charCodeAt(0), addCodeDigit(key))
  );
};
