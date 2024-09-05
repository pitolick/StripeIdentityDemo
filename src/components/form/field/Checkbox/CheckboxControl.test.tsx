import React from 'react'
import { render } from '@testing-library/react'
import { CheckboxControl, CheckboxControlProps } from './CheckboxControl'

describe('CheckboxControl', () => {
  const defaultProps: CheckboxControlProps = {
    lists: [
      {
        labelContents: 'オプション1',
        value: 'option1',
      },
      {
        labelContents: 'オプション2',
        value: 'option2',
      },
    ],
    nameId: 'checkboxField',
    label: 'チェックボックスフィールド',
  }

  it('正しくレンダリングされること', () => {
    const { container } = render(<CheckboxControl {...defaultProps} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('labelTypeプロパティがdefaultの場合、正しくレンダリングされること', () => {
    const { container } = render(<CheckboxControl {...defaultProps} labelType="default" />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('labelTypeプロパティがdefaultでerrorがtrueの場合、正しくレンダリングされること', () => {
    const { container } = render(<CheckboxControl {...defaultProps} labelType="default" error={{ type: 'test' }} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('labelTypeプロパティがcardの場合、正しくレンダリングされること', () => {
    const { container } = render(<CheckboxControl {...defaultProps} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('labelTypeプロパティがcardでerrorがtrueの場合、正しくレンダリングされること', () => {
    const { container } = render(<CheckboxControl {...defaultProps} error={{ type: 'test' }} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('directionプロパティがrowの場合、正しくレンダリングされること', () => {
    const { container } = render(<CheckboxControl {...defaultProps} direction="row" />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('directionプロパティがcolの場合、正しくレンダリングされること', () => {
    const { container } = render(<CheckboxControl {...defaultProps} direction="col" />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('checkboxPositionプロパティがcenterの場合、正しくレンダリングされること', () => {
    const { container } = render(<CheckboxControl {...defaultProps} checkboxPosition="center" />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('checkboxPositionプロパティがtopでlabelTypeプロパティがdefaultの場合、正しくレンダリングされること', () => {
    const { container } = render(<CheckboxControl {...defaultProps} checkboxPosition="top" labelType="default" />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('checkboxPositionプロパティがtopでlabelTypeプロパティがcardの場合、正しくレンダリングされること', () => {
    const { container } = render(<CheckboxControl {...defaultProps} checkboxPosition="top" />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('checkboxPositionプロパティがhiddenの場合、正しくレンダリングされること', () => {
    const { container } = render(<CheckboxControl {...defaultProps} checkboxPosition="hidden" />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('checkboxColorプロパティがblackの場合、正しくレンダリングされること', () => {
    const { container } = render(<CheckboxControl {...defaultProps} checkboxColor="black" />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('checkboxColorプロパティがredの場合、正しくレンダリングされること', () => {
    const { container } = render(<CheckboxControl {...defaultProps} checkboxColor="red" />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('checkboxColorプロパティがblueの場合、正しくレンダリングされること', () => {
    const { container } = render(<CheckboxControl {...defaultProps} checkboxColor="blue" />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('checkboxColorプロパティがgrayの場合、正しくレンダリングされること', () => {
    const { container } = render(<CheckboxControl {...defaultProps} checkboxColor="gray" />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('listsにcheckboxClassName labelClassNameプロパティが指定されている場合、正しくレンダリングされること', () => {
    const { container } = render(
      <CheckboxControl
        {...defaultProps}
        lists={[
          {
            labelContents: 'オプション1',
            value: 'option1',
            checkboxClassName: 'custom-checkbox',
            labelClassName: 'custom-label',
          },
          {
            labelContents: 'オプション2',
            value: 'option2',
            checkboxClassName: 'custom-checkbox',
            labelClassName: 'custom-label',
          },
        ]}
      />,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('directionがrowでcontentWidthがfullの場合、正しくレンダリングされること', () => {
    const { container } = render(<CheckboxControl {...defaultProps} direction="row" contentWidth="full" />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
