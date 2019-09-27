import React from 'react';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';

import './App.css';

const parseDate = (str, format, locale) => {
  const parsed = dateFnsParse(str, format, { locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

const formatDate = (date, format, locale) => {
  return dateFnsFormat(date, format, { locale });
}

const App = () => {
  const FORMAT = 'dd/MM/yyyy';
  return (
    <div className="App">
      <h1>Hello World</h1>
      <DayPickerInput
        formatDate={formatDate}
        format={FORMAT}
        parseDate={parseDate}
        placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
      />
    </div>
  );
}



export default App;
