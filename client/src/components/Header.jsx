function Header({ title, text }) {
  return (
    <div>
        <h1 className="text-5xl font-bold text-center md:text-left">{title}</h1>
        <p className="text-lg">{text}</p>
    </div>
  )
}
export default Header