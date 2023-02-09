export const loadingInitialState = [];

export default (state, { type, payload }) => {
  const match = /(.*)_(REQUEST|SUCCESS|FAIL)/.exec(type);

  if (!match) return state;

  const [, actionType, actionName] = match;
  if (actionName === 'REQUEST') {
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
