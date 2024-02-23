// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqsDetails, clickPlusButton} = props
  const {id, questionText, answerText, isClick} = faqsDetails
  const imgUrl = isClick
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const handleButtonClick = () => {
    clickPlusButton(id)
  }

  return (
    <li className="list-item">
      <div className="Q-container">
        <h1 className="question">{questionText}</h1>
        <button className="btn" onClick={handleButtonClick} type="button">
          <img
            src={imgUrl}
            className="plus-img"
            alt={isClick ? 'minus' : 'plus'}
          />
        </button>
      </div>
      <div className="Ans-container">
        {isClick && (
          <>
            <hr className="separator" />
            <p className="answer">{answerText}</p>
          </>
        )}
      </div>
    </li>
  )
}
export default FaqItem
