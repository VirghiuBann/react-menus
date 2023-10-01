import MenuItem from './MenuItem'

const Menu = ({ menuItems }) => {
  return (
    <>
      {menuItems.map((item) => {
        return <MenuItem {...item} key={item.id} />
      })}
    </>
  )
}

export default Menu
