export const ADDPASSENGERDATA_PENDING = 'ADDPASSENGERDATA_PENDING';
export const ADDPASSENGERDATA_SUCCESS = 'ADDPASSENGERDATA_SUCCESS';
export const ADDPASSENGERDATA_FAILURE = 'ADDPASSENGERDATA_FAILURE';
export const UPDATEPASSENGERDATA_PENDING = 'UPDATEPASSENGERDATA_PENDING';
export const UPDATEPASSENGERDATA_SUCCESS = 'UPDATEPASSENGERDATA_SUCCESS';
export const UPDATEPASSENGERDATA_FAILURE = 'UPDATEPASSENGERDATA_FAILURE';

const initialState = {
  isDataPending: false,
  isDataSuccess: false,
  isDataFailure: false,
  isEditPending: false,
  isEditSuccess: false,
  isEditFailure: false,
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
        isDataPending: false,
        isDataFailure: false,
      };
    case ADDPASSENGERDATA_FAILURE:
      return {
        ...state,
        isDataFailure: true,
      };
    case UPDATEPASSENGERDATA_PENDING:
      return {
        ...state,
        isEditPending: true,
      };
    case UPDATEPASSENGERDATA_SUCCESS:
      return {
        ...state,
        isEditSuccess: true,
        isEditPending: false,
        isEditFailure: false,
      };
    case UPDATEPASSENGERDATA_FAILURE:
      return {
        ...state,
        isEditFailure: true,
      };

    default:
      return {
        ...state,
      };
  }
}
