import React, { FC, useContext } from 'react';
import useDefaultValue from '../../hooks/useDefaultValue';
import { setSubmissionValue } from '../../lib/elements';
import { classNamesConcat } from '../../lib/utils';
import { TextFieldProps } from '../../types';
import { SubmissionContext } from '../SnoopForm/SnoopForm';
import { PageContext } from '../SnoopPage/SnoopPage';

export const DateTime: FC<TextFieldProps> = ({
  name,
  label,
  help,
  Icon,
  classNames,
  required,
  defaultValue,
}) => {
  const { setSubmission } = useContext(SubmissionContext);
  const pageName = useContext(PageContext);

  useDefaultValue({ pageName, name, defaultValue });

  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className={
            classNames.label || 'block text-sm font-medium text-gray-700'
          }
        >
          {label}
          {required ? <span className="text-red-600">*</span> : <></>}
        </label>
      )}
      <div className={'relative mt-1 rounded-md shadow-sm'}>
        {Icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <div className="w-5 h-5 text-gray-400">{Icon}</div>
          </div>
        )}

        <input
          type="date"
          name={name}
          id={`input-${name}`}
          className={classNamesConcat(
            Icon ? 'pl-10' : '',
            classNames.element ||
              'block w-full border-gray-300 rounded-md focus:ring-slate-500 focus:border-slate-500 sm:text-sm'
          )}
          onChange={e =>
            setSubmissionValue(e.target.value, pageName, name, setSubmission)
          }
          required={required}
        />
      </div>
      {help && (
        <p className={classNames.help || 'mt-1 text-sm text-gray-500'}>
          {help}
        </p>
      )}
    </div>
  );
};