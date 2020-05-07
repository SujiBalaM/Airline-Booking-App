export const ADDPASSENGERDATA_PENDING = 'ADDPASSENGERDATA_PENDING';
export const ADDPASSENGERDATA_SUCCESS = 'ADDPASSENGERDATA_SUCCESS';
export const ADDPASSENGERDATA_FAILURE = 'ADDPASSENGERDATA_FAILURE';

const initialState = {
  isDataPending: false,
  isDataSuccess: false,
  isDataFailure: false,
};
export default function passengersReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADDPASSENGERDATA_PENDING:
      return {
        ...state,
        isDataPending: true,
      };
    case ADDPASSENGERDATA_SUCCESS:
      return {
        ...state,
        isDataSuccess: true,
      };
    case ADDPASSENGERDATA_FAILURE:
      return {
        ...state,
        isDataFailure: true,
      };
    default:
      return {
        ...state,
      };
  }
}
