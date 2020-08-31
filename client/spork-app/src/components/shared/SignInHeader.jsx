import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selector'
import '../../css/SignInHeader.scss'

function SignInHeader({ currentUser }) {
  // console.log(currentUser)
  // const displayName = currentUser.displayName
  return (
    <div className='info'>
      {currentUser ?
            <> 
          <div className='display-user' onClick={() => auth.signOut()}> <span className='welcome-user'>Welcome {currentUser.displayName} </span> <button className="sign-in-button">SignOut</button></div>
            </>
            :
            <Link to="/signin" className='sign-in-link'>Sign In</Link>
        }

    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
export default connect(mapStateToProps)(SignInHeader)