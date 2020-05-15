export const ADDANCILLERY_PENDING = 'ADDANCILLERY_PENDING';
export const ADDANCILLERY_SUCCESS = 'ADDANCILLERY_SUCCESS';
export const ADDANCILLERY_FAILURE = 'ADDANCILLERY_FAILURE';
export const EDITANCILLERY_PENDING = 'EDITANCILLERY_PENDING';
export const EDITANCILLERY_SUCCESS = 'EDITANCILLERY_SUCCESS';
export const EDITANCILLERY_FAILURE = 'EDITANCILLERY_FAILURE';

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
        isAncilleryFailure: false,
      };
    case ADDANCILLERY_FAILURE:
      return {
        ...state,
        isAncilleryFailure: true,
      };
    case EDITANCILLERY_PENDING:
      return {
        ...state,
        isAncilleryPending: true,
      };
    case EDITANCILLERY_SUCCESS:
      return {
        ...state,
        isAncillerySuccess: true,
        isAncilleryPending: false,
        isAncilleryFailure: false,
      };
    case EDITANCILLERY_FAILURE:
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
