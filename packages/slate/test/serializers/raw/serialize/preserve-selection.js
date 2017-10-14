/** @jsx h */

import h from '../../../helpers/h'

export const input = (
  <state>
    <document>
      <paragraph>
        one
      </paragraph>
    </document>
  </state>
)

export const output = {
  kind: 'state',
  document: {
    kind: 'document',
    data: {},
    nodes: [
      {
        kind: 'block',
        type: 'paragraph',
        data: {},
        isVoid: false,
        nodes: [
          {
            kind: 'text',
            leaves: [
              {
                text: 'one',
                kind: 'leaf',
                marks: []
              }
            ]
          }
        ]
      }
    ]
  },
  selection: {
    kind: 'range',
    anchorPath: [0, 0],
    anchorOffset: 0,
    focusPath: [0, 0],
    focusOffset: 0,
    isBackward: false,
    isFocused: false,
    marks: null,
  }
}

export const options = {
  preserveSelection: true,
}
