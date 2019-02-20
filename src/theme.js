module.exports = color => {
  return {
    solid: {
      active: x => x,
      inactive: x => x,
      level: ['▏', '▎', '▍', '▌', '▋', '▊', '▉'],
      space: '▉',
    },
    small: {
      active: x => x,
      inactive: x => x,
      level: ['▀'],
      space: '▀',
    },
    dot: {
      active: x => x,
      inactive: x => x,
      level: ['░', '▒', '▓'],
      space: '░',
    },
    square: {
      active: x => x,
      inactive: x => x,
      level: ['□', '■'],
      space: '□',
    },
    rectangle: {
      active: x => x,
      inactive: x => x,
      level: ['▯', '▮'],
      space: '▯',
    },
    circle: {
      active: x => x,
      inactive: x => x,
      level: ['ဝ', '၀', '⦿'],
      space: 'ဝ',
    },
    radio: {
      active: x => x,
      inactive: x => x,
      level: ['◎', '◉'],
      space: '◎',
    },
  };
};
