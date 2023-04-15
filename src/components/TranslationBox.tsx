'use client';
import { ChangeEvent, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { motion } from 'framer-motion';
import handleFetchTranslation from '@/utils/handleFetchData';
import debounce from 'lodash.debounce';
import data from '@/utils/languageData';

type Response = {
  [x: string]: any;
  status?: number;
  translation?: string | any;
};

const TranslationBox: React.FC = () => {
  // * Required states for language selection * //
  const [languageFirst, setLanguageFirst] = useState('en');
  const [languageSecond, setLanguageSecond] = useState('en');
  const [translation, setTranslation] = useState('');
  const [loading, setLoading] = useState(false);
  const [inpute, setInpute] = useState('');

  // * Function to fetch translation details * //
  const handleGetTranslationDetails = async ({
    translationText,
    selectedLanguageOne,
    selectedLanguageTwo,
  }: {
    translationText: string;
    selectedLanguageOne: string;
    selectedLanguageTwo: string;
  }) => {
    try {
      setLoading(true);
      const response: Response = (await handleFetchTranslation({
        text: translationText,
        modelId: `${selectedLanguageOne}-${selectedLanguageTwo}`,
      })) as Object;
      if (response?.status === 1) {
        setLoading(false);
        setTranslation(response.translation);
      }
    } catch (error) {
      setLoading(false);
    }
  };

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
      // show error message
    } else {
      handleGetTranslationDetails({
        translationText: inpute,
        selectedLanguageOne: languageFirst,
        selectedLanguageTwo: value,
      });
    }
  };

  // * Function to get the input text value * //
  const handleInputeText = debounce((e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setInpute(value);
    handleGetTranslationDetails({
      translationText: value,
      selectedLanguageOne: languageFirst,
      selectedLanguageTwo: languageSecond,
    });
  }, 500);

  return (
    <div className="wrapper">
      <motion.div
        className="select-container"
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      >
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
      </motion.div>
      <motion.div
        className="select-container"
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      >
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
          <p>{translation}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default TranslationBox;
