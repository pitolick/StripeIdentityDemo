import React from 'react'
import { render } from '@testing-library/react'
import { RadioControl, RadioControlProps } from './RadioControl'

describe('RadioControl', () => {
  const props = {
    lists: [
      {
        value: 'option1',
        label: 'オプション1',
      },
      {
        value: 'option2',
        label: 'オプション2',
      },
    ],
  }

  it('正しくレンダリングされること', () => {
    const { container } = render(<RadioControl {...props} nameId="test" />)
    expect(container).toMatchSnapshot()
  })

  it('labelTypeプロパティがdefaultの場合、正しくレンダリングされること', () => {
    const { container } = render(<RadioControl {...props} nameId="test" labelType="default" />)
    expect(container).toMatchSnapshot()
  })

  it('labelTypeプロパティがdefaultでerrorがtrueの場合、正しくレンダリングされること', () => {
    const { container } = render(<RadioControl {...props} nameId="test" labelType="default" error={{ type: 'test' }} />)
    expect(container).toMatchSnapshot()
  })

  it('labelTypeプロパティがcardの場合、正しくレンダリングされること', () => {
    const { container } = render(<RadioControl {...props} nameId="test" />)
    expect(container).toMatchSnapshot()
  })

  it('labelTypeプロパティがcardでerrorがtrueの場合、正しくレンダリングされること', () => {
    const { container } = render(<RadioControl {...props} nameId="test" error={{ type: 'test' }} />)
    expect(container).toMatchSnapshot()
  })

  it('directionプロパティがrowの場合、正しくレンダリングされること', () => {
    const { container } = render(<RadioControl {...props} nameId="test" direction="row" />)
    expect(container).toMatchSnapshot()
  })

  it('directionプロパティがcolの場合、正しくレンダリングされること', () => {
    const { container } = render(<RadioControl {...props} nameId="test" direction="col" />)
    expect(container).toMatchSnapshot()
  })

  it('radioPositionプロパティがcenterの場合、正しくレンダリングされること', () => {
    const { container } = render(<RadioControl {...props} nameId="test" radioPosition="center" />)
    expect(container).toMatchSnapshot()
  })

  it('radioPositionプロパティがtopでlabelTypeがdefaultの場合、正しくレンダリングされること', () => {
    const { container } = render(<RadioControl {...props} nameId="test" radioPosition="top" labelType="default" />)
    expect(container).toMatchSnapshot()
  })

  it('radioPositionプロパティがtopでlabelTypeがcardの場合、正しくレンダリングされること', () => {
    const { container } = render(<RadioControl {...props} nameId="test" radioPosition="top" />)
    expect(container).toMatchSnapshot()
  })

  it('radioPositionプロパティがhiddenの場合、正しくレンダリングされること', () => {
    const { container } = render(<RadioControl {...props} nameId="test" radioPosition="hidden" />)
    expect(container).toMatchSnapshot()
  })

  it('radioColorプロパティがblackの場合、正しくレンダリングされること', () => {
    const { container } = render(<RadioControl {...props} nameId="test" radioColor="black" />)
    expect(container).toMatchSnapshot()
  })

  it('radioColorプロパティがredの場合、正しくレンダリングされること', () => {
    const { container } = render(<RadioControl {...props} nameId="test" radioColor="red" />)
    expect(container).toMatchSnapshot()
  })

  it('radioColorプロパティがblueの場合、正しくレンダリングされること', () => {
    const { container } = render(<RadioControl {...props} nameId="test" radioColor="blue" />)
    expect(container).toMatchSnapshot()
  })

  it('radioColorプロパティがgrayの場合、正しくレンダリングされること', () => {
    const { container } = render(<RadioControl {...props} nameId="test" radioColor="gray" />)
    expect(container).toMatchSnapshot()
  })

  it('contentWidthプロパティがfullの場合、正しくレンダリングされること', () => {
    const { container } = render(<RadioControl {...props} nameId="test" contentWidth="full" />)
    expect(container).toMatchSnapshot()
  })

  it('listsにradioClassName labelClassNameプロパティが指定されている場合、正しくレンダリングされること', () => {
    const { container } = render(
      <RadioControl
        {...props}
        nameId="test"
        lists={[
          {
            value: 'option1',
            label: 'オプション1',
            radioClassName: 'test-radio',
            labelClassName: 'test-label',
          },
        ]}
      />,
    )
    expect(container).toMatchSnapshot()
  })
})
