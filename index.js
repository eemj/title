const Command = require('command');
const { protocol } = require('tera-data-parser');

if (!protocol.messages.has('C_APPLY_TITLE')) {
  protocol.messages.set('C_APPLY_TITLE', new Map().set(1, [
    ['id', 'int32'],
  ]));
}

module.exports = function Title(dispatch) {
  const command = Command(dispatch);

  command.add('title', (id) => {
    if (id) dispatch.toServer('C_APPLY_TITLE', 1, { id });
  });
};
