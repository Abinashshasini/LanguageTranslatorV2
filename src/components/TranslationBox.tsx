'use client';
import { ChangeEvent, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import data from '@/utils/languageData';

const TranslationBox: React.FC = () => {
  // * Required states for language selection * //
  const [languageFirst, setLanguageFirst] = useState('en');
  const [languageSecond, setLanguageSecond] = useState('en');
  const [inpute, setInpute] = useState('');

  // * Function to select the first language * //
  const handleChangeFirst = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setLanguageFirst(value);
  };

  // * Function to select the second language * //
  const handleChangeSecond = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setLanguageSecond(value);
    if (!inpute) {
      //   dispatch(setSnackbar(true, 'error', 'Please inpute some text'));
    } else {
      //   dispatch(translationResult(languageFirst, e.target.value, inpute));
    }
  };

  // * Function to get the input text value * //
  const handleInputeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInpute(e.target.value);
    // dispatch(translationResult(languageFirst, languageSecond, value));
  };

  return (
    <div className="wrapper">
      <div className="select-container">
        <div className="selectCont">
          <select
            name="languageFirst"
            className="select"
            value={languageFirst}
            onChange={handleChangeFirst}
          >
            {data.map((d) => (
              <option key={d.id} value={d.languageid}>
                {d.language}
              </option>
            ))}
          </select>
          <div className="selectIcon">
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <textarea
          placeholder="Input Your Text"
          maxLength={100}
          className="textarea"
          onChange={(e) => handleInputeText(e)}
        />
      </div>
      <div className="select-container">
        <div className="selectCont">
          <select
            name="languageSecond"
            className="select"
            value={languageSecond}
            onChange={handleChangeSecond}
          >
            {data.map((d) => (
              <option key={d.id} value={d.languageid}>
                {d.language}
              </option>
            ))}
          </select>
          <div className="selectIcon">
            <KeyboardArrowDownIcon />
          </div>
        </div>

        <div className="result-box">
          <p>baklol</p>
        </div>
      </div>
    </div>
  );
};

export default TranslationBox;
