/**
 * Created by shuaiwang on 3/14/18.
 */
export default (state = null, action) => {
     switch (action.type){
         case 'select_library':
               return action.payload;
         default:
              return state;
     }
};