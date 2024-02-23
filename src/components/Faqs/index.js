import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      faqList: props.faqsList.map(faq => ({...faq, isClick: false})),
    }
  }

  togglePlusButton = id => {
    const {faqList} = this.state
    this.setState({
      faqList: faqList.map(faq =>
        faq.id === id ? {...faq, isClick: !faq.isClick} : faq,
      ),
    })
  }

  render() {
    const {faqList} = this.state

    return (
      <div className="bg-container">
        <ul className="faq-list">
          <h1 className="heading">FAQs</h1>
          {faqList.map(each => (
            <FaqItem
              key={each.id}
              faqsDetails={each}
              clickPlusButton={() => this.togglePlusButton(each.id)}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
