import React, {useState} from 'react';

interface Param {
  id: number;
  name: string;
  type: string;
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Model {
  paramValues: ParamValue[];
}

interface Props {
  params: Param[];
  model: Model;
}

const ParamEditor: React.FC<Props> = ({params, model}) => {
  const [editedParams, setEditedParams] = useState<{ [key: number]: string }>(
    initEditedParams(model.paramValues)
  );

  function initEditedParams(paramValues: ParamValue[]): { [key: number]: string } {
    const editedParams: { [key: number]: string } = {};
    paramValues.forEach((paramValue) => {
      editedParams[paramValue.paramId] = paramValue.value;
    });
    return editedParams;
  }

  function handleParamChange(paramId: number, value: string) {
    setEditedParams((prevEditedParams) => ({
      ...prevEditedParams,
      [paramId]: value,
    }));
  }

  function getModel(): Model {
    const paramValues: ParamValue[] = Object.keys(editedParams).map((paramId) => ({
      paramId: parseInt(paramId),
      value: editedParams[parseInt(paramId)],
    }));
    return {
      ...model,
      paramValues,
    };
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', rowGap: '10px'}}>
      {params.map((param) => (
        <div style={{display: 'flex', columnGap: '10px'}} key={param.id}>
          <label htmlFor={`param-${param.id}`}>{param.name}</label>
          <input
            type="text"
            id={`param-${param.id}`}
            value={editedParams[param.id] || ''}
            onChange={(e) => handleParamChange(param.id, e.target.value)}
          />
        </div>
      ))}
      <button
        onClick={() => {
          console.log(getModel());
        }}
        type="button"
        style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}
      >
        GetModel
      </button>
    </div>
  );
};

export default ParamEditor;
