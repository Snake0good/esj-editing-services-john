import { Link } from 'react-router-dom'

function Button({toPage, btnText, btnProps}) {
  return (
        <Link className={`
        ${btnProps} 
        h-16 
        flex 
        m-4
        place-items-center 
        justify-center 
        rounded-xl 
        font-bold
        border-2 
        border-transparent
        ease-in
        duration-200`} 
        to={toPage}
        onClick={() => window.scrollTo(0,0)}
        >
            {btnText}
        </Link>
  )
}
export default Button