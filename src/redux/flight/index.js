export const FLIGHTDETAILS_PENDING = 'FLIGHTDETAILS_PENDING';
export const FLIGHTDETAILS_SUCCESS = 'FLIGHTDETAILS_SUCCESS';
export const FLIGHTDETAILS_FAILURE = 'FLIGHTDETAILS_FAILURE';

const initialState = {
  isFlightDetailsPending: false,
  isFlightDetailsSuccess: false,
  isFlightDetailsFailure: false,
};

export default function flightReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FLIGHTDETAILS_PENDING:
      return {
        ...state,
        isFlightDetailsPending: true,
      };
    case FLIGHTDETAILS_SUCCESS:
      return {
        ...state,
        isFlightDetailsPending: false,
        isFlightDetailsSuccess: true,
        data: action.payload,
        isFlightDetailsFailure: false,
      };
    case FLIGHTDETAILS_FAILURE:
      return {
        ...state,
        isFlightDetailsFailure: true,
      };
    default:
      return {
        ...state,
      };
  }
}
