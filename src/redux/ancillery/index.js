export const ADDANCILLERY_PENDING = 'ADDANCILLERY_PENDING';
export const ADDANCILLERY_SUCCESS = 'ADDANCILLERY_SUCCESS';
export const ADDANCILLERY_FAILURE = 'ADDANCILLERY_FAILURE';

const initialState = {
  isAncilleryPending: false,
  isAncillerySuccess: false,
  isAncilleryFailure: false,
};
export default function ancilleryReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADDANCILLERY_PENDING:
      return {
        ...state,
        isAncilleryPending: true,
      };
    case ADDANCILLERY_SUCCESS:
      return {
        ...state,
        isAncillerySuccess: true,
        isAncilleryPending: false,
        isAncilleryFailure: false
      };
    case ADDANCILLERY_FAILURE:
      return {
        ...state,
        isAncilleryFailure: true,
      };
    default:
      return {
        ...state,
      };
  }
}
