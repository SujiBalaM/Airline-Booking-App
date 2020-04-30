export const GETDASHBOARDDATA_SUCCESS = 'GETDASHBOARDDATA_SUCCESS';
export const GETDASHBOARDDATA_FAILURE = 'GETDASHBOARDDATA_FAILURE';

const initialState = {
  getDashboardData: false,
};
export default function dashboardReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GETDASHBOARDDATA_SUCCESS:
      return {
        ...state, 
        data: action.payload,
        getDashboardData: true,

      };
    case GETDASHBOARDDATA_FAILURE:
      return {
        ...state,
        data: [],
        getDashboardData: false,
      };
    default:
      return {
        ...state,
        data: []
      };
  }
}
