import React from 'Preact'

import showToast from '../../../utils/show-toast'

function ShowToast() {
  const handleClick = () => {
    showToast('显示toast', 3000, false)
  }
  return (
    <div onClick={handleClick}>显示toast</div>
  )
}

export default ShowToast