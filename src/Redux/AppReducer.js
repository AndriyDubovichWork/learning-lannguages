import word from './../api/WordGenerator';
import Translation from './../api/Translation';

const SET_WORD = 'app/SET_WORD';
const SET_TRANSLATE = 'app/SET_TRANSLATE';
const SET_WORD_KNOWN = 'app/SET_WORD_KNOWN';

let initialState = {
  word: '',
  translate: '',
  WordKnown: true,
};

function AppReducer(state = initialState, action) {
  switch (action.type) {
    case SET_WORD:
      return {
        ...state,
        word: action.word,
      };
    case SET_TRANSLATE:
      return {
        ...state,
        translate: action.translate,
      };
    case SET_WORD_KNOWN:
      return {
        ...state,
        WordKnown: action.WordKnown,
      };

    default:
      return state;
  }
}

const SeteWord = (word) => ({ type: SET_WORD, word: word });
const SetTranslate = (translate) => ({
  type: SET_TRANSLATE,
  translate: translate,
});
const SetWordKnown = (WordKnown) => ({
  type: SET_WORD_KNOWN,
  WordKnown,
});
export const SetWordKnownFalse = () => {
  return SetWordKnown(false);
};
export const GetWord = () => async (dispatch) => {
  const data = await word();
  const translated = await Translation(
    data.data[0].word + ' . ' + data.data[0].definition
  );
  if (translated.status === 200) {
    dispatch(SetWordKnown(true));
    dispatch(SetTranslate(translated.data.responseData.translatedText));
    dispatch(SeteWord(data.data[0].word));
  }
};

export default AppReducer;
