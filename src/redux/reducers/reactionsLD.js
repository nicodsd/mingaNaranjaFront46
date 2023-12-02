import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/reactionsLD_action";

const { read_reactions, upd_reactions, delete_reactions, read_reactionsFav } = actions;

const initialState = {
    reaction: []
};

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(read_reactions.fulfilled, (state, action) => ({
            ...state,
            reaction: action.payload.reaction
        }))
        .addCase(delete_reactions.fulfilled, (state, action) => ({
            ...state,
            reaction: state.reaction.filter(each => each._id !== action.payload.reactionId)
        }))
        .addCase(upd_reactions.fulfilled, (state, action) => ({
            ...state,
            reaction: state.reaction.map(each => (each._id === action.payload.reaction?._id ? action.payload.reaction : each))
        }))
        .addCase(read_reactionsFav.fulfilled, (state, action) => {
            const newState = {
                ...state,
                reaction: []
            }
            if (action.payload.cates?.length > 0 && action.payload.title?.length > 0) {
                newState.reaction = action.payload.reaction.filter(
                    react => action.payload.cates.includes(react.category_id) &&
                        react.title.includes(action.payload.title)
                )
            } else if (action.payload.cates?.length > 0) {
                newState.reaction = action.payload.reaction.filter(
                    react => action.payload.cates.includes(react.category_id)
                )
            } else if (action.payload.title?.length > 0) {
                newState.reaction = action.payload.reaction.filter(
                    react => react.title.includes(action.payload.title)
                )
            } else {
                newState.reaction = action.payload.reaction;
            }

            return newState;
        })
})

export default reducer
