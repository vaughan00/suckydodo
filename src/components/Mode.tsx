import React from 'react';

type ModeProps = {
  mode: string,
  onClickMode: () => void
};

/**
 * React component for the Mistakes Mode / Fast Mode
 * elements in the Status Section.
 */
export const Mode = (props: ModeProps) => {
  return (
    <div className={ props.mode === 'mistakes'
                      ? "status__action-mistakes-mode"
                      : "status__action-fast-mode"}>
      <label className={ props.mode === 'mistakes'
                          ? "status__action-mistakes-mode-switch"
                          : "status__action-fast-mode-switch"}>
        <input type="checkbox" />
       
      </label>
      
    </div>
  )
}
