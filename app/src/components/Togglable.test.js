import '@testing-library/jest-dom'
import { render, fireEvent} from '@testing-library/react'
import Togglable from './Togglable'
import i18n from '../i18n/index'

describe('<Togglable />', () => {
  const buttonLabel = 'show'
  let component



  beforeEach(() => {
    component = render(
      <Togglable buttonLabel={buttonLabel}>
        <div className='testDiv'>testDivContent</div>
      </Togglable>
    )
  })

  test('renders its children', () => {
    component.getByText('testDivContent')
  })

  test('renders its children but they are not visible', () => {
    const el = component.getByText('testDivContent')
    expect(el.parentNode).toHaveStyle('display: none')
  })

  test('after clicking its children must be shown', () => {
    const button = component.getByText(buttonLabel)
    fireEvent.click(button)

    const el = component.getByText('testDivContent')
    expect(el.parentNode).not.toHaveStyle('display: none')
  })

  test('toggled content can be closed', () => {
    const button = component.getByText(buttonLabel)
    fireEvent.click(button)

    const el = component.getByText('testDivContent')
    expect(el.parentNode).not.toHaveStyle('display: none')

    const cancelButton = component.queryByText(i18n.TOGGLABLE.CANCEL_BUTTON)
    fireEvent.click(cancelButton)

    expect(el.parentNode).toHaveStyle('display: none')
  })
})