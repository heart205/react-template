import React from 'react'
import { useNavigate } from 'react-router-dom'
import images from '../../assets/images/page-not-found.svg'
import Less from './index.module.less'
interface Props {}
const PageNotFound: React.FC<Props> = function () {
  const navigate = useNavigate()
  console.log(navigate)
  return (
    <div className={Less['page-not-found']}>
      <div>
        <span
          onClick={() => {
            navigate(-1)
          }}
        >
          go back
        </span>
        <span>pages not found</span>
      </div>
      <img src={images} />
    </div>
  )
}
export default PageNotFound
