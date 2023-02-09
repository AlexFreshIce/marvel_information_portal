import img from './error.gif'

const ErrorMessage = () => {
  return (
    <img style={{ display: 'block', maxWidth: '100%', objectFit: 'scale-down', margin: "0 auto"}}  src={img} alt="Error"/>
  )
}

export default ErrorMessage;