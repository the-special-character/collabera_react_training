export const errorInitialState = [];

export default (state, { type, payload }) => {
  const match = /(.*)_(REQUEST|FAIL)/.exec(type);

  if (!match) return state;

  const [, actionType, actionName] = match;
  if (actionName === 'FAIL') {
    return [
      ...state,
      {
        action: actionType,
        ...payload,
      },
    ];
  }

  return state.filter(
    x => !(x.action === actionType && x.loadingId === payload.loadingId),
  );
};
