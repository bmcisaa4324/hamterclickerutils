class HamterClickerUtils {
  getInfo() {
    return {
      id: 'hamterclickerutils',
      name: 'Hamter Clicker Utils',
      blocks: [
        {
          opcode: 'addcommas',
          blockType: Scratch.BlockType.REPORTER,
          text: 'add commas to [NUMBER]',
          arguments: {
            NUMBER: {
              type: Scratch.ArgumentType.NUMBER
            }
          }
        }
      ]
    };
  }

  addcommas() {
    let numStr = args.NUMBER.toString();
    let parts = numStr.split('.');
    let integerPart = parts[0];
    let decimalPart = parts.length > 1 ? '.' + parts[1] : '';
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return integerPart + decimalPart;
  }
}

Scratch.extensions.register(new HamterClickerUtils());
