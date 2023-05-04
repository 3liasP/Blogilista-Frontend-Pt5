const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
    if (message === 'wrong username or password') {
        return (
            <div className="neg-status">
                {message}
            </div>
        )
    }
    return (
      <div className="pos-status">
        {message}
      </div>
    )
  }
  
  export default Notification