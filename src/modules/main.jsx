// src/modules/main.jsx
import { createAction, handleActions } from 'redux-actions'
//import { takeLatest } from 'redux-saga/effects'
import createRequestSaga, {
  createRequestActionTypes,
} from 'services/createRequestSaga'

const [READ_SAYING,
  READ_SAYING_SUCCESS,
  READ_SAYING_FAILURE,
] = createRequestActionTypes('main/READ_SAYING')

export const readPost    = createAction(READ_SAYING)

export function* postSaga() {
  //yield takeLatest(READ_POST, readPostSaga);
}

const initialState = {
  contents: null,
  error: null,
}

const main = handleActions(
  {
    [READ_SAYING_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [READ_SAYING_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
)

export default main