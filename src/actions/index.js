/**
 * Created by shuaiwang on 3/15/18.
 */
export const selectLibrary = (libraryId) => {
    return {
        type:'select_library',
        payload: libraryId
    };
};