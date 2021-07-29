import cuid from 'cuid';

export default function manageRestaurant(state = [], action) {
  switch (action.type) {
    case 'ADD_REVIEW':
      const r = { ...action.r, id: cuid() }
      return [ ...state, r ]
      
      case 'DELETE_REVIEW':
      console.log(state)
      return state.filter( r => r.id !== action.id )

    default:
      return state
  }

}
