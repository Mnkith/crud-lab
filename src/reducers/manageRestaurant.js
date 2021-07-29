import cuid from 'cuid';

export default function manageRestaurant(state = [], action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const r = { text: action.text, id: cuid() }
      state = [ ...state, r ]
      return state
      
      case 'DELETE_RESTAURANT':
      console.log(state)
      return state.filter( r => r.id !== action.id )

    default:
      return state
  }
}
